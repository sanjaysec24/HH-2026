import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Lock } from 'lucide-react';

interface ContinueButtonProps {
  isEnabled: boolean;
  onClick: () => void;
  label?: string;
}

export const ContinueButton: React.FC<ContinueButtonProps> = ({
  isEnabled,
  onClick,
  label = 'Continue',
}) => {
  return (
    <div className="flex flex-col items-center justify-center my-4 w-full max-w-xs mx-auto">
      <motion.div
        animate={
          isEnabled
            ? { scale: [1, 1.02, 1], y: [0, -3, 0] }
            : { scale: 1, y: 0 }
        }
        transition={{
          duration: isEnabled ? 2 : 0,
          repeat: isEnabled ? Infinity : 0,
          ease: 'easeInOut',
        }}
        className="w-full"
      >
        <button
          type="button"
          disabled={!isEnabled}
          onClick={onClick}
          className={`group w-full relative inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-full font-sans font-black text-base sm:text-lg tracking-wide border-2 border-[#09562C] transition-all duration-200 ${
            isEnabled
              ? 'bg-[#FF0F7B] text-white shadow-goa hover:shadow-goa-lg hover:bg-[#E00069] active:scale-[0.98] cursor-pointer'
              : 'bg-[#09562C]/10 text-[#09562C]/40 border-[#09562C]/20 shadow-none cursor-not-allowed'
          }`}
        >
          <span className="truncate">{label}</span>
          <ArrowRight
            className={`w-5 h-5 shrink-0 transition-transform ${
              isEnabled
                ? 'text-[#FFD81A] group-hover:translate-x-1'
                : 'text-[#09562C]/30'
            }`}
          />
        </button>
      </motion.div>

      {/* Bottom Lock / Privacy Helper Text */}
      <div className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[11px] font-semibold text-[#0E6D38]">
        <Lock className="w-3.5 h-3.5 text-[#09562C] shrink-0" />
        <span>Your image never leaves your browser during Builder Pass creation.</span>
      </div>
    </div>
  );
};
