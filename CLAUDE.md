# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (runs TypeScript compilation then Vite build)  
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build
- `./start-dev.sh` - Startup script for consistent port 5173 usage (recommended)

## Project Overview

**Spanish Verb Master** is a React-based Spanish verb conjugation learning app with interactive flashcards, spaced repetition, and comprehensive progress tracking. The app focuses on present and preterite tense conjugations for 27 essential Spanish verbs (290 total conjugations).

### Current State
- **Fully functional** with comprehensive conjugation system
- **Smart learning algorithm** with AI-powered practice prioritization  
- **Dark/light mode** with system preference detection
- **Progress dashboard** instead of traditional verb grid browsing
- **Triple practice system** with three ordering modes, three practice types, and contextual smart/manual modes
- **Translation quiz** with bidirectional Spanish ↔ English verb translation practice
- **Verb selection system** with individual tense control
- **Verb visibility toggle** with eye icon to hide/show verbs during practice for increased difficulty
- **Contextual conjugation reference** with modal showing full verb conjugation table during practice
- **Professional UI** with animations, modals, responsive design, and comprehensive keyboard shortcuts

### Recent Updates (January 2025)
- **Flashcard Practice Improvements:** Fixed answer comparison display and card transition animations to prevent showing answers prematurely
- **Translation Quiz Feature:** New practice type with Spanish ↔ English verb translation, auto-advance, and optimized keyboard shortcuts (Enter, J, F)
- **Enhanced Practice Types:** Quiz, Mastery, and Translation modes with distinct workflows
- **Single-Button Direction Toggle:** Simplified ES → EN / EN → ES direction switching
- **Keyboard-First Design:** Full keyboard navigation with vim-style shortcuts for efficient practice sessions
- **Auto-Advance Flow:** Seamless progression after self-assessment with visual feedback
- **New verbs added:** traer, saber, caerse, buscar, mirar, encontrar, esconder, llevar, terminar, ver, hacer, ser, deber (13 additional verbs, 110 new conjugations)
- **localStorage state management fix:** Ensures new verbs are automatically available without browser refresh
- **Verb selection bug fix:** VerbSelectionModal now properly initializes with existing tense selections
- **Data migration system:** Preserves user progress while seamlessly adding new conjugation definitions
- **Practice Count & Accuracy Fix:** Resolved React Strict Mode double-execution causing incorrect practice tracking
- **Hybrid Progress Display:** Shows both session progress (Card 1 of 10) and individual conjugation history
- **Space-Optimized UI:** Moved reference button to conjugation info area, saving vertical space

## Code Architecture

### Core Application Flow
- `App.tsx` (704 lines) - Main component handling all state and logic
- Two primary modes: **Browse Mode** (progress dashboard) and **Practice Mode** (flashcards)
- State persisted to localStorage for progress tracking across sessions
- **Theme system** with React context and CSS variables

### Key State Management
- `conjugations`: Array of all verb conjugations with progress tracking
- `selectedVerbs`: User-selected verbs to practice 
- `practiceMode`: Practice ordering strategy ('systematic', 'random1', 'random2')
- `practiceType`: Practice completion behavior ('quiz', 'mastery', 'translation')
- `translationDirection`: Translation direction ('es-en', 'en-es') for translation quiz
- `practiceSessionConjugations`: Frozen array for stable practice sessions
- `masteredInSession`: Set tracking correct answers in mastery mode
- Theme state managed via React context with localStorage persistence

### Data Structure

**Conjugation Interface** (`src/data/conjugationData.ts`):
```typescript
interface Conjugation {
  id: string;
  english: string; 
  spanish: string;
  verb: string;
  type: 'regular' | 'irregular';
  conjugation: 'ar' | 'er' | 'ir';
  person: 'yo' | 'tú' | 'él/ella/usted' | 'nosotros' | 'ellos/ellas/ustedes';
  tense: 'present' | 'preterite';
  mastered: boolean;
  lastPracticed?: number; // timestamp for spaced repetition
  practiceCount: number;
  correctCount: number;
}
```

**Note:** The `difficulty` property and verb set system were removed in favor of performance-based smart selection.

### Smart Learning System

**Spaced Repetition:** 
- `shouldPractice()` determines when conjugations need review
- `getSpacedRepetitionInterval()` calculates intervals based on accuracy (0-7 days)

**Priority Algorithm:** 
`calculatePracticePriority()` scores conjugations (0-22+ points) based on:
- Mastery status (unmastered = +10 points) 
- Time since last practice (+5 max for 2+ weeks, +5 for never practiced)
- Success rate (struggling <60% accuracy = +4 points)
- Verb complexity (irregular = +2 points)  
- Tense complexity (preterite = +1 point)

**Smart Practice System:**

*Practice Modes (ordering):*
- **Systematic:** Priority-ordered verbs, systematic conjugation order within each verb
- **Random:** Smart weighted selection (70% high priority, 30% remaining), shuffled
- **Mixed:** Verbs ordered by highest priority conjugation, systematic within each verb

*Practice Types (completion behavior):*
- **Quiz:** Go through each conjugation once, then show results and return to dashboard
- **Mastery:** Continue practicing until all conjugations are answered correctly at least once (default)

*Practice Modes (selection behavior):*
- **Smart Mode:** Uses spaced repetition algorithm to determine which conjugations are due
- **Manual Mode:** Practices all selected conjugations regardless of spaced repetition timing

**Contextual Practice Interface:** The practice button adapts based on spaced repetition status:
- When conjugations are due: Shows "Start Practice" (smart mode) with "Manual Practice" link
- When 0 conjugations due: Shows "Practice Selected" (manual mode) as primary option

### Translation Quiz System

**New Practice Type:** Translation quiz focuses on vocabulary recognition between Spanish and English verb infinitives.

**Direction Toggle:** Single button interface showing current direction:
- "ES → EN": Spanish to English translation
- "EN → ES": English to Spanish translation

**Auto-Advance Flow:**
1. Show verb in source language
2. User thinks of translation
3. Press Enter/J to reveal answer
4. Press J (correct) or F (incorrect) for self-assessment
5. Auto-advance to next card after 800ms

**Keyboard Shortcuts:**
- **Enter/J**: Show answer (when hidden)
- **J**: Mark correct (when answer shown)
- **F**: Mark incorrect (when answer shown)
- **Dual-purpose J**: Show answer OR mark correct OR advance (context-dependent)

**Data Structure:** Extracts infinitive forms from conjugation data to create verb-level translations, maintaining consistency with existing verb selection system.

### Key Components

- `Flashcard.tsx` - Interactive conjugation practice cards with Spanish accent keyboard, verb visibility toggle, and conjugation reference modal
- `TranslationQuiz.tsx` - Self-contained translation practice component with auto-advance, keyboard shortcuts, and bilingual support
- `VerbSelectionModal.tsx` - Comprehensive verb/tense selection with search
- `ConjugationReference.tsx` - Professional table-based conjugation patterns reference
- `ConjugationReferenceModal.tsx` - Contextual verb conjugation reference during practice
- `ThemeToggle.tsx` - Dark/light mode toggle with moon/sun icons
- `ThemeContext.tsx` - Theme state management and system preference detection
- `VerbCard.tsx` - Individual conjugation display (used in modals)

### Architecture Notes

**Current Limitations:**
- `App.tsx` is monolithic (704 lines) - needs refactoring into custom hooks
- Mixed UI/business logic concerns
- State management complexity with multiple related variables

**Technology Stack:**
- React 18 + TypeScript + Vite
- Custom CSS with CSS variables for theming (Tailwind was attempted but caused issues)
- localStorage for persistence
- No external state management library

## Known Issues & Solutions

### Resolved Issues ✅
- **Port consistency:** Fixed with `start-dev.sh` script
- **Practice session stability:** Implemented frozen practice arrays
- **Dark mode contrast:** All UI elements properly styled for both themes
- **Card state persistence:** Fixed unexpected card changes during practice
- **Keyboard navigation:** Enter key support for practice flow
- **Practice Count & Accuracy Reports:** Fixed React Strict Mode double-execution causing counts to remain at 0
- **State Management:** Resolved duplicate state updates preventing proper progress tracking
- **UI Space Optimization:** Compact reference button integration without vertical expansion
- **Flashcard Answer Comparison:** Users can now see their answer alongside the correct answer after submission
- **Card Transition Animations:** Fixed issue where new cards briefly showed Spanish answers before flipping to English prompts
- **Code Quality:** Fixed minor lint issues including unused parameters and useEffect dependencies
- **Aggressive Refactoring Risk:** Learned that the sophisticated dashboard UI can be easily broken by over-refactoring; original 900-line App.tsx is well-architected

### Current Limitations
- **No cloud sync:** Progress is local only
- **Single-user:** No user accounts system
- **Basic spaced repetition:** Could be enhanced further
- **No audio:** No pronunciation support

### Verb Addition Policy
**Default behavior:** Unless otherwise instructed, when adding new verbs to the application, always include both present and preterite tense conjugations for all persons (yo, tú, él/ella/usted, nosotros, ellos/ellas/ustedes). This maintains consistency with the existing conjugation system and ensures complete coverage for each verb.

### Documentation Update Policy
**"Update our documents"** refers to updating any relevant documents in the repository, which typically includes:
- **CLAUDE.md** - Technical documentation, architecture notes, and development guidelines
- **README.md** - User-facing documentation, features, and usage instructions
- Any other relevant documentation files as appropriate

When this instruction is given, proactively identify and update all relevant documents without requiring explicit specification of each file. Avoid documentation bloat - focus on essential information and keep updates concise and relevant to the actual changes made.

### High Priority for Future Development
- **Settings Import/Export:** Backup and restore progress/settings
- **App.tsx Staged Refactoring:** Extract logic into custom hooks using incremental approach (see REFACTORING_CONTEXT.md)
- **Advanced Learning Modes:** Pattern recognition, sentence building

### Refactoring Guidelines
For future App.tsx refactoring work, see `REFACTORING_CONTEXT.md` which contains:
- Complete analysis of previous refactoring attempt that broke the dashboard
- Detailed 5-stage incremental refactoring plan
- Critical success factors and warning signs
- Specific functions and hooks to extract in each stage

## Development Guidelines

### Micro-Chunk Approach
- Implement features in small, testable increments
- Test thoroughly after each chunk
- Clear success criteria for each phase
- Maintain rollback capability

### Code Quality Standards
- TypeScript for type safety
- Component-based architecture with proper props interfaces
- Consistent naming conventions
- Responsive design with efficient space utilization
- CSS variables for theme consistency

### Key Files to Understand
- `src/App.tsx` - Main application logic with translation quiz integration (needs refactoring)
- `src/data/conjugationData.ts` - All conjugation data and smart algorithms
- `src/components/Flashcard.tsx` - Core conjugation practice functionality
- `src/components/TranslationQuiz.tsx` - Translation practice with auto-advance and keyboard shortcuts
- `src/contexts/ThemeContext.tsx` - Theme system
- `src/App.css` - All styles with CSS variables for theming (includes translation quiz styles)
- `start-dev.sh` - Development server management

## Troubleshooting

### Common Issues
- **Port 5173 in use:** Use `./start-dev.sh` script
- **Theme not persisting:** Check localStorage and ThemeContext
- **Practice session instability:** Ensure `practiceSessionConjugations` is used consistently
- **Dark mode styling issues:** Verify CSS variables usage

### Debug Commands
```bash
# Kill development servers and restart
pkill -f "npm run dev"
./start-dev.sh

# Check port usage
lsof -i:5173
```

### Success Indicators
- No console errors during operation
- Smooth theme transitions
- Stable practice sessions without unexpected card changes
- Proper contrast in both light and dark modes
- Fast response times and intuitive interface