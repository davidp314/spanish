import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, RotateCcw, Sparkles, Crown, Target } from 'lucide-react';
import { Verb } from '../data/verbs';

interface CompletionScreenProps {
  verbs: Verb[];
  totalAttempts: number;
  correctAttempts: number;
  onReset: () => void;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({
  verbs,
  totalAttempts,
  correctAttempts,
  onReset
}) => {
  const masteredVerbs = verbs.filter(verb => verb.mastered);
  const accuracyPercentage = Math.round((correctAttempts / totalAttempts) * 100);
  const regularVerbs = masteredVerbs.filter(verb => verb.type === 'regular');
  const irregularVerbs = masteredVerbs.filter(verb => verb.type === 'irregular');

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full"
      >
        {/* Main Celebration Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 text-center border border-yellow-200"
        >
          {/* Trophy Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <Trophy className="w-24 h-24 text-yellow-500" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            ¡Felicidades! 🎉
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-2xl font-semibold text-gray-600 mb-6"
          >
            You've Mastered All Spanish Verbs!
          </motion.h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 border border-blue-200"
            >
              <div className="text-2xl font-bold text-blue-900">{masteredVerbs.length}</div>
              <div className="text-sm text-blue-700">Total Verbs</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 border border-green-200"
            >
              <div className="text-2xl font-bold text-green-900">{accuracyPercentage}%</div>
              <div className="text-sm text-green-700">Accuracy</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-4 border border-purple-200"
            >
              <div className="text-2xl font-bold text-purple-900">{regularVerbs.length}</div>
              <div className="text-sm text-purple-700">Regular</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="bg-gradient-to-br from-red-50 to-pink-100 rounded-xl p-4 border border-red-200"
            >
              <div className="text-2xl font-bold text-red-900">{irregularVerbs.length}</div>
              <div className="text-sm text-red-700">Irregular</div>
            </motion.div>
          </div>

          {/* Achievement Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6 border border-yellow-300 mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Crown className="w-8 h-8 text-yellow-600" />
              <span className="text-xl font-bold text-yellow-800">Spanish Verb Master</span>
              <Crown className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="text-yellow-700 text-lg">
              You've conquered all the verbs! From regular conjugations to the trickiest irregulars, 
              you've shown incredible dedication and skill. ¡Eres increíble!
            </p>
          </motion.div>

          {/* Mastered Verbs List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Mastered Verbs:</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {masteredVerbs.map((verb, index) => (
                <motion.div
                  key={verb.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.05, duration: 0.4 }}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                    verb.type === 'irregular'
                      ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white'
                      : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                  }`}
                >
                  <Star className="w-4 h-4" />
                  {verb.spanish}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Reset Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReset}
            className="flex items-center gap-2 mx-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <RotateCcw className="w-6 h-6" />
            Start Over
          </motion.button>
        </motion.div>

        {/* Floating Celebration Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 text-yellow-400 opacity-30"
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 text-orange-400 opacity-30"
        >
          <Star className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 text-red-400 opacity-30"
        >
          <Target className="w-7 h-7" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CompletionScreen; 