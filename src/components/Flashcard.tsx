import React, { useState } from 'react';

interface Verb {
  id: string;
  spanish: string;
  english: string;
  type: 'regular' | 'irregular';
  mastered: boolean;
}

interface FlashcardProps {
  verb: Verb;
  onMastered: (verbId: string) => void;
  onNext: () => void;
  isLastCard: boolean;
}

const Flashcard: React.FC<FlashcardProps> = ({ verb, onMastered, onNext, isLastCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!showAnswer) {
      setShowAnswer(true);
    }
  };

  const handleMastered = () => {
    onMastered(verb.id);
    if (!isLastCard) {
      onNext();
    }
  };

  const handleNext = () => {
    onNext();
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="flashcard-container">
      {/* Flashcard */}
      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flashcard-inner">
          {/* Front side - English */}
          <div className="flashcard-front">
            <div className="flashcard-content">
              <div className="flashcard-label">English</div>
              <h2 className="flashcard-question">{verb.english}</h2>
              <div className="flashcard-hint">Click to see Spanish</div>
            </div>
          </div>
          
          {/* Back side - Spanish */}
          <div className="flashcard-back">
            <div className="flashcard-content">
              <div className="flashcard-label">Spanish</div>
              <h2 className="flashcard-answer">{verb.spanish}</h2>
              <div className="verb-type-badge">{verb.type}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flashcard-actions">
        {!showAnswer && (
          <button 
            className="action-btn show-answer-btn"
            onClick={handleShowAnswer}
          >
            Show Answer
          </button>
        )}
        
        {showAnswer && (
          <>
            <button 
              className="action-btn mastered-btn"
              onClick={handleMastered}
            >
              {verb.mastered ? 'Already Mastered' : 'Mark as Mastered'}
            </button>
            
            {!isLastCard && (
              <button 
                className="action-btn next-btn"
                onClick={handleNext}
              >
                Next Card
              </button>
            )}
          </>
        )}
      </div>

      {/* Progress indicator */}
      <div className="flashcard-progress">
        <span className="progress-text">
          {verb.mastered && '⭐ '}Verb {verb.id}
        </span>
      </div>
    </div>
  );
};

export default Flashcard;
