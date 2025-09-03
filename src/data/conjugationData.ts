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
  { id: 'terminar-ellos-present', english: 'they finish/end, you finish/end (formal, plural)', spanish: 'terminan', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false, practiceCount: 0, correctCount: 0 }
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
  { id: 'terminar-ellos-preterite', english: 'they finished/ended, you finished/ended (formal, plural)', spanish: 'terminaron', verb: 'terminar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false, practiceCount: 0, correctCount: 0 }
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
