import { useState, useEffect } from 'react';
import VerbCard from './components/VerbCard';
import Flashcard from './components/Flashcard';
import ConjugationReference from './components/ConjugationReference';
import type { Conjugation } from './data/conjugationData';
import { allConjugations, verbSets, shouldPractice } from './data/conjugationData';
import './App.css';

function App() {
  // Load state from localStorage or use defaults
  const loadStateFromStorage = () => {
    try {
      const savedState = localStorage.getItem('spanishConjugationsState');
      if (savedState) {
        const parsed = JSON.parse(savedState);
        return {
          conjugations: parsed.conjugations || allConjugations.map(c => ({ ...c })),
          currentIndex: parsed.currentIndex || 0,
          isPracticeMode: parsed.isPracticeMode || false,
          selectedVerbSet: parsed.selectedVerbSet || 'beginner',
          lastUpdated: parsed.lastUpdated || Date.now()
        };
      }
    } catch (error) {
      console.log('No saved state found or error loading state, using defaults');
    }
    return {
      conjugations: allConjugations.map(c => ({ ...c })),
      currentIndex: 0,
      isPracticeMode: false,
      selectedVerbSet: 'beginner',
      lastUpdated: Date.now()
    };
  };

  const initialState = loadStateFromStorage();
  
  const [conjugations, setConjugations] = useState<Conjugation[]>(initialState.conjugations);
  const [currentIndex, setCurrentIndex] = useState(initialState.currentIndex);
  const [isPracticeMode, setIsPracticeMode] = useState(initialState.isPracticeMode);
  const [selectedVerbSet, setSelectedVerbSet] = useState(initialState.selectedVerbSet);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'regular' | 'irregular'>('all');
  const [tenseFilter, setTenseFilter] = useState<'all' | 'present' | 'preterite'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [masteryFilter, setMasteryFilter] = useState<'all' | 'mastered' | 'not-mastered'>('all');
  const [showReference, setShowReference] = useState(false);
  const [practiceSessionConjugations, setPracticeSessionConjugations] = useState<Conjugation[]>([]);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Save state to localStorage whenever important state changes
  useEffect(() => {
    const stateToSave = {
      conjugations,
      currentIndex,
      isPracticeMode,
      selectedVerbSet,
      lastUpdated: Date.now()
    };
    localStorage.setItem('spanishConjugationsState', JSON.stringify(stateToSave));
  }, [conjugations, currentIndex, isPracticeMode, selectedVerbSet]);

  // Get current verb set
  // const currentVerbSet = verbSets.find(set => set.id === selectedVerbSet) || verbSets[0];

  // Filter conjugations based on current selection and filters
  const filteredConjugations = conjugations.filter(conjugation => {
    const matchesSearch = conjugation.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conjugation.spanish.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conjugation.verb.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === 'all' || conjugation.type === typeFilter;
    const matchesTense = tenseFilter === 'all' || conjugation.tense === tenseFilter;
    const matchesDifficulty = difficultyFilter === 'all' || conjugation.difficulty === difficultyFilter;
    const matchesMastery = masteryFilter === 'all' || 
                          (masteryFilter === 'mastered' && conjugation.mastered) ||
                          (masteryFilter === 'not-mastered' && !conjugation.mastered);

    return matchesSearch && matchesType && matchesTense && matchesDifficulty && matchesMastery;
  });

  // Get conjugations that should be practiced (spaced repetition)
  // Note: This is now calculated inline where needed to avoid stale references

  const handleToggleMastery = (id: string) => {
    setConjugations(prev => 
      prev.map(c => c.id === id ? { ...c, mastered: !c.mastered } : c)
    );
  };

  const handlePracticeResult = (id: string, correct: boolean) => {
    setConjugations(prev => 
      prev.map(c => {
        if (c.id === id) {
          return {
            ...c,
            practiceCount: c.practiceCount + 1,
            correctCount: c.correctCount + (correct ? 1 : 0),
            lastPracticed: Date.now()
          };
        }
        return c;
      })
    );
  };

  const handleNextCard = () => {
    if (currentIndex < practiceSessionConjugations.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Practice session complete
      setIsPracticeMode(false);
      setCurrentIndex(0);
      setPracticeSessionConjugations([]); // Clear the frozen array
    }
  };

  const handleStartPractice = () => {
    // Freeze the practice conjugations for this session
    const conjugationsToPractice = filteredConjugations.filter(shouldPractice);
    setPracticeSessionConjugations(conjugationsToPractice);
    setCurrentIndex(0);
    setIsPracticeMode(true);
  };

  const handleBackToBrowse = () => {
    setIsPracticeMode(false);
    setCurrentIndex(0);
    setPracticeSessionConjugations([]); // Clear the frozen array
  };

  const handleResetProgress = () => {
    setShowResetConfirm(true);
  };

  const confirmResetProgress = () => {
    setConjugations(allConjugations.map(c => ({ ...c, mastered: false, practiceCount: 0, correctCount: 0 })));
    setCurrentIndex(0);
    setShowResetConfirm(false);
  };

  const cancelResetProgress = () => {
    setShowResetConfirm(false);
  };

  const handleVerbSetChange = (verbSetId: string) => {
    setSelectedVerbSet(verbSetId);
    setCurrentIndex(0);
  };

  // Calculate statistics
  const masteredCount = conjugations.filter(c => c.mastered).length;
  const totalPracticeCount = conjugations.reduce((sum, c) => sum + c.practiceCount, 0);
  const totalCorrectCount = conjugations.reduce((sum, c) => sum + c.correctCount, 0);
  const overallAccuracy = totalPracticeCount > 0 ? Math.round((totalCorrectCount / totalPracticeCount) * 100) : 0;

  if (isPracticeMode && practiceSessionConjugations.length > 0) {
    const currentConjugation = practiceSessionConjugations[currentIndex];
    const isLastCard = currentIndex === practiceSessionConjugations.length - 1;

    return (
      <div className="App practice-mode">
        <div className="header">
          <div className="header-left">
            <h1>🎯 Practice Mode</h1>
            <p>Practice conjugations with spaced repetition</p>
          </div>
          <button onClick={handleBackToBrowse} className="back-button">
            ← Back to Browse
          </button>
        </div>

        <div className="practice-info">
          <div className="practice-stats">
            <span>Card {currentIndex + 1} of {practiceSessionConjugations.length}</span>
            <span>Due for practice: {practiceSessionConjugations.length}</span>
          </div>
        </div>

        <div className="practice-content">
          <Flashcard
            conjugation={currentConjugation}
            onNext={handleNextCard}
            onMastered={handleToggleMastery}
            onPracticeResult={handlePracticeResult}
            isLast={isLastCard}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="header">
        <h1>🇪🇸 Spanish Verb Master</h1>
        <p>Master Spanish verb conjugations with interactive flashcards</p>
      </div>

      <div className="controls">
        <div className="verb-set-selector">
          <label>Verb Set:</label>
          <select 
            value={selectedVerbSet} 
            onChange={(e) => handleVerbSetChange(e.target.value)}
            className="verb-set-select"
          >
            {verbSets.map(set => (
              <option key={set.id} value={set.id}>
                {set.name} ({set.conjugations.length})
              </option>
            ))}
          </select>
        </div>

        <div className="filters">
          <input
            type="text"
            placeholder="Search conjugations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <select 
            value={typeFilter} 
            onChange={(e) => setTypeFilter(e.target.value as any)}
            className="filter-select"
          >
            <option value="all">All Types</option>
            <option value="regular">Regular</option>
            <option value="irregular">Irregular</option>
          </select>

          <select 
            value={tenseFilter} 
            onChange={(e) => setTenseFilter(e.target.value as any)}
            className="filter-select"
          >
            <option value="all">All Tenses</option>
            <option value="present">Present</option>
            <option value="preterite">Preterite</option>
          </select>

          <select 
            value={difficultyFilter} 
            onChange={(e) => setDifficultyFilter(e.target.value as any)}
            className="filter-select"
          >
            <option value="all">All Difficulties</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <select 
            value={masteryFilter} 
            onChange={(e) => setMasteryFilter(e.target.value as any)}
            className="filter-select"
          >
            <option value="all">All Status</option>
            <option value="mastered">Mastered</option>
            <option value="not-mastered">Not Mastered</option>
          </select>
        </div>

        <div className="actions">
          <button 
            onClick={handleStartPractice}
            className="practice-button"
            disabled={filteredConjugations.filter(shouldPractice).length === 0}
          >
            🎯 Practice Mode ({filteredConjugations.filter(shouldPractice).length} due)
          </button>
          
          <button onClick={() => setShowReference(true)} className="reference-button">
            📚 Reference
          </button>
          
          <button onClick={handleResetProgress} className="reset-button">
            🔄 Reset Progress
          </button>
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress-content">
          <span>Progress: {masteredCount}/{conjugations.length} mastered</span>
          <div className="progress-fill" style={{ width: `${(masteredCount / conjugations.length) * 100}%` }}></div>
        </div>
      </div>

      <div className="statistics">
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number">{masteredCount}/{conjugations.length}</div>
            <div className="stat-label">Mastery Progress</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{overallAccuracy}%</div>
            <div className="stat-label">Overall Accuracy</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{conjugations.length - masteredCount}</div>
            <div className="stat-label">Remaining</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{filteredConjugations.filter(shouldPractice).length}</div>
            <div className="stat-label">Due for Practice</div>
          </div>
        </div>
      </div>

      <div className="conjugations-grid">
        {filteredConjugations.map((conjugation) => (
          <VerbCard
            key={conjugation.id}
            conjugation={conjugation}
            onToggleMastery={handleToggleMastery}
          />
        ))}
      </div>

      {filteredConjugations.length === 0 && (
        <div className="no-results">
          <p>No conjugations match your current filters.</p>
          <button onClick={() => {
            setSearchTerm('');
            setTypeFilter('all');
            setTenseFilter('all');
            setDifficultyFilter('all');
            setMasteryFilter('all');
          }} className="clear-filters-button">
            Clear All Filters
          </button>
        </div>
      )}

      {/* Conjugation Reference Modal */}
      <ConjugationReference 
        isOpen={showReference}
        onClose={() => setShowReference(false)}
      />

      {/* Reset Progress Confirmation Modal */}
      {showResetConfirm && (
        <div className="modal-overlay">
          <div className="modal-content reset-confirm-modal">
            <div className="modal-header">
              <h2>⚠️ Reset Progress</h2>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to reset all progress?</p>
              <p className="warning-text">This action cannot be undone and will:</p>
              <ul className="reset-warning-list">
                <li>• Clear all mastery status</li>
                <li>• Reset all practice counts</li>
                <li>• Reset all accuracy scores</li>
                <li>• Start you from the beginning</li>
              </ul>
            </div>
            <div className="modal-actions">
              <button 
                onClick={cancelResetProgress}
                className="cancel-button"
              >
                Cancel
              </button>
              <button 
                onClick={confirmResetProgress}
                className="confirm-button"
              >
                Reset All Progress
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
