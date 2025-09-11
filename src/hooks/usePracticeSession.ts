import { useState, useCallback } from 'react';
import type { Conjugation } from '../data/conjugationData';
import { getSmartPracticeConjugations } from '../data/conjugationData';
import { getVerbTranslations } from '../utils/verbUtils';
import { shuffleArray, orderSystematically } from '../utils/arrayUtils';
import type { PracticeMode, PracticeType } from '../types/practiceTypes';

// Remove unused interface

interface UsePracticeSessionProps {
  conjugations: Conjugation[];
  selectedVerbs: string[];
  practiceMode: PracticeMode;
  practiceType: PracticeType;
  isConjugationSelected: (conjugation: Conjugation) => boolean;
  getSelectedConjugations: () => Conjugation[];
}

export function usePracticeSession({
  conjugations,
  selectedVerbs,
  practiceMode,
  practiceType,
  isConjugationSelected,
  getSelectedConjugations
}: UsePracticeSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const [practiceSessionConjugations, setPracticeSessionConjugations] = useState<Conjugation[]>([]);
  const [masteredInSession, setMasteredInSession] = useState<Set<string>>(new Set());
  const [translationSessionVerbs, setTranslationSessionVerbs] = useState<Array<{verb: string, english: string, spanish: string}>>([]);

  const handleStartPractice = useCallback((manualMode: boolean = false) => {
    if (practiceType === 'translation') {
      // Translation quiz - get selected verbs with translations
      const allVerbTranslations = getVerbTranslations(conjugations);
      const selectedVerbTranslations = allVerbTranslations.filter(v => selectedVerbs.includes(v.verb));
      
      // Shuffle verbs for translation quiz
      const shuffledVerbs = [...selectedVerbTranslations].sort(() => Math.random() - 0.5);
      
      setTranslationSessionVerbs(shuffledVerbs);
      setCurrentIndex(0);
      setIsPracticeMode(true);
      return;
    }

    // Get conjugations to practice - either smart or manual mode
    const conjugationsToPractice = manualMode 
      ? getSelectedConjugations()
      : getSmartPracticeConjugations(
          conjugations.filter(isConjugationSelected)
        );
    
    // Apply practice mode ordering
    let orderedConjugations: Conjugation[];
    
    switch (practiceMode) {
      case 'systematic': {
        // Group by verb, then order systematically within each verb
        const verbGroups = new Map<string, Conjugation[]>();
        conjugationsToPractice.forEach(conjugation => {
          if (!verbGroups.has(conjugation.verb)) {
            verbGroups.set(conjugation.verb, []);
          }
          verbGroups.get(conjugation.verb)!.push(conjugation);
        });
        
        // Order each verb group systematically
        orderedConjugations = Array.from(verbGroups.values()).map(group => {
          return orderSystematically(group);
        }).flat();
        break;
      }
        
      case 'random1': {
        // Random shuffle
        orderedConjugations = shuffleArray([...conjugationsToPractice]);
        break;
      }
        
      case 'random2': {
        // Systematic within verbs, but random verb order
        const verbGroups = new Map<string, Conjugation[]>();
        conjugationsToPractice.forEach(conjugation => {
          if (!verbGroups.has(conjugation.verb)) {
            verbGroups.set(conjugation.verb, []);
          }
          verbGroups.get(conjugation.verb)!.push(conjugation);
        });
        
        // Shuffle verb order, but keep systematic within each verb
        const verbNames = Array.from(verbGroups.keys());
        const shuffledVerbNames = verbNames.sort(() => Math.random() - 0.5);
        orderedConjugations = shuffledVerbNames.flatMap(verb => 
          orderSystematically(verbGroups.get(verb)!)
        );
        break;
      }
        
      default:
        orderedConjugations = conjugationsToPractice;
    }
    
    setPracticeSessionConjugations(orderedConjugations);
    setCurrentIndex(0);
    setMasteredInSession(new Set()); // Clear mastery tracking for new session
    setIsPracticeMode(true);
  }, [practiceType, practiceMode, selectedVerbs, conjugations, isConjugationSelected, getSelectedConjugations]);

  const handleBackToBrowse = useCallback(() => {
    setIsPracticeMode(false);
    setCurrentIndex(0);
    setPracticeSessionConjugations([]); // Clear the frozen array
    setMasteredInSession(new Set()); // Clear mastery tracking
    setTranslationSessionVerbs([]); // Clear translation session
  }, []);

  const handleNextCard = useCallback(() => {
    if (practiceType === 'translation') {
      // Translation quiz: go through once
      setCurrentIndex(prevIndex => {
        if (prevIndex < translationSessionVerbs.length - 1) {
          return prevIndex + 1;
        } else {
          // Translation quiz complete
          setIsPracticeMode(false);
          setTranslationSessionVerbs([]);
          return 0;
        }
      });
    } else if (practiceType === 'quiz') {
      // Quiz mode: go through once
      setCurrentIndex(prevIndex => {
        if (prevIndex < practiceSessionConjugations.length - 1) {
          return prevIndex + 1;
        } else {
          // Practice session complete
          setIsPracticeMode(false);
          setPracticeSessionConjugations([]);
          setMasteredInSession(new Set());
          return 0;
        }
      });
    } else {
      // Mastery mode: continue until all are correct
      setCurrentIndex(prevIndex => {
        if (prevIndex < practiceSessionConjugations.length - 1) {
          return prevIndex + 1;
        } else {
          // Check if all conjugations have been answered correctly
          setMasteredInSession(currentMastered => {
            const allMastered = practiceSessionConjugations.every(c => currentMastered.has(c.id));
            
            if (allMastered) {
              // All mastered, end session
              setIsPracticeMode(false);
              setPracticeSessionConjugations([]);
              return new Set();
            } else {
              // Continue with remaining conjugations
              const remainingConjugations = practiceSessionConjugations.filter(c => !currentMastered.has(c.id));
              setPracticeSessionConjugations(remainingConjugations);
              return currentMastered; // Keep current mastery state
            }
          });
          return 0;
        }
      });
    }
  }, [practiceType, translationSessionVerbs.length, practiceSessionConjugations]);

  const addToMasteredInSession = useCallback((id: string) => {
    setMasteredInSession(prev => new Set(prev).add(id));
  }, []);

  // Reset functions for external state management
  const resetCurrentIndex = useCallback(() => {
    setCurrentIndex(0);
  }, []);

  return {
    // State
    currentIndex,
    isPracticeMode,
    practiceSessionConjugations,
    masteredInSession,
    translationSessionVerbs,
    
    // Actions
    handleStartPractice,
    handleBackToBrowse,
    handleNextCard,
    addToMasteredInSession,
    
    // Utilities
    resetCurrentIndex,
    setCurrentIndex
  };
}