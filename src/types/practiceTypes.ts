// Practice mode types - how conjugations are ordered
export type PracticeMode = 'systematic' | 'random1' | 'random2';

// Practice type definitions - how practice completion is handled
export type PracticeType = 'quiz' | 'mastery' | 'translation';

// Translation direction for translation quiz
export type TranslationDirection = 'es-en' | 'en-es';

// Conjugation ordering constants
export const PERSON_ORDER = ['yo', 'tú', 'él/ella/usted', 'nosotros', 'ellos/ellas/ustedes'] as const;
export const TENSE_ORDER = ['present', 'preterite'] as const;

// Practice mode labels
export const PRACTICE_MODE_LABELS = {
  systematic: '🔄 Systematic',
  random1: '🎲 Random Mixed', 
  random2: '🎯 Mixed Systematic'
} as const;

// Practice mode descriptions
export const PRACTICE_MODE_DESCRIPTIONS = {
  systematic: '🔄 Priority + Systematic',
  random1: '🎲 Priority + Smart Random',
  random2: '🎯 Priority + Mixed Systematic'
} as const;