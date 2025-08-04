import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Filter, BookOpen, Target, Star } from 'lucide-react';
import { Conjugation, VerbSet, allConjugations, verbSets } from '../data/conjugationData';

interface VerbSelectionProps {
  onStartPractice: (selectedConjugations: Conjugation[]) => void;
  onBack: () => void;
}

interface VerbGroup {
  verb: string;
  english: string;
  spanish: string;
  type: 'regular' | 'irregular';
  conjugation: 'ar' | 'er' | 'ir';
  presentCount: number;
  preteriteCount: number;
  selected: boolean;
}

const VerbSelection: React.FC<VerbSelectionProps> = ({ onStartPractice, onBack }) => {
  const [selectedVerbs, setSelectedVerbs] = useState<Set<string>>(new Set());
  const [filterType, setFilterType] = useState<'all' | 'regular' | 'irregular'>('all');
  const [filterConjugation, setFilterConjugation] = useState<'all' | 'ar' | 'er' | 'ir'>('all');
  const [filterTense, setFilterTense] = useState<'all' | 'present' | 'preterite'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'sets' | 'individual'>('sets');

  // Group conjugations by verb
  const verbGroups: VerbGroup[] = React.useMemo(() => {
    const groups = new Map<string, VerbGroup>();
    
    allConjugations.forEach(conjugation => {
      if (!groups.has(conjugation.verb)) {
        groups.set(conjugation.verb, {
          verb: conjugation.verb,
          english: conjugation.english.split(' ').slice(1).join(' '), // Remove "I/you/he/she/we/they"
          spanish: conjugation.verb,
          type: conjugation.type,
          conjugation: conjugation.conjugation,
          presentCount: 0,
          preteriteCount: 0,
          selected: false
        });
      }
      
      const group = groups.get(conjugation.verb)!;
      if (conjugation.tense === 'present') {
        group.presentCount++;
      } else {
        group.preteriteCount++;
      }
    });
    
    return Array.from(groups.values());
  }, []);

  // Filter verb groups
  const filteredVerbGroups = verbGroups.filter(group => {
    if (filterType !== 'all' && group.type !== filterType) return false;
    if (filterConjugation !== 'all' && group.conjugation !== filterConjugation) return false;
    if (searchTerm && !group.verb.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !group.english.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const handleVerbToggle = (verb: string) => {
    setSelectedVerbs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(verb)) {
        newSet.delete(verb);
      } else {
        newSet.add(verb);
      }
      return newSet;
    });
  };

  const handleSelectAll = () => {
    setSelectedVerbs(new Set(filteredVerbGroups.map(g => g.verb)));
  };

  const handleDeselectAll = () => {
    setSelectedVerbs(new Set());
  };

  const handleSetSelection = (verbSet: VerbSet) => {
    const verbsInSet = new Set(verbSet.conjugations.map(c => c.verb));
    setSelectedVerbs(verbsInSet);
  };

  const handleStartPractice = () => {
    const selectedConjugations = allConjugations.filter(c => 
      selectedVerbs.has(c.verb)
    );
    onStartPractice(selectedConjugations);
  };

  const selectedCount = selectedVerbs.size;
  const totalConjugations = allConjugations.filter(c => selectedVerbs.has(c.verb)).length;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '1rem'
    }}>
      {/* Header */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '1.5rem',
        marginBottom: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BookOpen size={32} color="#3b82f6" />
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                Select Verbs to Practice
              </h1>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                Choose which verbs you want to practice
              </p>
            </div>
          </div>
          
          <button
            onClick={onBack}
            style={{
              padding: '8px 16px',
              background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
            Back
          </button>
        </div>

        {/* View Mode Toggle */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          <button
            onClick={() => setViewMode('sets')}
            style={{
              padding: '8px 16px',
              background: viewMode === 'sets' 
                ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                : 'rgba(59, 130, 246, 0.1)',
              color: viewMode === 'sets' ? 'white' : '#3b82f6',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <BookOpen size={16} />
            Predefined Sets
          </button>
          <button
            onClick={() => setViewMode('individual')}
            style={{
              padding: '8px 16px',
              background: viewMode === 'individual' 
                ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                : 'rgba(59, 130, 246, 0.1)',
              color: viewMode === 'individual' ? 'white' : '#3b82f6',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <Target size={16} />
            Individual Selection
          </button>
        </div>

        {/* Selection Summary */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
          background: 'rgba(59, 130, 246, 0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(59, 130, 246, 0.2)'
        }}>
          <Star size={20} color="#3b82f6" />
          <span style={{ color: '#1f2937', fontWeight: '600' }}>
            {selectedCount} verbs selected ({totalConjugations} conjugations)
          </span>
        </div>
      </div>

      {viewMode === 'sets' ? (
        /* Predefined Sets View */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem'
        }}>
          {verbSets.map((verbSet) => (
            <motion.div
              key={verbSet.id}
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                border: '2px solid transparent',
                transition: 'all 0.2s ease'
              }}
              onClick={() => handleSetSelection(verbSet)}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                  {verbSet.name}
                </h3>
                <span style={{
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  ...(verbSet.difficulty === 'beginner' 
                    ? { backgroundColor: '#dcfce7', color: '#166534' }
                    : verbSet.difficulty === 'intermediate'
                    ? { backgroundColor: '#fef3c7', color: '#92400e' }
                    : { backgroundColor: '#fee2e2', color: '#991b1b' }
                  )
                }}>
                  {verbSet.difficulty}
                </span>
              </div>
              
              <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.875rem' }}>
                {verbSet.description}
              </p>
              
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                marginBottom: '1rem'
              }}>
                {verbSet.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    color: '#3b82f6'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.875rem',
                color: '#6b7280'
              }}>
                <span>{verbSet.conjugations.length} conjugations</span>
                <span>•</span>
                <span>{new Set(verbSet.conjugations.map(c => c.verb)).size} verbs</span>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Individual Selection View */
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          {/* Filters */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Filter size={16} color="#6b7280" />
              <span style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>Filters:</span>
            </div>
            
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                fontSize: '0.875rem'
              }}
            >
              <option value="all">All Types</option>
              <option value="regular">Regular</option>
              <option value="irregular">Irregular</option>
            </select>
            
            <select
              value={filterConjugation}
              onChange={(e) => setFilterConjugation(e.target.value as any)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                fontSize: '0.875rem'
              }}
            >
              <option value="all">All Conjugations</option>
              <option value="ar">-ar verbs</option>
              <option value="er">-er verbs</option>
              <option value="ir">-ir verbs</option>
            </select>
            
            <select
              value={filterTense}
              onChange={(e) => setFilterTense(e.target.value as any)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                fontSize: '0.875rem'
              }}
            >
              <option value="all">All Tenses</option>
              <option value="present">Present</option>
              <option value="preterite">Preterite</option>
            </select>
            
            <input
              type="text"
              placeholder="Search verbs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                fontSize: '0.875rem',
                minWidth: '200px'
              }}
            />
          </div>

          {/* Bulk Actions */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <button
              onClick={handleSelectAll}
              style={{
                padding: '6px 12px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Select All
            </button>
            <button
              onClick={handleDeselectAll}
              style={{
                padding: '6px 12px',
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Deselect All
            </button>
          </div>

          {/* Verb List */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1rem',
            maxHeight: '400px',
            overflowY: 'auto'
          }}>
            {filteredVerbGroups.map((verbGroup) => (
              <motion.div
                key={verbGroup.verb}
                whileHover={{ scale: 1.02 }}
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '2px solid',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  ...(selectedVerbs.has(verbGroup.verb)
                    ? {
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)'
                      }
                    : {
                        borderColor: '#e5e7eb',
                        backgroundColor: 'white'
                      }
                  )
                }}
                onClick={() => handleVerbToggle(verbGroup.verb)}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                    {verbGroup.verb}
                  </h4>
                  {selectedVerbs.has(verbGroup.verb) && (
                    <Check size={16} color="#3b82f6" />
                  )}
                </div>
                
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
                  {verbGroup.english}
                </p>
                
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    padding: '2px 6px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    ...(verbGroup.type === 'regular' 
                      ? { backgroundColor: '#dcfce7', color: '#166534' }
                      : { backgroundColor: '#fee2e2', color: '#991b1b' }
                    )
                  }}>
                    {verbGroup.type}
                  </span>
                  <span style={{
                    padding: '2px 6px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    backgroundColor: '#dbeafe',
                    color: '#1e40af'
                  }}>
                    -{verbGroup.conjugation}
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginTop: '0.5rem',
                  fontSize: '0.75rem',
                  color: '#6b7280'
                }}>
                  <span>Present: {verbGroup.presentCount}</span>
                  <span>•</span>
                  <span>Preterite: {verbGroup.preteriteCount}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Start Practice Button */}
      {selectedCount > 0 && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000
        }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartPractice}
            style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Target size={24} />
            Start Practice ({totalConjugations} conjugations)
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default VerbSelection; 