import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Keyboard, MousePointer, ArrowRight, ArrowLeft, Star, RotateCcw, Shuffle, Languages, HelpCircle, BookOpen } from 'lucide-react';

interface KeyboardHelpProps {
  isOpen: boolean;
  onClose: () => void;
}

const KeyboardHelp: React.FC<KeyboardHelpProps> = ({ isOpen, onClose }) => {
  console.log('KeyboardHelp component rendered, isOpen:', isOpen);
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const shortcuts = [
    {
      category: 'Navigation',
      icon: <MousePointer size={20} />,
      shortcuts: [
        { key: 'Spacebar', description: 'Flip the current card' },
        { key: '→ or N', description: 'Move to next card' },
        { key: '←', description: 'Move to previous card' }
      ]
    },
    {
      category: 'Actions',
      icon: <Star size={20} />,
      shortcuts: [
        { key: 'M', description: 'Mark current card as mastered' },
        { key: 'S', description: 'Shuffle remaining cards' },
        { key: 'R', description: 'Reset all progress' },
        { key: 'L', description: 'Toggle language direction' },
        { key: 'H', description: 'Show conjugation reference' }
      ]
    },
    {
      category: 'Help',
      icon: <HelpCircle size={20} />,
      shortcuts: [
        { key: '?', description: 'Show this help modal' },
        { key: 'Esc', description: 'Close any modal' }
      ]
    }
  ];

  const styles = {
    overlay: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(4px)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    },
    modal: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      maxWidth: '32rem',
      width: '100%',
      maxHeight: '90vh',
      overflow: 'hidden'
    },
    header: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      color: 'white',
      padding: '1.5rem'
    },
    headerContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    headerTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: 0
    },
    headerSubtitle: {
      fontSize: '0.875rem',
      color: '#bfdbfe',
      margin: 0
    },
    closeButton: {
      padding: '0.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: 'none',
      borderRadius: '50%',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    content: {
      padding: '1.5rem',
      overflowY: 'auto' as const,
      maxHeight: 'calc(90vh - 120px)'
    },
    categoryContainer: {
      marginBottom: '1.5rem'
    },
    categoryHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '12px'
    },
    categoryTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#1f2937',
      margin: 0
    },
    categoryBox: {
      backgroundColor: '#f9fafb',
      borderRadius: '12px',
      padding: '1rem'
    },
    shortcutItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 12px',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      marginBottom: '4px'
    },
    shortcutDescription: {
      color: '#374151',
      fontSize: '0.875rem'
    },
    keyboardKey: {
      padding: '4px 8px',
      backgroundColor: '#f3f4f6',
      color: '#1f2937',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontFamily: 'monospace',
      border: '1px solid #d1d5db'
    },
    tipsContainer: {
      marginTop: '1.5rem',
      padding: '1rem',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #dbeafe 100%)',
      borderRadius: '12px',
      border: '1px solid #bbf7d0'
    },
    tipsHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '8px'
    },
    tipsTitle: {
      fontWeight: '600',
      color: '#166534',
      margin: 0
    },
    tipsList: {
      fontSize: '0.875rem',
      color: '#166534',
      margin: 0,
      paddingLeft: '1rem'
    },
    tipsItem: {
      marginBottom: '4px'
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={styles.overlay}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={styles.header}>
              <div style={styles.headerContent}>
                <div style={styles.headerLeft}>
                  <Keyboard size={28} />
                  <div>
                    <h2 style={styles.headerTitle}>Keyboard Shortcuts</h2>
                    <p style={styles.headerSubtitle}>Master your Spanish verbs faster with these shortcuts</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  style={styles.closeButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div style={styles.content}>
              <div style={styles.categoryContainer}>
                {shortcuts.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={styles.categoryBox}
                  >
                    <div style={styles.categoryHeader}>
                      {category.icon}
                      <h3 style={styles.categoryTitle}>{category.category}</h3>
                    </div>
                    <div>
                      {category.shortcuts.map((shortcut, shortcutIndex) => (
                        <div
                          key={shortcutIndex}
                          style={styles.shortcutItem}
                        >
                          <span style={styles.shortcutDescription}>{shortcut.description}</span>
                          <kbd style={styles.keyboardKey}>{shortcut.key}</kbd>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tips section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={styles.tipsContainer}
              >
                <div style={styles.tipsHeader}>
                  <BookOpen size={20} style={{ color: '#16a34a' }} />
                  <h4 style={styles.tipsTitle}>Pro Tips</h4>
                </div>
                <ul style={styles.tipsList}>
                  <li style={styles.tipsItem}>• Use Spacebar to quickly flip cards without moving your mouse</li>
                  <li style={styles.tipsItem}>• Press M to mark cards as mastered for faster progress</li>
                  <li style={styles.tipsItem}>• Use arrow keys to navigate through your verb deck</li>
                  <li style={styles.tipsItem}>• Press ? anytime to see this help modal</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KeyboardHelp; 