import React, { useState } from 'react';
import type { Conjugation } from '../data/conjugationData';

interface FlashcardProps {
  conjugation: Conjugation;
  onNext: () => void;
  onMastered: (id: string) => void;
  onPracticeResult: (id: string, correct: boolean) => void;
  isLast: boolean;
}

const Flashcard: React.FC<FlashcardProps> = ({ 
  conjugation, 
  onNext, 
  onMastered, 
  onPracticeResult,
  isLast 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAnswerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = userAnswer.toLowerCase().trim() === conjugation.spanish.toLowerCase().trim();
    setIsCorrect(correct);
    setShowResult(true);
    
    // Track practice result
    onPracticeResult(conjugation.id, correct);
    
    // Auto-flip after showing result
    setTimeout(() => {
      setIsFlipped(true);
    }, 500);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setShowResult(false);
    setUserAnswer('');
    onNext();
  };

  const handleMastered = () => {
    onMastered(conjugation.id);
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
    <div className="flashcard-container">
      <div className="flashcard-info">
        <div className="conjugation-badges">
          <span className={`badge ${conjugation.type === 'regular' ? 'regular' : 'irregular'}`}>
            {conjugation.type === 'regular' ? `Regular -${conjugation.conjugation}` : 'Irregular'}
          </span>
          <span className={`badge ${conjugation.tense === 'present' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
            {conjugation.tense === 'present' ? 'Present' : 'Preterite'}
          </span>
          <span className={`badge ${getPersonColor(conjugation.person)}`}>
            {conjugation.person}
          </span>
        </div>
        
        <div className="verb-root">
          <strong>Verb:</strong> {conjugation.verb}
        </div>
      </div>

      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <h2 className="flashcard-prompt">{conjugation.english}</h2>
            <p className="flashcard-hint">Click to reveal answer</p>
          </div>
          
          <div className="flashcard-back">
            <h2 className="flashcard-answer">{conjugation.spanish}</h2>
            <p className="flashcard-translation">{conjugation.english}</p>
          </div>
        </div>
      </div>

      {!isFlipped && (
        <form onSubmit={handleAnswerSubmit} className="answer-form">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer in Spanish..."
            className="answer-input"
            autoFocus
          />
          <button type="submit" className="submit-button">
            Check Answer
          </button>
        </form>
      )}

      {showResult && (
        <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? '¡Correcto! 🎉' : `¡Incorrecto! The answer is: ${conjugation.spanish}`}
        </div>
      )}

      <div className="flashcard-actions">
        <button 
          onClick={handleMastered}
          className={`mastery-button ${conjugation.mastered ? 'mastered' : ''}`}
        >
          {conjugation.mastered ? '⭐ Mastered' : '☆ Mark as Mastered'}
        </button>
        
        <button 
          onClick={handleNext}
          className="next-button"
          disabled={!isFlipped}
        >
          {isLast ? 'Finish Practice' : 'Next Card →'}
        </button>
      </div>

      <div className="practice-stats">
        <small>
          Practice Count: {conjugation.practiceCount} | 
          Accuracy: {conjugation.practiceCount > 0 ? Math.round((conjugation.correctCount / conjugation.practiceCount) * 100) : 0}%
        </small>
      </div>
    </div>
  );
};

export default Flashcard;
