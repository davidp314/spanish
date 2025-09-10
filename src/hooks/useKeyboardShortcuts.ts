import { useEffect } from 'react';

interface UseKeyboardShortcutsProps {
  onEscape?: () => void;
  onVerbSelection?: () => void;
}

// Hook for managing keyboard shortcuts and event handling
export const useKeyboardShortcuts = ({ onEscape, onVerbSelection }: UseKeyboardShortcutsProps = {}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only activate shortcuts when not typing in an input field
      const target = event.target as HTMLElement;
      const isTyping = target.tagName === 'INPUT' || 
                      target.tagName === 'TEXTAREA' || 
                      target.tagName === 'SELECT' ||
                      target.contentEditable === 'true';
      
      if (isTyping) return; // Don't activate shortcuts when typing

      switch (event.key.toLowerCase()) {
        case 'escape':
          if (onEscape) {
            onEscape();
          }
          break;
        case 'v':
          if (!event.ctrlKey && !event.metaKey && onVerbSelection) {
            event.preventDefault();
            onVerbSelection();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEscape, onVerbSelection]);
};