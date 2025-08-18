export interface Conjugation {
  id: string;
  english: string;
  spanish: string;
  verb: string;
  type: 'regular' | 'irregular';
  conjugation: 'ar' | 'er' | 'ir';
  person: 'yo' | 'tú' | 'él/ella/usted' | 'nosotros' | 'ellos/ellas/ustedes';
  tense: 'present' | 'preterite';
  mastered: boolean;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lastPracticed?: number; // timestamp for spaced repetition
  practiceCount: number;
  correctCount: number;
}

export interface VerbSet {
  id: string;
  name: string;
  description: string;
  conjugations: Conjugation[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

// Present tense conjugations
export const presentTenseConjugations: Conjugation[] = [
  // Regular -ar verbs: hablar (Present)
  { id: 'hablar-yo-present', english: 'I speak', spanish: 'hablo', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'hablar-tu-present', english: 'you speak (informal, singular)', spanish: 'hablas', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'hablar-el-present', english: 'he/she speaks, you speak (formal, singular)', spanish: 'habla', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'hablar-nosotros-present', english: 'we speak', spanish: 'hablamos', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'hablar-ellos-present', english: 'they speak, you speak (formal, plural)', spanish: 'hablan', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: caminar (Present)
  { id: 'caminar-yo-present', english: 'I walk', spanish: 'camino', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'caminar-tu-present', english: 'you walk (informal, singular)', spanish: 'caminas', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'caminar-el-present', english: 'he/she walks, you walk (formal, singular)', spanish: 'camina', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'caminar-nosotros-present', english: 'we walk', spanish: 'caminamos', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'caminar-ellos-present', english: 'they walk, you walk (formal, plural)', spanish: 'caminan', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: comer (Present)
  { id: 'comer-yo-present', english: 'I eat', spanish: 'como', verb: 'comer', type: 'regular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'comer-tu-present', english: 'you eat (informal, singular)', spanish: 'comes', verb: 'comer', type: 'regular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'comer-el-present', english: 'he/she eats, you eat (formal, singular)', spanish: 'come', verb: 'comer', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'comer-nosotros-present', english: 'we eat', spanish: 'comemos', verb: 'comer', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'comer-ellos-present', english: 'they eat, you eat (formal, plural)', spanish: 'comen', verb: 'comer', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },

  // Regular -ir verbs: vivir (Present)
  { id: 'vivir-yo-present', english: 'I live', spanish: 'vivo', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'vivir-tu-present', english: 'you live (informal, singular)', spanish: 'vives', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'vivir-el-present', english: 'he/she lives, you live (formal, singular)', spanish: 'vive', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'vivir-nosotros-present', english: 'we live', spanish: 'vivimos', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },
  { id: 'vivir-ellos-present', english: 'they live, you live (formal, plural)', spanish: 'viven', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, difficulty: 'beginner', practiceCount: 0, correctCount: 0 },

  // Irregular verbs: tener (Present)
  { id: 'tener-yo-present', english: 'I have', spanish: 'tengo', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'tener-tu-present', english: 'you have (informal, singular)', spanish: 'tienes', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'tener-el-present', english: 'he/she has, you have (formal, singular)', spanish: 'tiene', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'tener-nosotros-present', english: 'we have', spanish: 'tenemos', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'tener-ellos-present', english: 'they have, you have (formal, plural)', spanish: 'tienen', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },

  // Irregular verbs: estar (Present)
  { id: 'estar-yo-present', english: 'I am', spanish: 'estoy', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'estar-tu-present', english: 'you are (informal, singular)', spanish: 'estás', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'estar-el-present', english: 'he/she is, you are (formal, singular)', spanish: 'está', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'estar-nosotros-present', english: 'we are', spanish: 'estamos', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'estar-ellos-present', english: 'they are, you are (formal, plural)', spanish: 'están', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },

  // Irregular verbs: ir (Present)
  { id: 'ir-yo-present', english: 'I go', spanish: 'voy', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'ir-tu-present', english: 'you go (informal, singular)', spanish: 'vas', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'ir-el-present', english: 'he/she goes, you go (formal, singular)', spanish: 'va', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'ir-nosotros-present', english: 'we go', spanish: 'vamos', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'ir-ellos-present', english: 'they go, you go (formal, plural)', spanish: 'van', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 }
];

// Preterite tense conjugations
export const preteriteTenseConjugations: Conjugation[] = [
  // Regular -ar verbs: hablar (Preterite)
  { id: 'hablar-yo-preterite', english: 'I spoke', spanish: 'hablé', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'hablar-tu-preterite', english: 'you spoke (informal, singular)', spanish: 'hablaste', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'hablar-el-preterite', english: 'he/she spoke, you spoke (formal, singular)', spanish: 'habló', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'hablar-nosotros-preterite', english: 'we spoke', spanish: 'hablamos', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'hablar-ellos-preterite', english: 'they spoke, you spoke (formal, plural)', spanish: 'hablaron', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: comer (Preterite)
  { id: 'comer-yo-preterite', english: 'I ate', spanish: 'comí', verb: 'comer', type: 'regular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'comer-tu-preterite', english: 'you ate (informal, singular)', spanish: 'comiste', verb: 'comer', type: 'regular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'comer-el-preterite', english: 'he/she ate, you ate (formal, singular)', spanish: 'comió', verb: 'comer', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'comer-nosotros-preterite', english: 'we ate', spanish: 'comimos', verb: 'comer', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'comer-ellos-preterite', english: 'they ate, you ate (formal, plural)', spanish: 'comieron', verb: 'comer', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },

  // Regular -ir verbs: vivir (Preterite)
  { id: 'vivir-yo-preterite', english: 'I lived', spanish: 'viví', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'yo', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'vivir-tu-preterite', english: 'you lived (informal, singular)', spanish: 'viviste', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'tú', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'vivir-el-preterite', english: 'he/she lived, you lived (formal, singular)', spanish: 'vivió', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'él/ella/usted', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'vivir-nosotros-preterite', english: 'we lived', spanish: 'vivimos', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'nosotros', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 },
  { id: 'vivir-ellos-preterite', english: 'they lived, you lived (formal, plural)', spanish: 'vivieron', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, difficulty: 'intermediate', practiceCount: 0, correctCount: 0 }
];

// Combine all conjugations
export const allConjugations: Conjugation[] = [
  ...presentTenseConjugations,
  ...preteriteTenseConjugations
];

// Verb sets for different difficulty levels
export const verbSets: VerbSet[] = [
  {
    id: 'beginner',
    name: 'Beginner Verbs',
    description: 'Essential regular verbs in present tense',
    conjugations: presentTenseConjugations.filter(c => c.difficulty === 'beginner'),
    difficulty: 'beginner',
    tags: ['present', 'regular', 'essential']
  },
  {
    id: 'intermediate',
    name: 'Intermediate Verbs',
    description: 'Irregular verbs and preterite tense',
    conjugations: allConjugations.filter(c => c.difficulty === 'intermediate'),
    difficulty: 'intermediate',
    tags: ['irregular', 'preterite', 'advanced']
  },
  {
    id: 'all',
    name: 'All Verbs',
    description: 'Complete collection of all verb conjugations',
    conjugations: allConjugations,
    difficulty: 'advanced',
    tags: ['complete', 'all-tenses', 'comprehensive']
  }
];

// Helper functions for spaced repetition
export const getSpacedRepetitionInterval = (conjugation: Conjugation): number => {
  const accuracy = conjugation.practiceCount > 0 ? conjugation.correctCount / conjugation.practiceCount : 0;
  
  if (accuracy >= 0.9) return 7; // 1 week
  if (accuracy >= 0.7) return 3; // 3 days
  if (accuracy >= 0.5) return 1; // 1 day
  return 0; // Same day
};

export const shouldPractice = (conjugation: Conjugation): boolean => {
  if (!conjugation.lastPracticed) return true;
  
  const interval = getSpacedRepetitionInterval(conjugation);
  const daysSinceLastPractice = (Date.now() - conjugation.lastPracticed) / (1000 * 60 * 60 * 24);
  
  return daysSinceLastPractice >= interval;
};
