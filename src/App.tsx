import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, BookOpen, Target, Star, Check, Shuffle, Trash2, Languages } from 'lucide-react';

// Define the conjugation data structure
interface Conjugation {
  id: string;
  english: string;
  spanish: string;
  verb: string;
  type: 'regular' | 'irregular';
  conjugation: 'ar' | 'er' | 'ir';
  person: 'yo' | 'tú' | 'él/ella/usted' | 'nosotros' | 'ellos/ellas/ustedes';
  tense: 'present' | 'preterite';
  mastered: boolean;
}

const conjugationData: Conjugation[] = [
  // === PRESENT TENSE ===
  
  // Regular -ar verbs: hablar (Present)
  { id: 'hablar-yo-present', english: 'I speak', spanish: 'hablo', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false },
  { id: 'hablar-tu-present', english: 'you speak (informal, singular)', spanish: 'hablas', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false },
  { id: 'hablar-el-present', english: 'he/she speaks, you speak (formal, singular)', spanish: 'habla', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'hablar-nosotros-present', english: 'we speak', spanish: 'hablamos', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'hablar-ellos-present', english: 'they speak, you speak (formal, plural)', spanish: 'hablan', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Regular -ar verbs: caminar (Present)
  { id: 'caminar-yo-present', english: 'I walk', spanish: 'camino', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false },
  { id: 'caminar-tu-present', english: 'you walk (informal, singular)', spanish: 'caminas', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false },
  { id: 'caminar-el-present', english: 'he/she walks, you walk (formal, singular)', spanish: 'camina', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'caminar-nosotros-present', english: 'we walk', spanish: 'caminamos', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'caminar-ellos-present', english: 'they walk, you walk (formal, plural)', spanish: 'caminan', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Regular -er verbs: comer (Present)
  { id: 'comer-yo-present', english: 'I eat', spanish: 'como', verb: 'comer', type: 'regular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false },
  { id: 'comer-tu-present', english: 'you eat (informal, singular)', spanish: 'comes', verb: 'comer', type: 'regular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false },
  { id: 'comer-el-present', english: 'he/she eats, you eat (formal, singular)', spanish: 'come', verb: 'comer', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'comer-nosotros-present', english: 'we eat', spanish: 'comemos', verb: 'comer', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'comer-ellos-present', english: 'they eat, you eat (formal, plural)', spanish: 'comen', verb: 'comer', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Regular -er verbs: beber (Present)
  { id: 'beber-yo-present', english: 'I drink', spanish: 'bebo', verb: 'beber', type: 'regular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false },
  { id: 'beber-tu-present', english: 'you drink (informal, singular)', spanish: 'bebes', verb: 'beber', type: 'regular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false },
  { id: 'beber-el-present', english: 'he/she drinks, you drink (formal, singular)', spanish: 'bebe', verb: 'beber', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'beber-nosotros-present', english: 'we drink', spanish: 'bebemos', verb: 'beber', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'beber-ellos-present', english: 'they drink, you drink (formal, plural)', spanish: 'beben', verb: 'beber', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Regular -ir verbs: vivir (Present)
  { id: 'vivir-yo-present', english: 'I live', spanish: 'vivo', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false },
  { id: 'vivir-tu-present', english: 'you live (informal, singular)', spanish: 'vives', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false },
  { id: 'vivir-el-present', english: 'he/she lives, you live (formal, singular)', spanish: 'vive', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'vivir-nosotros-present', english: 'we live', spanish: 'vivimos', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'vivir-ellos-present', english: 'they live, you live (formal, plural)', spanish: 'viven', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Regular -ir verbs: escribir (Present)
  { id: 'escribir-yo-present', english: 'I write', spanish: 'escribo', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false },
  { id: 'escribir-tu-present', english: 'you write (informal, singular)', spanish: 'escribes', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false },
  { id: 'escribir-el-present', english: 'he/she writes, you write (formal, singular)', spanish: 'escribe', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'escribir-nosotros-present', english: 'we write', spanish: 'escribimos', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'escribir-ellos-present', english: 'they write, you write (formal, plural)', spanish: 'escriben', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Irregular verbs: tener (Present)
  { id: 'tener-yo-present', english: 'I have', spanish: 'tengo', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false },
  { id: 'tener-tu-present', english: 'you have (informal, singular)', spanish: 'tienes', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false },
  { id: 'tener-el-present', english: 'he/she has, you have (formal, singular)', spanish: 'tiene', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'tener-nosotros-present', english: 'we have', spanish: 'tenemos', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'tener-ellos-present', english: 'they have, you have (formal, plural)', spanish: 'tienen', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Irregular verbs: mentir (Present)
  { id: 'mentir-yo-present', english: 'I lie', spanish: 'miento', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false },
  { id: 'mentir-tu-present', english: 'you lie (informal, singular)', spanish: 'mientes', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false },
  { id: 'mentir-el-present', english: 'he/she lies, you lie (formal, singular)', spanish: 'miente', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'mentir-nosotros-present', english: 'we lie', spanish: 'mentimos', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'mentir-ellos-present', english: 'they lie, you lie (formal, plural)', spanish: 'mienten', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Irregular verbs: leer (Present)
  { id: 'leer-yo-present', english: 'I read', spanish: 'leo', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false },
  { id: 'leer-tu-present', english: 'you read (informal, singular)', spanish: 'lees', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false },
  { id: 'leer-el-present', english: 'he/she reads, you read (formal, singular)', spanish: 'lee', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'leer-nosotros-present', english: 'we read', spanish: 'leemos', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'leer-ellos-present', english: 'they read, you read (formal, plural)', spanish: 'leen', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Irregular verbs: poner (Present)
  { id: 'poner-yo-present', english: 'I put', spanish: 'pongo', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false },
  { id: 'poner-tu-present', english: 'you put (informal, singular)', spanish: 'pones', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false },
  { id: 'poner-el-present', english: 'he/she puts, you put (formal, singular)', spanish: 'pone', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'poner-nosotros-present', english: 'we put', spanish: 'ponemos', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'poner-ellos-present', english: 'they put, you put (formal, plural)', spanish: 'ponen', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Irregular verbs: dejar (Present)
  { id: 'dejar-yo-present', english: 'I leave/let', spanish: 'dejo', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false },
  { id: 'dejar-tu-present', english: 'you leave/let (informal, singular)', spanish: 'dejas', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false },
  { id: 'dejar-el-present', english: 'he/she leaves/lets, you leave/let (formal, singular)', spanish: 'deja', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'dejar-nosotros-present', english: 'we leave/let', spanish: 'dejamos', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'dejar-ellos-present', english: 'they leave/let, you leave/let (formal, plural)', spanish: 'dejan', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Irregular verbs: decir (Present)
  { id: 'decir-yo-present', english: 'I say/tell', spanish: 'digo', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false },
  { id: 'decir-tu-present', english: 'you say/tell (informal, singular)', spanish: 'dices', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false },
  { id: 'decir-el-present', english: 'he/she says/tells, you say/tell (formal, singular)', spanish: 'dice', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'decir-nosotros-present', english: 'we say/tell', spanish: 'decimos', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'decir-ellos-present', english: 'they say/tell, you say/tell (formal, plural)', spanish: 'dicen', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Irregular verbs: estar (Present)
  { id: 'estar-yo-present', english: 'I am', spanish: 'estoy', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'present', mastered: false },
  { id: 'estar-tu-present', english: 'you are (informal, singular)', spanish: 'estás', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'present', mastered: false },
  { id: 'estar-el-present', english: 'he/she is, you are (formal, singular)', spanish: 'está', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'estar-nosotros-present', english: 'we are', spanish: 'estamos', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'estar-ellos-present', english: 'they are, you are (formal, plural)', spanish: 'están', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Irregular verbs: poder (Present)
  { id: 'poder-yo-present', english: 'I can/am able to', spanish: 'puedo', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'present', mastered: false },
  { id: 'poder-tu-present', english: 'you can/are able to (informal, singular)', spanish: 'puedes', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'present', mastered: false },
  { id: 'poder-el-present', english: 'he/she can/is able to, you can/are able to (formal, singular)', spanish: 'puede', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'poder-nosotros-present', english: 'we can/are able to', spanish: 'podemos', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'poder-ellos-present', english: 'they can/are able to, you can/are able to (formal, plural)', spanish: 'pueden', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // Irregular verbs: ir (Present)
  { id: 'ir-yo-present', english: 'I go', spanish: 'voy', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'present', mastered: false },
  { id: 'ir-tu-present', english: 'you go (informal, singular)', spanish: 'vas', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'present', mastered: false },
  { id: 'ir-el-present', english: 'he/she goes, you go (formal, singular)', spanish: 'va', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'present', mastered: false },
  { id: 'ir-nosotros-present', english: 'we go', spanish: 'vamos', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'present', mastered: false },
  { id: 'ir-ellos-present', english: 'they go, you go (formal, plural)', spanish: 'van', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'present', mastered: false },

  // === PRETERITE (SIMPLE PAST) TENSE ===

  // Regular -ar verbs: hablar (Preterite)
  { id: 'hablar-yo-preterite', english: 'I spoke', spanish: 'hablé', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'hablar-tu-preterite', english: 'you spoke (informal, singular)', spanish: 'hablaste', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'hablar-el-preterite', english: 'he/she spoke, you spoke (formal, singular)', spanish: 'habló', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'hablar-nosotros-preterite', english: 'we spoke', spanish: 'hablamos', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'hablar-ellos-preterite', english: 'they spoke, you spoke (formal, plural)', spanish: 'hablaron', verb: 'hablar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Regular -ar verbs: caminar (Preterite)
  { id: 'caminar-yo-preterite', english: 'I walked', spanish: 'caminé', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'caminar-tu-preterite', english: 'you walked (informal, singular)', spanish: 'caminaste', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'caminar-el-preterite', english: 'he/she walked, you walked (formal, singular)', spanish: 'caminó', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'caminar-nosotros-preterite', english: 'we walked', spanish: 'caminamos', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'caminar-ellos-preterite', english: 'they walked, you walked (formal, plural)', spanish: 'caminaron', verb: 'caminar', type: 'regular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Regular -er verbs: comer (Preterite)
  { id: 'comer-yo-preterite', english: 'I ate', spanish: 'comí', verb: 'comer', type: 'regular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'comer-tu-preterite', english: 'you ate (informal, singular)', spanish: 'comiste', verb: 'comer', type: 'regular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'comer-el-preterite', english: 'he/she ate, you ate (formal, singular)', spanish: 'comió', verb: 'comer', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'comer-nosotros-preterite', english: 'we ate', spanish: 'comimos', verb: 'comer', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'comer-ellos-preterite', english: 'they ate, you ate (formal, plural)', spanish: 'comieron', verb: 'comer', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Regular -er verbs: beber (Preterite)
  { id: 'beber-yo-preterite', english: 'I drank', spanish: 'bebí', verb: 'beber', type: 'regular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'beber-tu-preterite', english: 'you drank (informal, singular)', spanish: 'bebiste', verb: 'beber', type: 'regular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'beber-el-preterite', english: 'he/she drank, you drank (formal, singular)', spanish: 'bebió', verb: 'beber', type: 'regular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'beber-nosotros-preterite', english: 'we drank', spanish: 'bebimos', verb: 'beber', type: 'regular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'beber-ellos-preterite', english: 'they drank, you drank (formal, plural)', spanish: 'bebieron', verb: 'beber', type: 'regular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Regular -ir verbs: vivir (Preterite)
  { id: 'vivir-yo-preterite', english: 'I lived', spanish: 'viví', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'vivir-tu-preterite', english: 'you lived (informal, singular)', spanish: 'viviste', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'vivir-el-preterite', english: 'he/she lived, you lived (formal, singular)', spanish: 'vivió', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'vivir-nosotros-preterite', english: 'we lived', spanish: 'vivimos', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'vivir-ellos-preterite', english: 'they lived, you lived (formal, plural)', spanish: 'vivieron', verb: 'vivir', type: 'regular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Regular -ir verbs: escribir (Preterite)
  { id: 'escribir-yo-preterite', english: 'I wrote', spanish: 'escribí', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'escribir-tu-preterite', english: 'you wrote (informal, singular)', spanish: 'escribiste', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'escribir-el-preterite', english: 'he/she wrote, you wrote (formal, singular)', spanish: 'escribió', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'escribir-nosotros-preterite', english: 'we wrote', spanish: 'escribimos', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'escribir-ellos-preterite', english: 'they wrote, you wrote (formal, plural)', spanish: 'escribieron', verb: 'escribir', type: 'regular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Irregular verbs: tener (Preterite)
  { id: 'tener-yo-preterite', english: 'I had', spanish: 'tuve', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'tener-tu-preterite', english: 'you had (informal, singular)', spanish: 'tuviste', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'tener-el-preterite', english: 'he/she had, you had (formal, singular)', spanish: 'tuvo', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'tener-nosotros-preterite', english: 'we had', spanish: 'tuvimos', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'tener-ellos-preterite', english: 'they had, you had (formal, plural)', spanish: 'tuvieron', verb: 'tener', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Irregular verbs: mentir (Preterite)
  { id: 'mentir-yo-preterite', english: 'I lied', spanish: 'mentí', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'mentir-tu-preterite', english: 'you lied (informal, singular)', spanish: 'mentiste', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'mentir-el-preterite', english: 'he/she lied, you lied (formal, singular)', spanish: 'mintió', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'mentir-nosotros-preterite', english: 'we lied', spanish: 'mentimos', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'mentir-ellos-preterite', english: 'they lied, you lied (formal, plural)', spanish: 'mintieron', verb: 'mentir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Irregular verbs: leer (Preterite)
  { id: 'leer-yo-preterite', english: 'I read', spanish: 'leí', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'leer-tu-preterite', english: 'you read (informal, singular)', spanish: 'leíste', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'leer-el-preterite', english: 'he/she read, you read (formal, singular)', spanish: 'leyó', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'leer-nosotros-preterite', english: 'we read', spanish: 'leímos', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'leer-ellos-preterite', english: 'they read, you read (formal, plural)', spanish: 'leyeron', verb: 'leer', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Irregular verbs: poner (Preterite)
  { id: 'poner-yo-preterite', english: 'I put', spanish: 'puse', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'poner-tu-preterite', english: 'you put (informal, singular)', spanish: 'pusiste', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'poner-el-preterite', english: 'he/she put, you put (formal, singular)', spanish: 'puso', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'poner-nosotros-preterite', english: 'we put', spanish: 'pusimos', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'poner-ellos-preterite', english: 'they put, you put (formal, plural)', spanish: 'pusieron', verb: 'poner', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Irregular verbs: dejar (Preterite)
  { id: 'dejar-yo-preterite', english: 'I left/let', spanish: 'dejé', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'dejar-tu-preterite', english: 'you left/let (informal, singular)', spanish: 'dejaste', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'dejar-el-preterite', english: 'he/she left/let, you left/let (formal, singular)', spanish: 'dejó', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'dejar-nosotros-preterite', english: 'we left/let', spanish: 'dejamos', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'dejar-ellos-preterite', english: 'they left/let, you left/let (formal, plural)', spanish: 'dejaron', verb: 'dejar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Irregular verbs: decir (Preterite)
  { id: 'decir-yo-preterite', english: 'I said/told', spanish: 'dije', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'decir-tu-preterite', english: 'you said/told (informal, singular)', spanish: 'dijiste', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'decir-el-preterite', english: 'he/she said/told, you said/told (formal, singular)', spanish: 'dijo', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'decir-nosotros-preterite', english: 'we said/told', spanish: 'dijimos', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'decir-ellos-preterite', english: 'they said/told, you said/told (formal, plural)', spanish: 'dijeron', verb: 'decir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Irregular verbs: estar (Preterite)
  { id: 'estar-yo-preterite', english: 'I was', spanish: 'estuve', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'estar-tu-preterite', english: 'you were (informal, singular)', spanish: 'estuviste', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'estar-el-preterite', english: 'he/she was, you were (formal, singular)', spanish: 'estuvo', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'estar-nosotros-preterite', english: 'we were', spanish: 'estuvimos', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'estar-ellos-preterite', english: 'they were, you were (formal, plural)', spanish: 'estuvieron', verb: 'estar', type: 'irregular', conjugation: 'ar', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Irregular verbs: poder (Preterite)
  { id: 'poder-yo-preterite', english: 'I could/was able to', spanish: 'pude', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'poder-tu-preterite', english: 'you could/were able to (informal, singular)', spanish: 'pudiste', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'poder-el-preterite', english: 'he/she could/was able to, you could/were able to (formal, singular)', spanish: 'pudo', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'poder-nosotros-preterite', english: 'we could/were able to', spanish: 'pudimos', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'poder-ellos-preterite', english: 'they could/were able to, you could/were able to (formal, plural)', spanish: 'pudieron', verb: 'poder', type: 'irregular', conjugation: 'er', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false },

  // Irregular verbs: ir (Preterite)
  { id: 'ir-yo-preterite', english: 'I went', spanish: 'fui', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'yo', tense: 'preterite', mastered: false },
  { id: 'ir-tu-preterite', english: 'you went (informal, singular)', spanish: 'fuiste', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'tú', tense: 'preterite', mastered: false },
  { id: 'ir-el-preterite', english: 'he/she went, you went (formal, singular)', spanish: 'fue', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'él/ella/usted', tense: 'preterite', mastered: false },
  { id: 'ir-nosotros-preterite', english: 'we went', spanish: 'fuimos', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'nosotros', tense: 'preterite', mastered: false },
  { id: 'ir-ellos-preterite', english: 'they went, you went (formal, plural)', spanish: 'fueron', verb: 'ir', type: 'irregular', conjugation: 'ir', person: 'ellos/ellas/ustedes', tense: 'preterite', mastered: false }
];

const encouragingMessages = [
  "¡Excelente! You're on fire! 🔥",
  "¡Muy bien! You're crushing it! 💪",
  "¡Perfecto! You're a Spanish superstar! ⭐",
  "¡Increíble! You're making amazing progress! 🎉",
  "¡Fantástico! You're becoming fluent! 🌟"
];

const funnyCriticism = [
  "¡Ay caramba! That was... interesting! 🤔",
  "¡Ups! I think you might need a coffee break! ☕",
  "¡Oh no! That was like watching a cat try to dance! 😸",
  "¡Madre mía! That attempt was... creative! 🎨"
];

const progressMessages = [
  "¡Felicidades! You've mastered another verb! 🎊",
  "¡Increíble progreso! You're getting stronger! 💪",
  "¡Excelente trabajo! You're building your vocabulary! 📚"
];

// Inline styles for guaranteed styling
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative' as const,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  header: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #e5e7eb',
    padding: '1rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: 0
  },
  subtitle: {
    fontSize: '0.875rem',
    color: '#6b7280',
    margin: 0
  },
  resetButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    background: 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '9999px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease'
  },
  progressBar: {
    background: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #e5e7eb',
    padding: '8px'
  },
  progressContent: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  progressText: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151'
  },
  progressBarBg: {
    width: '100%',
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '9999px',
    overflow: 'hidden'
  },
  progressBarFill: {
    height: '100%',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    borderRadius: '9999px',
    transition: 'width 1s ease'
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '1rem',
    paddingBottom: '250px',
    paddingTop: '1rem',
    minHeight: 'auto'
  },
  flashcardContainer: {
    width: '100%',
    maxWidth: '350px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1rem'
  },
  flashcard: {
    position: 'relative' as const,
    width: '100%',
    height: '140px',
    cursor: 'pointer',
    perspective: '1000px',
    marginBottom: '0',
    display: 'block'
  },
  cardSide: {
    position: 'relative' as const,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    transition: 'opacity 0.3s ease-in-out'
  },
  cardFront: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white'
  },
  cardBack: {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: 'white',
    transform: 'rotateY(180deg)'
  },
  cardFlipped: {
    transform: 'rotateY(180deg)'
  },
  cardLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '8px',
    opacity: '0.8'
  },
  cardTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center' as const
  },
  cardSubtitle: {
    fontSize: '0.875rem',
    opacity: '0.8',
    textAlign: 'center' as const
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '0.5rem',
    marginBottom: '0.5rem'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '9999px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease',
    fontSize: '1rem'
  },
  masteredButton: {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: 'white'
  },
  nextButton: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white'
  },
  verbType: {
    marginTop: '0.5rem',
    textAlign: 'center' as const
  },
  verbTypeBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  regularBadge: {
    backgroundColor: '#dcfce7',
    color: '#166534'
  },
  irregularBadge: {
    backgroundColor: '#fee2e2',
    color: '#991b1b'
  },
  statistics: {
    position: 'fixed' as const,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid #e5e7eb',
    padding: '1rem'
  },
  statsContent: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  message: {
    textAlign: 'center' as const,
    marginBottom: '1rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  statBox: {
    padding: '1rem',
    borderRadius: '12px',
    border: '1px solid',
    textAlign: 'center' as const
  },
  statNumber: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '4px'
  },
  statLabel: {
    fontSize: '0.875rem',
    opacity: '0.8'
  },
  completionScreen: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 0%, #fecaca 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  },
  completionCard: {
    maxWidth: '600px',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '24px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    padding: '2rem',
    textAlign: 'center' as const,
    border: '1px solid #fbbf24'
  }
};

function App() {
  // Load initial state from localStorage or use defaults
  const loadStateFromStorage = () => {
    try {
      const savedState = localStorage.getItem('spanishVerbsState');
      if (savedState) {
        const parsed = JSON.parse(savedState);
        return {
          verbs: parsed.verbs || conjugationData.map(verb => ({ ...verb })),
          totalAttempts: parsed.totalAttempts || 0,
          correctAttempts: parsed.correctAttempts || 0,
          currentIndex: parsed.currentIndex || 0,
          isFlipped: parsed.isFlipped || false,
          spanishFirst: parsed.spanishFirst || false
        };
      }
    } catch (error) {
      console.log('No saved state found or error loading state, using defaults');
    }
    return {
      verbs: conjugationData.map(verb => ({ ...verb })),
      totalAttempts: 0,
      correctAttempts: 0,
      currentIndex: 0,
      isFlipped: false,
      spanishFirst: false
    };
  };

  const initialState = loadStateFromStorage();
  
  const [verbs, setVerbs] = useState<Conjugation[]>(initialState.verbs);
  const [currentIndex, setCurrentIndex] = useState(initialState.currentIndex);
  const [totalAttempts, setTotalAttempts] = useState(initialState.totalAttempts);
  const [correctAttempts, setCorrectAttempts] = useState(initialState.correctAttempts);
  const [lastMessage, setLastMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [shuffledVerbs, setShuffledVerbs] = useState<Conjugation[]>([]);
  const [isFlipped, setIsFlipped] = useState(initialState.isFlipped);
  const [shuffleTrigger, setShuffleTrigger] = useState(0);
  const [spanishFirst, setSpanishFirst] = useState(initialState.spanishFirst);

  // Save state to localStorage whenever important state changes
  useEffect(() => {
    const stateToSave = {
      verbs,
      totalAttempts,
      correctAttempts,
      currentIndex,
      isFlipped,
      spanishFirst,
      timestamp: Date.now()
    };
    localStorage.setItem('spanishVerbsState', JSON.stringify(stateToSave));
  }, [verbs, totalAttempts, correctAttempts, currentIndex, isFlipped, spanishFirst]);

  // Shuffle verbs that aren't mastered - now triggers on both verbs change and shuffleTrigger
  useEffect(() => {
    const unmasteredVerbs = verbs.filter(verb => !verb.mastered);
    // Fisher-Yates shuffle algorithm for better randomization
    const shuffled = [...unmasteredVerbs];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledVerbs(shuffled);
    setCurrentIndex(0);
  }, [verbs, shuffleTrigger]);

  const showEncouragingMessage = () => {
    const message = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
    setLastMessage(message);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const showFunnyCriticism = () => {
    const message = funnyCriticism[Math.floor(Math.random() * funnyCriticism.length)];
    setLastMessage(message);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const showProgressMessage = () => {
    const message = progressMessages[Math.floor(Math.random() * progressMessages.length)];
    setLastMessage(message);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleShuffle = () => {
    setShuffleTrigger(prev => prev + 1);
    setIsFlipped(false);
  };

  const handleMastered = (verbId: string) => {
    setVerbs(prevVerbs => 
      prevVerbs.map(verb => 
        verb.id === verbId ? { ...verb, mastered: true } : verb
      )
    );
    
    setTotalAttempts((prev: number) => prev + 1);
    setCorrectAttempts((prev: number) => prev + 1);
    setIsFlipped(false);
    
    showProgressMessage();
  };

  const handleNext = () => {
    setTotalAttempts((prev: number) => prev + 1);
    setIsFlipped(false);
    
    if (Math.random() > 0.3) {
      showEncouragingMessage();
    } else {
      showFunnyCriticism();
    }
    
    setCurrentIndex((prev: number) => prev + 1);
  };

  const handleReset = () => {
    setVerbs(conjugationData.map(verb => ({ ...verb, mastered: false })));
    setCurrentIndex(0);
    setTotalAttempts(0);
    setCorrectAttempts(0);
    setLastMessage('');
    setShowMessage(false);
    setIsFlipped(false);
    setShuffleTrigger((prev: number) => prev + 1); // Trigger shuffle on reset
    // Clear localStorage on reset
    localStorage.removeItem('spanishVerbsState');
  };

  const clearProgress = () => {
    localStorage.removeItem('spanishVerbsState');
    window.location.reload(); // Reload to reset everything
  };

  const handleToggleLanguage = () => {
    setSpanishFirst((prev: boolean) => !prev);
    setIsFlipped(false);
  };

  const masteredVerbs = verbs.filter(verb => verb.mastered);
  const isCompleted = masteredVerbs.length === verbs.length;
  const currentConjugation = shuffledVerbs[currentIndex];
  const isLastCard = currentIndex === shuffledVerbs.length - 1;
  const masteryPercentage = Math.round((masteredVerbs.length / verbs.length) * 100);
  const accuracyPercentage = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case ' ': // Spacebar - flip card
          event.preventDefault();
          setIsFlipped(!isFlipped);
          break;
        case 'ArrowRight': // Right arrow - next card
        case 'n': // 'n' key - next card
          event.preventDefault();
          if (!isLastCard) {
            handleNext();
          }
          break;
        case 'm': // 'm' key - mark as mastered
          event.preventDefault();
          if (currentConjugation) {
            handleMastered(currentConjugation.id);
          }
          break;
        case 'r': // 'r' key - reset all
          event.preventDefault();
          handleReset();
          break;
        case 's': // 's' key - shuffle
          event.preventDefault();
          handleShuffle();
          break;
        case 'l': // 'l' key - toggle language direction
          event.preventDefault();
          handleToggleLanguage();
          break;
        case 'ArrowLeft': // Left arrow - previous card (if not first)
          event.preventDefault();
          if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setIsFlipped(false);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFlipped, isLastCard, currentIndex, currentConjugation]);

  if (isCompleted) {
    return (
      <div style={styles.completionScreen}>
        <div style={styles.completionCard}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            ¡Felicidades! 🎉
          </h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#6b7280', marginBottom: '1.5rem' }}>
            You've Mastered All Spanish Verbs!
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#374151', marginBottom: '2rem' }}>
            You've conquered all {verbs.length} conjugations with {accuracyPercentage}% accuracy!
          </p>
          <button
            onClick={handleReset}
            style={{
              ...styles.button,
              ...styles.nextButton,
              margin: '0 auto',
              display: 'flex'
            }}
          >
            <RotateCcw size={24} />
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerLeft}>
            <BookOpen size={32} color="#3b82f6" />
            <div>
              <h1 style={styles.title}>Spanish Verb Master</h1>
              <p style={styles.subtitle}>Master the art of Spanish verbs</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={handleReset} style={styles.resetButton}>
              <RotateCcw size={20} />
              Reset All
            </button>
            <button 
              onClick={clearProgress}
              style={{
                ...styles.resetButton,
                background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
              }}
            >
              <Trash2 size={20} />
              Clear Progress
            </button>
            <button 
              onClick={handleToggleLanguage}
              style={{
                ...styles.resetButton,
                background: spanishFirst 
                  ? 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                  : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
              }}
            >
              <Languages size={20} />
              {spanishFirst ? 'Spanish First' : 'English First'}
            </button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div style={styles.progressBar}>
        <div style={styles.progressContent}>
          <div style={styles.progressText}>
            <Target size={20} color="#3b82f6" />
            <span>Progress: {masteredVerbs.length}/{verbs.length} mastered</span>
          </div>
          <div style={styles.progressBarBg}>
            <div 
              style={{
                ...styles.progressBarFill,
                width: `${masteryPercentage}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Content - Flashcard */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 1rem',
        gap: '1.5rem',
        minHeight: '60vh'
      }}>
        {currentConjugation && (
          <>
            {/* Flashcard */}
            <div 
              style={{
                width: '100%',
                maxWidth: '350px',
                height: '120px',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                border: '1px solid #f3f4f6',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                cursor: 'pointer'
              }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                marginBottom: '0.5rem'
              }}>
                {!isFlipped 
                  ? (spanishFirst ? 'Spanish' : 'English')
                  : (spanishFirst ? 'English' : 'Spanish')
                }
              </div>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: '0 0 0.5rem 0',
                textAlign: 'center'
              }}>
                {!isFlipped 
                  ? (spanishFirst ? currentConjugation.spanish : currentConjugation.english)
                  : (spanishFirst ? currentConjugation.english : currentConjugation.spanish)
                }
              </h2>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                textAlign: 'center'
              }}>
                {!isFlipped 
                  ? (spanishFirst ? 'Click to see English' : 'Click to see Spanish')
                  : 'Click to flip back'
                }
              </div>
            </div>

            {/* Action buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '350px',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => handleMastered(currentConjugation.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#fbbf24',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                <Star size={20} />
                Mastered
              </button>
              
              {!isLastCard && (
                <button
                  onClick={handleNext}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                >
                  <Check size={20} />
                  Next
                </button>
              )}

              <button
                onClick={handleShuffle}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#8b5cf6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                <Shuffle size={20} />
                Shuffle
              </button>
            </div>

            {/* Verb type indicator */}
            <div style={{
              textAlign: 'center',
              display: 'flex',
              gap: '0.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <span style={{
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '600',
                ...(currentConjugation.type === 'irregular' 
                  ? { backgroundColor: '#fef3c7', color: '#92400e' }
                  : { backgroundColor: '#dbeafe', color: '#1e40af' }
                )
              }}>
                {currentConjugation.type === 'irregular' ? 'Irregular' : `Regular -${currentConjugation.conjugation}`}
              </span>
              <span style={{
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '600',
                backgroundColor: currentConjugation.tense === 'present' ? '#dcfce7' : '#fef3c7',
                color: currentConjugation.tense === 'present' ? '#166534' : '#92400e'
              }}>
                {currentConjugation.tense === 'present' ? 'Present' : 'Preterite'}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Statistics */}
      <div style={styles.statistics}>
        <div style={styles.statsContent}>
          {/* Progress Message */}
          {showMessage && (
            <div style={styles.message}>
              {lastMessage}
            </div>
          )}

          {/* Statistics Grid */}
          <div style={styles.statsGrid}>
            <div style={{
              ...styles.statBox,
              backgroundColor: '#eff6ff',
              borderColor: '#bfdbfe',
              color: '#1e40af'
            }}>
              <div style={styles.statNumber}>{masteredVerbs.length}/{verbs.length}</div>
              <div style={styles.statLabel}>Mastery Progress</div>
            </div>
            
            <div style={{
              ...styles.statBox,
              backgroundColor: '#ecfdf5',
              borderColor: '#a7f3d0',
              color: '#065f46'
            }}>
              <div style={styles.statNumber}>{accuracyPercentage}%</div>
              <div style={styles.statLabel}>Accuracy</div>
            </div>
            
            <div style={{
              ...styles.statBox,
              backgroundColor: '#faf5ff',
              borderColor: '#c4b5fd',
              color: '#5b21b6'
            }}>
              <div style={styles.statNumber}>{verbs.length - masteredVerbs.length}</div>
              <div style={styles.statLabel}>Remaining</div>
            </div>
            
            <div style={{
              ...styles.statBox,
              backgroundColor: '#fffbeb',
              borderColor: '#fcd34d',
              color: '#92400e'
            }}>
              <div style={styles.statNumber}>{currentIndex + 1}</div>
              <div style={styles.statLabel}>Current Card</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 