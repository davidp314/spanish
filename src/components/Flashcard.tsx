import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, RotateCcw, Star, X } from 'lucide-react';
import { Verb } from '../data/verbs';

interface FlashcardProps {
  verb: Verb;
  onMastered: (verbId: string) => void;
  onNext: () => void;
  isLastCard: boolean;
}

const Flashcard: React.FC<FlashcardProps> = ({ verb, onMastered, onNext, isLastCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!showAnswer) {
      setShowAnswer(true);
    }
  };

  const handleMastered = () => {
    onMastered(verb.id);
    if (!isLastCard) {
      onNext();
    }
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <motion.div
        className="relative w-full max-w-md h-64 cursor-pointer perspective-1000"
        onClick={handleFlip}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isFlipped ? 'back' : 'front'}
            className="absolute w-full h-full"
            initial={{ rotateY: isFlipped ? -90 : 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: isFlipped ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-full h-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {!isFlipped ? (
                // Front side - English
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-sm font-medium text-blue-100 mb-2"
                    >
                      English
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl font-bold mb-4"
                    >
                      {verb.english}
                    </motion.h2>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-sm text-blue-100"
                    >
                      Click to see Spanish
                    </motion.div>
                  </div>
                </div>
              ) : (
                // Back side - Spanish
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-sm font-medium text-emerald-100 mb-2"
                    >
                      Spanish
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl font-bold mb-2"
                    >
                      {verb.spanish}
                    </motion.h2>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-sm text-emerald-100 mb-4"
                    >
                      {verb.type === 'irregular' ? 'Irregular verb' : `Regular -${verb.conjugation} verb`}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-sm text-emerald-100"
                    >
                      Click to flip back
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4 mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleMastered}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Star className="w-5 h-5" />
          Mastered
        </motion.button>
        
        {!isLastCard && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Check className="w-5 h-5" />
            Next
          </motion.button>
        )}
      </motion.div>

      {/* Verb type indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-6"
      >
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
          verb.type === 'irregular' 
            ? 'bg-red-100 text-red-800' 
            : 'bg-green-100 text-green-800'
        }`}>
          {verb.type === 'irregular' ? 'Irregular' : `Regular -${verb.conjugation}`}
        </span>
      </motion.div>
    </div>
  );
};

export default Flashcard; 