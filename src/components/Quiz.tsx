import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowRight, RotateCcw, Target, Star } from 'lucide-react';
import { Conjugation } from '../data/conjugationData';
import SpanishAccentKeyboard from './SpanishAccentKeyboard';

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
  conjugations: Conjugation[];
  onMastered: (verbId: string) => void;
}

interface QuizQuestion {
  conjugation: Conjugation;
  question: string;
  correctAnswer: string;
  userAnswer: string;
  isCorrect: boolean;
  isAnswered: boolean;
}

const Quiz: React.FC<QuizProps> = ({ isOpen, onClose, conjugations, onMastered }) => {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizLength, setQuizLength] = useState(10);
  const [spanishFirst, setSpanishFirst] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize quiz when opened
  useEffect(() => {
    if (isOpen && !quizStarted) {
      setQuizStarted(false);
      setQuizCompleted(false);
      setCurrentQuestionIndex(0);
      setCorrectAnswers(0);
      setTotalAnswered(0);
      setUserInput('');
      setShowResult(false);
    }
  }, [isOpen]);

  // Focus input field when quiz starts or question changes
  useEffect(() => {
    if (quizStarted && !quizCompleted && !showResult) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [quizStarted, currentQuestionIndex, showResult, quizCompleted]);

  // Prevent body scroll when quiz is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const startQuiz = () => {
    const availableConjugations = conjugations.filter(verb => !verb.mastered);
    const shuffled = [...availableConjugations].sort(() => Math.random() - 0.5);
    const selectedConjugations = shuffled.slice(0, Math.min(quizLength, availableConjugations.length));
    
    const questions: QuizQuestion[] = selectedConjugations.map(conjugation => ({
      conjugation,
      question: spanishFirst ? conjugation.spanish : conjugation.english,
      correctAnswer: spanishFirst ? conjugation.english : conjugation.spanish,
      userAnswer: '',
      isCorrect: false,
      isAnswered: false
    }));

    setQuizQuestions(questions);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setUserInput('');
    setShowResult(false);
  };

  const handleSubmit = () => {
    if (!userInput.trim()) return;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = userInput.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
    
    const updatedQuestions = [...quizQuestions];
    updatedQuestions[currentQuestionIndex] = {
      ...currentQuestion,
      userAnswer: userInput.trim(),
      isCorrect,
      isAnswered: true
    };
    
    setQuizQuestions(updatedQuestions);
    setShowResult(true);
    setTotalAnswered(prev => prev + 1);
    
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      onMastered(currentQuestion.conjugation.id);
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setUserInput('');
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !showResult) {
      handleSubmit();
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setTotalAnswered(0);
    setUserInput('');
    setShowResult(false);
  };

  const handleCharacterInsert = (char: string) => {
    console.log('Quiz: handleCharacterInsert called with character:', char);
    setUserInput(prev => {
      const newValue = prev + char;
      console.log('Quiz: Updated userInput from', prev, 'to', newValue);
      return newValue;
    });
    // Refocus the input after inserting a character
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '1rem'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '2rem',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Quiz Setup Screen */}
        {!quizStarted && !quizCompleted && (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Target size={48} color="#3b82f6" />
            </div>
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Quiz Mode
            </h2>
            <p style={{
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Test your knowledge by typing the correct translation for each verb conjugation.
            </p>
            
            {/* Quiz Settings */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '2rem',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <label style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#374151'
                }}>
                  Number of questions:
                </label>
                <select
                  value={quizLength}
                  onChange={(e) => setQuizLength(Number(e.target.value))}
                  style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '1rem'
                  }}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                  <option value={conjugations.filter(v => !v.mastered).length}>
                    All ({conjugations.filter(v => !v.mastered).length})
                  </option>
                </select>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <label style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#374151'
                }}>
                  Question language:
                </label>
                <button
                  onClick={() => setSpanishFirst(!spanishFirst)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    backgroundColor: spanishFirst ? '#10b981' : '#3b82f6',
                    color: 'white',
                    transition: 'background-color 0.2s'
                  }}
                >
                  {spanishFirst ? 'Spanish → English' : 'English → Spanish'}
                </button>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <button
                onClick={onClose}
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
                onClick={startQuiz}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                Start Quiz
              </button>
            </div>
          </div>
        )}

        {/* Quiz Questions */}
        {quizStarted && !quizCompleted && currentQuestion && (
          <div>
            {/* Progress */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              padding: '1rem',
              backgroundColor: '#f3f4f6',
              borderRadius: '12px'
            }}>
              <span style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#374151'
              }}>
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
              </span>
              <span style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#059669'
              }}>
                {correctAnswers} correct
              </span>
            </div>

            {/* Question */}
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                marginBottom: '0.5rem'
              }}>
                {spanishFirst ? 'Translate to English' : 'Translate to Spanish'}
              </div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                {currentQuestion.question}
              </h3>
              
              {/* Verb info */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '1rem'
              }}>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  backgroundColor: currentQuestion.conjugation.type === 'irregular' ? '#fef3c7' : '#dbeafe',
                  color: currentQuestion.conjugation.type === 'irregular' ? '#92400e' : '#1e40af'
                }}>
                  {currentQuestion.conjugation.type === 'irregular' ? 'Irregular' : `Regular -${currentQuestion.conjugation.conjugation}`}
                </span>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  backgroundColor: currentQuestion.conjugation.tense === 'present' ? '#dcfce7' : '#fef3c7',
                  color: currentQuestion.conjugation.tense === 'present' ? '#166534' : '#92400e'
                }}>
                  {currentQuestion.conjugation.tense === 'present' ? 'Present' : 'Preterite'}
                </span>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  backgroundColor: '#f3e8ff',
                  color: '#7c3aed'
                }}>
                  {currentQuestion.conjugation.person}
                </span>
              </div>
            </div>

            {/* Answer Input */}
            {!showResult && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onKeyDown={(e) => {
                    // Don't stop propagation for number keys 1-9
                    if (!/^[1-9]$/.test(e.key)) {
                      e.stopPropagation();
                    }
                  }}
                  placeholder={`Type your answer...`}
                  style={{
                    padding: '1rem',
                    fontSize: '1.125rem',
                    border: '2px solid #d1d5db',
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  autoFocus
                />
                
                {/* Spanish Accent Keyboard */}
                {spanishFirst ? (
                  <div style={{
                    padding: '0.5rem',
                    backgroundColor: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    color: '#1e40af',
                    textAlign: 'center'
                  }}>
                    💡 <strong>Tip:</strong> Use the accent keyboard below or Ctrl + letter shortcuts for Spanish characters
                  </div>
                ) : (
                  <div style={{
                    padding: '0.5rem',
                    backgroundColor: '#fef3c7',
                    border: '1px solid #fbbf24',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    color: '#92400e',
                    textAlign: 'center'
                  }}>
                    💡 <strong>Tip:</strong> You'll need Spanish accents for your answers - use the keyboard below or Ctrl + letter shortcuts
                  </div>
                )}
                <SpanishAccentKeyboard
                  onCharacterInsert={handleCharacterInsert}
                  isVisible={true}
                />
                
                <button
                  onClick={handleSubmit}
                  disabled={!userInput.trim()}
                  style={{
                    padding: '1rem',
                    backgroundColor: userInput.trim() ? '#3b82f6' : '#9ca3af',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: userInput.trim() ? 'pointer' : 'not-allowed',
                    transition: 'background-color 0.2s'
                  }}
                >
                  Submit Answer
                </button>
              </div>
            )}

            {/* Result Display */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  borderRadius: '16px',
                  backgroundColor: currentQuestion.isCorrect ? '#ecfdf5' : '#fef2f2',
                  border: `2px solid ${currentQuestion.isCorrect ? '#10b981' : '#ef4444'}`
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  {currentQuestion.isCorrect ? (
                    <Check size={48} color="#10b981" />
                  ) : (
                    <X size={48} color="#ef4444" />
                  )}
                </div>
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: currentQuestion.isCorrect ? '#059669' : '#dc2626',
                  marginBottom: '0.5rem'
                }}>
                  {currentQuestion.isCorrect ? 'Correct!' : 'Incorrect'}
                </h4>
                <p style={{
                  fontSize: '1.125rem',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Your answer: <strong>{currentQuestion.userAnswer}</strong>
                </p>
                {!currentQuestion.isCorrect && (
                  <p style={{
                    fontSize: '1.125rem',
                    color: '#059669',
                    fontWeight: '600'
                  }}>
                    Correct answer: <strong>{currentQuestion.correctAnswer}</strong>
                  </p>
                )}
              </motion.div>
            )}
          </div>
        )}

        {/* Quiz Results */}
        {quizCompleted && (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Star size={48} color="#fbbf24" />
            </div>
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Quiz Complete!
            </h2>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                padding: '2rem',
                backgroundColor: '#f3f4f6',
                borderRadius: '16px',
                minWidth: '200px'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: '#3b82f6',
                  marginBottom: '0.5rem'
                }}>
                  {Math.round((correctAnswers / totalAnswered) * 100)}%
                </div>
                <div style={{
                  fontSize: '1.125rem',
                  color: '#6b7280'
                }}>
                  {correctAnswers} out of {totalAnswered} correct
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <button
                onClick={resetQuiz}
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
                <RotateCcw size={20} style={{ marginRight: '0.5rem' }} />
                Try Again
              </button>
              <button
                onClick={onClose}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                <ArrowRight size={20} style={{ marginRight: '0.5rem' }} />
                Back to Practice
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Quiz; 