# Spanish Verb Master 🎯

A modern React application for learning Spanish verb conjugations through interactive flashcards, spaced repetition, and hybrid progress tracking. Practice 34 essential verbs with 340 total conjugations.

## ✨ Features

### 🎓 Learning Modes
- **Browse Mode**: Progress dashboard with smart learning algorithm and verb selection
- **Practice Mode**: Interactive flashcards with triple practice system (Quiz/Mastery/Translation) and spaced repetition
- **Translation Quiz**: Bidirectional Spanish ↔ English verb translation with auto-advance and keyboard shortcuts
- **Reference Mode**: Comprehensive conjugation pattern reference for quick lookup
- **Contextual Reference**: In-practice conjugation modal with current verb highlighting
- **Progress Tracking**: Monitor mastery of individual conjugations over time

### 🔍 Advanced Filtering
- Filter by verb type (Regular/Irregular), tense (Present/Preterite), and mastery status
- Search functionality across Spanish, English, and verb roots
- Real-time filtering with instant results

### 📊 Enhanced Progress Analytics
- **Hybrid Progress Display**: Session progress (Card 1 of 10) + individual conjugation history
- Visual progress bar showing mastery percentage
- Practice statistics with accuracy tracking per conjugation
- Spaced repetition system for optimal learning
- Local storage persistence for progress across sessions

### 🎨 Modern UI/UX
- Beautiful gradient designs and smooth animations
- Dark/light mode with system preference detection
- Responsive layout optimized for all device sizes
- Interactive 3D flip animations for flashcards
- Verb visibility toggle for increased practice difficulty
- Compact, space-optimized practice interface with inline reference button
- Comprehensive keyboard shortcuts for efficient navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/davidp314/spanish.git
cd spanish

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development
```bash
# Use the startup script for consistent port usage
./start-dev.sh

# Or manually start the dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
spanish/
├── src/
│   ├── components/
│   │   ├── VerbCard.tsx                    # Conjugation display component
│   │   ├── Flashcard.tsx                   # Interactive conjugation flashcard component
│   │   ├── TranslationQuiz.tsx             # Translation practice component with auto-advance
│   │   ├── ConjugationReferenceModal.tsx   # Contextual verb reference modal
│   │   ├── VerbSelectionModal.tsx          # Verb selection interface
│   │   ├── ThemeToggle.tsx                 # Dark/light mode toggle
│   │   └── ...
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Theme state management
│   ├── data/
│   │   └── conjugationData.ts  # Verb conjugation data and types
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Application styles
│   └── main.tsx                # Application entry point
├── public/                   # Static assets
├── start-dev.sh              # Development server startup script
└── README.md                 # This file
```

## 🎯 How to Use

### Browse Mode
1. **Progress Dashboard**: View overall learning progress and verb mastery statistics
2. **Verb Selection**: Choose specific verbs and tenses to practice
3. **Filter & Search**: Use multiple filters and search to find specific conjugations
4. **View Details**: See person, tense, verb type, and practice statistics
5. **Track Progress**: Monitor mastery status and spaced repetition timing

### Practice Mode
1. **Select Practice Options**: Choose ordering mode (Systematic/Random/Mixed) and practice type (Quiz/Mastery/Translation)
2. **Contextual Practice**: Interface adapts based on spaced repetition status
   - **When verbs are due**: "🚀 Start Practice" (smart mode) with "Manual Practice" link
   - **When 0 verbs due**: "📝 Practice Selected" (manual mode) as primary option
3. **Answer Input**: Type Spanish answers with accent keyboard shortcuts (1-9 keys)
4. **Verb Visibility Toggle**: Hide/show verb infinitive with eye icon for increased difficulty
5. **Contextual Reference**: Click "Reference" button to see full verb conjugation table
6. **Practice Types**:
   - **Quiz Mode**: Go through each conjugation once, then return to dashboard with results
   - **Mastery Mode**: Continue practicing until all conjugations are answered correctly (default)
   - **Translation Mode**: Practice Spanish ↔ English verb translation with auto-advance
7. **Practice Modes**:
   - **Smart Mode**: Uses spaced repetition algorithm for optimal timing
   - **Manual Mode**: Practice all selected verbs regardless of timing

### Translation Quiz
1. **Select Direction**: Click toggle button to switch between "ES → EN" (Spanish to English) or "EN → ES" (English to Spanish)
2. **Practice Flow**: 
   - See verb in source language
   - Think of translation
   - Press **Enter** or **J** to show answer
   - Press **J** (correct) or **F** (incorrect) for self-assessment
   - Auto-advance to next card after 800ms
3. **Keyboard Shortcuts**:
   - **Enter/J**: Show answer (when hidden)
   - **J**: Mark correct (when answer shown)
   - **F**: Mark incorrect (when answer shown)
4. **Efficient Workflow**: Single-key navigation possible for confident learners (J → J → J...)

### Reference Mode
1. **Access Reference**: Click "📚" button (integrated in conjugation info area) for conjugation patterns
2. **View Patterns**: See comprehensive -AR, -ER, and -IR verb endings
3. **Learn Rules**: Understand present and preterite tense conjugation rules
4. **Quick Lookup**: Space-optimized design provides reference without losing screen space

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with custom animations and responsive design
- **State Management**: React Hooks with localStorage persistence
- **Development**: Hot Module Replacement (HMR)

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔧 Customization

### Adding New Conjugations
Edit `src/data/conjugationData.ts` to add new verb conjugations:
```typescript
{
  id: 'new-verb-yo-present',
  english: 'I do something',
  spanish: 'hago',
  verb: 'hacer',
  type: 'irregular',
  conjugation: 'er',
  person: 'yo',
  tense: 'present',
  mastered: false,
  practiceCount: 0,
  correctCount: 0,
  lastPracticed?: number  // timestamp for spaced repetition
}
```

### Styling
Modify `src/App.css` to customize colors, animations, and layout.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
# Add to package.json scripts
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/davidp314/spanish/issues) page
2. Create a new issue with detailed information
3. Include your browser, OS, and steps to reproduce

## 🎉 Acknowledgments

- Built with modern web technologies
- Designed for optimal learning experience with spaced repetition
- Inspired by language learning best practices

---

**Happy Learning! 🎓🇪🇸**
