import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Plus, Check, Sparkles, X } from 'lucide-react';

interface TagSelectorProps {
  value: string;
  onChange: (word: string) => void;
  suggestions: readonly string[] | string[];
}

export const TagSelector: React.FC<TagSelectorProps> = ({
  value,
  onChange,
  suggestions,
}) => {
  const [filterText, setFilterText] = useState('');

  const trimmedFilter = filterText.trim();

  // Filter existing suggestions
  const filteredSuggestions = suggestions.filter((word) =>
    word.toLowerCase().includes(trimmedFilter.toLowerCase())
  );

  // Check if typed text matches any suggestion exactly
  const isExactMatch = suggestions.some(
    (word) => word.toLowerCase() === trimmedFilter.toLowerCase()
  );

  const handleSelectWord = (word: string) => {
    if (value === word) {
      // Toggle off if clicked again
      onChange('');
    } else {
      onChange(word);
    }
  };

  const handleAddCustomWord = () => {
    if (!trimmedFilter) return;
    onChange(trimmedFilter);
    setFilterText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && trimmedFilter) {
      e.preventDefault();
      handleAddCustomWord();
    }
  };

  return (
    <div className="space-y-2.5">
      {/* Selected Tag Active Display (if any) */}
      <AnimatePresence>
        {value && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-center gap-2 p-2 px-3.5 rounded-2xl bg-[#FFD81A] border-2 border-[#09562C] shadow-goa-sm text-[#09562C] font-mono text-xs font-black"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF0F7B] shrink-0" />
            <span>Selected Tag:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#FF0F7B] text-white border border-[#09562C] text-xs font-black shadow-2xs">
              {value}
            </span>
            <button
              type="button"
              onClick={() => onChange('')}
              className="ml-auto p-1 rounded-full hover:bg-white text-[#09562C] transition-colors cursor-pointer"
              title="Clear tag"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search / Type Field */}
      <div className="relative">
        <Search className="w-4 h-4 text-[#09562C]/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search or type your word..."
          maxLength={20}
          className="w-full pl-10 pr-24 py-2.5 rounded-2xl bg-white border-2 border-[#09562C] font-mono text-xs sm:text-sm font-bold text-[#09562C] placeholder-[#09562C]/40 outline-none transition-all shadow-goa-sm focus:ring-3 focus:ring-[#FFD81A]"
        />

        {trimmedFilter && (
          <button
            type="button"
            onClick={handleAddCustomWord}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-xl bg-[#FF0F7B] text-white border border-[#09562C] font-mono text-[10px] sm:text-xs font-black hover:bg-[#E00069] active:scale-95 transition-all flex items-center gap-1 shadow-xs cursor-pointer"
          >
            <Plus className="w-3 h-3" />
            <span>Add</span>
          </button>
        )}
      </div>

      {/* Chips List with Layout Animations */}
      <div className="flex flex-wrap gap-1.5 max-h-44 overflow-y-auto p-1 custom-scrollbar">
        {/* Custom add chip preview if typing new word */}
        {trimmedFilter && !isExactMatch && (
          <motion.button
            layout
            type="button"
            onClick={handleAddCustomWord}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-3 py-1.5 rounded-xl font-mono text-xs font-black border-2 border-dashed border-[#09562C] bg-[#FFD81A] text-[#09562C] hover:bg-[#FF0F7B] hover:text-white transition-all cursor-pointer flex items-center gap-1 shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>"{trimmedFilter}"</span>
          </motion.button>
        )}

        {/* Filtered suggestions chips */}
        {filteredSuggestions.map((word) => {
          const isSelected = value === word;

          return (
            <motion.button
              key={word}
              layout
              type="button"
              onClick={() => handleSelectWord(word)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold border-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-[#FF0F7B] text-white border-[#09562C] shadow-goa-sm font-black'
                  : 'bg-white text-[#09562C] border-[#09562C]/30 hover:bg-[#FFD81A] hover:border-[#09562C] hover:text-[#09562C]'
              }`}
            >
              {isSelected && (
                <Check className="w-3.5 h-3.5 stroke-[3] text-white shrink-0" />
              )}
              <span>{word}</span>
            </motion.button>
          );
        })}

        {filteredSuggestions.length === 0 && !trimmedFilter && (
          <div className="w-full text-center py-3 font-mono text-xs text-[#09562C]/60 italic">
            Type to add a custom word...
          </div>
        )}
      </div>
    </div>
  );
};
