# Spanish Verb Master 🎯

A modern React application for learning Spanish verbs through interactive flashcards and progress tracking.

## ✨ Features

### 🎓 Learning Modes
- **Browse Mode**: View all verbs in a grid layout with filtering and search
- **Practice Mode**: Interactive flashcards with English-to-Spanish learning
- **Progress Tracking**: Monitor your mastery of verbs over time

### 🔍 Smart Filtering
- Filter by verb type (Regular/Irregular)
- Filter by mastery status (All/Mastered/Not Mastered)
- Search functionality for quick verb lookup
- Real-time filtering with instant results

### 📊 Progress Analytics
- Visual progress bar showing mastery percentage
- Statistics dashboard with key metrics
- Mastery indicators on individual verb cards
- Reset progress functionality

### 🎨 Modern UI/UX
- Beautiful gradient designs and smooth animations
- Responsive layout for all device sizes
- Interactive 3D flip animations for flashcards
- Intuitive navigation between modes

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
│   │   ├── VerbCard.tsx      # Individual verb display component
│   │   ├── Flashcard.tsx     # Interactive flashcard component
│   │   └── ...
│   ├── data/
│   │   └── verbs.ts          # Verb data and types
│   ├── App.tsx               # Main application component
│   ├── App.css               # Application styles
│   └── main.tsx              # Application entry point
├── public/                   # Static assets
├── start-dev.sh              # Development server startup script
└── README.md                 # This file
```

## 🎯 How to Use

### Browse Mode
1. **View Verbs**: See all available Spanish verbs in a grid layout
2. **Filter**: Use type and status filters to narrow down verbs
3. **Search**: Type to search for specific verbs
4. **Select**: Click on verbs to see detailed information
5. **Master**: Mark verbs as mastered with the star button

### Practice Mode
1. **Enter Practice**: Click "🎯 Practice Mode" button
2. **Study**: See English prompts on flashcard fronts
3. **Flip**: Click the card to reveal Spanish answers
4. **Progress**: Mark verbs as mastered during practice
5. **Navigate**: Use "Next Card" to continue learning

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with custom animations
- **State Management**: React Hooks (useState)
- **Development**: Hot Module Replacement (HMR)

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔧 Customization

### Adding New Verbs
Edit `src/data/verbs.ts` to add new verbs:
```typescript
{
  id: 'new-verb',
  spanish: 'nuevo',
  english: 'new',
  type: 'regular',
  mastered: false
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
- Designed for optimal learning experience
- Inspired by language learning best practices

---

**Happy Learning! 🎓🇪🇸**
