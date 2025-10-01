import React, { useState, useEffect } from 'react';
import type { Conjugation } from '../data/conjugationData';

interface ConjugationReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  allConjugations: Conjugation[];
  currentConjugation: Conjugation;
}

const ConjugationReferenceModal: React.FC<ConjugationReferenceModalProps> = ({
  isOpen,
  onClose,
  allConjugations,
  currentConjugation
}) => {
  const [activeTab, setActiveTab] = useState<'present' | 'preterite' | 'imperfect'>('present');

  useEffect(() => {
    setActiveTab(currentConjugation.tense);
  }, [currentConjugation.tense]);

  useEffect(() => {
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const verbConjugations = allConjugations.filter(c => c.verb === currentConjugation.verb);
  const presentConjugations = verbConjugations.filter(c => c.tense === 'present');
  const preteriteConjugations = verbConjugations.filter(c => c.tense === 'preterite');
  const imperfectConjugations = verbConjugations.filter(c => c.tense === 'imperfect');

  const activeConjugations = activeTab === 'present'
    ? presentConjugations
    : activeTab === 'preterite'
      ? preteriteConjugations
      : imperfectConjugations;

  const persons = ['yo', 'tú', 'él/ella/usted', 'nosotros', 'ellos/ellas/ustedes'];

  const getVerbMeaning = (verb: string) => {
    const verbMeanings: { [key: string]: string } = {
      'hablar': 'to speak',
      'caminar': 'to walk',
      'comer': 'to eat',
      'beber': 'to drink',
      'vivir': 'to live',
      'escribir': 'to write',
      'leer': 'to read',
      'dejar': 'to leave',
      'estar': 'to be',
      'tener': 'to have',
      'ir': 'to go',
      'poder': 'to be able',
      'poner': 'to put',
      'querer': 'to want',
      'decir': 'to say',
      'mentir': 'to lie'
    };
    return verbMeanings[verb] || '';
  };

  const isCurrentConjugation = (conjugation: Conjugation) => {
    return conjugation.id === currentConjugation.id;
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content conjugation-ref-modal">
        <div className="modal-header">
          <h2>{currentConjugation.verb} ({getVerbMeaning(currentConjugation.verb)})</h2>
          <p>{currentConjugation.type === 'regular' 
            ? `Regular -${currentConjugation.conjugation} verb` 
            : 'Irregular verb'}</p>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'present' ? 'active' : ''}`}
              onClick={() => setActiveTab('present')}
            >
              Present Tense
            </button>
            <button
              className={`tab ${activeTab === 'preterite' ? 'active' : ''}`}
              onClick={() => setActiveTab('preterite')}
            >
              Preterite Tense
            </button>
            <button
              className={`tab ${activeTab === 'imperfect' ? 'active' : ''}`}
              onClick={() => setActiveTab('imperfect')}
            >
              Imperfect Tense
            </button>
          </div>

          <table className="conjugation-table">
            <thead>
              <tr>
                <th>Person</th>
                <th>Conjugation</th>
              </tr>
            </thead>
            <tbody>
              {persons.map((person) => {
                const conjugation = activeConjugations.find(c => c.person === person);
                if (!conjugation) return null;

                const isCurrent = isCurrentConjugation(conjugation);
                
                return (
                  <tr key={`${person}-${activeTab}`} className={isCurrent ? 'current-row' : ''}>
                    <td>{person}</td>
                    <td>
                      {conjugation.spanish}
                      {isCurrent && <span className="current-marker"> →</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConjugationReferenceModal;