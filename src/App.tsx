import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, BookOpen, Target, Star, Check, Shuffle, Trash2, Languages, Settings, HelpCircle, AlertTriangle, Edit3 } from 'lucide-react';
import VerbSelection from './components/VerbSelection';
import ConjugationReference from './components/ConjugationReference';
import KeyboardHelp from './components/KeyboardHelp';
import Quiz from './components/Quiz';
import { Conjugation, allConjugations } from './data/conjugationData';

// Use Conjugation interface from conjugationData.ts

// Use conjugation data from the imported file
const conjugationData: Conjugation[] = allConjugations;

const encouragingMessages = [
  "¡Excelente! You're on fire! 🔥",
  "¡Muy bien! You're crushing it! 💪",
  "¡Perfecto! You're a Spanish superstar! ⭐",
  "¡Increíble! You're making amazing progress! 🎉",
  "¡Fantástico! You're becoming fluent! 🌟"
];

const funnyCriticism = [
  "¡Ay caramba! That was... interesting! 🤔",
  "¡Ups! I think you might need a coffee break! ☕",
  "¡Oh no! That was like watching a cat try to dance! 😸",
  "¡Madre mía! That attempt was... creative! 🎨"
];

const progressMessages = [
  "¡Felicidades! You've mastered another verb! 🎊",
  "¡Increíble progreso! You're getting stronger! 💪",
  "¡Excelente trabajo! You're building your vocabulary! 📚"
];

// Inline styles for guaranteed styling
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative' as const,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  header: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #e5e7eb',
    padding: '1rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: 0
  },
  subtitle: {
    fontSize: '0.875rem',
    color: '#6b7280',
    margin: 0
  },
  resetButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    background: 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '9999px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease'
  },
  progressBar: {
    background: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #e5e7eb',
    padding: '8px'
  },
  progressContent: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  progressText: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151'
  },
  progressBarBg: {
    width: '100%',
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '9999px',
    overflow: 'hidden'
  },
  progressBarFill: {
    height: '100%',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    borderRadius: '9999px',
    transition: 'width 1s ease'
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '1rem',
    paddingBottom: '250px',
    paddingTop: '1rem',
    minHeight: 'auto'
  },
  flashcardContainer: {
    width: '100%',
    maxWidth: '350px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1rem'
  },
  flashcard: {
    position: 'relative' as const,
    width: '100%',
    height: '140px',
    cursor: 'pointer',
    perspective: '1000px',
    marginBottom: '0',
    display: 'block'
  },
  cardSide: {
    position: 'relative' as const,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    transition: 'opacity 0.3s ease-in-out'
  },
  cardFront: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white'
  },
  cardBack: {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: 'white',
    transform: 'rotateY(180deg)'
  },
  cardFlipped: {
    transform: 'rotateY(180deg)'
  },
  cardLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '8px',
    opacity: '0.8'
  },
  cardTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center' as const
  },
  cardSubtitle: {
    fontSize: '0.875rem',
    opacity: '0.8',
    textAlign: 'center' as const
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '0.5rem',
    marginBottom: '0.5rem'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '9999px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease',
    fontSize: '1rem'
  },
  masteredButton: {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: 'white'
  },
  nextButton: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white'
  },
  verbType: {
    marginTop: '0.5rem',
    textAlign: 'center' as const
  },
  verbTypeBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  regularBadge: {
    backgroundColor: '#dcfce7',
    color: '#166534'
  },
  irregularBadge: {
    backgroundColor: '#fee2e2',
    color: '#991b1b'
  },
  statistics: {
    position: 'fixed' as const,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid #e5e7eb',
    padding: '1rem'
  },
  statsContent: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  message: {
    textAlign: 'center' as const,
    marginBottom: '1rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  statBox: {
    padding: '1rem',
    borderRadius: '12px',
    border: '1px solid',
    textAlign: 'center' as const
  },
  statNumber: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '4px'
  },
  statLabel: {
    fontSize: '0.875rem',
    opacity: '0.8'
  },
  completionScreen: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 0%, #fecaca 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  },
  completionCard: {
    maxWidth: '600px',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '24px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    padding: '2rem',
    textAlign: 'center' as const,
    border: '1px solid #fbbf24'
  }
};

function App() {
  // Load initial state from localStorage or use defaults
  const loadStateFromStorage = () => {
    try {
      const savedState = localStorage.getItem('spanishVerbsState');
      if (savedState) {
        const parsed = JSON.parse(savedState);
        return {
          verbs: parsed.verbs || conjugationData.map(verb => ({ ...verb })),
          totalAttempts: parsed.totalAttempts || 0,
          correctAttempts: parsed.correctAttempts || 0,
          currentIndex: parsed.currentIndex || 0,
          isFlipped: parsed.isFlipped || false,
          spanishFirst: parsed.spanishFirst || false,
          selectedConjugations: parsed.selectedConjugations || allConjugations
        };
      }
    } catch (error) {
      console.log('No saved state found or error loading state, using defaults');
    }
    return {
      verbs: conjugationData.map(verb => ({ ...verb })),
      totalAttempts: 0,
      correctAttempts: 0,
      currentIndex: 0,
      isFlipped: false,
      spanishFirst: false,
      selectedConjugations: allConjugations
    };
  };

  const initialState = loadStateFromStorage();
  
  const [verbs, setVerbs] = useState<Conjugation[]>(initialState.verbs);
  const [currentIndex, setCurrentIndex] = useState(initialState.currentIndex);
  const [totalAttempts, setTotalAttempts] = useState(initialState.totalAttempts);
  const [correctAttempts, setCorrectAttempts] = useState(initialState.correctAttempts);
  const [lastMessage, setLastMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [shuffledVerbs, setShuffledVerbs] = useState<Conjugation[]>([]);
  const [isFlipped, setIsFlipped] = useState(initialState.isFlipped);
  const [shuffleTrigger, setShuffleTrigger] = useState(0);
  const [spanishFirst, setSpanishFirst] = useState(initialState.spanishFirst);
  const [showVerbSelection, setShowVerbSelection] = useState(false);
  const [selectedConjugations, setSelectedConjugations] = useState<Conjugation[]>(initialState.selectedConjugations);
  const [hasSelectedVerbs, setHasSelectedVerbs] = useState(initialState.selectedConjugations.length > 0);
  const [showReference, setShowReference] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);
  const [pendingResetAction, setPendingResetAction] = useState<'reset' | 'clear' | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  
  // Debug state changes
  useEffect(() => {
    console.log('showKeyboardHelp changed to:', showKeyboardHelp);
  }, [showKeyboardHelp]);

  // Save state to localStorage whenever important state changes
  useEffect(() => {
    const stateToSave = {
      verbs,
      totalAttempts,
      correctAttempts,
      currentIndex,
      isFlipped,
      spanishFirst,
      selectedConjugations,
      timestamp: Date.now()
    };
    localStorage.setItem('spanishVerbsState', JSON.stringify(stateToSave));
  }, [verbs, totalAttempts, correctAttempts, currentIndex, isFlipped, spanishFirst, selectedConjugations]);

  // Handle verb selection
  const handleStartPractice = (conjugations: Conjugation[]) => {
    setSelectedConjugations(conjugations);
    setVerbs(conjugations.map(verb => ({ ...verb })));
    setShowVerbSelection(false);
    setHasSelectedVerbs(true);
    setCurrentIndex(0);
    setTotalAttempts(0);
    setCorrectAttempts(0);
    setShuffleTrigger(prev => prev + 1);
  };

  const handleBackToSelection = () => {
    setShowVerbSelection(true);
  };

  // Shuffle verbs that aren't mastered - now triggers on both verbs change and shuffleTrigger
  useEffect(() => {
    const unmasteredVerbs = verbs.filter(verb => !verb.mastered);
    // Fisher-Yates shuffle algorithm for better randomization
    const shuffled = [...unmasteredVerbs];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledVerbs(shuffled);
    setCurrentIndex(0);
  }, [verbs, shuffleTrigger]);

  const showEncouragingMessage = () => {
    const message = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
    setLastMessage(message);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const showFunnyCriticism = () => {
    const message = funnyCriticism[Math.floor(Math.random() * funnyCriticism.length)];
    setLastMessage(message);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const showProgressMessage = () => {
    const message = progressMessages[Math.floor(Math.random() * progressMessages.length)];
    setLastMessage(message);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleShuffle = () => {
    setShuffleTrigger(prev => prev + 1);
    setIsFlipped(false);
  };

  const handleMastered = (verbId: string) => {
    setVerbs(prevVerbs => 
      prevVerbs.map(verb => 
        verb.id === verbId ? { ...verb, mastered: true } : verb
      )
    );
    
    setTotalAttempts((prev: number) => prev + 1);
    setCorrectAttempts((prev: number) => prev + 1);
    setIsFlipped(false);
    
    showProgressMessage();
  };

  const handleNext = () => {
    setTotalAttempts((prev: number) => prev + 1);
    setIsFlipped(false);
    
    if (Math.random() > 0.3) {
      showEncouragingMessage();
    } else {
      showFunnyCriticism();
    }
    
    setCurrentIndex((prev: number) => prev + 1);
  };

  const handleReset = () => {
    setPendingResetAction('reset');
    setShowResetConfirmation(true);
  };

  const clearProgress = () => {
    setPendingResetAction('clear');
    setShowClearConfirmation(true);
  };

  const confirmReset = () => {
    setVerbs(selectedConjugations.map(verb => ({ ...verb, mastered: false })));
    setCurrentIndex(0);
    setTotalAttempts(0);
    setCorrectAttempts(0);
    setLastMessage('');
    setShowMessage(false);
    setIsFlipped(false);
    setShuffleTrigger((prev: number) => prev + 1); // Trigger shuffle on reset
    // Clear localStorage on reset
    localStorage.removeItem('spanishVerbsState');
    setShowResetConfirmation(false);
    setPendingResetAction(null);
  };

  const confirmClearProgress = () => {
    localStorage.removeItem('spanishVerbsState');
    window.location.reload(); // Reload to reset everything
  };

  const cancelReset = () => {
    setShowResetConfirmation(false);
    setShowClearConfirmation(false);
    setPendingResetAction(null);
  };

  const handleToggleLanguage = () => {
    setSpanishFirst((prev: boolean) => !prev);
    setIsFlipped(false);
  };

  const masteredVerbs = verbs.filter(verb => verb.mastered);
  const isCompleted = masteredVerbs.length === verbs.length;
  console.log('Completion status:', { isCompleted, masteredVerbs: masteredVerbs.length, totalVerbs: verbs.length });
  const currentConjugation = shuffledVerbs[currentIndex];
  const isLastCard = currentIndex === shuffledVerbs.length - 1;
  const masteryPercentage = Math.round((masteredVerbs.length / verbs.length) * 100);
  const accuracyPercentage = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;

  // Keyboard shortcuts
  useEffect(() => {
    console.log('Setting up keyboard event listener');
    const handleKeyPress = (event: KeyboardEvent) => {
      // Don't handle keyboard shortcuts when quiz is open
      if (showQuiz) {
        return;
      }
      

      
      console.log('Key pressed:', event.key);
      switch (event.key) {
        case ' ': // Spacebar - flip card
          event.preventDefault();
          setIsFlipped(!isFlipped);
          break;
        case 'ArrowRight': // Right arrow - next card
        case 'n': // 'n' key - next card
          event.preventDefault();
          if (!isLastCard) {
            handleNext();
          }
          break;
        case 'm': // 'm' key - mark as mastered
          event.preventDefault();
          if (currentConjugation) {
            handleMastered(currentConjugation.id);
          }
          break;
        case 'r': // 'r' key - reset all
          event.preventDefault();
          handleReset();
          break;
        case 's': // 's' key - shuffle
          event.preventDefault();
          handleShuffle();
          break;
        case 'l': // 'l' key - toggle language direction
          event.preventDefault();
          handleToggleLanguage();
          break;
        case 'h': // 'h' key - toggle reference
          event.preventDefault();
          setShowReference(!showReference);
          break;
        case '?': // '?' key - toggle keyboard help
          event.preventDefault();
          setShowKeyboardHelp(true);
          break;
        case 'q': // 'q' key - open quiz
          event.preventDefault();
          setShowQuiz(true);
          break;
        case 'ArrowLeft': // Left arrow - previous card (if not first)
          event.preventDefault();
          if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setIsFlipped(false);
          }
          break;
        case 'Escape': // Escape key - cancel confirmation dialogs
          event.preventDefault();
          if (showResetConfirmation || showClearConfirmation) {
            cancelReset();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFlipped, isLastCard, currentIndex, currentConjugation, showResetConfirmation, showClearConfirmation, showQuiz]);

  if (!hasSelectedVerbs || showVerbSelection) {
    console.log('Showing verb selection screen - no help button here');
    return (
      <VerbSelection 
        onStartPractice={handleStartPractice}
        onBack={() => setShowVerbSelection(false)}
      />
    );
  }
  
  console.log('Showing main app - help button should be visible');
  console.log('About to return JSX for main app');

  return (
    <>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.headerLeft}>
              <BookOpen size={32} color="#3b82f6" />
              <div>
                <h1 style={styles.title}>Spanish Verb Master</h1>
                <p style={styles.subtitle}>Master the art of Spanish verbs</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={handleReset} style={styles.resetButton}>
                <RotateCcw size={20} />
                Reset All
              </button>
              <button 
                onClick={clearProgress}
                style={{
                  ...styles.resetButton,
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
                }}
              >
                <Trash2 size={20} />
                Clear Progress
              </button>
              <button 
                onClick={handleToggleLanguage}
                style={{
                  ...styles.resetButton,
                  background: spanishFirst 
                    ? 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                    : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                }}
              >
                <Languages size={20} />
                {spanishFirst ? 'Spanish First' : 'English First'}
              </button>
              <button 
                onClick={handleBackToSelection}
                style={{
                  ...styles.resetButton,
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
                }}
              >
                <Settings size={20} />
                Change Verbs
              </button>
              <button 
                onClick={() => setShowReference(true)}
                style={{
                  ...styles.resetButton,
                  background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
                }}
              >
                <HelpCircle size={20} />
                Reference
              </button>
              <button 
                onClick={() => setShowQuiz(true)}
                style={{
                  ...styles.resetButton,
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                }}
              >
                <Edit3 size={20} />
                Quiz
              </button>
            </div>
          </div>
        </header>
        {/* Progress Bar */}
        <div style={styles.progressBar}>
          <div style={styles.progressContent}>
            <div style={styles.progressText}>
              <Target size={20} color="#3b82f6" />
              <span>Progress: {masteredVerbs.length}/{verbs.length} mastered</span>
            </div>
            <div style={styles.progressBarBg}>
              <div 
                style={{
                  ...styles.progressBarFill,
                  width: `${masteryPercentage}%`
                }}
              />
            </div>
          </div>
        </div>
        {/* Main Content - Flashcard */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem 1rem',
          gap: '1.5rem',
          minHeight: '60vh'
        }}>
          {currentConjugation && (
            <>
              {/* Flashcard */}
              <div 
                style={{
                  width: '100%',
                  maxWidth: '350px',
                  height: '120px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  border: '1px solid #f3f4f6',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem',
                  cursor: 'pointer'
                }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  marginBottom: '0.5rem'
                }}>
                  {!isFlipped 
                    ? (spanishFirst ? 'Spanish' : 'English')
                    : (spanishFirst ? 'English' : 'Spanish')
                  }
                </div>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  margin: '0 0 0.5rem 0',
                  textAlign: 'center'
                }}>
                  {!isFlipped 
                    ? (spanishFirst ? currentConjugation.spanish : currentConjugation.english)
                    : (spanishFirst ? currentConjugation.english : currentConjugation.spanish)
                  }
                </h2>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  textAlign: 'center'
                }}>
                  {!isFlipped 
                    ? (spanishFirst ? 'Click to see English' : 'Click to see Spanish')
                    : 'Click to flip back'
                  }
                </div>
              </div>
              {/* Action buttons */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '350px',
                flexWrap: 'wrap'
              }}>
                <button
                  onClick={() => handleMastered(currentConjugation.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#fbbf24',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                >
                  <Star size={20} />
                  Mastered
                </button>
                {!isLastCard && (
                  <button
                    onClick={handleNext}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#10b981',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    <Check size={20} />
                    Next
                  </button>
                )}
                <button
                  onClick={handleShuffle}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#8b5cf6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                >
                  <Shuffle size={20} />
                  Shuffle
                </button>
              </div>
              {/* Verb type indicator */}
              <div style={{
                textAlign: 'center',
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  ...(currentConjugation.type === 'irregular' 
                    ? { backgroundColor: '#fef3c7', color: '#92400e' }
                    : { backgroundColor: '#dbeafe', color: '#1e40af' }
                  )
                }}>
                  {currentConjugation.type === 'irregular' ? 'Irregular' : `Regular -${currentConjugation.conjugation}`}
                </span>
                <span style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  backgroundColor: currentConjugation.tense === 'present' ? '#dcfce7' : '#fef3c7',
                  color: currentConjugation.tense === 'present' ? '#166534' : '#92400e'
                }}>
                  {currentConjugation.tense === 'present' ? 'Present' : 'Preterite'}
                </span>
              </div>
            </>
          )}
        </div>
        {/* Statistics */}
        <div style={styles.statistics}>
          <div style={styles.statsContent}>
            {/* Progress Message */}
            {showMessage && (
              <div style={styles.message}>
                {lastMessage}
              </div>
            )}
            {/* Statistics Grid */}
            <div style={styles.statsGrid}>
              <div style={{
                ...styles.statBox,
                backgroundColor: '#eff6ff',
                borderColor: '#bfdbfe',
                color: '#1e40af'
              }}>
                <div style={styles.statNumber}>{masteredVerbs.length}/{verbs.length}</div>
                <div style={styles.statLabel}>Mastery Progress</div>
              </div>
              <div style={{
                ...styles.statBox,
                backgroundColor: '#ecfdf5',
                borderColor: '#a7f3d0',
                color: '#065f46'
              }}>
                <div style={styles.statNumber}>{accuracyPercentage}%</div>
                <div style={styles.statLabel}>Accuracy</div>
              </div>
              <div style={{
                ...styles.statBox,
                backgroundColor: '#faf5ff',
                borderColor: '#c4b5fd',
                color: '#5b21b6'
              }}>
                <div style={styles.statNumber}>{verbs.length - masteredVerbs.length}</div>
                <div style={styles.statLabel}>Remaining</div>
              </div>
              <div style={{
                ...styles.statBox,
                backgroundColor: '#fffbeb',
                borderColor: '#fcd34d',
                color: '#92400e'
              }}>
                <div style={styles.statNumber}>{currentIndex + 1}</div>
                <div style={styles.statLabel}>Current Card</div>
              </div>
            </div>
          </div>
        </div>
        {/* Conjugation Reference Modal */}
        <ConjugationReference 
          isOpen={showReference}
          onClose={() => setShowReference(false)}
        />
        
        {/* Keyboard Help Modal */}
        <KeyboardHelp 
          isOpen={showKeyboardHelp}
          onClose={() => setShowKeyboardHelp(false)}
        />

        {/* Quiz Modal */}
        <Quiz 
          isOpen={showQuiz}
          onClose={() => setShowQuiz(false)}
          conjugations={selectedConjugations}
          onMastered={handleMastered}
        />

        {/* Reset Confirmation Modal */}
        {showResetConfirmation && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '2rem',
              maxWidth: '400px',
              width: '90%',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <AlertTriangle size={48} color="#f59e0b" />
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>
                Reset Progress?
              </h3>
              <p style={{
                color: '#6b7280',
                marginBottom: '1.5rem',
                lineHeight: '1.5'
              }}>
                This will reset all your progress and mastered verbs. This action cannot be undone.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                justifyContent: 'center'
              }}>
                <button
                  onClick={cancelReset}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#6b7280',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={confirmReset}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                >
                  Reset Progress
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Clear Progress Confirmation Modal */}
        {showClearConfirmation && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '2rem',
              maxWidth: '400px',
              width: '90%',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <AlertTriangle size={48} color="#dc2626" />
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>
                Clear All Progress?
              </h3>
              <p style={{
                color: '#6b7280',
                marginBottom: '1.5rem',
                lineHeight: '1.5'
              }}>
                This will completely clear all your progress and reload the page. This action cannot be undone.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                justifyContent: 'center'
              }}>
                <button
                  onClick={cancelReset}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#6b7280',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={confirmClearProgress}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#dc2626',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                >
                  Clear All Progress
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Floating Help Button */}
      <button
        onClick={() => setShowKeyboardHelp(true)}
        style={{
          position: 'fixed',
          bottom: '15px',
          right: '15px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'rgba(0, 0, 0, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '16px',
          fontWeight: 'normal',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
          opacity: 0.7
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0.7';
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
        }}
        title="Keyboard Shortcuts (Press ?)"
      >
        ?
      </button>
    </>
  );
}

export default App; 