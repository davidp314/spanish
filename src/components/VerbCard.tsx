import React from 'react';
import type { Conjugation } from '../data/conjugationData';

interface VerbCardProps {
  conjugation: Conjugation;
  onToggleMastery: (id: string) => void;
}

const VerbCard: React.FC<VerbCardProps> = ({ conjugation, onToggleMastery }) => {
  const handleMasteryToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleMastery(conjugation.id);
  };

  const getTenseColor = (tense: string) => {
    return tense === 'present' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800';
  };

  const getPersonColor = (person: string) => {
    const personColors: { [key: string]: string } = {
      'yo': 'bg-pink-100 text-pink-800',
      'tú': 'bg-indigo-100 text-indigo-800',
      'él/ella/usted': 'bg-teal-100 text-teal-800',
      'nosotros': 'bg-orange-100 text-orange-800',
      'ellos/ellas/ustedes': 'bg-rose-100 text-rose-800'
    };
    return personColors[person] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div 
      className={`verb-card ${conjugation.mastered ? 'mastered' : ''}`}
    >
      <div className="verb-header">
        <div className="verb-info">
          <h3 className="verb-spanish">{conjugation.spanish}</h3>
          <p className="verb-english">{conjugation.english}</p>
        </div>
        <button
          className={`mastery-button ${conjugation.mastered ? 'mastered' : ''}`}
          onClick={handleMasteryToggle}
          title={conjugation.mastered ? 'Mark as not mastered' : 'Mark as mastered'}
        >
          {conjugation.mastered ? '⭐' : '☆'}
        </button>
      </div>
      
      <div className="verb-details">
        <div className="verb-root">
          <strong>Verb:</strong> {conjugation.verb}
        </div>
        
        <div className="conjugation-badges">
          <span className={`badge ${conjugation.type === 'regular' ? 'regular' : 'irregular'}`}>
            {conjugation.type === 'regular' ? `Regular -${conjugation.conjugation}` : 'Irregular'}
          </span>
          
          <span className={`badge ${getTenseColor(conjugation.tense)}`}>
            {conjugation.tense === 'present' ? 'Present' : 'Preterite'}
          </span>
          
          <span className={`badge ${getPersonColor(conjugation.person)}`}>
            {conjugation.person}
          </span>
        </div>
        
        <div className="practice-stats">
          <small>
            Practice: {conjugation.practiceCount} | 
            Accuracy: {conjugation.practiceCount > 0 ? Math.round((conjugation.correctCount / conjugation.practiceCount) * 100) : 0}%
          </small>
        </div>
      </div>
    </div>
  );
};

export default VerbCard;
