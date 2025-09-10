import { useEffect } from 'react';
import type { Conjugation } from '../data/conjugationData';
import { allConjugations } from '../data/conjugationData';
import { getUniqueVerbs } from '../utils/verbUtils';
import type { PracticeMode } from '../types/practiceTypes';

interface AppState {
  conjugations: Conjugation[];
  currentIndex: number;
  isPracticeMode: boolean;
  selectedVerbs: string[];
  selectedTenses: { [verb: string]: { present: boolean; preterite: boolean } };
  practiceMode: PracticeMode;
}

interface UseLocalStoragePersistenceProps {
  conjugations: Conjugation[];
  currentIndex: number;
  isPracticeMode: boolean;
  selectedVerbs: string[];
  selectedTenses: { [verb: string]: { present: boolean; preterite: boolean } };
  practiceMode: PracticeMode;
}

// Hook for managing localStorage persistence of app state
export const useLocalStoragePersistence = (state: UseLocalStoragePersistenceProps) => {
  const { conjugations, currentIndex, isPracticeMode, selectedVerbs, selectedTenses, practiceMode } = state;

  // Save state to localStorage whenever important state changes
  useEffect(() => {
    const stateToSave = {
      conjugations,
      currentIndex,
      isPracticeMode,
      selectedVerbs,
      selectedTenses,
      practiceMode,
      lastUpdated: Date.now()
    };
    localStorage.setItem('spanishConjugationsState', JSON.stringify(stateToSave));
  }, [conjugations, currentIndex, isPracticeMode, selectedVerbs, selectedTenses, practiceMode]);
};

// Function to load state from localStorage or use defaults
export const loadStateFromStorage = (): AppState => {
  try {
    const savedState = localStorage.getItem('spanishConjugationsState');
    if (savedState) {
      const parsed = JSON.parse(savedState);
      
      // IMPORTANT: Always use the latest allConjugations as the source of truth
      // Merge saved progress data with latest conjugation definitions
      const mergedConjugations = allConjugations.map(latest => {
        const saved = parsed.conjugations?.find((c: Conjugation) => c.id === latest.id);
        return saved ? {
          ...latest, // Use latest definition (verb, english, spanish, etc.)
          mastered: saved.mastered || false, // Preserve progress
          lastPracticed: saved.lastPracticed,
          practiceCount: saved.practiceCount || 0,
          correctCount: saved.correctCount || 0
        } : latest;
      });

      return {
        conjugations: mergedConjugations,
        currentIndex: parsed.currentIndex || 0,
        isPracticeMode: parsed.isPracticeMode || false,
        selectedVerbs: parsed.selectedVerbs || getUniqueVerbs(allConjugations),
        selectedTenses: parsed.selectedTenses || {},
        practiceMode: parsed.practiceMode || 'systematic',
      };
    }
  } catch (error) {
    console.warn('Failed to load state from localStorage:', error);
  }
  return {
    conjugations: allConjugations.map(c => ({ ...c })),
    currentIndex: 0,
    isPracticeMode: false,
    selectedVerbs: getUniqueVerbs(allConjugations),
    selectedTenses: {},
    practiceMode: 'systematic',
  };
};