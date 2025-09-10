import React, { useState, useRef, useEffect } from 'react';
import type { Conjugation } from '../data/conjugationData';
import ConjugationReferenceModal from './ConjugationReferenceModal';

interface FlashcardProps {
  conjugation: Conjugation;
  onNext: () => void;
  onMastered: (id: string) => void;
  onPracticeResult: (id: string, correct: boolean) => void;
  isLast: boolean;
  allConjugations: Conjugation[];
}

const Flashcard: React.FC<FlashcardProps> = ({ 
  conjugation, 
  onNext, 
  onMastered, 
  onPracticeResult,
  isLast,
  allConjugations 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showVerb, setShowVerb] = useState(false);
  const [showReferenceModal, setShowReferenceModal] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus the input field when component mounts (new card)
  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  }, []); // Only run on mount since each card gets a new component instance

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAnswerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (hasSubmitted) {
      return;
    }
    
    setHasSubmitted(true);
    const correct = userAnswer.toLowerCase().trim() === conjugation.spanish.toLowerCase().trim();
    setIsCorrect(correct);
    setShowResult(true);
    
    // Track practice result
    onPracticeResult(conjugation.id, correct);
    
    // Automatically flip the card to show the answer
    setIsFlipped(true);
    
    // Focus the container so Enter key can advance to next card
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.focus();
      }
    }, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // If showing result and Enter is pressed, move to next card
    if (showResult && e.key === 'Enter') {
      e.preventDefault();
      handleNext();
    }
    
    // Handle accent character shortcuts (only when not showing result)
    if (!showResult && !e.ctrlKey && !e.metaKey) {
      switch (e.key) {
        case '1':
          e.preventDefault();
          setUserAnswer(prev => prev + 'á');
          break;
        case '2':
          e.preventDefault();
          setUserAnswer(prev => prev + 'é');
          break;
        case '3':
          e.preventDefault();
          setUserAnswer(prev => prev + 'í');
          break;
        case '4':
          e.preventDefault();
          setUserAnswer(prev => prev + 'ó');
          break;
        case '5':
          e.preventDefault();
          setUserAnswer(prev => prev + 'ú');
          break;
        case '6':
          e.preventDefault();
          setUserAnswer(prev => prev + 'ñ');
          break;
        case '7':
          e.preventDefault();
          setUserAnswer(prev => prev + 'ü');
          break;
        case '8':
          e.preventDefault();
          setUserAnswer(prev => prev + '¿');
          break;
        case '9':
          e.preventDefault();
          setUserAnswer(prev => prev + '¡');
          break;
      }
    }
  };

  const handleNext = () => {
    // Reset all state for the next card
    setIsFlipped(false);
    setShowResult(false);
    setUserAnswer('');
    setIsCorrect(false);
    setHasSubmitted(false); // Reset submission flag
    onNext();
  };

  const handleMastered = () => {
    onMastered(conjugation.id);
  };

  const addAccentCharacter = (character: string) => {
    setUserAnswer(prev => {
      const newValue = prev + character;
      // Refocus the input field and set cursor to end after clicking accent button
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.setSelectionRange(newValue.length, newValue.length);
        }
      }, 0);
      return newValue;
    });
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
    <div ref={containerRef} className="flashcard-container" onKeyDown={handleKeyDown} tabIndex={0}>
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
          <button 
            onClick={() => setShowReferenceModal(true)}
            className="reference-button-compact"
            type="button"
            title="View conjugation reference"
          >
            📚
          </button>
        </div>
        
        <div className="verb-root">
          <strong>Verb:</strong> {showVerb ? conjugation.verb : '***'}
          <button
            onClick={() => setShowVerb(!showVerb)}
            className="verb-toggle"
            title={showVerb ? "Hide verb" : "Show verb"}
            type="button"
          >
            {showVerb ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
      </div>

      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
        style={{ 
          border: showResult ? '3px solid #3b82f6' : 'none',
          cursor: showResult ? 'pointer' : 'default'
        }}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <h2 className="flashcard-prompt">{conjugation.english}</h2>
            <p className="flashcard-hint">
              {showResult ? 'Click card to flip back to question' : 'Enter answer to reveal Spanish'}
            </p>
          </div>
          
          <div className="flashcard-back">
            <h2 className="flashcard-answer">{conjugation.spanish}</h2>
            <p className="flashcard-translation">{conjugation.english}</p>
          </div>
        </div>
      </div>

      {!isFlipped && (
        <form onSubmit={handleAnswerSubmit} className="answer-form">
          <div className="accent-keyboard">
            <button
              type="button"
              onClick={() => addAccentCharacter('á')}
              className="accent-button"
              title="á (Press 1)"
            >
              á
            </button>
            <button
              type="button"
              onClick={() => addAccentCharacter('é')}
              className="accent-button"
              title="é (Press 2)"
            >
              é
            </button>
            <button
              type="button"
              onClick={() => addAccentCharacter('í')}
              className="accent-button"
              title="í (Press 3)"
            >
              í
            </button>
            <button
              type="button"
              onClick={() => addAccentCharacter('ó')}
              className="accent-button"
              title="ó (Press 4)"
            >
              ó
            </button>
            <button
              type="button"
              onClick={() => addAccentCharacter('ú')}
              className="accent-button"
              title="ú (Press 5)"
            >
              ú
            </button>
            <button
              type="button"
              onClick={() => addAccentCharacter('ñ')}
              className="accent-button"
              title="ñ (Press 6)"
            >
              ñ
            </button>
            <button
              type="button"
              onClick={() => addAccentCharacter('ü')}
              className="accent-button"
              title="ü (Press 7)"
            >
              ü
            </button>
            <button
              type="button"
              onClick={() => addAccentCharacter('¿')}
              className="accent-button"
              title="¿ (Press 8)"
            >
              ¿
            </button>
            <button
              type="button"
              onClick={() => addAccentCharacter('¡')}
              className="accent-button"
              title="¡ (Press 9)"
            >
              ¡
            </button>
          </div>
          <input
            ref={inputRef}
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
          <div className="result-comparison">
            <div className="user-answer">
              <strong>Your answer:</strong> {userAnswer}
            </div>
            <div className="correct-answer">
              <strong>Correct answer:</strong> {conjugation.spanish}
            </div>
          </div>
          <div className="result-feedback">
            {isCorrect ? '¡Correcto! 🎉' : '¡Incorrecto!'}
          </div>
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
          disabled={!showResult}
        >
          {isLast ? 'Finish Practice' : 'Next Card →'}
        </button>
      </div>

      <div className="conjugation-stats">
        <small>
          <strong>This Conjugation:</strong> Practiced {conjugation.practiceCount} time{conjugation.practiceCount !== 1 ? 's' : ''} | 
          Accuracy: {conjugation.practiceCount > 0 ? Math.round((conjugation.correctCount / conjugation.practiceCount) * 100) : 0}%
        </small>
      </div>

      <ConjugationReferenceModal
        isOpen={showReferenceModal}
        onClose={() => setShowReferenceModal(false)}
        allConjugations={allConjugations}
        currentConjugation={conjugation}
      />
    </div>
  );
};

export default Flashcard;
