import { useState } from 'react'
import VerbCard from './components/VerbCard'
import Flashcard from './components/Flashcard'
import './App.css'

function App() {
  const [selectedVerb, setSelectedVerb] = useState<string | null>(null)
  const [filterType, setFilterType] = useState<'all' | 'regular' | 'irregular'>('all')
  const [filterMastered, setFilterMastered] = useState<'all' | 'mastered' | 'not-mastered'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isPracticeMode, setIsPracticeMode] = useState(false)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const [verbs, setVerbs] = useState<Array<{
    id: string;
    spanish: string;
    english: string;
    type: 'regular' | 'irregular';
    mastered: boolean;
  }>>([
    { id: 'hablar', spanish: 'hablar', english: 'to speak', type: 'regular', mastered: false },
    { id: 'comer', spanish: 'comer', english: 'to eat', type: 'regular', mastered: false },
    { id: 'vivir', spanish: 'vivir', english: 'to live', type: 'regular', mastered: false },
    { id: 'tener', spanish: 'tener', english: 'to have', type: 'irregular', mastered: false },
    { id: 'estar', spanish: 'estar', english: 'to be', type: 'irregular', mastered: false }
  ])

  const toggleMastered = (verbId: string) => {
    setVerbs(prevVerbs => 
      prevVerbs.map(verb => 
        verb.id === verbId 
          ? { ...verb, mastered: !verb.mastered }
          : verb
      )
    );
  };

  const resetAllProgress = () => {
    setVerbs(prevVerbs => 
      prevVerbs.map(verb => ({ ...verb, mastered: false }))
    );
  };

  const startPracticeMode = () => {
    setIsPracticeMode(true);
    setCurrentCardIndex(0);
  };

  const exitPracticeMode = () => {
    setIsPracticeMode(false);
    setCurrentCardIndex(0);
  };

  const nextCard = () => {
    if (currentCardIndex < filteredVerbs.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handleFlashcardMastered = (verbId: string) => {
    toggleMastered(verbId);
  };

  // Filter and search logic
  const filteredVerbs = verbs.filter(verb => {
    // Type filter
    if (filterType !== 'all' && verb.type !== filterType) return false;
    
    // Mastered filter
    if (filterMastered === 'mastered' && !verb.mastered) return false;
    if (filterMastered === 'not-mastered' && verb.mastered) return false;
    
    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return verb.spanish.toLowerCase().includes(searchLower) || 
             verb.english.toLowerCase().includes(searchLower);
    }
    
    return true;
  });

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="title">Spanish Verb Master</h1>
            <p className="subtitle">Learn Spanish verbs with ease</p>
          </div>
          <div className="header-right">
            {!isPracticeMode ? (
              <button 
                className="practice-mode-btn"
                onClick={startPracticeMode}
              >
                🎯 Practice Mode
              </button>
            ) : (
              <button 
                className="exit-practice-btn"
                onClick={exitPracticeMode}
              >
                📚 Exit Practice
              </button>
            )}
          </div>
        </div>
      </header>
      
      <main className="main">
        {isPracticeMode ? (
          /* Practice Mode - Flashcard */
          <div className="practice-mode">
            {filteredVerbs.length > 0 ? (
              <Flashcard
                verb={filteredVerbs[currentCardIndex]}
                onMastered={handleFlashcardMastered}
                onNext={nextCard}
                isLastCard={currentCardIndex === filteredVerbs.length - 1}
              />
            ) : (
              <div className="no-verbs-message">
                <h2>No verbs to practice!</h2>
                <p>Try adjusting your filters or add more verbs.</p>
                <button 
                  className="exit-practice-btn"
                  onClick={exitPracticeMode}
                >
                  Back to Browse
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Browse Mode - Original Content */
          <>
            {/* Filter Controls */}
            <div className="filter-controls">
          <div className="search-section">
            <input
              type="text"
              placeholder="Search verbs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-buttons">
            <div className="filter-group">
              <span className="filter-label">Type:</span>
              <button 
                className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
                onClick={() => setFilterType('all')}
              >
                All
              </button>
              <button 
                className={`filter-btn ${filterType === 'regular' ? 'active' : ''}`}
                onClick={() => setFilterType('regular')}
              >
                Regular
              </button>
              <button 
                className={`filter-btn ${filterType === 'irregular' ? 'active' : ''}`}
                onClick={() => setFilterType('irregular')}
              >
                Irregular
              </button>
            </div>
            
            <div className="filter-group">
              <span className="filter-label">Status:</span>
              <button 
                className={`filter-btn ${filterMastered === 'all' ? 'active' : ''}`}
                onClick={() => setFilterMastered('all')}
              >
                All
              </button>
              <button 
                className={`filter-btn ${filterMastered === 'mastered' ? 'active' : ''}`}
                onClick={() => setFilterMastered('mastered')}
              >
                Mastered
              </button>
              <button 
                className={`filter-btn ${filterMastered === 'not-mastered' ? 'active' : ''}`}
                onClick={() => setFilterMastered('not-mastered')}
              >
                Not Mastered
              </button>
            </div>
          </div>
          
          <button 
            className="reset-button"
            onClick={resetAllProgress}
            title="Reset all progress"
          >
            Reset Progress
          </button>
        </div>
        
        <div className="verb-grid">
          {filteredVerbs.map((verb) => (
            <VerbCard
              key={verb.id}
              verb={verb}
              isSelected={selectedVerb === verb.id}
              onSelect={setSelectedVerb}
              onToggleMastered={toggleMastered}
            />
          ))}
        </div>
        
        <div className="progress-section">
          <h3>Progress</h3>
          <div className="progress-stats">
            <div className="stat">
              <span className="stat-label">Total Verbs:</span>
              <span className="stat-value">{verbs.length}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Mastered:</span>
              <span className="stat-value">{verbs.filter(v => v.mastered).length}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Progress:</span>
              <span className="stat-value">
                {Math.round((verbs.filter(v => v.mastered).length / verbs.length) * 100)}%
              </span>
            </div>
            <div className="stat">
              <span className="stat-label">Showing:</span>
              <span className="stat-value">{filteredVerbs.length}</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ 
                  width: `${Math.round((verbs.filter(v => v.mastered).length / verbs.length) * 100)}%` 
                }}
              />
            </div>
            <span className="progress-text">
              {verbs.filter(v => v.mastered).length} of {verbs.length} verbs mastered
            </span>
          </div>
        </div>
        
        {selectedVerb && (
          <div className="selected-info">
            <h2>Selected: {selectedVerb}</h2>
            <button 
              className="clear-button"
              onClick={() => setSelectedVerb(null)}
            >
              Clear Selection
            </button>
          </div>
        )}
          </>
        )}
      </main>
    </div>
  );
}

export default App
