import React, { useState, useEffect, useMemo } from 'react';
import type { Conjugation } from '../data/conjugationData';
import './VerbSelectionModal.css';

interface VerbSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  allConjugations: Conjugation[];
  selectedVerbs: string[];
  onSaveSelection: (selectedVerbs: string[]) => void;
}

interface VerbInfo {
  verb: string;
  english: string;
  type: 'regular' | 'irregular';
  conjugation: 'ar' | 'er' | 'ir';
  hasPresent: boolean;
  hasPreterite: boolean;
}

const VerbSelectionModal: React.FC<VerbSelectionModalProps> = ({
  isOpen,
  onClose,
  allConjugations,
  selectedVerbs,
  onSaveSelection
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMode, setSearchMode] = useState<'spanish' | 'english'>('spanish');
  const [localSelectedVerbs, setLocalSelectedVerbs] = useState<string[]>(selectedVerbs);

  // Extract unique verbs from conjugations
  const uniqueVerbs = useMemo(() => {
    const verbMap = new Map<string, VerbInfo>();
    
    allConjugations.forEach(conjugation => {
      if (!verbMap.has(conjugation.verb)) {
        verbMap.set(conjugation.verb, {
          verb: conjugation.verb,
          english: conjugation.english.split(' ').slice(1).join(' '), // Remove person part
          type: conjugation.type,
          conjugation: conjugation.conjugation,
          hasPresent: false,
          hasPreterite: false
        });
      }
      
      const verbInfo = verbMap.get(conjugation.verb)!;
      if (conjugation.tense === 'present') verbInfo.hasPresent = true;
      if (conjugation.tense === 'preterite') verbInfo.hasPreterite = true;
    });
    
    return Array.from(verbMap.values()).sort((a, b) => {
      if (searchMode === 'spanish') {
        return a.verb.localeCompare(b.verb);
      } else {
        return a.english.localeCompare(b.english);
      }
    });
  }, [allConjugations, searchMode]);

  // Filter verbs based on search term
  const filteredVerbs = useMemo(() => {
    if (!searchTerm) return uniqueVerbs;
    
    return uniqueVerbs.filter(verb => {
      if (searchMode === 'spanish') {
        return verb.verb.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return verb.english.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
  }, [uniqueVerbs, searchTerm, searchMode]);

  // Initialize local selection when modal opens
  useEffect(() => {
    if (isOpen) {
      setLocalSelectedVerbs(selectedVerbs);
    }
  }, [isOpen, selectedVerbs]);

  const handleVerbToggle = (verb: string) => {
    setLocalSelectedVerbs(prev => 
      prev.includes(verb) 
        ? prev.filter(v => v !== verb)
        : [...prev, verb]
    );
  };

  const handleSelectAll = () => {
    setLocalSelectedVerbs(filteredVerbs.map(v => v.verb));
  };

  const handleDeselectAll = () => {
    setLocalSelectedVerbs([]);
  };

  const handleSave = () => {
    onSaveSelection(localSelectedVerbs);
    onClose();
  };

  const handleCancel = () => {
    setLocalSelectedVerbs(selectedVerbs);
    onClose();
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay verb-selection-overlay">
      <div className="modal-content verb-selection-modal">
        <div className="modal-header">
          <h2>🎯 Verb Selection</h2>
          <button onClick={onClose} className="close-button">×</button>
        </div>
        
        <div className="search-section">
          <div className="search-controls">
            <input
              type="text"
              placeholder={`Search ${searchMode === 'spanish' ? 'Spanish' : 'English'} verbs...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <select
              value={searchMode}
              onChange={(e) => setSearchMode(e.target.value as 'spanish' | 'english')}
              className="search-mode-select"
            >
              <option value="spanish">Spanish</option>
              <option value="english">English</option>
            </select>
            {searchTerm && (
              <button onClick={handleClearSearch} className="clear-search-button">
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="bulk-actions">
          <button onClick={handleSelectAll} className="bulk-action-button">
            Select All
          </button>
          <button onClick={handleDeselectAll} className="bulk-action-button">
            Deselect All
          </button>
        </div>

        <div className="verbs-list">
          {filteredVerbs.map((verbInfo) => (
            <div key={verbInfo.verb} className="verb-row">
              <div className="verb-info">
                <label className="verb-checkbox">
                  <input
                    type="checkbox"
                    checked={localSelectedVerbs.includes(verbInfo.verb)}
                    onChange={() => handleVerbToggle(verbInfo.verb)}
                  />
                  <span className="verb-name">{verbInfo.verb}</span>
                  <span className="verb-english">({verbInfo.english})</span>
                  <span className={`verb-type ${verbInfo.type}`}>
                    {verbInfo.type} -{verbInfo.conjugation}
                  </span>
                </label>
              </div>
              <div className="tense-indicators">
                {verbInfo.hasPresent && (
                  <span className="tense-badge present">Present</span>
                )}
                {verbInfo.hasPreterite && (
                  <span className="tense-badge preterite">Preterite</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredVerbs.length === 0 && (
          <div className="no-results">
            <p>No verbs match your search criteria.</p>
          </div>
        )}

        <div className="modal-actions">
          <button onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
          <button onClick={handleSave} className="save-button">
            Save Selection ({localSelectedVerbs.length} verbs)
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerbSelectionModal;
