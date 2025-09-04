import { useState, useEffect, useCallback } from 'react';

interface TranslationQuizProps {
  verb: string;
  english: string;
  spanish: string;
  direction: 'es-en' | 'en-es';
  onNext: () => void;
  onPracticeResult: (verb: string, correct: boolean) => void;
}

const TranslationQuiz: React.FC<TranslationQuizProps> = ({
  verb,
  english,
  spanish,
  direction,
  onNext,
  onPracticeResult
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleShowAnswer = useCallback(() => {
    setShowAnswer(true);
  }, []);

  const handleNext = useCallback(() => {
    onNext();
    // Reset for next card
    setShowAnswer(false);
    setAnswered(false);
  }, [onNext]);

  const handleResult = useCallback((correct: boolean) => {
    onPracticeResult(verb, correct);
    setAnswered(true);
    
    // Auto-advance to next card after a short delay
    setTimeout(() => {
      handleNext();
    }, 800);
  }, [onPracticeResult, verb, handleNext]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only activate shortcuts when not typing in an input field
      const target = event.target as HTMLElement;
      const isTyping = target.tagName === 'INPUT' || 
                      target.tagName === 'TEXTAREA' || 
                      target.contentEditable === 'true';
      
      if (isTyping) return;
      
      const key = event.key.toLowerCase();
      
      if (event.key === 'Enter' || key === 'j') {
        event.preventDefault();
        
        if (!showAnswer) {
          // Show answer if not yet shown
          handleShowAnswer();
        } else if (!answered && key === 'j') {
          // J marks as correct when answer is shown but not yet assessed
          handleResult(true);
        }
        // No need to handle "already answered" case since we auto-advance
      } else if (showAnswer && !answered && key === 'f') {
        // Handle incorrect shortcut when answer is shown but not yet assessed
        event.preventDefault();
        handleResult(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showAnswer, answered, handleShowAnswer, handleNext]);

  const getDisplayText = () => {
    if (direction === 'es-en') {
      return showAnswer ? english : spanish;
    } else {
      return showAnswer ? spanish : english;
    }
  };

  const getPromptText = () => {
    if (direction === 'es-en') {
      return showAnswer ? 'English Translation:' : 'Translate to English:';
    } else {
      return showAnswer ? 'Spanish Translation:' : 'Translate to Spanish:';
    }
  };

  return (
    <div className="flashcard translation-quiz">
      <div className="card-content">
        <div className="card-header">
          <h2>Translation Quiz</h2>
          <div className="direction-indicator">
            {direction === 'es-en' ? '🇪🇸 → 🇬🇧' : '🇬🇧 → 🇪🇸'}
          </div>
        </div>
        
        <div className="card-body">
          <div className="prompt-text">
            {getPromptText()}
          </div>
          
          <div className="translation-text">
            {getDisplayText()}
          </div>
          
          {showAnswer && !answered && (
            <div className="self-assessment">
              <p>Did you get it right?</p>
              <div className="assessment-buttons">
                <button 
                  onClick={() => handleResult(false)}
                  className="incorrect-button"
                  title="Press F for Incorrect"
                >
                  ❌ Incorrect <span className="keyboard-hint">(F)</span>
                </button>
                <button 
                  onClick={() => handleResult(true)}
                  className="correct-button"
                  title="Press J for Correct"
                >
                  ✅ Correct <span className="keyboard-hint">(J)</span>
                </button>
              </div>
            </div>
          )}
          
          {answered && (
            <div className="auto-advance-indicator">
              <p>Moving to next card...</p>
            </div>
          )}
        </div>
        
        {!showAnswer && (
          <div className="card-actions">
            <button 
              onClick={handleShowAnswer}
              className="show-answer-button"
              title="Press Enter or J to show answer"
            >
              👁️ Show Answer <span className="keyboard-hint">(Enter/J)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranslationQuiz;