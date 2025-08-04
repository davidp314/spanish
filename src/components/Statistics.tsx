import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Target, TrendingUp, Award, Star, CheckCircle } from 'lucide-react';
import { Verb, encouragingMessages, funnyCriticism, progressMessages } from '../data/verbs';

interface StatisticsProps {
  verbs: Verb[];
  currentIndex: number;
  totalAttempts: number;
  correctAttempts: number;
  lastMessage: string;
  showMessage: boolean;
}

const Statistics: React.FC<StatisticsProps> = ({
  verbs,
  currentIndex,
  totalAttempts,
  correctAttempts,
  lastMessage,
  showMessage
}) => {
  const masteredVerbs = verbs.filter(verb => verb.mastered);
  const remainingVerbs = verbs.filter(verb => !verb.mastered);
  const masteryPercentage = Math.round((masteredVerbs.length / verbs.length) * 100);
  const accuracyPercentage = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    if (percentage >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getProgressBarColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    if (percentage >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Message */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center mb-4"
            >
              <span className="text-lg font-semibold text-gray-800">
                {lastMessage}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Mastery Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 border border-blue-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800">Mastery</span>
            </div>
            <div className="text-2xl font-bold text-blue-900 mb-1">
              {masteredVerbs.length}/{verbs.length}
            </div>
            <div className="text-sm text-blue-700">
              {masteryPercentage}% Complete
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
              <motion.div
                className={`h-2 rounded-full ${getProgressBarColor(masteryPercentage)}`}
                initial={{ width: 0 }}
                animate={{ width: `${masteryPercentage}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </motion.div>

          {/* Accuracy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 border border-green-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-green-800">Accuracy</span>
            </div>
            <div className="text-2xl font-bold text-green-900 mb-1">
              {accuracyPercentage}%
            </div>
            <div className="text-sm text-green-700">
              {correctAttempts}/{totalAttempts} Correct
            </div>
            <div className="w-full bg-green-200 rounded-full h-2 mt-2">
              <motion.div
                className={`h-2 rounded-full ${getProgressBarColor(accuracyPercentage)}`}
                initial={{ width: 0 }}
                animate={{ width: `${accuracyPercentage}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Remaining */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-4 border border-purple-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-800">Remaining</span>
            </div>
            <div className="text-2xl font-bold text-purple-900 mb-1">
              {remainingVerbs.length}
            </div>
            <div className="text-sm text-purple-700">
              Verbs to Master
            </div>
            <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
              <motion.div
                className="h-2 rounded-full bg-purple-500"
                initial={{ width: 0 }}
                animate={{ width: `${(remainingVerbs.length / verbs.length) * 100}%` }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Current Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-4 border border-orange-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold text-orange-800">Progress</span>
            </div>
            <div className="text-2xl font-bold text-orange-900 mb-1">
              {currentIndex + 1}
            </div>
            <div className="text-sm text-orange-700">
              Current Card
            </div>
            <div className="w-full bg-orange-200 rounded-full h-2 mt-2">
              <motion.div
                className="h-2 rounded-full bg-orange-500"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / verbs.length) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Achievement Badges */}
        {masteredVerbs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 flex flex-wrap gap-2 justify-center"
          >
            {masteredVerbs.slice(-3).map((verb, index) => (
              <motion.div
                key={verb.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4" />
                {verb.spanish}
              </motion.div>
            ))}
            {masteredVerbs.length > 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 }}
                className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-medium"
              >
                <Star className="w-4 h-4" />
                +{masteredVerbs.length - 3} more
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Statistics; 