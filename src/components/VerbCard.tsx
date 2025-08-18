import React from 'react';

interface Verb {
  id: string;
  spanish: string;
  english: string;
  type: 'regular' | 'irregular';
  mastered: boolean;
}

interface VerbCardProps {
  verb: Verb;
  isSelected: boolean;
  onSelect: (verbId: string) => void;
  onToggleMastered: (verbId: string) => void;
}

const VerbCard: React.FC<VerbCardProps> = ({ verb, isSelected, onSelect, onToggleMastered }) => {
  const handleCardClick = () => {
    onSelect(verb.id);
  };

  const handleMasteryToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card selection when clicking button
    onToggleMastered(verb.id);
  };

  return (
    <div 
      className={`verb-card ${isSelected ? 'selected' : ''} ${verb.mastered ? 'mastered' : ''}`}
      onClick={handleCardClick}
    >
      <div className="verb-header">
        <h3 className="verb-spanish">{verb.spanish}</h3>
        <button 
          className={`mastery-button ${verb.mastered ? 'mastered' : ''}`}
          onClick={handleMasteryToggle}
          title={verb.mastered ? 'Mark as not mastered' : 'Mark as mastered'}
        >
          {verb.mastered ? '⭐' : '☆'}
        </button>
      </div>
      <p className="verb-english">{verb.english}</p>
      <span className={`verb-type ${verb.type}`}>{verb.type}</span>
      {verb.mastered && (
        <div className="mastered-indicator">Mastered!</div>
      )}
    </div>
  );
};

export default VerbCard;
