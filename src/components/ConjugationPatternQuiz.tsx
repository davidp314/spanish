import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Check, RotateCcw, Target, Star, AlertCircle, Eye, EyeOff } from 'lucide-react';
import SpanishAccentKeyboard from './SpanishAccentKeyboard';

interface ConjugationPatternQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

// Data structure for conjugation patterns
interface ConjugationPattern {
  person: string;
  ending: string;
  example: string;
}

interface VerbPattern {
  type: 'ar' | 'er' | 'ir';
  name: string;
  exampleVerb: string;
  patterns: ConjugationPattern[];
}

// Present Tense Data
const arPresentPatterns: ConjugationPattern[] = [
  { person: 'yo', ending: '-o', example: 'hablo' },
  { person: 'tú', ending: '-as', example: 'hablas' },
  { person: 'él/ella/usted', ending: '-a', example: 'habla' },
  { person: 'nosotros', ending: '-amos', example: 'hablamos' },
  { person: 'ellos/ellas/ustedes', ending: '-an', example: 'hablan' }
];

const erPresentPatterns: ConjugationPattern[] = [
  { person: 'yo', ending: '-o', example: 'como' },
  { person: 'tú', ending: '-es', example: 'comes' },
  { person: 'él/ella/usted', ending: '-e', example: 'come' },
  { person: 'nosotros', ending: '-emos', example: 'comemos' },
  { person: 'ellos/ellas/ustedes', ending: '-en', example: 'comen' }
];

const irPresentPatterns: ConjugationPattern[] = [
  { person: 'yo', ending: '-o', example: 'vivo' },
  { person: 'tú', ending: '-es', example: 'vives' },
  { person: 'él/ella/usted', ending: '-e', example: 'vive' },
  { person: 'nosotros', ending: '-imos', example: 'vivimos' },
  { person: 'ellos/ellas/ustedes', ending: '-en', example: 'viven' }
];

// Preterite Tense Data
const arPreteritePatterns: ConjugationPattern[] = [
  { person: 'yo', ending: '-é', example: 'hablé' },
  { person: 'tú', ending: '-aste', example: 'hablaste' },
  { person: 'él/ella/usted', ending: '-ó', example: 'habló' },
  { person: 'nosotros', ending: '-amos', example: 'hablamos' },
  { person: 'ellos/ellas/ustedes', ending: '-aron', example: 'hablaron' }
];

const erIrPreteritePatterns: ConjugationPattern[] = [
  { person: 'yo', ending: '-í', example: 'comí' },
  { person: 'tú', ending: '-iste', example: 'comiste' },
  { person: 'él/ella/usted', ending: '-ió', example: 'comió' },
  { person: 'nosotros', ending: '-imos', example: 'comimos' },
  { person: 'ellos/ellas/ustedes', ending: '-ieron', example: 'comieron' }
];

const ConjugationPatternQuiz: React.FC<ConjugationPatternQuizProps> = ({ isOpen, onClose }) => {
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [showValidation, setShowValidation] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0, percentage: 0 });
  const [showScore, setShowScore] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (field: string, value: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCharacterInsert = (char: string) => {
    if (focusedField) {
      setUserAnswers(prev => ({
        ...prev,
        [focusedField]: (prev[focusedField] || '') + char
      }));
    }
  };

  const calculateScore = () => {
    const allPatterns = [
      ...arPresentPatterns.map(p => ({ ...p, type: 'ar', tense: 'present' })),
      ...erPresentPatterns.map(p => ({ ...p, type: 'er', tense: 'present' })),
      ...irPresentPatterns.map(p => ({ ...p, type: 'ir', tense: 'present' })),
      ...arPreteritePatterns.map(p => ({ ...p, type: 'ar', tense: 'preterite' })),
      ...erIrPreteritePatterns.map(p => ({ ...p, type: 'er-ir', tense: 'preterite' }))
    ];

    let correct = 0;
    const total = allPatterns.length * 2; // 2 fields per pattern (ending + example)

    allPatterns.forEach(pattern => {
      const endingField = `${pattern.tense}-${pattern.type}-${pattern.person}-ending`;
      const exampleField = `${pattern.tense}-${pattern.type}-${pattern.person}-example`;
      
      if (isCorrect(endingField, userAnswers[endingField] || '')) correct++;
      if (isCorrect(exampleField, userAnswers[exampleField] || '')) correct++;
    });

    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, total, percentage };
  };

  const toggleValidation = () => {
    const newShowValidation = !showValidation;
    setShowValidation(newShowValidation);
    
    if (newShowValidation) {
      const newScore = calculateScore();
      setScore(newScore);
      setShowScore(true);
    } else {
      setShowScore(false);
    }
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setShowValidation(false);
    setShowScore(false);
    setScore({ correct: 0, total: 0, percentage: 0 });
  };

  const isCorrect = (field: string, userAnswer: string): boolean => {
    // Check all pattern arrays
    const allPatterns = [
      ...arPresentPatterns.map(p => ({ ...p, type: 'ar', tense: 'present' })),
      ...erPresentPatterns.map(p => ({ ...p, type: 'er', tense: 'present' })),
      ...irPresentPatterns.map(p => ({ ...p, type: 'ir', tense: 'present' })),
      ...arPreteritePatterns.map(p => ({ ...p, type: 'ar', tense: 'preterite' })),
      ...erIrPreteritePatterns.map(p => ({ ...p, type: 'er-ir', tense: 'preterite' }))
    ];
    
    const correctAnswer = allPatterns.find(p => 
      field === `${p.tense}-${p.type}-${p.person}-ending` || field === `${p.tense}-${p.type}-${p.person}-example`
    );
    
    if (!correctAnswer) return false;
    
    const expectedAnswer = field.includes('ending') ? correctAnswer.ending : correctAnswer.example;
    return userAnswer.trim().toLowerCase() === expectedAnswer.toLowerCase();
  };

  const getFieldStatus = (field: string): 'correct' | 'incorrect' | 'empty' | null => {
    if (!showValidation) return null;
    const userAnswer = userAnswers[field] || '';
    if (!userAnswer.trim()) return 'empty';
    return isCorrect(field, userAnswer) ? 'correct' : 'incorrect';
  };

  const getScoreMessage = () => {
    if (score.percentage >= 90) return "¡Excelente! You're a conjugation master! 🌟";
    if (score.percentage >= 80) return "¡Muy bien! Great job with the patterns! 💪";
    if (score.percentage >= 70) return "¡Bien! Good understanding of the patterns! 👍";
    if (score.percentage >= 60) return "¡Bastante bien! Keep practicing! 📚";
    return "¡Sigue practicando! Review the patterns and try again! 🔄";
  };

  const renderPatternSection = (patterns: ConjugationPattern[], type: string, title: string, exampleVerb: string, tense: 'present' | 'preterite') => {
    const colors = {
      'ar': { bg: '#eff6ff', border: '#3b82f6', text: '#1e40af', badge: '#3b82f6' },
      'er': { bg: '#f0fdf4', border: '#10b981', text: '#065f46', badge: '#10b981' },
      'ir': { bg: '#faf5ff', border: '#8b5cf6', text: '#5b21b6', badge: '#8b5cf6' },
      'er-ir': { bg: '#f0fdf4', border: '#10b981', text: '#065f46', badge: '#10b981' }
    };

    const color = colors[type as keyof typeof colors];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: color.bg,
          border: `2px solid ${color.border}`,
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem'
        }}
      >
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: color.text,
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{
            background: color.badge,
            color: 'white',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}>
            -{type.toUpperCase()}
          </span>
          {title} ({exampleVerb} - to {exampleVerb === 'hablar' ? 'speak' : exampleVerb === 'comer' ? 'eat' : 'vivir'})
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '0.5rem',
          fontSize: '0.875rem'
        }}>
          <div style={{ fontWeight: '600', color: '#374151' }}>Person</div>
          <div style={{ fontWeight: '600', color: '#374151' }}>Ending</div>
          <div style={{ fontWeight: '600', color: '#374151' }}>Example</div>
          
          {patterns.map((pattern, index) => (
            <React.Fragment key={pattern.person}>
              <div style={{ 
                padding: '0.5rem', 
                background: index % 2 === 0 ? `${color.border}20` : 'white', 
                borderRadius: '6px' 
              }}>
                {pattern.person}
              </div>
              <div style={{ 
                padding: '0.5rem', 
                background: index % 2 === 0 ? `${color.border}20` : 'white', 
                borderRadius: '6px',
                position: 'relative'
              }}>
                <input
                  type="text"
                  value={userAnswers[`${tense}-${type}-${pattern.person}-ending`] || ''}
                  onChange={(e) => handleInputChange(`${tense}-${type}-${pattern.person}-ending`, e.target.value)}
                  onFocus={() => setFocusedField(`${tense}-${type}-${pattern.person}-ending`)}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    width: '100%',
                    border: getFieldStatus(`${tense}-${type}-${pattern.person}-ending`) === 'correct' ? '2px solid #10b981' :
                           getFieldStatus(`${tense}-${type}-${pattern.person}-ending`) === 'incorrect' ? '2px solid #ef4444' :
                           focusedField === `${tense}-${type}-${pattern.person}-ending` ? '2px solid #3b82f6' : '1px solid #d1d5db',
                    borderRadius: '4px',
                    padding: '0.25rem',
                    fontSize: '0.875rem',
                    fontFamily: 'monospace',
                    background: 'white',
                    transition: 'all 0.2s ease'
                  }}
                  placeholder="Enter ending"
                />
                {showValidation && getFieldStatus(`${tense}-${type}-${pattern.person}-ending`) === 'correct' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                      position: 'absolute',
                      right: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#10b981'
                    }}
                  >
                    <Check size={16} />
                  </motion.div>
                )}
              </div>
              <div style={{ 
                padding: '0.5rem', 
                background: index % 2 === 0 ? `${color.border}20` : 'white', 
                borderRadius: '6px',
                position: 'relative'
              }}>
                <input
                  type="text"
                  value={userAnswers[`${tense}-${type}-${pattern.person}-example`] || ''}
                  onChange={(e) => handleInputChange(`${tense}-${type}-${pattern.person}-example`, e.target.value)}
                  onFocus={() => setFocusedField(`${tense}-${type}-${pattern.person}-example`)}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    width: '100%',
                    border: getFieldStatus(`${tense}-${type}-${pattern.person}-example`) === 'correct' ? '2px solid #10b981' :
                           getFieldStatus(`${tense}-${type}-${pattern.person}-example`) === 'incorrect' ? '2px solid #ef4444' :
                           focusedField === `${tense}-${type}-${pattern.person}-example` ? '2px solid #3b82f6' : '1px solid #d1d5db',
                    borderRadius: '4px',
                    padding: '0.25rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    background: 'white',
                    transition: 'all 0.2s ease'
                  }}
                  placeholder="Enter example"
                />
                {showValidation && getFieldStatus(`${tense}-${type}-${pattern.person}-example`) === 'correct' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                      position: 'absolute',
                      right: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#10b981'
                    }}
                  >
                    <Check size={16} />
                  </motion.div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              maxWidth: '1400px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '20px 20px 0 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <BookOpen size={32} />
                <div>
                  <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
                    Conjugation Pattern Quiz
                  </h1>
                  <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: 0 }}>
                    Fill in the endings and examples for regular verb patterns
                  </p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div style={{ padding: '2rem' }}>
              {/* Score Display */}
              {showScore && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: score.percentage >= 80 ? 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)' :
                             score.percentage >= 60 ? 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' :
                             'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                    border: score.percentage >= 80 ? '1px solid #10b981' :
                           score.percentage >= 60 ? '1px solid #f59e0b' :
                           '1px solid #ef4444',
                    borderRadius: '12px',
                    padding: '1rem',
                    marginBottom: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                    {score.percentage >= 80 ? <Star size={24} color="#10b981" /> :
                     score.percentage >= 60 ? <Target size={24} color="#f59e0b" /> :
                     <AlertCircle size={24} color="#ef4444" />}
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      margin: 0,
                      color: score.percentage >= 80 ? '#065f46' :
                             score.percentage >= 60 ? '#92400e' :
                             '#991b1b'
                    }}>
                      {getScoreMessage()}
                    </h3>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: score.percentage >= 80 ? '#065f46' :
                           score.percentage >= 60 ? '#92400e' :
                           '#991b1b'
                  }}>
                    <span>Score: {score.correct}/{score.total} ({score.percentage}%)</span>
                  </div>
                </motion.div>
              )}

              {/* Spanish Accent Keyboard Tip */}
              <div style={{
                backgroundColor: '#fef3c7',
                border: '1px solid #fbbf24',
                borderRadius: '8px',
                fontSize: '0.75rem',
                color: '#92400e',
                textAlign: 'center',
                padding: '0.75rem',
                marginBottom: '1.5rem'
              }}>
                💡 <strong>Tip:</strong> You'll need Spanish accents for your answers - use the keyboard below or number keys 1-9 shortcuts
              </div>

              {/* Spanish Accent Keyboard */}
              <SpanishAccentKeyboard
                onCharacterInsert={handleCharacterInsert}
                isVisible={true}
              />

              {/* Present Tense Section */}
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '12px'
              }}>
                Present Tense
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {/* -AR Present Tense */}
                {renderPatternSection(arPresentPatterns, 'ar', 'Regular -AR Verbs', 'hablar', 'present')}
                
                {/* -ER Present Tense */}
                {renderPatternSection(erPresentPatterns, 'er', 'Regular -ER Verbs', 'comer', 'present')}
                
                {/* -IR Present Tense */}
                {renderPatternSection(irPresentPatterns, 'ir', 'Regular -IR Verbs', 'vivir', 'present')}
              </div>

              {/* Preterite Tense Section */}
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '12px'
              }}>
                Preterite Tense (Simple Past)
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                {/* -AR Preterite Tense */}
                {renderPatternSection(arPreteritePatterns, 'ar', 'Regular -AR Verbs', 'hablar', 'preterite')}
                
                {/* -ER/-IR Preterite Tense */}
                {renderPatternSection(erIrPreteritePatterns, 'er-ir', 'Regular -ER/-IR Verbs', 'comer/vivir', 'preterite')}
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                marginTop: '2rem'
              }}>
                <button
                  onClick={toggleValidation}
                  style={{
                    background: showValidation ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  {showValidation ? <Eye size={16} /> : <EyeOff size={16} />}
                  {showValidation ? 'Hide Validation' : 'Show Validation'}
                </button>
                
                <button
                  onClick={resetQuiz}
                  style={{
                    background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <RotateCcw size={16} style={{ marginRight: '8px' }} />
                  Reset
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConjugationPatternQuiz; 