export interface Conjugation {
  id: string;
  english: string;
  spanish: string;
  verb: string;
  type: 'regular' | 'irregular';
  conjugation: 'ar' | 'er' | 'ir';
  person: 'yo' | 'tú' | 'él/ella/usted' | 'nosotros' | 'ellos/ellas/ustedes';
  tense: 'present' | 'preterite' | 'imperfect';
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

  // Regular -ar verbs: dejar (Present)
  { id: 'dejar-yo-present', english: 'I leave/let', spanish: 'dejo', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-tu-present', english: 'you leave/let (informal, singular)', spanish: 'dejas', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-el-present', english: 'he/she leaves/lets, you leave/let (formal, singular)', spanish: 'deja', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-nosotros-present', english: 'we leave/let', spanish: 'dejamos', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-ellos-present', english: 'they leave/let, you leave/let (formal, plural)', spanish: 'dejan', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

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
  { id: 'poder-ellos-present', english: 'they can/are able to, you can/are able to (formal, plural)', spanish: 'pueden', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: querer (Present)
  { id: 'querer-yo-present', english: 'I want', spanish: 'quiero', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'querer-tu-present', english: 'you want (informal, singular)', spanish: 'quieres', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'querer-el-present', english: 'he/she wants, you want (formal, singular)', spanish: 'quiere', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'querer-nosotros-present', english: 'we want', spanish: 'queremos', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'querer-ellos-present', english: 'they want, you want (formal, plural)', spanish: 'quieren', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: traer (Present)
  { id: 'traer-yo-present', english: 'I bring', spanish: 'traigo', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'traer-tu-present', english: 'you bring (informal, singular)', spanish: 'traes', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'traer-el-present', english: 'he/she brings, you bring (formal, singular)', spanish: 'trae', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'traer-nosotros-present', english: 'we bring', spanish: 'traemos', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'traer-ellos-present', english: 'they bring, you bring (formal, plural)', spanish: 'traen', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: saber (Present)
  { id: 'saber-yo-present', english: 'I know', spanish: 'sé', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'saber-tu-present', english: 'you know (informal, singular)', spanish: 'sabes', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'saber-el-present', english: 'he/she knows, you know (formal, singular)', spanish: 'sabe', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'saber-nosotros-present', english: 'we know', spanish: 'sabemos', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'saber-ellos-present', english: 'they know, you know (formal, plural)', spanish: 'saben', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: caerse (Present)
  { id: 'caerse-yo-present', english: 'I fall down', spanish: 'me caigo', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caerse-tu-present', english: 'you fall down (informal, singular)', spanish: 'te caes', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caerse-el-present', english: 'he/she falls down, you fall down (formal, singular)', spanish: 'se cae', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caerse-nosotros-present', english: 'we fall down', spanish: 'nos caemos', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caerse-ellos-present', english: 'they fall down, you fall down (formal, plural)', spanish: 'se caen', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: venir (Present)
  { id: 'venir-yo-present', english: 'I come', spanish: 'vengo', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'venir-tu-present', english: 'you come (informal, singular)', spanish: 'vienes', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'venir-el-present', english: 'he/she comes, you come (formal, singular)', spanish: 'viene', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'venir-nosotros-present', english: 'we come', spanish: 'venimos', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'venir-ellos-present', english: 'they come, you come (formal, plural)', spanish: 'vienen', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular verbs: andar (Present)
  { id: 'andar-yo-present', english: 'I walk', spanish: 'ando', verb: 'andar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'andar-tu-present', english: 'you walk (informal, singular)', spanish: 'andas', verb: 'andar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'andar-el-present', english: 'he/she walks, you walk (formal, singular)', spanish: 'anda', verb: 'andar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'andar-nosotros-present', english: 'we walk', spanish: 'andamos', verb: 'andar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'andar-ellos-present', english: 'they walk, you walk (formal, plural)', spanish: 'andan', verb: 'andar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular verbs: buscar (Present)
  { id: 'buscar-yo-present', english: 'I look for', spanish: 'busco', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'buscar-tu-present', english: 'you look for (informal, singular)', spanish: 'buscas', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'buscar-el-present', english: 'he/she looks for, you look for (formal, singular)', spanish: 'busca', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'buscar-nosotros-present', english: 'we look for', spanish: 'buscamos', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'buscar-ellos-present', english: 'they look for, you look for (formal, plural)', spanish: 'buscan', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular verbs: mirar (Present)
  { id: 'mirar-yo-present', english: 'I look at', spanish: 'miro', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mirar-tu-present', english: 'you look at (informal, singular)', spanish: 'miras', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mirar-el-present', english: 'he/she looks at, you look at (formal, singular)', spanish: 'mira', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mirar-nosotros-present', english: 'we look at', spanish: 'miramos', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mirar-ellos-present', english: 'they look at, you look at (formal, plural)', spanish: 'miran', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: encontrar (Present) - stem change o→ue
  { id: 'encontrar-yo-present', english: 'I find', spanish: 'encuentro', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'encontrar-tu-present', english: 'you find (informal, singular)', spanish: 'encuentras', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'encontrar-el-present', english: 'he/she finds, you find (formal, singular)', spanish: 'encuentra', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'encontrar-nosotros-present', english: 'we find', spanish: 'encontramos', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'encontrar-ellos-present', english: 'they find, you find (formal, plural)', spanish: 'encuentran', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular verbs: esconder (Present)
  { id: 'esconder-yo-present', english: 'I hide', spanish: 'escondo', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'esconder-tu-present', english: 'you hide (informal, singular)', spanish: 'escondes', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'esconder-el-present', english: 'he/she hides, you hide (formal, singular)', spanish: 'esconde', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'esconder-nosotros-present', english: 'we hide', spanish: 'escondemos', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'esconder-ellos-present', english: 'they hide, you hide (formal, plural)', spanish: 'esconden', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular verbs: llevar (Present)
  { id: 'llevar-yo-present', english: 'I carry/wear/take', spanish: 'llevo', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'llevar-tu-present', english: 'you carry/wear/take (informal, singular)', spanish: 'llevas', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'llevar-el-present', english: 'he/she carries/wears/takes, you carry/wear/take (formal, singular)', spanish: 'lleva', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'llevar-nosotros-present', english: 'we carry/wear/take', spanish: 'llevamos', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'llevar-ellos-present', english: 'they carry/wear/take, you carry/wear/take (formal, plural)', spanish: 'llevan', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular verbs: terminar (Present)
  { id: 'terminar-yo-present', english: 'I finish/end', spanish: 'termino', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'terminar-tu-present', english: 'you finish/end (informal, singular)', spanish: 'terminas', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'terminar-el-present', english: 'he/she finishes/ends, you finish/end (formal, singular)', spanish: 'termina', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'terminar-nosotros-present', english: 'we finish/end', spanish: 'terminamos', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'terminar-ellos-present', english: 'they finish/end, you finish/end (formal, plural)', spanish: 'terminan', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: hacer (Present)
  { id: 'hacer-yo-present', english: 'I make/do', spanish: 'hago', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hacer-tu-present', english: 'you make/do (informal, singular)', spanish: 'haces', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hacer-el-present', english: 'he/she makes/does, you make/do (formal, singular)', spanish: 'hace', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hacer-nosotros-present', english: 'we make/do', spanish: 'hacemos', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hacer-ellos-present', english: 'they make/do, you make/do (formal, plural)', spanish: 'hacen', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: ser (Present)
  { id: 'ser-yo-present', english: 'I am', spanish: 'soy', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ser-tu-present', english: 'you are (informal, singular)', spanish: 'eres', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ser-el-present', english: 'he/she is, you are (formal, singular)', spanish: 'es', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ser-nosotros-present', english: 'we are', spanish: 'somos', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ser-ellos-present', english: 'they are, you are (formal, plural)', spanish: 'son', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: ver (Present)
  { id: 'ver-yo-present', english: 'I see', spanish: 'veo', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ver-tu-present', english: 'you see (informal, singular)', spanish: 'ves', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ver-el-present', english: 'he/she sees, you see (formal, singular)', spanish: 've', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ver-nosotros-present', english: 'we see', spanish: 'vemos', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ver-ellos-present', english: 'they see, you see (formal, plural)', spanish: 'ven', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: deber (Present)
  { id: 'deber-yo-present', english: 'I owe/must', spanish: 'debo', verb: 'deber', type: 'regular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'deber-tu-present', english: 'you owe/must (informal, singular)', spanish: 'debes', verb: 'deber', type: 'regular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'deber-el-present', english: 'he/she owes/must, you owe/must (formal, singular)', spanish: 'debe', verb: 'deber', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'deber-nosotros-present', english: 'we owe/must', spanish: 'debemos', verb: 'deber', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'deber-ellos-present', english: 'they owe/must, you owe/must (formal, plural)', spanish: 'deben', verb: 'deber', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: preguntar (Present)
  { id: 'preguntar-yo-present', english: 'I ask', spanish: 'pregunto', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'preguntar-tu-present', english: 'you ask (informal, singular)', spanish: 'preguntas', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'preguntar-el-present', english: 'he/she asks, you ask (formal, singular)', spanish: 'pregunta', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'preguntar-nosotros-present', english: 'we ask', spanish: 'preguntamos', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'preguntar-ellos-present', english: 'they ask, you ask (formal, plural)', spanish: 'preguntan', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: pedir (Present)
  { id: 'pedir-yo-present', english: 'I ask for/request', spanish: 'pido', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pedir-tu-present', english: 'you ask for/request (informal, singular)', spanish: 'pides', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pedir-el-present', english: 'he/she asks for/requests, you ask for/request (formal, singular)', spanish: 'pide', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pedir-nosotros-present', english: 'we ask for/request', spanish: 'pedimos', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pedir-ellos-present', english: 'they ask for/request, you ask for/request (formal, plural)', spanish: 'piden', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: pensar (Present)
  { id: 'pensar-yo-present', english: 'I think', spanish: 'pienso', verb: 'pensar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pensar-tu-present', english: 'you think (informal, singular)', spanish: 'piensas', verb: 'pensar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pensar-el-present', english: 'he/she thinks, you think (formal, singular)', spanish: 'piensa', verb: 'pensar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pensar-nosotros-present', english: 'we think', spanish: 'pensamos', verb: 'pensar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pensar-ellos-present', english: 'they think, you think (formal, plural)', spanish: 'piensan', verb: 'pensar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: creer (Present)
  { id: 'creer-yo-present', english: 'I believe', spanish: 'creo', verb: 'creer', type: 'regular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'creer-tu-present', english: 'you believe (informal, singular)', spanish: 'crees', verb: 'creer', type: 'regular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'creer-el-present', english: 'he/she believes, you believe (formal, singular)', spanish: 'cree', verb: 'creer', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'creer-nosotros-present', english: 'we believe', spanish: 'creemos', verb: 'creer', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'creer-ellos-present', english: 'they believe, you believe (formal, plural)', spanish: 'creen', verb: 'creer', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -ar verbs: jugar (u→ue stem change) (Present)
  { id: 'jugar-yo-present', english: 'I play', spanish: 'juego', verb: 'jugar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'jugar-tu-present', english: 'you play (informal, singular)', spanish: 'juegas', verb: 'jugar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'jugar-el-present', english: 'he/she plays, you play (formal, singular)', spanish: 'juega', verb: 'jugar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'jugar-nosotros-present', english: 'we play', spanish: 'jugamos', verb: 'jugar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'jugar-ellos-present', english: 'they play, you play (formal, plural)', spanish: 'juegan', verb: 'jugar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: tocar (Present)
  { id: 'tocar-yo-present', english: 'I touch, I play (instrument)', spanish: 'toco', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tocar-tu-present', english: 'you touch, you play (instrument) (informal, singular)', spanish: 'tocas', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tocar-el-present', english: 'he/she touches, plays (instrument), you touch, play (instrument) (formal, singular)', spanish: 'toca', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tocar-nosotros-present', english: 'we touch, we play (instrument)', spanish: 'tocamos', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tocar-ellos-present', english: 'they touch, play (instrument), you touch, play (instrument) (formal, plural)', spanish: 'tocan', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: intentar (Present)
  { id: 'intentar-yo-present', english: 'I try', spanish: 'intento', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'intentar-tu-present', english: 'you try (informal, singular)', spanish: 'intentas', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'intentar-el-present', english: 'he/she tries, you try (formal, singular)', spanish: 'intenta', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'intentar-nosotros-present', english: 'we try', spanish: 'intentamos', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'intentar-ellos-present', english: 'they try, you try (formal, plural)', spanish: 'intentan', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -ar verbs: probar (o→ue stem change) (Present)
  { id: 'probar-yo-present', english: 'I taste, I try', spanish: 'pruebo', verb: 'probar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'probar-tu-present', english: 'you taste, you try (informal, singular)', spanish: 'pruebas', verb: 'probar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'probar-el-present', english: 'he/she tastes, tries, you taste, try (formal, singular)', spanish: 'prueba', verb: 'probar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'probar-nosotros-present', english: 'we taste, we try', spanish: 'probamos', verb: 'probar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'probar-ellos-present', english: 'they taste, try, you taste, try (formal, plural)', spanish: 'prueban', verb: 'probar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: tratar (Present)
  { id: 'tratar-yo-present', english: 'I treat, I try', spanish: 'trato', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tratar-tu-present', english: 'you treat, you try (informal, singular)', spanish: 'tratas', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tratar-el-present', english: 'he/she treats, tries, you treat, try (formal, singular)', spanish: 'trata', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tratar-nosotros-present', english: 'we treat, we try', spanish: 'tratamos', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tratar-ellos-present', english: 'they treat, try, you treat, try (formal, plural)', spanish: 'tratan', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -er verbs: soler (Present)
  { id: 'soler-yo-present', english: 'I usually do', spanish: 'suelo', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'soler-tu-present', english: 'you usually do (informal, singular)', spanish: 'sueles', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'soler-el-present', english: 'he/she usually does, you usually do (formal, singular)', spanish: 'suele', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'soler-nosotros-present', english: 'we usually do', spanish: 'solemos', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'soler-ellos-present', english: 'they usually do, you usually do (formal, plural)', spanish: 'suelen', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 }
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
  { id: 'ir-ellos-preterite', english: 'they went, you went (formal, plural)', spanish: 'fueron', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: caminar (Preterite)
  { id: 'caminar-yo-preterite', english: 'I walked', spanish: 'caminé', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caminar-tu-preterite', english: 'you walked (informal, singular)', spanish: 'caminaste', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caminar-el-preterite', english: 'he/she walked, you walked (formal, singular)', spanish: 'caminó', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caminar-nosotros-preterite', english: 'we walked', spanish: 'caminamos', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caminar-ellos-preterite', english: 'they walked, you walked (formal, plural)', spanish: 'caminaron', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: decir (Preterite)
  { id: 'decir-yo-preterite', english: 'I said/told', spanish: 'dije', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'decir-tu-preterite', english: 'you said/told (informal, singular)', spanish: 'dijiste', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'decir-el-preterite', english: 'he/she said/told, you said/told (formal, singular)', spanish: 'dijo', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'decir-nosotros-preterite', english: 'we said/told', spanish: 'dijimos', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'decir-ellos-preterite', english: 'they said/told, you said/told (formal, plural)', spanish: 'dijeron', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: dejar (Preterite) - Note: dejar is actually regular, not irregular
  { id: 'dejar-yo-preterite', english: 'I left/let', spanish: 'dejé', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-tu-preterite', english: 'you left/let (informal, singular)', spanish: 'dejaste', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-el-preterite', english: 'he/she left/let, you left/let (formal, singular)', spanish: 'dejó', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-nosotros-preterite', english: 'we left/let', spanish: 'dejamos', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-ellos-preterite', english: 'they left/let, you left/let (formal, plural)', spanish: 'dejaron', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: leer (Preterite)
  { id: 'leer-yo-preterite', english: 'I read', spanish: 'leí', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'leer-tu-preterite', english: 'you read (informal, singular)', spanish: 'leíste', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'leer-el-preterite', english: 'he/she read, you read (formal, singular)', spanish: 'leyó', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'leer-nosotros-preterite', english: 'we read', spanish: 'leímos', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'leer-ellos-preterite', english: 'they read, you read (formal, plural)', spanish: 'leyeron', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: mentir (Preterite)
  { id: 'mentir-yo-preterite', english: 'I lied', spanish: 'mentí', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mentir-tu-preterite', english: 'you lied (informal, singular)', spanish: 'mentiste', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mentir-el-preterite', english: 'he/she lied, you lied (formal, singular)', spanish: 'mintió', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mentir-nosotros-preterite', english: 'we lied', spanish: 'mentimos', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mentir-ellos-preterite', english: 'they lied, you lied (formal, plural)', spanish: 'mintieron', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: poder (Preterite)
  { id: 'poder-yo-preterite', english: 'I could/was able to', spanish: 'pude', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poder-tu-preterite', english: 'you could/were able to (informal, singular)', spanish: 'pudiste', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poder-el-preterite', english: 'he/she could/was able to, you could/were able to (formal, singular)', spanish: 'pudo', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poder-nosotros-preterite', english: 'we could/were able to', spanish: 'pudimos', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poder-ellos-preterite', english: 'they could/were able to, you could/were able to (formal, plural)', spanish: 'pudieron', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: poner (Preterite)
  { id: 'poner-yo-preterite', english: 'I put', spanish: 'puse', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poner-tu-preterite', english: 'you put (informal, singular)', spanish: 'pusiste', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poner-el-preterite', english: 'he/she put, you put (formal, singular)', spanish: 'puso', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poner-nosotros-preterite', english: 'we put', spanish: 'pusimos', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poner-ellos-preterite', english: 'they put, you put (formal, plural)', spanish: 'pusieron', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: venir (Preterite)
  { id: 'venir-yo-preterite', english: 'I came', spanish: 'vine', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'venir-tu-preterite', english: 'you came (informal, singular)', spanish: 'viniste', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'venir-el-preterite', english: 'he/she came, you came (formal, singular)', spanish: 'vino', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'venir-nosotros-preterite', english: 'we came', spanish: 'vinimos', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'venir-ellos-preterite', english: 'they came, you came (formal, plural)', spanish: 'vinieron', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: andar (Preterite)
  { id: 'andar-yo-preterite', english: 'I walked', spanish: 'anduve', verb: 'andar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'andar-tu-preterite', english: 'you walked (informal, singular)', spanish: 'anduviste', verb: 'andar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'andar-el-preterite', english: 'he/she walked, you walked (formal, singular)', spanish: 'anduvo', verb: 'andar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'andar-nosotros-preterite', english: 'we walked', spanish: 'anduvimos', verb: 'andar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'andar-ellos-preterite', english: 'they walked, you walked (formal, plural)', spanish: 'anduvieron', verb: 'andar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: querer (Preterite)
  { id: 'querer-yo-preterite', english: 'I wanted', spanish: 'quise', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'querer-tu-preterite', english: 'you wanted (informal, singular)', spanish: 'quisiste', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'querer-el-preterite', english: 'he/she wanted, you wanted (formal, singular)', spanish: 'quiso', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'querer-nosotros-preterite', english: 'we wanted', spanish: 'quisimos', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'querer-ellos-preterite', english: 'they wanted, you wanted (formal, plural)', spanish: 'quisieron', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: traer (Preterite)
  { id: 'traer-yo-preterite', english: 'I brought', spanish: 'traje', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'traer-tu-preterite', english: 'you brought (informal, singular)', spanish: 'trajiste', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'traer-el-preterite', english: 'he/she brought, you brought (formal, singular)', spanish: 'trajo', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'traer-nosotros-preterite', english: 'we brought', spanish: 'trajimos', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'traer-ellos-preterite', english: 'they brought, you brought (formal, plural)', spanish: 'trajeron', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: saber (Preterite)
  { id: 'saber-yo-preterite', english: 'I knew', spanish: 'supe', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'saber-tu-preterite', english: 'you knew (informal, singular)', spanish: 'supiste', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'saber-el-preterite', english: 'he/she knew, you knew (formal, singular)', spanish: 'supo', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'saber-nosotros-preterite', english: 'we knew', spanish: 'supimos', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'saber-ellos-preterite', english: 'they knew, you knew (formal, plural)', spanish: 'supieron', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: caerse (Preterite)
  { id: 'caerse-yo-preterite', english: 'I fell down', spanish: 'me caí', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caerse-tu-preterite', english: 'you fell down (informal, singular)', spanish: 'te caíste', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caerse-el-preterite', english: 'he/she fell down, you fell down (formal, singular)', spanish: 'se cayó', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caerse-nosotros-preterite', english: 'we fell down', spanish: 'nos caímos', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caerse-ellos-preterite', english: 'they fell down, you fell down (formal, plural)', spanish: 'se cayeron', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular verbs: buscar (Preterite) - Note: spelling change c→qu before é
  { id: 'buscar-yo-preterite', english: 'I looked for', spanish: 'busqué', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'buscar-tu-preterite', english: 'you looked for (informal, singular)', spanish: 'buscaste', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'buscar-el-preterite', english: 'he/she looked for, you looked for (formal, singular)', spanish: 'buscó', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'buscar-nosotros-preterite', english: 'we looked for', spanish: 'buscamos', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'buscar-ellos-preterite', english: 'they looked for, you looked for (formal, plural)', spanish: 'buscaron', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular verbs: mirar (Preterite)
  { id: 'mirar-yo-preterite', english: 'I looked at', spanish: 'miré', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mirar-tu-preterite', english: 'you looked at (informal, singular)', spanish: 'miraste', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mirar-el-preterite', english: 'he/she looked at, you looked at (formal, singular)', spanish: 'miró', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mirar-nosotros-preterite', english: 'we looked at', spanish: 'miramos', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mirar-ellos-preterite', english: 'they looked at, you looked at (formal, plural)', spanish: 'miraron', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular verbs: encontrar (Preterite) - no stem change in preterite
  { id: 'encontrar-yo-preterite', english: 'I found', spanish: 'encontré', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'encontrar-tu-preterite', english: 'you found (informal, singular)', spanish: 'encontraste', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'encontrar-el-preterite', english: 'he/she found, you found (formal, singular)', spanish: 'encontró', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'encontrar-nosotros-preterite', english: 'we found', spanish: 'encontramos', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'encontrar-ellos-preterite', english: 'they found, you found (formal, plural)', spanish: 'encontraron', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular verbs: esconder (Preterite)
  { id: 'esconder-yo-preterite', english: 'I hid', spanish: 'escondí', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'esconder-tu-preterite', english: 'you hid (informal, singular)', spanish: 'escondiste', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'esconder-el-preterite', english: 'he/she hid, you hid (formal, singular)', spanish: 'escondió', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'esconder-nosotros-preterite', english: 'we hid', spanish: 'escondimos', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'esconder-ellos-preterite', english: 'they hid, you hid (formal, plural)', spanish: 'escondieron', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular verbs: llevar (Preterite)
  { id: 'llevar-yo-preterite', english: 'I carried/wore/took', spanish: 'llevé', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'llevar-tu-preterite', english: 'you carried/wore/took (informal, singular)', spanish: 'llevaste', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'llevar-el-preterite', english: 'he/she carried/wore/took, you carried/wore/took (formal, singular)', spanish: 'llevó', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'llevar-nosotros-preterite', english: 'we carried/wore/took', spanish: 'llevamos', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'llevar-ellos-preterite', english: 'they carried/wore/took, you carried/wore/took (formal, plural)', spanish: 'llevaron', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular verbs: terminar (Preterite)
  { id: 'terminar-yo-preterite', english: 'I finished/ended', spanish: 'terminé', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'terminar-tu-preterite', english: 'you finished/ended (informal, singular)', spanish: 'terminaste', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'terminar-el-preterite', english: 'he/she finished/ended, you finished/ended (formal, singular)', spanish: 'terminó', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'terminar-nosotros-preterite', english: 'we finished/ended', spanish: 'terminamos', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'terminar-ellos-preterite', english: 'they finished/ended, you finished/ended (formal, plural)', spanish: 'terminaron', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: hacer (Preterite)
  { id: 'hacer-yo-preterite', english: 'I made/did', spanish: 'hice', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hacer-tu-preterite', english: 'you made/did (informal, singular)', spanish: 'hiciste', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hacer-el-preterite', english: 'he/she made/did, you made/did (formal, singular)', spanish: 'hizo', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hacer-nosotros-preterite', english: 'we made/did', spanish: 'hicimos', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hacer-ellos-preterite', english: 'they made/did, you made/did (formal, plural)', spanish: 'hicieron', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: ser (Preterite)
  { id: 'ser-yo-preterite', english: 'I was', spanish: 'fui', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ser-tu-preterite', english: 'you were (informal, singular)', spanish: 'fuiste', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ser-el-preterite', english: 'he/she was, you were (formal, singular)', spanish: 'fue', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ser-nosotros-preterite', english: 'we were', spanish: 'fuimos', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ser-ellos-preterite', english: 'they were, you were (formal, plural)', spanish: 'fueron', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: ver (Preterite)
  { id: 'ver-yo-preterite', english: 'I saw', spanish: 'vi', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ver-tu-preterite', english: 'you saw (informal, singular)', spanish: 'viste', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ver-el-preterite', english: 'he/she saw, you saw (formal, singular)', spanish: 'vio', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ver-nosotros-preterite', english: 'we saw', spanish: 'vimos', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ver-ellos-preterite', english: 'they saw, you saw (formal, plural)', spanish: 'vieron', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: deber (Preterite)
  { id: 'deber-yo-preterite', english: 'I owed/had to', spanish: 'debí', verb: 'deber', type: 'regular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'deber-tu-preterite', english: 'you owed/had to (informal, singular)', spanish: 'debiste', verb: 'deber', type: 'regular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'deber-el-preterite', english: 'he/she owed/had to, you owed/had to (formal, singular)', spanish: 'debió', verb: 'deber', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'deber-nosotros-preterite', english: 'we owed/had to', spanish: 'debimos', verb: 'deber', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'deber-ellos-preterite', english: 'they owed/had to, you owed/had to (formal, plural)', spanish: 'debieron', verb: 'deber', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: preguntar (Preterite)
  { id: 'preguntar-yo-preterite', english: 'I asked', spanish: 'pregunté', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'preguntar-tu-preterite', english: 'you asked (informal, singular)', spanish: 'preguntaste', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'preguntar-el-preterite', english: 'he/she asked, you asked (formal, singular)', spanish: 'preguntó', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'preguntar-nosotros-preterite', english: 'we asked', spanish: 'preguntamos', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'preguntar-ellos-preterite', english: 'they asked, you asked (formal, plural)', spanish: 'preguntaron', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: pedir (Preterite)
  { id: 'pedir-yo-preterite', english: 'I asked for/requested', spanish: 'pedí', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pedir-tu-preterite', english: 'you asked for/requested (informal, singular)', spanish: 'pediste', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pedir-el-preterite', english: 'he/she asked for/requested, you asked for/requested (formal, singular)', spanish: 'pidió', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pedir-nosotros-preterite', english: 'we asked for/requested', spanish: 'pedimos', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pedir-ellos-preterite', english: 'they asked for/requested, you asked for/requested (formal, plural)', spanish: 'pidieron', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: pensar (Preterite)
  { id: 'pensar-yo-preterite', english: 'I thought', spanish: 'pensé', verb: 'pensar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pensar-tu-preterite', english: 'you thought (informal, singular)', spanish: 'pensaste', verb: 'pensar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pensar-el-preterite', english: 'he/she thought, you thought (formal, singular)', spanish: 'pensó', verb: 'pensar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pensar-nosotros-preterite', english: 'we thought', spanish: 'pensamos', verb: 'pensar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pensar-ellos-preterite', english: 'they thought, you thought (formal, plural)', spanish: 'pensaron', verb: 'pensar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -er verbs: creer (Preterite)
  { id: 'creer-yo-preterite', english: 'I believed', spanish: 'creí', verb: 'creer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'creer-tu-preterite', english: 'you believed (informal, singular)', spanish: 'creíste', verb: 'creer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'creer-el-preterite', english: 'he/she believed, you believed (formal, singular)', spanish: 'creyó', verb: 'creer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'creer-nosotros-preterite', english: 'we believed', spanish: 'creímos', verb: 'creer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'creer-ellos-preterite', english: 'they believed, you believed (formal, plural)', spanish: 'creyeron', verb: 'creer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: jugar (Preterite)
  { id: 'jugar-yo-preterite', english: 'I played', spanish: 'jugué', verb: 'jugar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'jugar-tu-preterite', english: 'you played (informal, singular)', spanish: 'jugaste', verb: 'jugar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'jugar-el-preterite', english: 'he/she played, you played (formal, singular)', spanish: 'jugó', verb: 'jugar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'jugar-nosotros-preterite', english: 'we played', spanish: 'jugamos', verb: 'jugar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'jugar-ellos-preterite', english: 'they played, you played (formal, plural)', spanish: 'jugaron', verb: 'jugar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: tocar (Preterite)
  { id: 'tocar-yo-preterite', english: 'I touched, I played (instrument)', spanish: 'toqué', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tocar-tu-preterite', english: 'you touched, you played (instrument) (informal, singular)', spanish: 'tocaste', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tocar-el-preterite', english: 'he/she touched, played (instrument), you touched, played (instrument) (formal, singular)', spanish: 'tocó', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tocar-nosotros-preterite', english: 'we touched, we played (instrument)', spanish: 'tocamos', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tocar-ellos-preterite', english: 'they touched, played (instrument), you touched, played (instrument) (formal, plural)', spanish: 'tocaron', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: intentar (Preterite)
  { id: 'intentar-yo-preterite', english: 'I tried', spanish: 'intenté', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'intentar-tu-preterite', english: 'you tried (informal, singular)', spanish: 'intentaste', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'intentar-el-preterite', english: 'he/she tried, you tried (formal, singular)', spanish: 'intentó', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'intentar-nosotros-preterite', english: 'we tried', spanish: 'intentamos', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'intentar-ellos-preterite', english: 'they tried, you tried (formal, plural)', spanish: 'intentaron', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: probar (Preterite)
  { id: 'probar-yo-preterite', english: 'I tasted, I tried', spanish: 'probé', verb: 'probar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'probar-tu-preterite', english: 'you tasted, you tried (informal, singular)', spanish: 'probaste', verb: 'probar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'probar-el-preterite', english: 'he/she tasted, tried, you tasted, tried (formal, singular)', spanish: 'probó', verb: 'probar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'probar-nosotros-preterite', english: 'we tasted, we tried', spanish: 'probamos', verb: 'probar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'probar-ellos-preterite', english: 'they tasted, tried, you tasted, tried (formal, plural)', spanish: 'probaron', verb: 'probar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: tratar (Preterite)
  { id: 'tratar-yo-preterite', english: 'I treated, I tried', spanish: 'traté', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tratar-tu-preterite', english: 'you treated, you tried (informal, singular)', spanish: 'trataste', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tratar-el-preterite', english: 'he/she treated, tried, you treated, tried (formal, singular)', spanish: 'trató', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tratar-nosotros-preterite', english: 'we treated, we tried', spanish: 'tratamos', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tratar-ellos-preterite', english: 'they treated, tried, you treated, tried (formal, plural)', spanish: 'trataron', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -er verbs: soler (Preterite)
  { id: 'soler-yo-preterite', english: 'I used to usually do', spanish: 'solí', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'soler-tu-preterite', english: 'you used to usually do (informal, singular)', spanish: 'soliste', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'soler-el-preterite', english: 'he/she used to usually do, you used to usually do (formal, singular)', spanish: 'solió', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'soler-nosotros-preterite', english: 'we used to usually do', spanish: 'solimos', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'soler-ellos-preterite', english: 'they used to usually do, you used to usually do (formal, plural)', spanish: 'solieron', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 }
];

// Imperfect tense conjugations
export const imperfectTenseConjugations: Conjugation[] = [
  // Regular -ar verbs: hablar (Imperfect)
  { id: 'hablar-yo-imperfect', english: 'I was speaking, I used to speak', spanish: 'hablaba', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hablar-tu-imperfect', english: 'you were speaking, you used to speak (informal, singular)', spanish: 'hablabas', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hablar-el-imperfect', english: 'he/she was speaking, you were speaking (formal, singular)', spanish: 'hablaba', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hablar-nosotros-imperfect', english: 'we were speaking, we used to speak', spanish: 'hablábamos', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hablar-ellos-imperfect', english: 'they were speaking, you were speaking (formal, plural)', spanish: 'hablaban', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: comer (Imperfect)
  { id: 'comer-yo-imperfect', english: 'I was eating, I used to eat', spanish: 'comía', verb: 'comer', type: 'regular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'comer-tu-imperfect', english: 'you were eating, you used to eat (informal, singular)', spanish: 'comías', verb: 'comer', type: 'regular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'comer-el-imperfect', english: 'he/she was eating, you were eating (formal, singular)', spanish: 'comía', verb: 'comer', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'comer-nosotros-imperfect', english: 'we were eating, we used to eat', spanish: 'comíamos', verb: 'comer', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'comer-ellos-imperfect', english: 'they were eating, you were eating (formal, plural)', spanish: 'comían', verb: 'comer', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ir verbs: vivir (Imperfect)
  { id: 'vivir-yo-imperfect', english: 'I was living, I used to live', spanish: 'vivía', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'vivir-tu-imperfect', english: 'you were living, you used to live (informal, singular)', spanish: 'vivías', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'vivir-el-imperfect', english: 'he/she was living, you were living (formal, singular)', spanish: 'vivía', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'vivir-nosotros-imperfect', english: 'we were living, we used to live', spanish: 'vivíamos', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'vivir-ellos-imperfect', english: 'they were living, you were living (formal, plural)', spanish: 'vivían', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: ser (Imperfect)
  { id: 'ser-yo-imperfect', english: 'I was, I used to be', spanish: 'era', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ser-tu-imperfect', english: 'you were, you used to be (informal, singular)', spanish: 'eras', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ser-el-imperfect', english: 'he/she was, you were (formal, singular)', spanish: 'era', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ser-nosotros-imperfect', english: 'we were, we used to be', spanish: 'éramos', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ser-ellos-imperfect', english: 'they were, you were (formal, plural)', spanish: 'eran', verb: 'ser', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular verbs: ir (Imperfect)
  { id: 'ir-yo-imperfect', english: 'I was going, I used to go', spanish: 'iba', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ir-tu-imperfect', english: 'you were going, you used to go (informal, singular)', spanish: 'ibas', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ir-el-imperfect', english: 'he/she was going, you were going (formal, singular)', spanish: 'iba', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ir-nosotros-imperfect', english: 'we were going, we used to go', spanish: 'íbamos', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ir-ellos-imperfect', english: 'they were going, you were going (formal, plural)', spanish: 'iban', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: caminar (Imperfect)
  { id: 'caminar-yo-imperfect', english: 'I was walking, I used to walk', spanish: 'caminaba', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caminar-tu-imperfect', english: 'you were walking, you used to walk (informal, singular)', spanish: 'caminabas', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caminar-el-imperfect', english: 'he/she was walking, you were walking (formal, singular)', spanish: 'caminaba', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caminar-nosotros-imperfect', english: 'we were walking, we used to walk', spanish: 'caminábamos', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caminar-ellos-imperfect', english: 'they were walking, you were walking (formal, plural)', spanish: 'caminaban', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: beber (Imperfect)
  { id: 'beber-yo-imperfect', english: 'I was drinking, I used to drink', spanish: 'bebía', verb: 'beber', type: 'regular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'beber-tu-imperfect', english: 'you were drinking, you used to drink (informal, singular)', spanish: 'bebías', verb: 'beber', type: 'regular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'beber-el-imperfect', english: 'he/she was drinking, you were drinking (formal, singular)', spanish: 'bebía', verb: 'beber', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'beber-nosotros-imperfect', english: 'we were drinking, we used to drink', spanish: 'bebíamos', verb: 'beber', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'beber-ellos-imperfect', english: 'they were drinking, you were drinking (formal, plural)', spanish: 'bebían', verb: 'beber', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ir verbs: escribir (Imperfect)
  { id: 'escribir-yo-imperfect', english: 'I was writing, I used to write', spanish: 'escribía', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'escribir-tu-imperfect', english: 'you were writing, you used to write (informal, singular)', spanish: 'escribías', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'escribir-el-imperfect', english: 'he/she was writing, you were writing (formal, singular)', spanish: 'escribía', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'escribir-nosotros-imperfect', english: 'we were writing, we used to write', spanish: 'escribíamos', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'escribir-ellos-imperfect', english: 'they were writing, you were writing (formal, plural)', spanish: 'escribían', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -er verbs: tener (Imperfect - uses regular pattern)
  { id: 'tener-yo-imperfect', english: 'I had, I used to have', spanish: 'tenía', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tener-tu-imperfect', english: 'you had, you used to have (informal, singular)', spanish: 'tenías', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tener-el-imperfect', english: 'he/she had, you had (formal, singular)', spanish: 'tenía', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tener-nosotros-imperfect', english: 'we had, we used to have', spanish: 'teníamos', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tener-ellos-imperfect', english: 'they had, you had (formal, plural)', spanish: 'tenían', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -ar verbs: estar (Imperfect - uses regular pattern)
  { id: 'estar-yo-imperfect', english: 'I was (location/condition), I used to be', spanish: 'estaba', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'estar-tu-imperfect', english: 'you were (location/condition), you used to be (informal, singular)', spanish: 'estabas', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'estar-el-imperfect', english: 'he/she was (location/condition), you were (formal, singular)', spanish: 'estaba', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'estar-nosotros-imperfect', english: 'we were (location/condition), we used to be', spanish: 'estábamos', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'estar-ellos-imperfect', english: 'they were (location/condition), you were (formal, plural)', spanish: 'estaban', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -ir verbs: mentir (Imperfect - uses regular pattern)
  { id: 'mentir-yo-imperfect', english: 'I was lying, I used to lie', spanish: 'mentía', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mentir-tu-imperfect', english: 'you were lying, you used to lie (informal, singular)', spanish: 'mentías', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mentir-el-imperfect', english: 'he/she was lying, you were lying (formal, singular)', spanish: 'mentía', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mentir-nosotros-imperfect', english: 'we were lying, we used to lie', spanish: 'mentíamos', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mentir-ellos-imperfect', english: 'they were lying, you were lying (formal, plural)', spanish: 'mentían', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -er verbs: leer (Imperfect - uses regular pattern)
  { id: 'leer-yo-imperfect', english: 'I was reading, I used to read', spanish: 'leía', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'leer-tu-imperfect', english: 'you were reading, you used to read (informal, singular)', spanish: 'leías', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'leer-el-imperfect', english: 'he/she was reading, you were reading (formal, singular)', spanish: 'leía', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'leer-nosotros-imperfect', english: 'we were reading, we used to read', spanish: 'leíamos', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'leer-ellos-imperfect', english: 'they were reading, you were reading (formal, plural)', spanish: 'leían', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -er verbs: poner (Imperfect - uses regular pattern)
  { id: 'poner-yo-imperfect', english: 'I was putting, I used to put', spanish: 'ponía', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poner-tu-imperfect', english: 'you were putting, you used to put (informal, singular)', spanish: 'ponías', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poner-el-imperfect', english: 'he/she was putting, you were putting (formal, singular)', spanish: 'ponía', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poner-nosotros-imperfect', english: 'we were putting, we used to put', spanish: 'poníamos', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poner-ellos-imperfect', english: 'they were putting, you were putting (formal, plural)', spanish: 'ponían', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: dejar (Imperfect)
  { id: 'dejar-yo-imperfect', english: 'I was leaving/letting, I used to leave/let', spanish: 'dejaba', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-tu-imperfect', english: 'you were leaving/letting, you used to leave/let (informal, singular)', spanish: 'dejabas', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-el-imperfect', english: 'he/she was leaving/letting, you were leaving/letting (formal, singular)', spanish: 'dejaba', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-nosotros-imperfect', english: 'we were leaving/letting, we used to leave/let', spanish: 'dejábamos', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'dejar-ellos-imperfect', english: 'they were leaving/letting, you were leaving/letting (formal, plural)', spanish: 'dejaban', verb: 'dejar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -ir verbs: decir (Imperfect - uses regular pattern)
  { id: 'decir-yo-imperfect', english: 'I was saying/telling, I used to say/tell', spanish: 'decía', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'decir-tu-imperfect', english: 'you were saying/telling, you used to say/tell (informal, singular)', spanish: 'decías', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'decir-el-imperfect', english: 'he/she was saying/telling, you were saying/telling (formal, singular)', spanish: 'decía', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'decir-nosotros-imperfect', english: 'we were saying/telling, we used to say/tell', spanish: 'decíamos', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'decir-ellos-imperfect', english: 'they were saying/telling, you were saying/telling (formal, plural)', spanish: 'decían', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -er verbs: poder (Imperfect - uses regular pattern)
  { id: 'poder-yo-imperfect', english: 'I could, I was able to, I used to be able to', spanish: 'podía', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poder-tu-imperfect', english: 'you could, you were able to, you used to be able to (informal, singular)', spanish: 'podías', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poder-el-imperfect', english: 'he/she could, you could (formal, singular)', spanish: 'podía', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poder-nosotros-imperfect', english: 'we could, we were able to, we used to be able to', spanish: 'podíamos', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'poder-ellos-imperfect', english: 'they could, you could (formal, plural)', spanish: 'podían', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -er verbs: querer (Imperfect - uses regular pattern)
  { id: 'querer-yo-imperfect', english: 'I wanted, I used to want', spanish: 'quería', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'querer-tu-imperfect', english: 'you wanted, you used to want (informal, singular)', spanish: 'querías', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'querer-el-imperfect', english: 'he/she wanted, you wanted (formal, singular)', spanish: 'quería', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'querer-nosotros-imperfect', english: 'we wanted, we used to want', spanish: 'queríamos', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'querer-ellos-imperfect', english: 'they wanted, you wanted (formal, plural)', spanish: 'querían', verb: 'querer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -er verbs: traer (Imperfect - uses regular pattern)
  { id: 'traer-yo-imperfect', english: 'I was bringing, I used to bring', spanish: 'traía', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'traer-tu-imperfect', english: 'you were bringing, you used to bring (informal, singular)', spanish: 'traías', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'traer-el-imperfect', english: 'he/she was bringing, you were bringing (formal, singular)', spanish: 'traía', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'traer-nosotros-imperfect', english: 'we were bringing, we used to bring', spanish: 'traíamos', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'traer-ellos-imperfect', english: 'they were bringing, you were bringing (formal, plural)', spanish: 'traían', verb: 'traer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -er verbs: saber (Imperfect - uses regular pattern)
  { id: 'saber-yo-imperfect', english: 'I knew, I used to know', spanish: 'sabía', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'saber-tu-imperfect', english: 'you knew, you used to know (informal, singular)', spanish: 'sabías', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'saber-el-imperfect', english: 'he/she knew, you knew (formal, singular)', spanish: 'sabía', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'saber-nosotros-imperfect', english: 'we knew, we used to know', spanish: 'sabíamos', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'saber-ellos-imperfect', english: 'they knew, you knew (formal, plural)', spanish: 'sabían', verb: 'saber', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -ir verbs: venir (Imperfect - uses regular pattern)
  { id: 'venir-yo-imperfect', english: 'I was coming, I used to come', spanish: 'venía', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'venir-tu-imperfect', english: 'you were coming, you used to come (informal, singular)', spanish: 'venías', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'venir-el-imperfect', english: 'he/she was coming, you were coming (formal, singular)', spanish: 'venía', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'venir-nosotros-imperfect', english: 'we were coming, we used to come', spanish: 'veníamos', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'venir-ellos-imperfect', english: 'they were coming, you were coming (formal, plural)', spanish: 'venían', verb: 'venir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: andar (Imperfect)
  { id: 'andar-yo-imperfect', english: 'I was walking, I used to walk', spanish: 'andaba', verb: 'andar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'andar-tu-imperfect', english: 'you were walking, you used to walk (informal, singular)', spanish: 'andabas', verb: 'andar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'andar-el-imperfect', english: 'he/she was walking, you were walking (formal, singular)', spanish: 'andaba', verb: 'andar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'andar-nosotros-imperfect', english: 'we were walking, we used to walk', spanish: 'andábamos', verb: 'andar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'andar-ellos-imperfect', english: 'they were walking, you were walking (formal, plural)', spanish: 'andaban', verb: 'andar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  // Irregular -er verbs: caerse (Imperfect - uses regular pattern)
  { id: 'caerse-yo-imperfect', english: 'I was falling down, I used to fall down', spanish: 'me caía', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caerse-tu-imperfect', english: 'you were falling down, you used to fall down (informal, singular)', spanish: 'te caías', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caerse-el-imperfect', english: 'he/she was falling down, you were falling down (formal, singular)', spanish: 'se caía', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caerse-nosotros-imperfect', english: 'we were falling down, we used to fall down', spanish: 'nos caíamos', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'caerse-ellos-imperfect', english: 'they were falling down, you were falling down (formal, plural)', spanish: 'se caían', verb: 'caerse', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: buscar (Imperfect)
  { id: 'buscar-yo-imperfect', english: 'I was looking for, I used to look for', spanish: 'buscaba', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'buscar-tu-imperfect', english: 'you were looking for, you used to look for (informal, singular)', spanish: 'buscabas', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'buscar-el-imperfect', english: 'he/she was looking for, you were looking for (formal, singular)', spanish: 'buscaba', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'buscar-nosotros-imperfect', english: 'we were looking for, we used to look for', spanish: 'buscábamos', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'buscar-ellos-imperfect', english: 'they were looking for, you were looking for (formal, plural)', spanish: 'buscaban', verb: 'buscar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: mirar (Imperfect)
  { id: 'mirar-yo-imperfect', english: 'I was looking at, I used to look at', spanish: 'miraba', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mirar-tu-imperfect', english: 'you were looking at, you used to look at (informal, singular)', spanish: 'mirabas', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mirar-el-imperfect', english: 'he/she was looking at, you were looking at (formal, singular)', spanish: 'miraba', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mirar-nosotros-imperfect', english: 'we were looking at, we used to look at', spanish: 'mirábamos', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'mirar-ellos-imperfect', english: 'they were looking at, you were looking at (formal, plural)', spanish: 'miraban', verb: 'mirar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -ar verbs: encontrar (Imperfect - uses regular pattern)
  { id: 'encontrar-yo-imperfect', english: 'I was finding, I used to find', spanish: 'encontraba', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'encontrar-tu-imperfect', english: 'you were finding, you used to find (informal, singular)', spanish: 'encontrabas', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'encontrar-el-imperfect', english: 'he/she was finding, you were finding (formal, singular)', spanish: 'encontraba', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'encontrar-nosotros-imperfect', english: 'we were finding, we used to find', spanish: 'encontrábamos', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'encontrar-ellos-imperfect', english: 'they were finding, you were finding (formal, plural)', spanish: 'encontraban', verb: 'encontrar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: esconder (Imperfect)
  { id: 'esconder-yo-imperfect', english: 'I was hiding, I used to hide', spanish: 'escondía', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'esconder-tu-imperfect', english: 'you were hiding, you used to hide (informal, singular)', spanish: 'escondías', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'esconder-el-imperfect', english: 'he/she was hiding, you were hiding (formal, singular)', spanish: 'escondía', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'esconder-nosotros-imperfect', english: 'we were hiding, we used to hide', spanish: 'escondíamos', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'esconder-ellos-imperfect', english: 'they were hiding, you were hiding (formal, plural)', spanish: 'escondían', verb: 'esconder', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: llevar (Imperfect)
  { id: 'llevar-yo-imperfect', english: 'I was carrying/wearing/taking, I used to carry/wear/take', spanish: 'llevaba', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'llevar-tu-imperfect', english: 'you were carrying/wearing/taking, you used to carry/wear/take (informal, singular)', spanish: 'llevabas', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'llevar-el-imperfect', english: 'he/she was carrying/wearing/taking, you were carrying/wearing/taking (formal, singular)', spanish: 'llevaba', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'llevar-nosotros-imperfect', english: 'we were carrying/wearing/taking, we used to carry/wear/take', spanish: 'llevábamos', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'llevar-ellos-imperfect', english: 'they were carrying/wearing/taking, you were carrying/wearing/taking (formal, plural)', spanish: 'llevaban', verb: 'llevar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: terminar (Imperfect)
  { id: 'terminar-yo-imperfect', english: 'I was finishing/ending, I used to finish/end', spanish: 'terminaba', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'terminar-tu-imperfect', english: 'you were finishing/ending, you used to finish/end (informal, singular)', spanish: 'terminabas', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'terminar-el-imperfect', english: 'he/she was finishing/ending, you were finishing/ending (formal, singular)', spanish: 'terminaba', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'terminar-nosotros-imperfect', english: 'we were finishing/ending, we used to finish/end', spanish: 'terminábamos', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'terminar-ellos-imperfect', english: 'they were finishing/ending, you were finishing/ending (formal, plural)', spanish: 'terminaban', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -er verbs: hacer (Imperfect - uses regular pattern)
  { id: 'hacer-yo-imperfect', english: 'I was making/doing, I used to make/do', spanish: 'hacía', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hacer-tu-imperfect', english: 'you were making/doing, you used to make/do (informal, singular)', spanish: 'hacías', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hacer-el-imperfect', english: 'he/she was making/doing, you were making/doing (formal, singular)', spanish: 'hacía', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hacer-nosotros-imperfect', english: 'we were making/doing, we used to make/do', spanish: 'hacíamos', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'hacer-ellos-imperfect', english: 'they were making/doing, you were making/doing (formal, plural)', spanish: 'hacían', verb: 'hacer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -er verbs: ver (Imperfect - irregular stem 've')
  { id: 'ver-yo-imperfect', english: 'I was seeing, I used to see', spanish: 'veía', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ver-tu-imperfect', english: 'you were seeing, you used to see (informal, singular)', spanish: 'veías', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ver-el-imperfect', english: 'he/she was seeing, you were seeing (formal, singular)', spanish: 'veía', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ver-nosotros-imperfect', english: 'we were seeing, we used to see', spanish: 'veíamos', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'ver-ellos-imperfect', english: 'they were seeing, you were seeing (formal, plural)', spanish: 'veían', verb: 'ver', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: deber (Imperfect)
  { id: 'deber-yo-imperfect', english: 'I owed, I should have, I used to owe/must', spanish: 'debía', verb: 'deber', type: 'regular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'deber-tu-imperfect', english: 'you owed, you should have, you used to owe/must (informal, singular)', spanish: 'debías', verb: 'deber', type: 'regular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'deber-el-imperfect', english: 'he/she owed, you owed (formal, singular)', spanish: 'debía', verb: 'deber', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'deber-nosotros-imperfect', english: 'we owed, we should have, we used to owe/must', spanish: 'debíamos', verb: 'deber', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'deber-ellos-imperfect', english: 'they owed, you owed (formal, plural)', spanish: 'debían', verb: 'deber', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: preguntar (Imperfect)
  { id: 'preguntar-yo-imperfect', english: 'I was asking, I used to ask', spanish: 'preguntaba', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'preguntar-tu-imperfect', english: 'you were asking, you used to ask (informal, singular)', spanish: 'preguntabas', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'preguntar-el-imperfect', english: 'he/she was asking, you were asking (formal, singular)', spanish: 'preguntaba', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'preguntar-nosotros-imperfect', english: 'we were asking, we used to ask', spanish: 'preguntábamos', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'preguntar-ellos-imperfect', english: 'they were asking, you were asking (formal, plural)', spanish: 'preguntaban', verb: 'preguntar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -ir verbs: pedir (Imperfect - uses regular pattern)
  { id: 'pedir-yo-imperfect', english: 'I was asking for/requesting, I used to ask for/request', spanish: 'pedía', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pedir-tu-imperfect', english: 'you were asking for/requesting, you used to ask for/request (informal, singular)', spanish: 'pedías', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pedir-el-imperfect', english: 'he/she was asking for/requesting, you were asking for/requesting (formal, singular)', spanish: 'pedía', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pedir-nosotros-imperfect', english: 'we were asking for/requesting, we used to ask for/request', spanish: 'pedíamos', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pedir-ellos-imperfect', english: 'they were asking for/requesting, you were asking for/requesting (formal, plural)', spanish: 'pedían', verb: 'pedir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -ar verbs: pensar (Imperfect - uses regular pattern)
  { id: 'pensar-yo-imperfect', english: 'I was thinking, I used to think', spanish: 'pensaba', verb: 'pensar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pensar-tu-imperfect', english: 'you were thinking, you used to think (informal, singular)', spanish: 'pensabas', verb: 'pensar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pensar-el-imperfect', english: 'he/she was thinking, you were thinking (formal, singular)', spanish: 'pensaba', verb: 'pensar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pensar-nosotros-imperfect', english: 'we were thinking, we used to think', spanish: 'pensábamos', verb: 'pensar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'pensar-ellos-imperfect', english: 'they were thinking, you were thinking (formal, plural)', spanish: 'pensaban', verb: 'pensar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -er verbs: creer (Imperfect)
  { id: 'creer-yo-imperfect', english: 'I was believing, I used to believe', spanish: 'creía', verb: 'creer', type: 'regular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'creer-tu-imperfect', english: 'you were believing, you used to believe (informal, singular)', spanish: 'creías', verb: 'creer', type: 'regular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'creer-el-imperfect', english: 'he/she was believing, you were believing (formal, singular)', spanish: 'creía', verb: 'creer', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'creer-nosotros-imperfect', english: 'we were believing, we used to believe', spanish: 'creíamos', verb: 'creer', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'creer-ellos-imperfect', english: 'they were believing, you were believing (formal, plural)', spanish: 'creían', verb: 'creer', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -ar verbs: jugar (Imperfect - uses regular pattern)
  { id: 'jugar-yo-imperfect', english: 'I was playing, I used to play', spanish: 'jugaba', verb: 'jugar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'jugar-tu-imperfect', english: 'you were playing, you used to play (informal, singular)', spanish: 'jugabas', verb: 'jugar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'jugar-el-imperfect', english: 'he/she was playing, you were playing (formal, singular)', spanish: 'jugaba', verb: 'jugar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'jugar-nosotros-imperfect', english: 'we were playing, we used to play', spanish: 'jugábamos', verb: 'jugar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'jugar-ellos-imperfect', english: 'they were playing, you were playing (formal, plural)', spanish: 'jugaban', verb: 'jugar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: tocar (Imperfect)
  { id: 'tocar-yo-imperfect', english: 'I was touching/playing (instrument), I used to touch/play', spanish: 'tocaba', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tocar-tu-imperfect', english: 'you were touching/playing (instrument), you used to touch/play (informal, singular)', spanish: 'tocabas', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tocar-el-imperfect', english: 'he/she was touching/playing (instrument), you were touching/playing (formal, singular)', spanish: 'tocaba', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tocar-nosotros-imperfect', english: 'we were touching/playing (instrument), we used to touch/play', spanish: 'tocábamos', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tocar-ellos-imperfect', english: 'they were touching/playing (instrument), you were touching/playing (formal, plural)', spanish: 'tocaban', verb: 'tocar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: intentar (Imperfect)
  { id: 'intentar-yo-imperfect', english: 'I was trying, I used to try', spanish: 'intentaba', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'intentar-tu-imperfect', english: 'you were trying, you used to try (informal, singular)', spanish: 'intentabas', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'intentar-el-imperfect', english: 'he/she was trying, you were trying (formal, singular)', spanish: 'intentaba', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'intentar-nosotros-imperfect', english: 'we were trying, we used to try', spanish: 'intentábamos', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'intentar-ellos-imperfect', english: 'they were trying, you were trying (formal, plural)', spanish: 'intentaban', verb: 'intentar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -ar verbs: probar (Imperfect - uses regular pattern)
  { id: 'probar-yo-imperfect', english: 'I was tasting/trying, I used to taste/try', spanish: 'probaba', verb: 'probar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'probar-tu-imperfect', english: 'you were tasting/trying, you used to taste/try (informal, singular)', spanish: 'probabas', verb: 'probar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'probar-el-imperfect', english: 'he/she was tasting/trying, you were tasting/trying (formal, singular)', spanish: 'probaba', verb: 'probar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'probar-nosotros-imperfect', english: 'we were tasting/trying, we used to taste/try', spanish: 'probábamos', verb: 'probar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'probar-ellos-imperfect', english: 'they were tasting/trying, you were tasting/trying (formal, plural)', spanish: 'probaban', verb: 'probar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Regular -ar verbs: tratar (Imperfect)
  { id: 'tratar-yo-imperfect', english: 'I was treating/trying, I used to treat/try', spanish: 'trataba', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tratar-tu-imperfect', english: 'you were treating/trying, you used to treat/try (informal, singular)', spanish: 'tratabas', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tratar-el-imperfect', english: 'he/she was treating/trying, you were treating/trying (formal, singular)', spanish: 'trataba', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tratar-nosotros-imperfect', english: 'we were treating/trying, we used to treat/try', spanish: 'tratábamos', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'tratar-ellos-imperfect', english: 'they were treating/trying, you were treating/trying (formal, plural)', spanish: 'trataban', verb: 'tratar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },

  // Irregular -er verbs: soler (Imperfect - uses regular pattern)
  { id: 'soler-yo-imperfect', english: 'I usually did, I used to usually do', spanish: 'solía', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'soler-tu-imperfect', english: 'you usually did, you used to usually do (informal, singular)', spanish: 'solías', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'soler-el-imperfect', english: 'he/she usually did, you usually did (formal, singular)', spanish: 'solía', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'soler-nosotros-imperfect', english: 'we usually did, we used to usually do', spanish: 'solíamos', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 },
  { id: 'soler-ellos-imperfect', english: 'they usually did, you usually did (formal, plural)', spanish: 'solían', verb: 'soler', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'imperfect', mastered: false, practiceCount: 0, correctCount: 0 }
];

// Combine all conjugations
export const allConjugations: Conjugation[] = [
  ...presentTenseConjugations,
  ...preteriteTenseConjugations,
  ...imperfectTenseConjugations
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

// Smart selection algorithm: Calculate practice priority for each conjugation
export const calculatePracticePriority = (conjugation: Conjugation): number => {
  let priority = 0;
  
  // 1. Mastery status (highest priority - unmastered conjugations need attention)
  priority += conjugation.mastered ? 0 : 10;
  
  // 2. Time since last practice (medium priority - longer = higher priority)
  if (conjugation.lastPracticed) {
    const daysSinceLastPractice = (Date.now() - conjugation.lastPracticed) / (1000 * 60 * 60 * 24);
    // Max 5 points after 2 weeks of no practice
    priority += Math.min(5, Math.floor(daysSinceLastPractice / 3));
  } else {
    // Never practiced - high priority
    priority += 5;
  }
  
  // 3. Success rate (lower priority - struggling conjugations need more practice)
  if (conjugation.practiceCount > 0) {
    const accuracy = conjugation.correctCount / conjugation.practiceCount;
    if (accuracy < 0.6) priority += 4;        // Very low accuracy
    else if (accuracy < 0.8) priority += 2;   // Low accuracy
    else if (accuracy < 0.9) priority += 1;   // Moderate accuracy
    // High accuracy (≥0.9) gets 0 points
  } else {
    // Never practiced - add 3 points
    priority += 3;
  }
  
  // 4. Verb complexity (irregular verbs are generally harder)
  priority += conjugation.type === 'irregular' ? 2 : 0;
  
  // 5. Tense complexity (preterite is generally harder than present)
  priority += conjugation.tense === 'preterite' ? 1 : 0;
  
  return priority;
};

// Get conjugations ordered by practice priority (highest priority first)
export const getConjugationsByPriority = (conjugations: Conjugation[]): Conjugation[] => {
  return [...conjugations].sort((a, b) => {
    const priorityA = calculatePracticePriority(a);
    const priorityB = calculatePracticePriority(b);
    return priorityB - priorityA; // Higher priority first
  });
};

// Smart selection: Get conjugations that should be practiced, ordered by priority
export const getSmartPracticeConjugations = (conjugations: Conjugation[]): Conjugation[] => {
  // First filter by spaced repetition logic
  const dueForPractice = conjugations.filter(shouldPractice);
  
  // Then order by priority
  return getConjugationsByPriority(dueForPractice);
};
