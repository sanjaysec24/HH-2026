import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, RefreshCw, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { StatusRotator } from './StatusRotator';
import { PrintingStation } from './PrintingStation';
import { BuilderTitleReveal } from './BuilderTitleReveal';
import { BuilderData, BUILDER_TITLES } from '../types';
import { playStampSound, playSuccessChime } from '../utils/soundEffects';

interface GenerationScreenProps {
  builderData: BuilderData;
  onUpdateBuilderTitle: (title: string) => void;
  onBackToForm: () => void;
  onCompleteGeneration: () => void;
}

export const GenerationScreen: React.FC<GenerationScreenProps> = ({
  builderData,
  onUpdateBuilderTitle,
  onBackToForm,
  onCompleteGeneration,
}) => {
  const [sequenceStep, setSequenceStep] = useState<number>(0);
  const [title, setTitle] = useState<string>(
    builderData.builderTitle || 'Code Surfer'
  );

  // Auto-generate title on mount if not present
  useEffect(() => {
    if (!builderData.builderTitle) {
      const randomTitle =
        BUILDER_TITLES[Math.floor(Math.random() * BUILDER_TITLES.length)];
      setTitle(randomTitle);
      onUpdateBuilderTitle(randomTitle);
    } else {
      setTitle(builderData.builderTitle);
    }
  }, []);

  // Sequence timer loop
  const startSequenceAnimation = () => {
    setSequenceStep(0);

    const t1 = setTimeout(() => setSequenceStep(1), 600); // Photo flies in
    const t2 = setTimeout(() => setSequenceStep(2), 1600); // Details stamped
    const t3 = setTimeout(() => {
      setSequenceStep(3); // Title generated
    }, 2800);
    const t4 = setTimeout(() => {
      setSequenceStep(4); // Stamp lands
      playStampSound();
    }, 3800);
    const t5 = setTimeout(() => {
      setSequenceStep(5); // Complete
      playSuccessChime();
    }, 4800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  };

  useEffect(() => {
    const cleanup = startSequenceAnimation();
    return cleanup;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-4xl mx-auto px-4 py-2 sm:py-4 z-10 relative flex flex-col items-center"
    >
      {/* Top Progress Bar: Step 3 of 5 */}
      <ProgressBar
        currentStep={3}
        totalSteps={5}
        stepTitle="Preparing Your Builder Pass"
        onBack={onBackToForm}
      />

      {/* Dynamic Rotating Status Header */}
      <StatusRotator currentIndex={sequenceStep} />

      {/* Main Interactive Printing Station */}
      <PrintingStation
        builderData={builderData}
        sequenceStep={sequenceStep}
        generatedTitle={title}
      />

      {/* Builder Title Dramatic Reveal */}
      <BuilderTitleReveal
        title={title}
        isVisible={sequenceStep >= 3}
      />

      {/* Bottom Controls / Auto-transition Banner */}
      <div className="w-full max-w-md mx-auto my-3 text-center flex flex-col items-center gap-3">
        {sequenceStep < 5 ? (
          <div className="font-mono text-xs font-bold text-[#0E6D38] flex items-center justify-center gap-2 bg-[#F7F0DD] border border-[#09562C] px-4 py-2 rounded-full shadow-goa-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF0F7B] animate-ping" />
            <span>Almost ready... Your Builder Pass is being printed.</span>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3 w-full"
          >
            <button
              type="button"
              onClick={onCompleteGeneration}
              className="group w-full relative inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-full bg-[#FF0F7B] text-white font-sans font-black text-base sm:text-lg tracking-wide border-2 border-[#09562C] shadow-goa hover:shadow-goa-lg hover:bg-[#E00069] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span className="truncate">View Official Builder Pass 🌴</span>
              <ArrowRight className="w-5 h-5 text-[#FFD81A] group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            <button
              type="button"
              onClick={startSequenceAnimation}
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#09562C] hover:text-[#FF0F7B] underline underline-offset-4"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Replay Printing Sequence</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
