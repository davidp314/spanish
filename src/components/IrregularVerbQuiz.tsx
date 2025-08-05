import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Check, RotateCcw, Target, Star, AlertCircle, Eye, EyeOff } from 'lucide-react';
import SpanishAccentKeyboard from './SpanishAccentKeyboard';

interface IrregularVerbQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

// Data structure for irregular verb conjugations
interface IrregularVerbConjugation {
  person: string;
  present: string;
  preterite: string;
}

interface IrregularVerb {
  name: string;
  english: string;
  conjugations: IrregularVerbConjugation[];
}

// All irregular verb data
const irregularVerbsData: IrregularVerb[] = [
  {
    name: 'caer',
    english: 'to fall',
    conjugations: [
      { person: 'yo', present: 'caigo', preterite: 'caí' },
      { person: 'tú', present: 'caes', preterite: 'caíste' },
      { person: 'él/ella/usted', present: 'cae', preterite: 'cayó' },
      { person: 'nosotros', present: 'caemos', preterite: 'caímos' },
      { person: 'ellos/ellas/ustedes', present: 'caen', preterite: 'cayeron' }
    ]
  },
  {
    name: 'dar',
    english: 'to give',
    conjugations: [
      { person: 'yo', present: 'doy', preterite: 'di' },
      { person: 'tú', present: 'das', preterite: 'diste' },
      { person: 'él/ella/usted', present: 'da', preterite: 'dio' },
      { person: 'nosotros', present: 'damos', preterite: 'dimos' },
      { person: 'ellos/ellas/ustedes', present: 'dan', preterite: 'dieron' }
    ]
  },
  {
    name: 'decir',
    english: 'to say/tell',
    conjugations: [
      { person: 'yo', present: 'digo', preterite: 'dije' },
      { person: 'tú', present: 'dices', preterite: 'dijiste' },
      { person: 'él/ella/usted', present: 'dice', preterite: 'dijo' },
      { person: 'nosotros', present: 'decimos', preterite: 'dijimos' },
      { person: 'ellos/ellas/ustedes', present: 'dicen', preterite: 'dijeron' }
    ]
  },
  {
    name: 'estar',
    english: 'to be',
    conjugations: [
      { person: 'yo', present: 'estoy', preterite: 'estuve' },
      { person: 'tú', present: 'estás', preterite: 'estuviste' },
      { person: 'él/ella/usted', present: 'está', preterite: 'estuvo' },
      { person: 'nosotros', present: 'estamos', preterite: 'estuvimos' },
      { person: 'ellos/ellas/ustedes', present: 'están', preterite: 'estuvieron' }
    ]
  },
  {
    name: 'hacer',
    english: 'to do/make',
    conjugations: [
      { person: 'yo', present: 'hago', preterite: 'hice' },
      { person: 'tú', present: 'haces', preterite: 'hiciste' },
      { person: 'él/ella/usted', present: 'hace', preterite: 'hizo' },
      { person: 'nosotros', present: 'hacemos', preterite: 'hicimos' },
      { person: 'ellos/ellas/ustedes', present: 'hacen', preterite: 'hicieron' }
    ]
  },
  {
    name: 'ir',
    english: 'to go',
    conjugations: [
      { person: 'yo', present: 'voy', preterite: 'fui' },
      { person: 'tú', present: 'vas', preterite: 'fuiste' },
      { person: 'él/ella/usted', present: 'va', preterite: 'fue' },
      { person: 'nosotros', present: 'vamos', preterite: 'fuimos' },
      { person: 'ellos/ellas/ustedes', present: 'van', preterite: 'fueron' }
    ]
  },
  {
    name: 'leer',
    english: 'to read',
    conjugations: [
      { person: 'yo', present: 'leo', preterite: 'leí' },
      { person: 'tú', present: 'lees', preterite: 'leíste' },
      { person: 'él/ella/usted', present: 'lee', preterite: 'leyó' },
      { person: 'nosotros', present: 'leemos', preterite: 'leímos' },
      { person: 'ellos/ellas/ustedes', present: 'leen', preterite: 'leyeron' }
    ]
  },
  {
    name: 'mentir',
    english: 'to lie',
    conjugations: [
      { person: 'yo', present: 'miento', preterite: 'mentí' },
      { person: 'tú', present: 'mientes', preterite: 'mentiste' },
      { person: 'él/ella/usted', present: 'miente', preterite: 'mintió' },
      { person: 'nosotros', present: 'mentimos', preterite: 'mentimos' },
      { person: 'ellos/ellas/ustedes', present: 'mienten', preterite: 'mintieron' }
    ]
  },
  {
    name: 'poner',
    english: 'to put',
    conjugations: [
      { person: 'yo', present: 'pongo', preterite: 'puse' },
      { person: 'tú', present: 'pones', preterite: 'pusiste' },
      { person: 'él/ella/usted', present: 'pone', preterite: 'puso' },
      { person: 'nosotros', present: 'ponemos', preterite: 'pusimos' },
      { person: 'ellos/ellas/ustedes', present: 'ponen', preterite: 'pusieron' }
    ]
  },
  {
    name: 'ser',
    english: 'to be',
    conjugations: [
      { person: 'yo', present: 'soy', preterite: 'fui' },
      { person: 'tú', present: 'eres', preterite: 'fuiste' },
      { person: 'él/ella/usted', present: 'es', preterite: 'fue' },
      { person: 'nosotros', present: 'somos', preterite: 'fuimos' },
      { person: 'ellos/ellas/ustedes', present: 'son', preterite: 'fueron' }
    ]
  },
  {
    name: 'tener',
    english: 'to have',
    conjugations: [
      { person: 'yo', present: 'tengo', preterite: 'tuve' },
      { person: 'tú', present: 'tienes', preterite: 'tuviste' },
      { person: 'él/ella/usted', present: 'tiene', preterite: 'tuvo' },
      { person: 'nosotros', present: 'tenemos', preterite: 'tuvimos' },
      { person: 'ellos/ellas/ustedes', present: 'tienen', preterite: 'tuvieron' }
    ]
  },
  {
    name: 'traer',
    english: 'to bring',
    conjugations: [
      { person: 'yo', present: 'traigo', preterite: 'traje' },
      { person: 'tú', present: 'traes', preterite: 'trajiste' },
      { person: 'él/ella/usted', present: 'trae', preterite: 'trajo' },
      { person: 'nosotros', present: 'traemos', preterite: 'trajimos' },
      { person: 'ellos/ellas/ustedes', present: 'traen', preterite: 'trajeron' }
    ]
  },
  {
    name: 'ver',
    english: 'to see',
    conjugations: [
      { person: 'yo', present: 'veo', preterite: 'vi' },
      { person: 'tú', present: 'ves', preterite: 'viste' },
      { person: 'él/ella/usted', present: 've', preterite: 'vio' },
      { person: 'nosotros', present: 'vemos', preterite: 'vimos' },
      { person: 'ellos/ellas/ustedes', present: 'ven', preterite: 'vieron' }
    ]
  }
];

const IrregularVerbQuiz: React.FC<IrregularVerbQuizProps> = ({ isOpen, onClose }) => {
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [showValidation, setShowValidation] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0, percentage: 0 });
  const [showScore, setShowScore] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  // Verb and tense selection state
  const [selectedVerbs, setSelectedVerbs] = useState<string[]>(['tener']); // Default to tener
  const [selectedTenses, setSelectedTenses] = useState<('present' | 'preterite')[]>(['present', 'preterite']); // Default to both
  const [showSelection, setShowSelection] = useState(true); // Show selection interface by default

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

  // Selection handlers
  const handleVerbToggle = (verbName: string) => {
    setSelectedVerbs(prev => 
      prev.includes(verbName) 
        ? prev.filter(v => v !== verbName)
        : [...prev, verbName]
    );
  };

  const handleTenseToggle = (tense: 'present' | 'preterite') => {
    setSelectedTenses(prev => 
      prev.includes(tense) 
        ? prev.filter(t => t !== tense)
        : [...prev, tense]
    );
  };

  const handleStartQuiz = () => {
    if (selectedVerbs.length > 0 && selectedTenses.length > 0) {
      setShowSelection(false);
      resetQuiz();
    }
  };

  const handleBackToSelection = () => {
    setShowSelection(true);
    setShowValidation(false);
    setShowScore(false);
  };

  const calculateScore = () => {
    let correct = 0;
    let total = 0;

    selectedVerbs.forEach(verbName => {
      const verb = irregularVerbsData.find(v => v.name === verbName);
      if (!verb) return;

      verb.conjugations.forEach(conjugation => {
        selectedTenses.forEach(tense => {
          const field = `${verbName}-${conjugation.person}-${tense}`;
          total++;
          if (isCorrect(field, userAnswers[field] || '')) correct++;
        });
      });
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
    const [verbName, person, tense] = field.split('-');
    const verb = irregularVerbsData.find(v => v.name === verbName);
    if (!verb) return false;
    
    const conjugation = verb.conjugations.find(c => c.person === person);
    if (!conjugation) return false;
    
    const expectedAnswer = tense === 'present' ? conjugation.present : conjugation.preterite;
    return userAnswer.trim().toLowerCase() === expectedAnswer.toLowerCase();
  };

  const getFieldStatus = (field: string): 'correct' | 'incorrect' | 'empty' | null => {
    if (!showValidation) return null;
    const userAnswer = userAnswers[field] || '';
    if (!userAnswer.trim()) return 'empty';
    return isCorrect(field, userAnswer) ? 'correct' : 'incorrect';
  };

  const getScoreMessage = () => {
    if (score.percentage >= 90) return "¡Excelente! You're an irregular verb master! 🌟";
    if (score.percentage >= 80) return "¡Muy bien! Great job with the irregular verbs! 💪";
    if (score.percentage >= 70) return "¡Bien! Good understanding of the irregular forms! 👍";
    if (score.percentage >= 60) return "¡Bastante bien! Keep practicing! 📚";
    return "¡Sigue practicando! Review the irregular forms and try again! 🔄";
  };

  const renderVerbTable = (verb: IrregularVerb) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: '#f8fafc',
          border: '2px solid #3b82f6',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem'
        }}
      >
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: '#1e40af',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{
            background: '#3b82f6',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}>
            Irregular
          </span>
          {verb.name} ({verb.english})
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: `1fr ${selectedTenses.includes('present') ? '1fr' : ''} ${selectedTenses.includes('preterite') ? '1fr' : ''}`,
          gap: '0.5rem',
          fontSize: '0.875rem'
        }}>
          <div style={{ fontWeight: '600', color: '#374151' }}>Person</div>
          {selectedTenses.includes('present') && <div style={{ fontWeight: '600', color: '#374151' }}>Present</div>}
          {selectedTenses.includes('preterite') && <div style={{ fontWeight: '600', color: '#374151' }}>Preterite</div>}
          
                      {verb.conjugations.map((conjugation, index) => (
              <React.Fragment key={conjugation.person}>
                <div style={{ 
                  padding: '0.5rem', 
                  background: index % 2 === 0 ? '#3b82f620' : 'white', 
                  borderRadius: '6px' 
                }}>
                  {conjugation.person}
                </div>
                {selectedTenses.includes('present') && (
                  <div style={{ 
                    padding: '0.5rem', 
                    background: index % 2 === 0 ? '#3b82f620' : 'white', 
                    borderRadius: '6px',
                    position: 'relative'
                  }}>
                    <input
                      type="text"
                      value={userAnswers[`${verb.name}-${conjugation.person}-present`] || ''}
                      onChange={(e) => handleInputChange(`${verb.name}-${conjugation.person}-present`, e.target.value)}
                      onFocus={() => setFocusedField(`${verb.name}-${conjugation.person}-present`)}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        width: '100%',
                        border: getFieldStatus(`${verb.name}-${conjugation.person}-present`) === 'correct' ? '2px solid #10b981' :
                               getFieldStatus(`${verb.name}-${conjugation.person}-present`) === 'incorrect' ? '2px solid #ef4444' :
                               focusedField === `${verb.name}-${conjugation.person}-present` ? '2px solid #3b82f6' : '1px solid #d1d5db',
                        borderRadius: '4px',
                        padding: '0.25rem',
                        fontSize: '0.875rem',
                        fontFamily: 'monospace',
                        background: 'white',
                        transition: 'all 0.2s ease'
                      }}
                      placeholder="Enter present form"
                    />
                    {showValidation && getFieldStatus(`${verb.name}-${conjugation.person}-present`) === 'correct' && (
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
                )}
                {selectedTenses.includes('preterite') && (
                  <div style={{ 
                    padding: '0.5rem', 
                    background: index % 2 === 0 ? '#3b82f620' : 'white', 
                    borderRadius: '6px',
                    position: 'relative'
                  }}>
                    <input
                      type="text"
                      value={userAnswers[`${verb.name}-${conjugation.person}-preterite`] || ''}
                      onChange={(e) => handleInputChange(`${verb.name}-${conjugation.person}-preterite`, e.target.value)}
                      onFocus={() => setFocusedField(`${verb.name}-${conjugation.person}-preterite`)}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        width: '100%',
                        border: getFieldStatus(`${verb.name}-${conjugation.person}-preterite`) === 'correct' ? '2px solid #10b981' :
                               getFieldStatus(`${verb.name}-${conjugation.person}-preterite`) === 'incorrect' ? '2px solid #ef4444' :
                               focusedField === `${verb.name}-${conjugation.person}-preterite` ? '2px solid #3b82f6' : '1px solid #d1d5db',
                        borderRadius: '4px',
                        padding: '0.25rem',
                        fontSize: '0.875rem',
                        fontFamily: 'monospace',
                        background: 'white',
                        transition: 'all 0.2s ease'
                      }}
                      placeholder="Enter preterite form"
                    />
                    {showValidation && getFieldStatus(`${verb.name}-${conjugation.person}-preterite`) === 'correct' && (
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
                )}
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
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
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
                    Irregular Verb Quiz
                  </h1>
                  <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: 0 }}>
                    Fill in the irregular verb conjugations
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
              {/* Selection Interface */}
              {showSelection && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                    border: '2px solid #3b82f6',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    marginBottom: '2rem'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#1e40af',
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                  }}>
                    Select Verbs and Tenses
                  </h3>
                  
                  {/* Verb Selection */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '1rem'
                    }}>
                      Irregular Verbs:
                    </h4>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '0.75rem'
                    }}>
                      {irregularVerbsData.map(verb => (
                        <label key={verb.name} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.75rem',
                          background: selectedVerbs.includes(verb.name) ? '#3b82f620' : 'white',
                          border: `2px solid ${selectedVerbs.includes(verb.name) ? '#3b82f6' : '#d1d5db'}`,
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}>
                          <input
                            type="checkbox"
                            checked={selectedVerbs.includes(verb.name)}
                            onChange={() => handleVerbToggle(verb.name)}
                            style={{
                              width: '18px',
                              height: '18px',
                              accentColor: '#3b82f6'
                            }}
                          />
                          <div>
                            <div style={{ fontWeight: '600', color: '#1f2937' }}>
                              {verb.name}
                            </div>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                              {verb.english}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tense Selection */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '1rem'
                    }}>
                      Tenses:
                    </h4>
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      justifyContent: 'center'
                    }}>
                      <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1rem',
                        background: selectedTenses.includes('present') ? '#10b98120' : 'white',
                        border: `2px solid ${selectedTenses.includes('present') ? '#10b981' : '#d1d5db'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}>
                        <input
                          type="checkbox"
                          checked={selectedTenses.includes('present')}
                          onChange={() => handleTenseToggle('present')}
                          style={{
                            width: '18px',
                            height: '18px',
                            accentColor: '#10b981'
                          }}
                        />
                        <span style={{ fontWeight: '600', color: '#1f2937' }}>Present</span>
                      </label>
                      <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1rem',
                        background: selectedTenses.includes('preterite') ? '#f59e0b20' : 'white',
                        border: `2px solid ${selectedTenses.includes('preterite') ? '#f59e0b' : '#d1d5db'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}>
                        <input
                          type="checkbox"
                          checked={selectedTenses.includes('preterite')}
                          onChange={() => handleTenseToggle('preterite')}
                          style={{
                            width: '18px',
                            height: '18px',
                            accentColor: '#f59e0b'
                          }}
                        />
                        <span style={{ fontWeight: '600', color: '#1f2937' }}>Preterite</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Start Quiz Button */}
                  <div style={{ textAlign: 'center' }}>
                    <button
                      onClick={handleStartQuiz}
                      disabled={selectedVerbs.length === 0 || selectedTenses.length === 0}
                      style={{
                        background: selectedVerbs.length > 0 && selectedTenses.length > 0 
                          ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' 
                          : 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '0.75rem 2rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: selectedVerbs.length > 0 && selectedTenses.length > 0 ? 'pointer' : 'not-allowed',
                        transition: 'transform 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedVerbs.length > 0 && selectedTenses.length > 0) {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      Start Quiz
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Quiz Content */}
              {!showSelection && (
                <>
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

              {/* Verb Tables */}
              {selectedVerbs.map(verbName => {
                const verb = irregularVerbsData.find(v => v.name === verbName);
                return verb ? renderVerbTable(verb) : null;
              })}

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
                
                <button
                  onClick={handleBackToSelection}
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
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
                  <BookOpen size={16} style={{ marginRight: '8px' }} />
                  Change Selection
                </button>
              </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IrregularVerbQuiz; 