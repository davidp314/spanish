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
  lastPracticed?: number; // timestamp for spaced repetition
  practiceCount: number;
  correctCount: number;
}

// Present tense conjugations
export const presentTenseConjugations: Conjugation[] = [
  // Regular -ar verbs: hablar (Present)
  { id: 'hablar-yo-present', english: 'I speak', spanish: 'hablo', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hablar-tu-present', english: 'you speak (informal, singular)', spanish: 'hablas', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hablar-el-present', english: 'he/she speaks, you speak (formal, singular)', spanish: 'habla', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hablar-nosotros-present', english: 'we speak', spanish: 'hablamos', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hablar-ellos-present', english: 'they speak, you speak (formal, plural)', spanish: 'hablan', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: caminar (Present)
  { id: 'caminar-yo-present', english: 'I walk', spanish: 'camino', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caminar-tu-present', english: 'you walk (informal, singular)', spanish: 'caminas', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caminar-el-present', english: 'he/she walks, you walk (formal, singular)', spanish: 'camina', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caminar-nosotros-present', english: 'we walk', spanish: 'caminamos', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caminar-ellos-present', english: 'they walk, you walk (formal, plural)', spanish: 'caminan', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: comer (Present)
  { id: 'comer-yo-present', english: 'I eat', spanish: 'como', verb: 'comer', type: 'regular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'comer-tu-present', english: 'you eat (informal, singular)', spanish: 'comes', verb: 'comer', type: 'regular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'comer-el-present', english: 'he/she eats, you eat (formal, singular)', spanish: 'come', verb: 'comer', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'comer-nosotros-present', english: 'we eat', spanish: 'comemos', verb: 'comer', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'comer-ellos-present', english: 'they eat, you eat (formal, plural)', spanish: 'comen', verb: 'comer', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: beber (Present)
  { id: 'beber-yo-present', english: 'I drink', spanish: 'bebo', verb: 'beber', type: 'regular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'beber-tu-present', english: 'you drink (informal, singular)', spanish: 'bebes', verb: 'beber', type: 'regular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'beber-el-present', english: 'he/she drinks, you drink (formal, singular)', spanish: 'bebe', verb: 'beber', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'beber-nosotros-present', english: 'we drink', spanish: 'bebemos', verb: 'beber', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'beber-ellos-present', english: 'they drink, you drink (formal, plural)', spanish: 'beben', verb: 'beber', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ir verbs: vivir (Present)
  { id: 'vivir-yo-present', english: 'I live', spanish: 'vivo', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'vivir-tu-present', english: 'you live (informal, singular)', spanish: 'vives', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'vivir-el-present', english: 'he/she lives, you live (formal, singular)', spanish: 'vive', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'vivir-nosotros-present', english: 'we live', spanish: 'vivimos', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'vivir-ellos-present', english: 'they live, you live (formal, plural)', spanish: 'viven', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ir verbs: escribir (Present)
  { id: 'escribir-yo-present', english: 'I write', spanish: 'escribo', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'escribir-tu-present', english: 'you write (informal, singular)', spanish: 'escribes', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'escribir-el-present', english: 'he/she writes, you write (formal, singular)', spanish: 'escribe', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'escribir-nosotros-present', english: 'we write', spanish: 'escribimos', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'escribir-ellos-present', english: 'they write, you write (formal, plural)', spanish: 'escriben', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: tener (Present)
  { id: 'tener-yo-present', english: 'I have', spanish: 'tengo', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tener-tu-present', english: 'you have (informal, singular)', spanish: 'tienes', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tener-el-present', english: 'he/she has, you have (formal, singular)', spanish: 'tiene', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tener-nosotros-present', english: 'we have', spanish: 'tenemos', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tener-ellos-present', english: 'they have, you have (formal, plural)', spanish: 'tienen', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: estar (Present)
  { id: 'estar-yo-present', english: 'I am', spanish: 'estoy', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'estar-tu-present', english: 'you are (informal, singular)', spanish: 'estás', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'estar-el-present', english: 'he/she is, you are (formal, singular)', spanish: 'está', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'estar-nosotros-present', english: 'we are', spanish: 'estamos', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'estar-ellos-present', english: 'they are, you are (formal, plural)', spanish: 'están', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: ir (Present)
  { id: 'ir-yo-present', english: 'I go', spanish: 'voy', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ir-tu-present', english: 'you go (informal, singular)', spanish: 'vas', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ir-el-present', english: 'he/she goes, you go (formal, singular)', spanish: 'va', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ir-nosotros-present', english: 'we go', spanish: 'vamos', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ir-ellos-present', english: 'they go, you go (formal, plural)', spanish: 'van', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: mentir (Present)
  { id: 'mentir-yo-present', english: 'I lie', spanish: 'miento', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mentir-tu-present', english: 'you lie (informal, singular)', spanish: 'mientes', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mentir-el-present', english: 'he/she lies, you lie (formal, singular)', spanish: 'miente', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mentir-nosotros-present', english: 'we lie', spanish: 'mentimos', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mentir-ellos-present', english: 'they lie, you lie (formal, plural)', spanish: 'mienten', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: leer (Present)
  { id: 'leer-yo-present', english: 'I read', spanish: 'leo', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'leer-tu-present', english: 'you read (informal, singular)', spanish: 'lees', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'leer-el-present', english: 'he/she reads, you read (formal, singular)', spanish: 'lee', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'leer-nosotros-present', english: 'we read', spanish: 'leemos', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'leer-ellos-present', english: 'they read, you read (formal, plural)', spanish: 'leen', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: poner (Present)
  { id: 'poner-yo-present', english: 'I put', spanish: 'pongo', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poner-tu-present', english: 'you put (informal, singular)', spanish: 'pones', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poner-el-present', english: 'he/she puts, you put (formal, singular)', spanish: 'pone', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poner-nosotros-present', english: 'we put', spanish: 'ponemos', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poner-ellos-present', english: 'they put, you put (formal, plural)', spanish: 'ponen', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: dejar (Present)
  { id: 'dejar-yo-present', english: 'I leave/let', spanish: 'dejo', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-tu-present', english: 'you leave/let (informal, singular)', spanish: 'dejas', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-el-present', english: 'he/she leaves/lets, you leave/let (formal, singular)', spanish: 'deja', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-nosotros-present', english: 'we leave/let', spanish: 'dejamos', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-ellos-present', english: 'they leave/let, you leave/let (formal, plural)', spanish: 'dejan', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: decir (Present)
  { id: 'decir-yo-present', english: 'I say/tell', spanish: 'digo', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'decir-tu-present', english: 'you say/tell (informal, singular)', spanish: 'dices', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'decir-el-present', english: 'he/she says/tells, you say/tell (formal, singular)', spanish: 'dice', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'decir-nosotros-present', english: 'we say/tell', spanish: 'decimos', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'decir-ellos-present', english: 'they say/tell, you say/tell (formal, plural)', spanish: 'dicen', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: poder (Present)
  { id: 'poder-yo-present', english: 'I can/am able to', spanish: 'puedo', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poder-tu-present', english: 'you can/are able to (informal, singular)', spanish: 'puedes', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poder-el-present', english: 'he/she can/is able to, you can/are able to (formal, singular)', spanish: 'puede', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poder-nosotros-present', english: 'we can/are able to', spanish: 'podemos', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poder-ellos-present', english: 'they can/are able to, you can/are able to (formal, plural)', spanish: 'pueden', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 }
];

// Preterite tense conjugations
export const preteriteTenseConjugations: Conjugation[] = [
  // Regular -ar verbs: hablar (Preterite)
  { id: 'hablar-yo-preterite', english: 'I spoke', spanish: 'hablé', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hablar-tu-preterite', english: 'you spoke (informal, singular)', spanish: 'hablaste', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hablar-el-preterite', english: 'he/she spoke, you spoke (formal, singular)', spanish: 'habló', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hablar-nosotros-preterite', english: 'we spoke', spanish: 'hablamos', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hablar-ellos-preterite', english: 'they spoke, you spoke (formal, plural)', spanish: 'hablaron', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: comer (Preterite)
  { id: 'comer-yo-preterite', english: 'I ate', spanish: 'comí', verb: 'comer', type: 'regular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'comer-tu-preterite', english: 'you ate (informal, singular)', spanish: 'comiste', verb: 'comer', type: 'regular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'comer-el-preterite', english: 'he/she ate, you ate (formal, singular)', spanish: 'comió', verb: 'comer', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'comer-nosotros-preterite', english: 'we ate', spanish: 'comimos', verb: 'comer', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'comer-ellos-preterite', english: 'they ate, you ate (formal, plural)', spanish: 'comieron', verb: 'comer', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ir verbs: vivir (Preterite)
  { id: 'vivir-yo-preterite', english: 'I lived', spanish: 'viví', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'vivir-tu-preterite', english: 'you lived (informal, singular)', spanish: 'viviste', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'vivir-el-preterite', english: 'he/she lived, you lived (formal, singular)', spanish: 'vivió', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'vivir-nosotros-preterite', english: 'we lived', spanish: 'vivimos', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'vivir-ellos-preterite', english: 'they lived, you lived (formal, plural)', spanish: 'vivieron', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: beber (Preterite)
  { id: 'beber-yo-preterite', english: 'I drank', spanish: 'bebí', verb: 'beber', type: 'regular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'beber-tu-preterite', english: 'you drank (informal, singular)', spanish: 'bebiste', verb: 'beber', type: 'regular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'beber-el-preterite', english: 'he/she drank, you drank (formal, singular)', spanish: 'bebió', verb: 'beber', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'beber-nosotros-preterite', english: 'we drank', spanish: 'bebimos', verb: 'beber', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'beber-ellos-preterite', english: 'they drank, you drank (formal, plural)', spanish: 'bebieron', verb: 'beber', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ir verbs: escribir (Preterite)
  { id: 'escribir-yo-preterite', english: 'I wrote', spanish: 'escribí', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'escribir-tu-preterite', english: 'you wrote (informal, singular)', spanish: 'escribiste', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'escribir-el-preterite', english: 'he/she wrote, you wrote (formal, singular)', spanish: 'escribió', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'escribir-nosotros-preterite', english: 'we wrote', spanish: 'escribimos', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'escribir-ellos-preterite', english: 'they wrote, you wrote (formal, plural)', spanish: 'escribieron', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: tener (Preterite)
  { id: 'tener-yo-preterite', english: 'I had', spanish: 'tuve', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tener-tu-preterite', english: 'you had (informal, singular)', spanish: 'tuviste', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tener-el-preterite', english: 'he/she had, you had (formal, singular)', spanish: 'tuvo', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tener-nosotros-preterite', english: 'we had', spanish: 'tuvimos', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tener-ellos-preterite', english: 'they had, you had (formal, plural)', spanish: 'tuvieron', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: estar (Preterite)
  { id: 'estar-yo-preterite', english: 'I was', spanish: 'estuve', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'estar-tu-preterite', english: 'you were (informal, singular)', spanish: 'estuviste', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'estar-el-preterite', english: 'he/she was, you were (formal, singular)', spanish: 'estuvo', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'estar-nosotros-preterite', english: 'we were', spanish: 'estuvimos', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'estar-ellos-preterite', english: 'they were, you were (formal, plural)', spanish: 'estuvieron', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: ir (Preterite)
  { id: 'ir-yo-preterite', english: 'I went', spanish: 'fui', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ir-tu-preterite', english: 'you went (informal, singular)', spanish: 'fuiste', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ir-el-preterite', english: 'he/she went, you went (formal, singular)', spanish: 'fue', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ir-nosotros-preterite', english: 'we went', spanish: 'fuimos', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ir-ellos-preterite', english: 'they went, you went (formal, plural)', spanish: 'fueron', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 }
];

// Combine all conjugations
export const allConjugations: Conjugation[] = [
  ...presentTenseConjugations,
  ...preteriteTenseConjugations
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
