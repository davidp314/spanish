import React from 'react';
import './ConjugationReference.css';

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

  if (!isOpen) return null;

  return (
    <div className="conjugation-reference-overlay" onClick={handleBackdropClick}>
      <div className="conjugation-reference-modal">
        {/* Header */}
        <div className="conjugation-reference-header">
          <div className="header-content">
            <div className="header-icon">
              📚
            </div>
            <div className="header-text">
              <h1>Spanish Verb Conjugation Reference</h1>
              <p>Regular verb patterns for present and preterite tenses</p>
            </div>
          </div>
          
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="conjugation-reference-content">

          {/* Main Reference Grid */}
          <div className="reference-grid">
            {/* Present Tense */}
            <div>
                             <h2 className="tense-title">
                  Present Tense
                </h2>

              {/* -AR Verbs */}
              <div className="regular-verb-group">
                <h3 className="regular-verb-group-title">
                  <span className="regular-verb-group-label">
                    -AR
                  </span>
                  Regular -AR Verbs (hablar - to speak)
                </h3>
                
                <div className="regular-verb-table">
                  <div className="table-header">
                    <div>Person</div>
                    <div>Ending</div>
                    <div>Example</div>
                  </div>
                  
                  <div className="table-row">
                    <div>yo</div>
                    <div>-o</div>
                    <div>hablo</div>
                  </div>
                  
                  <div className="table-row">
                    <div>tú</div>
                    <div>-as</div>
                    <div>hablas</div>
                  </div>
                  
                  <div className="table-row">
                    <div>él/ella/usted</div>
                    <div>-a</div>
                    <div>habla</div>
                  </div>
                  
                  <div className="table-row">
                    <div>nosotros</div>
                    <div>-amos</div>
                    <div>hablamos</div>
                  </div>
                  
                  <div className="table-row">
                    <div>ellos/ellas/ustedes</div>
                    <div>-an</div>
                    <div>hablan</div>
                  </div>
                </div>
              </div>

              {/* -ER Verbs */}
              <div className="regular-verb-group">
                <h3 className="regular-verb-group-title">
                  <span className="regular-verb-group-label">
                    -ER
                  </span>
                  Regular -ER Verbs (comer - to eat)
                </h3>
                
                <div className="regular-verb-table">
                  <div className="table-header">
                    <div>Person</div>
                    <div>Ending</div>
                    <div>Example</div>
                  </div>
                  
                  <div className="table-row">
                    <div>yo</div>
                    <div>-o</div>
                    <div>como</div>
                  </div>
                  
                  <div className="table-row">
                    <div>tú</div>
                    <div>-es</div>
                    <div>comes</div>
                  </div>
                  
                  <div className="table-row">
                    <div>él/ella/usted</div>
                    <div>-e</div>
                    <div>come</div>
                  </div>
                  
                  <div className="table-row">
                    <div>nosotros</div>
                    <div>-emos</div>
                    <div>comemos</div>
                  </div>
                  
                  <div className="table-row">
                    <div>ellos/ellas/ustedes</div>
                    <div>-en</div>
                    <div>comen</div>
                  </div>
                </div>
              </div>

              {/* -IR Verbs */}
              <div className="regular-verb-group">
                <h3 className="regular-verb-group-title">
                  <span className="regular-verb-group-label">
                    -IR
                  </span>
                  Regular -IR Verbs (vivir - to live)
                </h3>
                
                <div className="regular-verb-table">
                  <div className="table-header">
                    <div>Person</div>
                    <div>Ending</div>
                    <div>Example</div>
                  </div>
                  
                  <div className="table-row">
                    <div>yo</div>
                    <div>-o</div>
                    <div>vivo</div>
                  </div>
                  
                  <div className="table-row">
                    <div>tú</div>
                    <div>-es</div>
                    <div>vives</div>
                  </div>
                  
                  <div className="table-row">
                    <div>él/ella/usted</div>
                    <div>-e</div>
                    <div>vive</div>
                  </div>
                  
                  <div className="table-row">
                    <div>nosotros</div>
                    <div>-imos</div>
                    <div>vivimos</div>
                  </div>
                  
                  <div className="table-row">
                    <div>ellos/ellas/ustedes</div>
                    <div>-en</div>
                    <div>viven</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preterite Tense */}
            <div>
              <h2 className="tense-title preterite-tense">
                Preterite Tense (Simple Past)
              </h2>

              {/* -AR Verbs Preterite */}
              <div className="regular-verb-group">
                <h3 className="regular-verb-group-title">
                  <span className="regular-verb-group-label">
                    -AR
                  </span>
                  Regular -AR Verbs (hablar - to speak)
                </h3>
                
                <div className="regular-verb-table">
                  <div className="table-header">
                    <div>Person</div>
                    <div>Ending</div>
                    <div>Example</div>
                  </div>
                  
                  <div className="table-row">
                    <div>yo</div>
                    <div>-é</div>
                    <div>hablé</div>
                  </div>
                  
                  <div className="table-row">
                    <div>tú</div>
                    <div>-aste</div>
                    <div>hablaste</div>
                  </div>
                  
                  <div className="table-row">
                    <div>él/ella/usted</div>
                    <div>-ó</div>
                    <div>habló</div>
                  </div>
                  
                  <div className="table-row">
                    <div>nosotros</div>
                    <div>-amos</div>
                    <div>hablamos</div>
                  </div>
                  
                  <div className="table-row">
                    <div>ellos/ellas/ustedes</div>
                    <div>-aron</div>
                    <div>hablaron</div>
                  </div>
                </div>
              </div>

              {/* -ER/-IR Verbs Preterite */}
              <div className="regular-verb-group">
                <h3 className="regular-verb-group-title">
                  <span className="regular-verb-group-label">
                    -ER/-IR
                  </span>
                  Regular -ER/-IR Verbs (comer/vivir)
                </h3>
                
                <div className="regular-verb-table four-columns">
                  <div className="table-header">
                    <div>Person</div>
                    <div>Ending</div>
                    <div>Example (-ER)</div>
                    <div>Example (-IR)</div>
                  </div>
                  
                  <div className="table-row">
                    <div>yo</div>
                    <div>-í</div>
                    <div>comí</div>
                    <div>viví</div>
                  </div>
                  
                  <div className="table-row">
                    <div>tú</div>
                    <div>-iste</div>
                    <div>comiste</div>
                    <div>viviste</div>
                  </div>
                  
                  <div className="table-row">
                    <div>él/ella/usted</div>
                    <div>-ió</div>
                    <div>comió</div>
                    <div>vivió</div>
                  </div>
                  
                  <div className="table-row">
                    <div>nosotros</div>
                    <div>-imos</div>
                    <div>comimos</div>
                    <div>vivimos</div>
                  </div>
                  
                  <div className="table-row">
                    <div>ellos/ellas/ustedes</div>
                    <div>-ieron</div>
                    <div>comieron</div>
                    <div>vivieron</div>
                  </div>
                </div>
              </div>

              {/* Key Differences Note */}
              <div className="key-differences-note">
                <h4>
                  Key Differences to Remember:
                </h4>
                <ul>
                  <li><strong>Present:</strong> -ER and -IR share endings except nosotros (-emos vs -imos)</li>
                  <li><strong>Preterite:</strong> -ER and -IR have identical endings</li>
                  <li><strong>Nosotros:</strong> -AR and -ER/-IR share -amos in preterite</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConjugationReference;
