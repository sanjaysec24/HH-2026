import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#F7F0DD] border-2 border-[#09562C] shadow-goa-lg text-[#09562C] font-mono text-xs sm:text-sm font-black"
        >
          <div className="w-7 h-7 rounded-full bg-[#0E6D38] text-[#FFD81A] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span>{message}</span>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 p-1 text-[#09562C] hover:text-[#FF0F7B] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
