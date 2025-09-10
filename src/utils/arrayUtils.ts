import type { Conjugation } from '../data/conjugationData';

// Helper function to shuffle an array (Fisher-Yates algorithm)
export const shuffleArray = (array: Conjugation[]): Conjugation[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper function to order conjugations systematically (by verb, then tense, then person)
export const orderSystematically = (conjugations: Conjugation[]): Conjugation[] => {
  const personOrder = ['yo', 'tú', 'él/ella/usted', 'nosotros', 'ellos/ellas/ustedes'];
  const tenseOrder = ['present', 'preterite'];
  
  return conjugations.sort((a, b) => {
    // First sort by verb
    if (a.verb !== b.verb) {
      return a.verb.localeCompare(b.verb);
    }
    // Then by tense
    if (a.tense !== b.tense) {
      return tenseOrder.indexOf(a.tense) - tenseOrder.indexOf(b.tense);
    }
    // Then by person
    return personOrder.indexOf(a.person) - personOrder.indexOf(b.person);
  });
};