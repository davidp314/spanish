# Spanish Verb Master 🎓

An interactive React application designed to help you master Spanish verb conjugations through flashcards and spaced repetition learning.

## 🌟 Features

- **Interactive Flashcards**: Learn Spanish verb conjugations with flip cards
- **Comprehensive Verb Database**: Includes regular and irregular verbs in present and preterite tenses
- **Progress Tracking**: Monitor your learning progress with detailed statistics
- **Smart Shuffling**: Randomized card order to prevent memorization by position
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

## ⌨️ Keyboard Shortcuts

- **Spacebar**: Flip the current card
- **Right Arrow / N**: Move to next card
- **Left Arrow**: Move to previous card
- **M**: Mark current card as mastered
- **R**: Reset all progress
- **S**: Shuffle remaining cards
- **L**: Toggle language direction (Spanish/English first)

## 🎮 How to Use

1. **Start Learning**: Cards will show English prompts by default
2. **Flip Cards**: Click on a card or press spacebar to see the Spanish conjugation
3. **Mark Progress**: 
   - Click "Mastered" if you know the conjugation well
   - Click "Next" if you need more practice
4. **Track Progress**: Monitor your statistics at the bottom of the screen
5. **Shuffle**: Use the shuffle button to randomize card order
6. **Reset**: Use the reset button to start over when needed

## 🛠️ Technology Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom gradients
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📊 Features in Detail

### Progress Tracking
- Mastery percentage calculation
- Accuracy tracking
- Cards remaining counter
- Current card position

### Smart Learning
- Cards are automatically shuffled
- Only unmastered cards are shown
- Progress persistence across sessions
- Encouraging feedback messages

### User Experience
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Responsive design for all screen sizes
- Intuitive navigation

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
- Add more verb tenses (imperfect, future, etc.)
- Include more irregular verbs
- Add audio pronunciation
- Implement spaced repetition algorithm
- Add multiplayer/competitive features
- Create different difficulty levels

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
