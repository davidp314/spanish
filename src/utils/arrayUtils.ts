import type { Conjugation } from '../data/conjugationData';
import { PERSON_ORDER, TENSE_ORDER } from '../types/practiceTypes';

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
  
  return conjugations.sort((a, b) => {
    // First sort by verb
    if (a.verb !== b.verb) {
      return a.verb.localeCompare(b.verb);
    }
    // Then by tense
    if (a.tense !== b.tense) {
      return TENSE_ORDER.indexOf(a.tense) - TENSE_ORDER.indexOf(b.tense);
    }
    // Then by person
    return PERSON_ORDER.indexOf(a.person) - PERSON_ORDER.indexOf(b.person);
  });
};