# Spanish Verb Master 🎯

A modern React application for learning Spanish verb conjugations through interactive flashcards and spaced repetition.

## ✨ Features

### 🎓 Learning Modes
- **Browse Mode**: Progress dashboard with smart learning algorithm and verb selection
- **Practice Mode**: Interactive flashcards with dual practice system (Quiz/Mastery) and spaced repetition
- **Reference Mode**: Comprehensive conjugation pattern reference for quick lookup
- **Progress Tracking**: Monitor mastery of individual conjugations over time

### 🔍 Advanced Filtering
- Filter by verb type (Regular/Irregular), tense (Present/Preterite), difficulty, and mastery status
- Search functionality across Spanish, English, and verb roots
- Real-time filtering with instant results

### 📊 Enhanced Progress Analytics
- Visual progress bar showing mastery percentage
- Practice statistics with accuracy tracking
- Spaced repetition system for optimal learning
- Local storage persistence for progress

### 🎨 Modern UI/UX
- Beautiful gradient designs and smooth animations
- Responsive layout optimized for all device sizes
- Interactive 3D flip animations for flashcards
- Compact, elegant practice mode design

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
│   │   ├── VerbCard.tsx      # Conjugation display component
│   │   ├── Flashcard.tsx     # Interactive flashcard component
│   │   └── ...
│   ├── data/
│   │   └── conjugationData.ts # Verb conjugation data and types
│   ├── App.tsx               # Main application component
│   ├── App.css               # Application styles
│   └── main.tsx              # Application entry point
├── public/                   # Static assets
├── start-dev.sh              # Development server startup script
└── README.md                 # This file
```

## 🎯 How to Use

### Browse Mode
1. **Select Verb Set**: Choose from Beginner, Intermediate, or All Verbs
2. **Filter & Search**: Use multiple filters and search to find specific conjugations
3. **View Details**: See person, tense, verb type, and difficulty information
4. **Track Progress**: Monitor mastery status and practice statistics

### Practice Mode
1. **Select Practice Options**: Choose ordering mode (Systematic/Random/Mixed) and practice type (Quiz/Mastery)
2. **Start Practice**: Click "🚀 Start Practice" to begin with conjugations prioritized by spaced repetition
3. **Answer Input**: Type Spanish answers before revealing correct responses
4. **Practice Types**:
   - **Quiz Mode**: Go through each conjugation once, then return to dashboard with results
   - **Mastery Mode**: Continue practicing until all conjugations are answered correctly

### Reference Mode
1. **Access Reference**: Click "📚 Reference" button for conjugation patterns
2. **View Patterns**: See comprehensive -AR, -ER, and -IR verb endings
3. **Learn Rules**: Understand present and preterite tense conjugation rules
4. **Quick Lookup**: Use as a reference while practicing or learning

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
  difficulty: 'intermediate',
  practiceCount: 0,
  correctCount: 0
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
