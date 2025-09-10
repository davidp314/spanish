import type { Conjugation } from '../data/conjugationData';

// Helper function to get unique verbs from all conjugations
export const getUniqueVerbs = (allConjugations: Conjugation[]): string[] => {
  const uniqueVerbs = new Set<string>();
  allConjugations.forEach(conjugation => uniqueVerbs.add(conjugation.verb));
  return Array.from(uniqueVerbs).sort();
};

// Helper function to get unique verbs with their English translations
export const getVerbTranslations = (allConjugations: Conjugation[]): Array<{verb: string, english: string, spanish: string}> => {
  const verbMap = new Map<string, {english: string, spanish: string}>();
  
  allConjugations.forEach(conjugation => {
    if (!verbMap.has(conjugation.verb)) {
      // Extract base English infinitive from the first person conjugation
      const englishInfinitive = conjugation.english
        .replace(/^I\s+/, 'to ')
        .replace(/^you\s+/, 'to ')
        .replace(/^he\/she\s+/, 'to ')
        .replace(/^we\s+/, 'to ')
        .replace(/^they\s+/, 'to ')
        .replace(/\s+\(.*?\)/, ''); // Remove parenthetical explanations
      
      verbMap.set(conjugation.verb, {
        english: englishInfinitive,
        spanish: conjugation.verb
      });
    }
  });
  
  return Array.from(verbMap.entries()).map(([verb, translations]) => ({
    verb,
    english: translations.english,
    spanish: translations.spanish
  }));
};