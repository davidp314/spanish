import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Info } from 'lucide-react';

interface ConjugationReferenceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConjugationReference: React.FC<ConjugationReferenceProps> = ({ isOpen, onClose }) => {
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

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
              maxWidth: '1200px',
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
                    Spanish Verb Conjugation Reference
                  </h1>
                  <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: 0 }}>
                    Regular verb patterns for present and preterite tenses
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
              {/* Info Box */}
              <div style={{
                background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                border: '1px solid #f59e0b',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <Info size={20} color="#d97706" style={{ marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#92400e', margin: '0 0 0.5rem 0' }}>
                    How to Use This Reference
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#92400e', margin: 0, lineHeight: '1.5' }}>
                    <strong>Pattern:</strong> Stem + Ending = Conjugation. For example: <em>habl</em> + <em>o</em> = <strong>hablo</strong>.
                    <br />
                    <strong>Note:</strong> -ER and -IR verbs share the same endings in present tense, except for nosotros.
                  </p>
                </div>
              </div>

              {/* Main Reference Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                gap: '2rem'
              }}>
                {/* Present Tense */}
                <div>
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

                  {/* -AR Verbs */}
                  <div style={{
                    background: '#eff6ff',
                    border: '2px solid #3b82f6',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    marginBottom: '1.5rem'
                  }}>
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
                        -AR
                      </span>
                      Regular -AR Verbs (hablar - to speak)
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
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px' }}>yo</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-o</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', fontWeight: '600' }}>hablo</div>
                      
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px' }}>tú</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontFamily: 'monospace' }}>-as</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontWeight: '600' }}>hablas</div>
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px' }}>él/ella/usted</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-a</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', fontWeight: '600' }}>habla</div>
                      
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px' }}>nosotros</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontFamily: 'monospace' }}>-amos</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontWeight: '600' }}>hablamos</div>
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px' }}>ellos/ellas/ustedes</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-an</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', fontWeight: '600' }}>hablan</div>
                    </div>
                  </div>

                  {/* -ER Verbs */}
                  <div style={{
                    background: '#f0fdf4',
                    border: '2px solid #10b981',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#065f46',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{
                        background: '#10b981',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        -ER
                      </span>
                      Regular -ER Verbs (comer - to eat)
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
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px' }}>yo</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-o</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontWeight: '600' }}>como</div>
                      
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px' }}>tú</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontFamily: 'monospace' }}>-es</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontWeight: '600' }}>comes</div>
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px' }}>él/ella/usted</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-e</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontWeight: '600' }}>come</div>
                      
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px' }}>nosotros</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontFamily: 'monospace' }}>-emos</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontWeight: '600' }}>comemos</div>
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px' }}>ellos/ellas/ustedes</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-en</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontWeight: '600' }}>comen</div>
                    </div>
                  </div>

                  {/* -IR Verbs */}
                  <div style={{
                    background: '#faf5ff',
                    border: '2px solid #8b5cf6',
                    borderRadius: '12px',
                    padding: '1.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#5b21b6',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{
                        background: '#8b5cf6',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        -IR
                      </span>
                      Regular -IR Verbs (vivir - to live)
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
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '6px' }}>yo</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-o</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '6px', fontWeight: '600' }}>vivo</div>
                      
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px' }}>tú</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontFamily: 'monospace' }}>-es</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontWeight: '600' }}>vives</div>
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '6px' }}>él/ella/usted</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-e</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '6px', fontWeight: '600' }}>vive</div>
                      
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px' }}>nosotros</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontFamily: 'monospace' }}>-imos</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontWeight: '600' }}>vivimos</div>
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '6px' }}>ellos/ellas/ustedes</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-en</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '6px', fontWeight: '600' }}>viven</div>
                    </div>
                  </div>
                </div>

                {/* Preterite Tense */}
                <div>
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

                  {/* -AR Verbs Preterite */}
                  <div style={{
                    background: '#eff6ff',
                    border: '2px solid #3b82f6',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    marginBottom: '1.5rem'
                  }}>
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
                        -AR
                      </span>
                      Regular -AR Verbs (hablar - to speak)
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
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px' }}>yo</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-é</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', fontWeight: '600' }}>hablé</div>
                      
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px' }}>tú</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontFamily: 'monospace' }}>-aste</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontWeight: '600' }}>hablaste</div>
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px' }}>él/ella/usted</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-ó</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', fontWeight: '600' }}>habló</div>
                      
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px' }}>nosotros</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontFamily: 'monospace' }}>-amos</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontWeight: '600' }}>hablamos</div>
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px' }}>ellos/ellas/ustedes</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-aron</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', fontWeight: '600' }}>hablaron</div>
                    </div>
                  </div>

                  {/* -ER/-IR Verbs Preterite */}
                  <div style={{
                    background: '#f0fdf4',
                    border: '2px solid #10b981',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#065f46',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{
                        background: '#10b981',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        -ER/-IR
                      </span>
                      Regular -ER/-IR Verbs (comer/vivir)
                    </h3>
                    
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr 1fr',
                      gap: '0.5rem',
                      fontSize: '0.875rem'
                    }}>
                      <div style={{ fontWeight: '600', color: '#374151' }}>Person</div>
                      <div style={{ fontWeight: '600', color: '#374151' }}>Ending</div>
                      <div style={{ fontWeight: '600', color: '#374151' }}>Example (-ER)</div>
                      <div style={{ fontWeight: '600', color: '#374151' }}>Example (-IR)</div>
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px' }}>yo</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-í</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontWeight: '600' }}>comí</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontWeight: '600' }}>viví</div>
                      
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px' }}>tú</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontFamily: 'monospace' }}>-iste</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontWeight: '600' }}>comiste</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontWeight: '600' }}>viviste</div>
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px' }}>él/ella/usted</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-ió</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontWeight: '600' }}>comió</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontWeight: '600' }}>vivió</div>
                      
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px' }}>nosotros</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontFamily: 'monospace' }}>-imos</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontWeight: '600' }}>comimos</div>
                      <div style={{ padding: '0.5rem', background: 'white', borderRadius: '6px', fontWeight: '600' }}>vivimos</div>
                      
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px' }}>ellos/ellas/ustedes</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontFamily: 'monospace' }}>-ieron</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontWeight: '600' }}>comieron</div>
                      <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', fontWeight: '600' }}>vivieron</div>
                    </div>
                  </div>

                  {/* Key Differences Note */}
                  <div style={{
                    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                    border: '1px solid #f59e0b',
                    borderRadius: '12px',
                    padding: '1rem',
                    marginTop: '1rem'
                  }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#92400e',
                      margin: '0 0 0.5rem 0'
                    }}>
                      Key Differences to Remember:
                    </h4>
                    <ul style={{
                      fontSize: '0.875rem',
                      color: '#92400e',
                      margin: 0,
                      paddingLeft: '1.5rem',
                      lineHeight: '1.5'
                    }}>
                      <li><strong>Present:</strong> -ER and -IR share endings except nosotros (-emos vs -imos)</li>
                      <li><strong>Preterite:</strong> -ER and -IR have identical endings</li>
                      <li><strong>Nosotros:</strong> -AR and -ER/-IR share -amos in preterite</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div style={{
                marginTop: '2rem',
                padding: '1rem',
                background: '#f8fafc',
                borderRadius: '12px',
                textAlign: 'center',
                fontSize: '0.875rem',
                color: '#64748b'
              }}>
                <p style={{ margin: 0 }}>
                  <strong>Tip:</strong> Practice these patterns regularly to build confidence with regular verb conjugations!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConjugationReference; 