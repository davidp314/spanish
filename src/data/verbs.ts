export interface Verb {
  id: string;
  english: string;
  spanish: string;
  type: 'regular' | 'irregular';
  conjugation: 'ar' | 'er' | 'ir';
  mastered: boolean;
}

export const verbs: Verb[] = [
  // Regular -ar verbs
  {
    id: 'hablar',
    english: 'to speak',
    spanish: 'hablar',
    type: 'regular',
    conjugation: 'ar',
    mastered: false
  },
  {
    id: 'caminar',
    english: 'to walk',
    spanish: 'caminar',
    type: 'regular',
    conjugation: 'ar',
    mastered: false
  },
  
  // Regular -er verbs
  {
    id: 'comer',
    english: 'to eat',
    spanish: 'comer',
    type: 'regular',
    conjugation: 'er',
    mastered: false
  },
  {
    id: 'beber',
    english: 'to drink',
    spanish: 'beber',
    type: 'regular',
    conjugation: 'er',
    mastered: false
  },
  
  // Regular -ir verbs
  {
    id: 'vivir',
    english: 'to live',
    spanish: 'vivir',
    type: 'regular',
    conjugation: 'ir',
    mastered: false
  },
  {
    id: 'escribir',
    english: 'to write',
    spanish: 'escribir',
    type: 'regular',
    conjugation: 'ir',
    mastered: false
  },
  
  // Irregular verbs
  {
    id: 'tener',
    english: 'to have',
    spanish: 'tener',
    type: 'irregular',
    conjugation: 'er',
    mastered: false
  },
  {
    id: 'mentir',
    english: 'to lie',
    spanish: 'mentir',
    type: 'irregular',
    conjugation: 'ir',
    mastered: false
  },
  {
    id: 'leer',
    english: 'to read',
    spanish: 'leer',
    type: 'irregular',
    conjugation: 'er',
    mastered: false
  },
  {
    id: 'poner',
    english: 'to put',
    spanish: 'poner',
    type: 'irregular',
    conjugation: 'er',
    mastered: false
  },
  {
    id: 'dejar',
    english: 'to leave/let',
    spanish: 'dejar',
    type: 'irregular',
    conjugation: 'ar',
    mastered: false
  },
  {
    id: 'decir',
    english: 'to say/tell',
    spanish: 'decir',
    type: 'irregular',
    conjugation: 'ir',
    mastered: false
  },
  {
    id: 'estar',
    english: 'to be',
    spanish: 'estar',
    type: 'irregular',
    conjugation: 'ar',
    mastered: false
  },
  {
    id: 'poder',
    english: 'to be able to/can',
    spanish: 'poder',
    type: 'irregular',
    conjugation: 'er',
    mastered: false
  },
  {
    id: 'ir',
    english: 'to go',
    spanish: 'ir',
    type: 'irregular',
    conjugation: 'ir',
    mastered: false
  }
];

export const encouragingMessages = [
  "¡Excelente! You're on fire! 🔥",
  "¡Muy bien! You're crushing it! 💪",
  "¡Perfecto! You're a Spanish superstar! ⭐",
  "¡Increíble! You're making amazing progress! 🎉",
  "¡Fantástico! You're becoming fluent! 🌟",
  "¡Genial! You're absolutely killing it! 🚀",
  "¡Brillante! You're a language learning legend! 👑",
  "¡Maravilloso! You're unstoppable! 💫",
  "¡Extraordinario! You're a verb master! 🏆",
  "¡Sobresaliente! You're making this look easy! ✨"
];

export const funnyCriticism = [
  "¡Ay caramba! That was... interesting! 🤔",
  "¡Ups! I think you might need a coffee break! ☕",
  "¡Oh no! That was like watching a cat try to dance! 😸",
  "¡Madre mía! That attempt was... creative! 🎨",
  "¡Dios mío! That was a linguistic adventure! 🗺️",
  "¡Caray! That was unexpected... in a unique way! 🎭",
  "¡Vaya! That was like a Spanish word salad! 🥗",
  "¡Cielos! That was... well, at least you tried! 😅",
  "¡Santo cielo! That was a verb massacre! 💀",
  "¡Por favor! That was like watching a bull in a china shop! 🐂"
];

export const progressMessages = [
  "¡Felicidades! You've mastered another verb! 🎊",
  "¡Increíble progreso! You're getting stronger! 💪",
  "¡Excelente trabajo! You're building your vocabulary! 📚",
  "¡Maravilloso! You're becoming a verb virtuoso! 🎻",
  "¡Fantástico! You're conquering Spanish one verb at a time! ⚔️",
  "¡Brillante! You're creating linguistic magic! ✨",
  "¡Genial! You're turning into a Spanish superhero! 🦸‍♂️",
  "¡Extraordinario! You're a language learning legend! 👑",
  "¡Sobresaliente! You're making this look effortless! 🎯",
  "¡Perfecto! You're a verb vocabulary master! 🏆"
]; 