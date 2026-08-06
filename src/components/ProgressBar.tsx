import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Sun, Palmtree } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
  onBack?: () => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep = 1,
  totalSteps = 5,
  stepTitle = 'Builder Check-In',
  onBack,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-3 select-none">
      <div className="flex items-center justify-between gap-3 mb-2">
        {/* Left: Back button or Step Tag */}
        <div className="flex items-center gap-2">
          {onBack && (
            <button
              onClick={onBack}
              className="p-1.5 sm:p-2 rounded-xl bg-[#F7F0DD] border-2 border-[#09562C] text-[#09562C] hover:bg-[#FFD81A] transition-all shadow-goa-sm flex items-center gap-1 font-mono text-xs font-bold"
              title="Back to Landing"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </button>
          )}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD81A] border-2 border-[#09562C] text-[#09562C] font-mono text-xs font-black shadow-goa-sm">
            <span>Step {currentStep} of {totalSteps}</span>
          </div>
        </div>

        {/* Center/Right: Title badge with small tropical icon */}
        <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-extrabold text-[#09562C] uppercase tracking-wider truncate">
          <Palmtree className="w-3.5 h-3.5 text-[#09562C] shrink-0" />
          <span className="truncate">{stepTitle}</span>
        </div>
      </div>

      {/* Progress Track Bar */}
      <div className="relative w-full h-4 sm:h-5 bg-[#F7F0DD] border-2 border-[#09562C] rounded-full p-0.5 overflow-hidden shadow-goa-sm flex items-center">
        {/* Fill Segment */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-full bg-[#FF0F7B] rounded-full relative overflow-hidden flex items-center justify-end pr-1"
        >
          {/* Subtle striped animation inside progress */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:16px_16px] animate-[dash_2s_linear_infinite]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFD81A] border border-[#09562C] relative z-10 hidden sm:block" />
        </motion.div>

        {/* Step Division Markers */}
        <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full border border-[#09562C] transition-colors ${
                idx < currentStep ? 'bg-[#FFD81A]' : 'bg-[#09562C]/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
