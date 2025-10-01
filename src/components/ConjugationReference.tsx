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

  React.useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

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
  }, [isOpen, onClose]);

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
              <p>Regular verb patterns for present, preterite, and imperfect tenses</p>
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
                    <div className="person-col">Person</div>
                    <div className="ending-col">Ending</div>
                    <div className="example-col">Example</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">yo</div>
                    <div className="ending-col">-o</div>
                    <div className="example-col">hablo</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">tú</div>
                    <div className="ending-col">-as</div>
                    <div className="example-col">hablas</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">él/ella/usted</div>
                    <div className="ending-col">-a</div>
                    <div className="example-col">habla</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">nosotros</div>
                    <div className="ending-col">-amos</div>
                    <div className="example-col">hablamos</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">ellos/ellas/ustedes</div>
                    <div className="ending-col">-an</div>
                    <div className="example-col">hablan</div>
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
                    <div className="person-col">Person</div>
                    <div className="ending-col">Ending</div>
                    <div className="example-col">Example</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">yo</div>
                    <div className="ending-col">-o</div>
                    <div className="example-col">como</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">tú</div>
                    <div className="ending-col">-es</div>
                    <div className="example-col">comes</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">él/ella/usted</div>
                    <div className="ending-col">-e</div>
                    <div className="example-col">come</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">nosotros</div>
                    <div className="ending-col">-emos</div>
                    <div className="example-col">comemos</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">ellos/ellas/ustedes</div>
                    <div className="ending-col">-en</div>
                    <div className="example-col">comen</div>
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
                    <div className="person-col">Person</div>
                    <div className="ending-col">Ending</div>
                    <div className="example-col">Example</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">yo</div>
                    <div className="ending-col">-o</div>
                    <div className="example-col">vivo</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">tú</div>
                    <div className="ending-col">-es</div>
                    <div className="example-col">vives</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">él/ella/usted</div>
                    <div className="ending-col">-e</div>
                    <div className="example-col">vive</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">nosotros</div>
                    <div className="ending-col">-imos</div>
                    <div className="example-col">vivimos</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">ellos/ellas/ustedes</div>
                    <div className="ending-col">-en</div>
                    <div className="example-col">viven</div>
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
                    <div className="person-col">Person</div>
                    <div className="ending-col">Ending</div>
                    <div className="example-col">Example</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">yo</div>
                    <div className="ending-col">-é</div>
                    <div className="example-col">hablé</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">tú</div>
                    <div className="ending-col">-aste</div>
                    <div className="example-col">hablaste</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">él/ella/usted</div>
                    <div className="ending-col">-ó</div>
                    <div className="example-col">habló</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">nosotros</div>
                    <div className="ending-col">-amos</div>
                    <div className="example-col">hablamos</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">ellos/ellas/ustedes</div>
                    <div className="ending-col">-aron</div>
                    <div className="example-col">hablaron</div>
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
                    <div className="person-col">Person</div>
                    <div className="ending-col">Ending</div>
                    <div className="example-col">Example (-ER)</div>
                    <div className="example-col">Example (-IR)</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">yo</div>
                    <div className="ending-col">-í</div>
                    <div className="example-col">comí</div>
                    <div className="example-col">viví</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">tú</div>
                    <div className="ending-col">-iste</div>
                    <div className="example-col">comiste</div>
                    <div className="example-col">viviste</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">él/ella/usted</div>
                    <div className="ending-col">-ió</div>
                    <div className="example-col">comió</div>
                    <div className="example-col">vivió</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">nosotros</div>
                    <div className="ending-col">-imos</div>
                    <div className="example-col">comimos</div>
                    <div className="example-col">vivimos</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="person-col">ellos/ellas/ustedes</div>
                    <div className="ending-col">-ieron</div>
                    <div className="example-col">comieron</div>
                    <div className="example-col">vivieron</div>
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

            {/* Imperfect Tense */}
            <div>
              <h2 className="tense-title imperfect-tense">
                Imperfect Tense (Past Continuous / Used to)
              </h2>

              {/* -AR Verbs Imperfect */}
              <div className="regular-verb-group">
                <h3 className="regular-verb-group-title">
                  <span className="regular-verb-group-label">
                    -AR
                  </span>
                  Regular -AR Verbs (hablar - to speak)
                </h3>

                <div className="regular-verb-table">
                  <div className="table-header">
                    <div className="person-col">Person</div>
                    <div className="ending-col">Ending</div>
                    <div className="example-col">Example</div>
                  </div>

                  <div className="table-row">
                    <div className="person-col">yo</div>
                    <div className="ending-col">-aba</div>
                    <div className="example-col">hablaba</div>
                  </div>

                  <div className="table-row">
                    <div className="person-col">tú</div>
                    <div className="ending-col">-abas</div>
                    <div className="example-col">hablabas</div>
                  </div>

                  <div className="table-row">
                    <div className="person-col">él/ella/usted</div>
                    <div className="ending-col">-aba</div>
                    <div className="example-col">hablaba</div>
                  </div>

                  <div className="table-row">
                    <div className="person-col">nosotros</div>
                    <div className="ending-col">-ábamos</div>
                    <div className="example-col">hablábamos</div>
                  </div>

                  <div className="table-row">
                    <div className="person-col">ellos/ellas/ustedes</div>
                    <div className="ending-col">-aban</div>
                    <div className="example-col">hablaban</div>
                  </div>
                </div>
              </div>

              {/* -ER/-IR Verbs Imperfect */}
              <div className="regular-verb-group">
                <h3 className="regular-verb-group-title">
                  <span className="regular-verb-group-label">
                    -ER/-IR
                  </span>
                  Regular -ER/-IR Verbs (comer/vivir)
                </h3>

                <div className="regular-verb-table four-columns">
                  <div className="table-header">
                    <div className="person-col">Person</div>
                    <div className="ending-col">Ending</div>
                    <div className="example-col">Example (-ER)</div>
                    <div className="example-col">Example (-IR)</div>
                  </div>

                  <div className="table-row">
                    <div className="person-col">yo</div>
                    <div className="ending-col">-ía</div>
                    <div className="example-col">comía</div>
                    <div className="example-col">vivía</div>
                  </div>

                  <div className="table-row">
                    <div className="person-col">tú</div>
                    <div className="ending-col">-ías</div>
                    <div className="example-col">comías</div>
                    <div className="example-col">vivías</div>
                  </div>

                  <div className="table-row">
                    <div className="person-col">él/ella/usted</div>
                    <div className="ending-col">-ía</div>
                    <div className="example-col">comía</div>
                    <div className="example-col">vivía</div>
                  </div>

                  <div className="table-row">
                    <div className="person-col">nosotros</div>
                    <div className="ending-col">-íamos</div>
                    <div className="example-col">comíamos</div>
                    <div className="example-col">vivíamos</div>
                  </div>

                  <div className="table-row">
                    <div className="person-col">ellos/ellas/ustedes</div>
                    <div className="ending-col">-ían</div>
                    <div className="example-col">comían</div>
                    <div className="example-col">vivían</div>
                  </div>
                </div>
              </div>

              {/* Imperfect Notes */}
              <div className="key-differences-note">
                <h4>
                  Imperfect Tense Notes:
                </h4>
                <ul>
                  <li><strong>Most regular tense:</strong> Very few irregular verbs (ser, ir, ver)</li>
                  <li><strong>-ER/-IR verbs:</strong> Share identical endings in imperfect</li>
                  <li><strong>Usage:</strong> Ongoing past actions, habitual actions, descriptions</li>
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
