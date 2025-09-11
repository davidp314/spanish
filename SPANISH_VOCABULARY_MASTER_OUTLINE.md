# Spanish Vocabulary Master - Project Outline

## Project Overview

**Goal:** Create a Spanish vocabulary learning app focused on the top 2000 most frequently used non-verb Spanish words, using proven spaced repetition and adaptive learning techniques.

**Inspiration:** Based on successful patterns from Spanish Verb Master, but optimized specifically for vocabulary acquisition rather than grammatical conjugation patterns.

## Core Learning Differences from Verb App

**Vocabulary Learning Focus:**
- **Pure memorization** vs. pattern recognition
- **Frequency-based prioritization** vs. conjugation complexity
- **Contextual usage** vs. grammatical rules
- **Word families & synonyms** vs. systematic tense practice

**Data Structure Requirements:**
```typescript
interface VocabularyWord {
  id: string;
  spanish: string;
  english: string;
  frequency: number; // 1-2000 ranking
  partOfSpeech: 'noun' | 'adjective' | 'adverb' | 'preposition' | 'conjunction' | 'interjection';
  gender?: 'masculine' | 'feminine'; // for nouns
  plural?: string; // for irregular plurals
  wordFamily?: string[]; // related words
  mastered: boolean;
  lastPracticed?: number;
  practiceCount: number;
  correctCount: number;
}
```

## Architecture to Replicate from Verb App

### ✅ **Proven Patterns to Copy**
1. **Spaced Repetition System**
   - `shouldPractice()` algorithm with intervals
   - Priority scoring based on accuracy and recency
   - Smart vs. Manual practice modes

2. **Practice Session Management**
   - Frozen practice arrays for session stability
   - Session progress tracking
   - Multiple practice ordering modes

3. **Translation Quiz System**
   - Bidirectional ES ↔ EN practice
   - Auto-advance flow with self-assessment
   - Keyboard shortcuts (Enter, J, F)

4. **Theme & UI Infrastructure**
   - Dark/light mode with CSS variables
   - localStorage persistence with auto-save
   - Responsive design patterns

5. **Progress Tracking**
   - Individual word progress
   - Session-based achievements
   - Accuracy-based mastery determination

### ❌ **Verb-Specific Features to Avoid**
- Conjugation reference tables
- Person/tense selection
- Verb type categorization (ar/er/ir)
- Systematic conjugation ordering

## Unique Vocabulary Features

### **Frequency-Based Learning**
- Practice prioritization based on word frequency ranking
- "Core 100", "Core 500", "Core 1000" milestone tracking
- Frequency-weighted random selection

### **Contextual Learning**
- Example sentences for each word
- Word family groupings (noun → adjective → adverb)
- Common phrase combinations

### **Enhanced Categorization**
- Filter by part of speech
- Gender practice for nouns
- Difficulty levels by frequency ranges

## Technical Architecture

### **Reusable Components from Verb App**
```typescript
// Core hooks (adapt for vocabulary)
useSpacedRepetition()
useLocalStoragePersistence()
useKeyboardShortcuts()
usePracticeSession()

// UI components (minimal changes needed)
TranslationQuiz.tsx
ThemeToggle.tsx
ThemeContext.tsx
Modal components

// Utility functions
shuffleArray()
calculatePracticePriority() // adapt scoring
getSpacedRepetitionInterval()
```

### **New Components Needed**
- `VocabularyCard.tsx` - Word-focused flashcard
- `FrequencyProgress.tsx` - Milestone tracking
- `WordFamilyModal.tsx` - Related words display
- `PartOfSpeechFilter.tsx` - Category selection
- `ContextSentences.tsx` - Example usage

### **Data Management**
- Frequency-ranked word database (CSV → TypeScript)
- Word family relationship mapping
- Example sentence database
- Gender and plural form data

## Development Approach

### **Phase 1: Core Infrastructure**
- Basic word flashcard system
- Translation quiz adaptation
- Theme system implementation
- localStorage persistence

### **Phase 2: Smart Learning**
- Frequency-based prioritization
- Spaced repetition implementation
- Progress tracking dashboard

### **Phase 3: Enhanced Features**
- Word families and context
- Part of speech filtering
- Milestone achievements
- Example sentences

### **Phase 4: Polish & Optimization**
- Performance optimization
- UI/UX refinement
- Keyboard shortcuts
- Responsive design completion

## Value of Access to Verb App Codebase

### **High Value Components** ⭐⭐⭐
- **Spaced repetition algorithms** - Proven effective, directly transferable
- **Translation quiz implementation** - Perfect fit for vocabulary
- **Theme system** - Complete CSS variable setup
- **Practice session hooks** - Session management patterns
- **localStorage persistence** - Data migration and auto-save patterns

### **Medium Value Components** ⭐⭐
- **UI component patterns** - Modal, button, card designs
- **Keyboard shortcut system** - Adaptation needed but good foundation
- **Progress calculation logic** - Needs modification for vocabulary context

### **Low Value Components** ⭐
- **Conjugation-specific logic** - Not applicable
- **Verb selection system** - Too specialized
- **App.tsx main component** - Too complex and verb-focused

## Key Learnings to Apply

### **Architecture Decisions**
- **Single-file monolith initially OK** - Refactor when complexity demands it
- **CSS variables over Tailwind** - Better theme control
- **Custom hooks for reusability** - Extract early and often
- **localStorage for persistence** - Simple and effective

### **Development Process**
- **Micro-chunk approach** - Small, testable increments
- **Stage-based refactoring** - Plan complexity management from start
- **Keyboard-first design** - Essential for efficient practice
- **Auto-advance flows** - Minimize friction in practice sessions

## Recommendation: Provide Verb App Access

**Yes, absolutely valuable** - The assistant should have access to:

1. **Complete codebase** for understanding proven patterns
2. **CLAUDE.md** for architecture decisions and lessons learned
3. **Specific hooks and utilities** for direct adaptation
4. **CSS theme system** for consistent styling approach

**Focus areas for replication:**
- `src/hooks/` directory - Core functionality patterns
- `src/components/TranslationQuiz.tsx` - Direct vocabulary application
- `src/contexts/ThemeContext.tsx` - Complete theme implementation
- `src/utils/` directory - Reusable algorithms
- Spaced repetition logic from `conjugationData.ts`

This would save significant development time and ensure proven UX patterns are maintained while building something optimized for vocabulary learning.

## Data Sources Needed

### **Top 2000 Spanish Words**
- Frequency-ranked list excluding verbs
- Part of speech categorization
- Gender information for nouns
- Common translations

### **Example Sentences**
- Simple context sentences for each word
- Progressive difficulty levels
- Real-world usage examples

### **Word Relationships**
- Word families (e.g., casa → casero → casita)
- Synonyms and antonyms
- Common collocations

## Success Metrics

### **Learning Effectiveness**
- Words mastered over time
- Retention rates after intervals
- Practice session completion rates
- Accuracy improvements

### **User Engagement**
- Daily practice streaks
- Session length optimization
- Feature usage patterns
- Return user rates

## Technical Considerations

### **Performance**
- Efficient word lookup algorithms
- Optimized rendering for 2000+ items
- Smart caching strategies
- Bundle size management

### **Accessibility**
- Screen reader compatibility
- Keyboard navigation
- High contrast modes
- Responsive design

### **Data Migration**
- User progress preservation
- Backward compatibility
- Export/import functionality
- Cloud sync preparation

This outline provides comprehensive guidance for developing a vocabulary-focused Spanish learning app that leverages proven patterns from Spanish Verb Master while optimizing for the unique requirements of vocabulary acquisition.