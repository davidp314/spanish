# Spanish Verb Master 🎓

An interactive React application designed to help you master Spanish verb conjugations through flashcards and spaced repetition learning. Now with customizable vocabulary sets and personalized learning paths!

## 🌟 Features

- **Interactive Flashcards**: Learn Spanish verb conjugations with flip cards
- **Customizable Vocabulary**: Choose which verbs to practice with flexible selection options
- **Predefined Learning Sets**: Start with curated verb sets for different skill levels
- **Comprehensive Verb Database**: Includes regular and irregular verbs in present and preterite tenses
- **Progress Tracking**: Monitor your learning progress with detailed statistics
- **Smart Shuffling**: Randomized card order to prevent memorization by position
- **Advanced Filtering**: Filter verbs by type, conjugation, tense, and search by name
- **Keyboard Shortcuts**: Quick navigation and actions for efficient learning
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Local Storage**: Your progress is automatically saved locally

## 🎯 Learning Content

The app includes conjugations for:

### Regular Verbs (-ar, -er, -ir)
- **Present Tense**: hablar, caminar, comer, beber, vivir, escribir
- **Preterite Tense**: All regular verb conjugations

### Irregular Verbs
- **Present Tense**: tener, mentir, leer, poner, dejar, decir, estar, poder, ir
- **Preterite Tense**: All irregular verb conjugations

### Conjugation Categories
- **Persons**: yo, tú, él/ella/usted, nosotros, ellos/ellas/ustedes
- **Tenses**: Present, Preterite
- **Verb Types**: Regular (-ar, -er, -ir), Irregular

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/spanish-verb-master.git
   cd spanish-verb-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to start learning!

## 🎮 How to Use

### First Time Setup
1. **Welcome Screen**: The app will guide you to select your learning content
2. **Choose Your Approach**:
   - **Quick Start**: Select a predefined set (e.g., "Beginner Present Tense")
   - **Custom Selection**: Pick individual verbs that interest you

### Learning Session
1. **Start Learning**: Cards will show English prompts by default
2. **Flip Cards**: Click on a card or press spacebar to see the Spanish conjugation
3. **Mark Progress**: 
   - Click "Mastered" if you know the conjugation well
   - Click "Next" if you need more practice
4. **Track Progress**: Monitor your statistics at the bottom of the screen
5. **Shuffle**: Use the shuffle button to randomize card order
6. **Change Verbs**: Use the "Change Verbs" button to modify your selection

### Verb Selection Options

#### Predefined Sets
- **Beginner Present Tense**: Essential present tense verbs for beginners
- **Intermediate Present Tense**: More challenging present tense verbs
- **Beginner Preterite Tense**: Essential preterite tense verbs for beginners
- **All Verbs**: Complete collection of all verbs and tenses

#### Individual Selection
- **Filter by Type**: Regular or irregular verbs
- **Filter by Conjugation**: -ar, -er, or -ir verbs
- **Filter by Tense**: Present or preterite
- **Search**: Find specific verbs by name or meaning
- **Bulk Actions**: Select or deselect all filtered verbs

## ⌨️ Keyboard Shortcuts

- **Spacebar**: Flip the current card
- **Right Arrow / N**: Move to next card
- **Left Arrow**: Move to previous card
- **M**: Mark current card as mastered
- **R**: Reset all progress
- **S**: Shuffle remaining cards
- **L**: Toggle language direction (Spanish/English first)
- **H**: Show conjugation reference
- **?**: Show keyboard shortcuts help

### Getting Help
- **Floating Help Button**: Click the subtle "?" button in the bottom-right corner
- **Keyboard Shortcut**: Press `?` anytime to see all available shortcuts
- **Help Modal**: Displays all shortcuts organized by category with pro tips

## 🛠️ Technology Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom gradients
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📊 Features in Detail

### Vocabulary Management
- **Flexible Selection**: Choose exactly which verbs to practice
- **Predefined Sets**: Curated collections for different skill levels
- **Advanced Filtering**: Multiple filter options for precise selection
- **Search Functionality**: Find verbs quickly by name or meaning
- **Progress Per Set**: Track mastery separately for different verb selections

### Progress Tracking
- Mastery percentage calculation
- Accuracy tracking
- Cards remaining counter
- Current card position
- Progress persistence per verb set

### Smart Learning
- Cards are automatically shuffled
- Only unmastered cards are shown
- Progress persistence across sessions
- Encouraging feedback messages
- Personalized learning paths

### User Experience
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Responsive design for all screen sizes
- Intuitive navigation
- Visual feedback for selections

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/spanish-verb-master",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Ideas for Contributions
- Add more verb tenses (imperfect, future, subjunctive, etc.)
- Include more irregular verbs and verb families
- Add audio pronunciation for conjugations
- Implement spaced repetition algorithm
- Add multiplayer/competitive features
- Create different difficulty levels
- Add verb conjugation rules explanations
- Implement custom verb set creation and sharing
- Add progress analytics and learning insights
- Include verb usage examples in context

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Spanish language learning community
- React and TypeScript communities
- Open source contributors

## 📞 Support

If you have any questions or suggestions, please:
- Open an issue on GitHub
- Contact the maintainers
- Check the documentation

---

**Happy Learning! ¡Feliz aprendizaje! 🎉**
