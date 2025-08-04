import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Keyboard, Info } from 'lucide-react';

interface SpanishAccentKeyboardProps {
  onCharacterInsert: (char: string) => void;
  isVisible: boolean;
}

interface AccentButton {
  character: string;
  shortcut: string;
  description: string;
  key: string;
}

const accentButtons: AccentButton[] = [
  { character: 'á', shortcut: '1', description: 'a with acute', key: '1' },
  { character: 'é', shortcut: '2', description: 'e with acute', key: '2' },
  { character: 'í', shortcut: '3', description: 'i with acute', key: '3' },
  { character: 'ó', shortcut: '4', description: 'o with acute', key: '4' },
  { character: 'ú', shortcut: '5', description: 'u with acute', key: '5' },
  { character: 'ñ', shortcut: '6', description: 'n with tilde', key: '6' },
  { character: 'ü', shortcut: '7', description: 'u with umlaut', key: '7' },
  { character: '¿', shortcut: '8', description: 'inverted question', key: '8' },
  { character: '¡', shortcut: '9', description: 'inverted exclamation', key: '9' },
];

const SpanishAccentKeyboard: React.FC<SpanishAccentKeyboardProps> = ({ 
  onCharacterInsert, 
  isVisible 
}) => {
  const [lastPressedKey, setLastPressedKey] = useState<string | null>(null);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isVisible) return;
      
      // Check for number keys 1-9
      const key = event.key;
      console.log('SpanishAccentKeyboard: Key pressed:', key);
      
      const button = accentButtons.find(btn => btn.key === key);
      
      if (button) {
        console.log('SpanishAccentKeyboard: Found button for key', key, 'inserting character:', button.character);
        event.preventDefault();
        event.stopPropagation();
        onCharacterInsert(button.character);
        setLastPressedKey(button.character);
        setTimeout(() => setLastPressedKey(null), 500);
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown, true); // Use capture phase
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [isVisible, onCharacterInsert]);



  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
        marginTop: '1rem',

      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0.5rem'
      }}>
        <Keyboard size={20} color="#6b7280" />
        <span style={{
          fontSize: '0.875rem',
          fontWeight: '600',
          color: '#374151',
          marginLeft: '0.5rem'
        }}>
          Spanish Accents
        </span>
      </div>



      {/* Accent buttons grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
        gap: '0.5rem'
      }}>
        {accentButtons.map((button) => (
          <div key={button.character} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            <motion.button
              onClick={() => onCharacterInsert(button.character)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.5rem 0.25rem',
                backgroundColor: lastPressedKey === button.character ? '#10b981' : '#f3f4f6',
                color: lastPressedKey === button.character ? 'white' : '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '40px',
                minHeight: '40px'
              }}
              title={`${button.description} (${button.shortcut})`}
            >
              <span style={{ 
                fontSize: '1.25rem',
                transition: 'font-size 0.3s ease'
              }}>
                {button.character}
              </span>
            </motion.button>
            <span style={{
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              color: '#6b7280',
              fontWeight: '500'
            }}>
              {button.shortcut}
            </span>
          </div>
        ))}
      </div>


    </motion.div>
  );
};

export default SpanishAccentKeyboard; 