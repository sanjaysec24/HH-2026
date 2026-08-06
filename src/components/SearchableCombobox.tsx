import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, Check, Plus, X } from 'lucide-react';

interface SearchableComboboxProps {
  value: string;
  onChange: (value: string) => void;
  options: readonly string[] | string[];
  placeholder: string;
  searchPlaceholder: string;
  icon?: React.ReactNode;
  hasError?: boolean;
  allowCustom?: boolean;
  customLabelPrefix?: string;
  id?: string;
}

export const SearchableCombobox: React.FC<SearchableComboboxProps> = ({
  value,
  onChange,
  options,
  placeholder,
  searchPlaceholder,
  icon,
  hasError = false,
  allowCustom = false,
  customLabelPrefix = 'Use custom city:',
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter options based on search query
  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  const isExactMatch = options.some(
    (opt) => opt.toLowerCase() === searchTerm.trim().toLowerCase()
  );

  const showCustomOption =
    allowCustom && searchTerm.trim().length > 0 && !isExactMatch;

  // Calculate total navigable list items
  const totalItemsCount =
    filteredOptions.length + (showCustomOption ? 1 : 0);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Auto focus search input when opening
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
      setHighlightedIndex(0);
    }
  }, [isOpen]);

  // Reset highlighted index on search term change
  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchTerm]);

  const handleSelect = (selectedVal: string) => {
    onChange(selectedVal);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      setSearchTerm('');
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (totalItemsCount > 0) {
        setHighlightedIndex((prev) => (prev + 1) % totalItemsCount);
      }
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (totalItemsCount > 0) {
        setHighlightedIndex(
          (prev) => (prev - 1 + totalItemsCount) % totalItemsCount
        );
      }
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (showCustomOption && highlightedIndex === 0) {
        handleSelect(searchTerm.trim());
      } else {
        const optionIndex = showCustomOption
          ? highlightedIndex - 1
          : highlightedIndex;
        if (filteredOptions[optionIndex]) {
          handleSelect(filteredOptions[optionIndex]);
        } else if (allowCustom && searchTerm.trim()) {
          handleSelect(searchTerm.trim());
        }
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onKeyDown={handleKeyDown}
      id={id}
    >
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`w-full px-4 py-3 rounded-2xl bg-white border-2 font-sans font-bold text-sm sm:text-base text-[#09562C] flex items-center justify-between gap-2 shadow-goa-sm cursor-pointer outline-none transition-all ${
          hasError
            ? 'border-[#FF0F7B] ring-2 ring-[#FF0F7B]/20'
            : isOpen
            ? 'border-[#09562C] ring-3 ring-[#FFD81A] bg-[#FFD81A]/10'
            : 'border-[#09562C] hover:border-[#09562C] hover:bg-[#F7F0DD]/50'
        }`}
      >
        <div className="flex items-center gap-2.5 truncate">
          {icon && <span className="shrink-0">{icon}</span>}
          <span
            className={
              value
                ? 'text-[#09562C] font-black truncate'
                : 'text-[#09562C]/40 font-normal truncate'
            }
          >
            {value || placeholder}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-[#09562C] shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#FF0F7B]' : ''
          }`}
        />
      </button>

      {/* Floating Search Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-0 right-0 top-full z-50 mt-1 bg-[#F7F0DD] border-2 border-[#09562C] rounded-2xl p-2.5 shadow-goa-lg overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="relative mb-2">
              <Search className="w-4 h-4 text-[#09562C]/60 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-white border-2 border-[#09562C] font-mono text-xs sm:text-sm font-bold text-[#09562C] placeholder-[#09562C]/40 outline-none focus:ring-2 focus:ring-[#FFD81A]"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-[#FF0F7B] hover:text-white text-[#09562C] transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Scrollable List */}
            <ul
              role="listbox"
              className="max-h-56 overflow-y-auto space-y-1 pr-0.5 custom-scrollbar"
            >
              {/* Option to use custom entry if allowCustom is true */}
              {showCustomOption && (
                <li
                  role="option"
                  aria-selected={highlightedIndex === 0}
                  onClick={() => handleSelect(searchTerm.trim())}
                  onMouseEnter={() => setHighlightedIndex(0)}
                  className={`px-3 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-black cursor-pointer transition-all flex items-center justify-between border-2 border-dashed ${
                    highlightedIndex === 0
                      ? 'bg-[#FF0F7B] text-white border-white shadow-xs'
                      : 'bg-[#FFD81A] text-[#09562C] border-[#09562C] hover:bg-[#FF0F7B] hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <Plus className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      {customLabelPrefix} "{searchTerm.trim()}"
                    </span>
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold opacity-80 shrink-0">
                    Custom
                  </span>
                </li>
              )}

              {/* Standard Filtered Options */}
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => {
                  const itemNavIndex = showCustomOption ? index + 1 : index;
                  const isSelected = value === option;
                  const isHighlighted = highlightedIndex === itemNavIndex;

                  return (
                    <li
                      key={option}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(option)}
                      onMouseEnter={() => setHighlightedIndex(itemNavIndex)}
                      className={`px-3.5 py-2.5 rounded-xl font-sans font-bold text-sm sm:text-base cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#FFD81A] text-[#09562C] border-2 border-[#09562C] font-black shadow-xs'
                          : isHighlighted
                          ? 'bg-[#09562C] text-white border border-[#09562C]'
                          : 'bg-white text-[#09562C] border border-[#09562C]/20 hover:bg-[#FFD81A] hover:border-[#09562C]'
                      }`}
                    >
                      <span className="truncate">{option}</span>
                      {isSelected && (
                        <Check className="w-4 h-4 text-[#FF0F7B] stroke-[3] shrink-0" />
                      )}
                    </li>
                  );
                })
              ) : !showCustomOption ? (
                <div className="py-6 text-center font-mono text-xs font-bold text-[#09562C]/60 bg-white/50 rounded-xl border border-dashed border-[#09562C]/30">
                  No matching options found
                </div>
              ) : null}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
