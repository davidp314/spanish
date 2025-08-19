import { useState, useEffect } from 'react';
import Flashcard from './components/Flashcard';
import ConjugationReference from './components/ConjugationReference';
import VerbSelectionModal from './components/VerbSelectionModal';
import type { Conjugation } from './data/conjugationData';
import { allConjugations, shouldPractice } from './data/conjugationData';
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
          selectedVerbs: parsed.selectedVerbs || getUniqueVerbs(),
          practiceMode: parsed.practiceMode || 'systematic',
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
      selectedVerbs: getUniqueVerbs(),
      practiceMode: 'systematic',
      lastUpdated: Date.now()
    };
  };

  // Helper function to get unique verbs from all conjugations
  const getUniqueVerbs = (): string[] => {
    const uniqueVerbs = new Set<string>();
    allConjugations.forEach(conjugation => uniqueVerbs.add(conjugation.verb));
    return Array.from(uniqueVerbs).sort();
  };

  // Helper function to shuffle an array (Fisher-Yates algorithm)
  const shuffleArray = (array: Conjugation[]): Conjugation[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Helper function to order conjugations systematically (by verb, then tense, then person)
  const orderSystematically = (conjugations: Conjugation[]): Conjugation[] => {
    const personOrder = ['yo', 'tú', 'él/ella/usted', 'nosotros', 'ellos/ellas/ustedes'];
    const tenseOrder = ['present', 'preterite'];
    
    return conjugations.sort((a, b) => {
      // First sort by verb
      if (a.verb !== b.verb) {
        return a.verb.localeCompare(b.verb);
      }
      // Then by tense
      if (a.tense !== b.tense) {
        return tenseOrder.indexOf(a.tense) - tenseOrder.indexOf(b.tense);
      }
      // Then by person
      return personOrder.indexOf(a.person) - personOrder.indexOf(b.person);
    });
  };

  // Helper function to order conjugations with systematic within verbs, random between verbs
  const orderMixedSystematic = (conjugations: Conjugation[]): Conjugation[] => {
    // Group by verb
    const verbGroups = new Map<string, Conjugation[]>();
    conjugations.forEach(conjugation => {
      if (!verbGroups.has(conjugation.verb)) {
        verbGroups.set(conjugation.verb, []);
      }
      verbGroups.get(conjugation.verb)!.push(conjugation);
    });
    
    // Order each verb group systematically
    const orderedGroups = Array.from(verbGroups.values()).map(group => 
      orderSystematically(group)
    );
    
    // Shuffle the order of verb groups (shuffle the array of arrays)
    const shuffledGroups = [...orderedGroups].sort(() => Math.random() - 0.5);
    
    // Flatten the groups
    return shuffledGroups.flat();
  };

  const initialState = loadStateFromStorage();
  
  const [conjugations, setConjugations] = useState<Conjugation[]>(initialState.conjugations);
  const [currentIndex, setCurrentIndex] = useState(initialState.currentIndex);
  const [isPracticeMode, setIsPracticeMode] = useState(initialState.isPracticeMode);
  // const [selectedVerbSet, setSelectedVerbSet] = useState(initialState.selectedVerbSet); // No longer needed
  const [selectedVerbs, setSelectedVerbs] = useState<string[]>(initialState.selectedVerbs);
  const [practiceMode, setPracticeMode] = useState<'systematic' | 'random1' | 'random2'>(initialState.practiceMode);
  // const [lastUpdated, setLastUpdated] = useState(initialState.lastUpdated); // No longer needed
  
  // Remove unused filter state variables
  // const [searchTerm, setSearchTerm] = useState('');
  // const [typeFilter, setTypeFilter] = useState<'all' | 'regular' | 'irregular'>('all');
  // const [tenseFilter, setTenseFilter] = useState<'all' | 'present' | 'preterite'>('all');
  // const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  // const [masteryFilter, setMasteryFilter] = useState<'all' | 'mastered' | 'not-mastered'>('all');
  
  const [showVerbSelection, setShowVerbSelection] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [practiceSessionConjugations, setPracticeSessionConjugations] = useState<Conjugation[]>([]);

  // Save state to localStorage whenever important state changes
  useEffect(() => {
    const stateToSave = {
      conjugations,
      currentIndex,
      isPracticeMode,
      // selectedVerbSet, // No longer needed
      selectedVerbs,
      practiceMode,
      lastUpdated: Date.now()
    };
    localStorage.setItem('spanishConjugationsState', JSON.stringify(stateToSave));
  }, [conjugations, currentIndex, isPracticeMode, selectedVerbs, practiceMode]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'v' && !event.ctrlKey && !event.metaKey) {
        event.preventDefault();
        setShowVerbSelection(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Get conjugations that should be practiced (spaced repetition)
  const getConjugationsToPractice = () => {
    // Filter by selected verbs first
    const selectedConjugations = conjugations.filter(conjugation => 
      selectedVerbs.includes(conjugation.verb)
    );
    
    // Then apply spaced repetition logic
    return selectedConjugations.filter(shouldPractice);
  };

  const handleStartPractice = () => {
    // Get conjugations that should be practiced
    const conjugationsToPractice = getConjugationsToPractice();
    
    // Apply practice mode ordering
    let orderedConjugations: Conjugation[];
    
    switch (practiceMode) {
      case 'systematic':
        // Group by verb, then by tense, then by person
        orderedConjugations = orderSystematically(conjugationsToPractice);
        break;
      case 'random1':
        // Completely random order
        orderedConjugations = shuffleArray([...conjugationsToPractice]);
        break;
      case 'random2':
        // Systematic within verbs, random between verbs
        orderedConjugations = orderMixedSystematic(conjugationsToPractice);
        break;
      default:
        orderedConjugations = conjugationsToPractice;
    }
    
    setPracticeSessionConjugations(orderedConjugations);
    setCurrentIndex(0);
    setIsPracticeMode(true);
  };

  const handleBackToBrowse = () => {
    setIsPracticeMode(false);
    setCurrentIndex(0);
    setPracticeSessionConjugations([]); // Clear the frozen array
  };

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

  const handleVerbSelectionSave = (newSelectedVerbs: string[], newSelectedTenses: { [verb: string]: { present: boolean; preterite: boolean } }) => {
    setSelectedVerbs(newSelectedVerbs);
    // TODO: Store tense selections for future use in practice mode
    console.log('Tense selections:', newSelectedTenses);
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

  // const handleVerbSetChange = (verbSetId: string) => {
  //   setSelectedVerbSet(verbSetId);
  //   setCurrentIndex(0);
  // };

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
          <div className="practice-mode-selector">
            <label>Practice Mode:</label>
            <select 
              value={practiceMode} 
              onChange={(e) => setPracticeMode(e.target.value as 'systematic' | 'random1' | 'random2')}
              className="practice-mode-select"
            >
              <option value="systematic">Systematic: One verb at a time</option>
              <option value="random1">Random: Mixed verbs & tenses</option>
              <option value="random2">Mixed: Systematic within verbs</option>
            </select>
          </div>
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
          {/* Remove verb set selector - no longer needed */}
          {/* <div className="verb-set-selector">
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
          </div> */}

          {/* Remove filters section - no longer needed for browsing individual conjugations */}
          {/* <div className="filters">
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
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="filter-select"
            >
              <option value="all">All Tenses</option>
              <option value="present">Present</option>
              <option value="preterite">Preterite</option>
            </select>

            <select 
              value={difficultyFilter} 
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="filter-select"
            >
              <option value="all">All Difficulties</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            <select 
              value={masteryFilter} 
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="filter-select"
            >
              <option value="all">All Status</option>
              <option value="mastered">Mastered</option>
              <option value="not-mastered">Not Mastered</option>
            </select>
          </div> */}

          <div className="actions">
            <div className="practice-controls">
              <div className="practice-mode-selector">
                <label>Mode:</label>
                <div className="segmented-control">
                  <button
                    className={`segment ${practiceMode === 'systematic' ? 'active' : ''}`}
                    onClick={() => setPracticeMode('systematic')}
                    title="Practice all conjugations of one verb before moving to the next"
                  >
                    Systematic
                  </button>
                  <button
                    className={`segment ${practiceMode === 'random1' ? 'active' : ''}`}
                    onClick={() => setPracticeMode('random1')}
                    title="Completely random verb + tense + person combinations"
                  >
                    Random
                  </button>
                  <button
                    className={`segment ${practiceMode === 'random2' ? 'active' : ''}`}
                    onClick={() => setPracticeMode('random2')}
                    title="Systematic within verbs, random between verbs"
                  >
                    Mixed
                  </button>
                </div>
              </div>
              <button 
                onClick={handleStartPractice}
                className="practice-button"
                disabled={getConjugationsToPractice().length === 0}
              >
                🚀 Start Practice ({getConjugationsToPractice().length} due)
              </button>
            </div>
            
            {/* Remove the duplicate dropdown that was causing confusion */}
            
            <button onClick={() => setShowVerbSelection(true)} className="verb-selection-button">
              🎯 Verb Selection
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
              <div className="stat-number">{getConjugationsToPractice().length}</div>
              <div className="stat-label">Due for Practice</div>
            </div>
          </div>
          
          {/* Enhanced Progress Dashboard */}
          <div className="progress-dashboard">
            <div className="dashboard-section">
              <h3>📊 Learning Overview</h3>
              <div className="dashboard-grid">
                <div className="dashboard-item">
                  <div className="dashboard-label">Selected Verbs</div>
                  <div className="dashboard-value">{selectedVerbs.length} verbs</div>
                  <div className="dashboard-detail">
                    {selectedVerbs.slice(0, 3).join(', ')}
                    {selectedVerbs.length > 3 && ` +${selectedVerbs.length - 3} more`}
                  </div>
                </div>
                
                <div className="dashboard-item">
                  <div className="dashboard-label">Practice Mode</div>
                  <div className="dashboard-value">
                    {practiceMode === 'systematic' && '🔄 Systematic'}
                    {practiceMode === 'random1' && '🎲 Random Mixed'}
                    {practiceMode === 'random2' && '🎯 Mixed Systematic'}
                  </div>
                  <div className="dashboard-detail">Current learning strategy</div>
                </div>
                
                <div className="dashboard-item">
                  <div className="dashboard-label">Learning Streak</div>
                  <div className="dashboard-value">
                    {conjugations.filter(c => c.practiceCount > 0).length > 0 ? '🔥 Active' : '💤 New'}
                  </div>
                  <div className="dashboard-detail">
                    {conjugations.filter(c => c.practiceCount > 0).length} conjugations practiced
                  </div>
                </div>
                
                <div className="dashboard-item">
                  <div className="dashboard-label">Next Practice</div>
                  <div className="dashboard-value">
                    {getConjugationsToPractice().length > 0 ? '🎯 Ready' : '✅ All Caught Up'}
                  </div>
                  <div className="dashboard-detail">
                    {getConjugationsToPractice().length} conjugations due
                  </div>
                </div>
              </div>
            </div>
            
            {/* Remove redundant Quick Actions section */}
            {/* <div className="dashboard-section">
              <h3>🎯 Quick Actions</h3>
              <div className="quick-actions">
                <button 
                  onClick={handleStartPractice}
                  className="quick-action-button primary"
                  disabled={getConjugationsToPractice().length === 0}
                >
                  🚀 Start Practice ({getConjugationsToPractice().length} due)
                </button>
                
                <button 
                  onClick={() => setShowVerbSelection(true)} 
                  className="quick-action-button"
                >
                  ✏️ Change Verbs
                </button>
                
                <button 
                  onClick={() => setShowReference(true)} 
                  className="quick-action-button"
                >
                  📚 View Reference
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Verb Selection Modal */}
        <VerbSelectionModal
          isOpen={showVerbSelection}
          onClose={() => setShowVerbSelection(false)}
          allConjugations={allConjugations}
          selectedVerbs={selectedVerbs}
          onSaveSelection={handleVerbSelectionSave}
        />

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
