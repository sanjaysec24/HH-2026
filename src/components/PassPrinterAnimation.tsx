import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { PalmTreeIcon, PassportStampSVG, TravelStickerBadge } from './VectorIllustrations';
import { Printer, Check, Sparkles, Loader2 } from 'lucide-react';
import { BuilderProfile } from '../types';

interface PassPrinterAnimationProps {
  builder: BuilderProfile;
  onPrintComplete: () => void;
}

const PRINT_STEPS = [
  'Validating Coconut Credentials...',
  'Applying Goa Tropical Stamps...',
  'Forging Holographic Builder ID...',
  'Injecting Sunset Energy...',
  'Pass Printed Successfully!',
];

export const PassPrinterAnimation: React.FC<PassPrinterAnimationProps> = ({
  builder,
  onPrintComplete,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [printProgress, setPrintProgress] = useState(0);

  useEffect(() => {
    // Step interval simulation
    const interval = setInterval(() => {
      setPrintProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Trigger confetti
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#0E6D38', '#FFD81A', '#FF0F7B', '#09562C'],
          });
          setTimeout(() => {
            onPrintComplete();
          }, 1200);
          return 100;
        }

        const next = prev + 2;
        const stepIdx = Math.min(
          Math.floor((next / 100) * PRINT_STEPS.length),
          PRINT_STEPS.length - 1
        );
        setCurrentStepIndex(stepIdx);
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onPrintComplete]);

  return (
    <div className="max-w-md mx-auto w-full flex flex-col items-center py-6 px-4">
      {/* Printer Machine Frame */}
      <div className="w-full bg-[#0E6D38] border-4 border-[#09562C] rounded-3xl p-6 shadow-goa-xl relative overflow-hidden text-white flex flex-col items-center">
        {/* Machine Header */}
        <div className="flex items-center justify-between w-full border-b-2 border-[#FFD81A]/30 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#FFD81A] rounded-xl text-[#09562C] border border-[#09562C] shadow-goa-sm">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="font-serif text-lg font-black text-white">
                HH GOA PASS PRESS
              </div>
              <div className="font-mono text-[10px] text-[#FFD81A] font-bold">
                THERMAL TICKET PRINTER v2.0
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-[#09562C] px-3 py-1 rounded-full border border-[#FFD81A]/40 font-mono text-xs font-bold text-[#FFD81A]">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>{printProgress}%</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#09562C] h-4 rounded-full border-2 border-[#FFD81A] overflow-hidden mb-4 p-0.5">
          <motion.div
            className="h-full bg-gradient-to-r from-[#FFD81A] via-[#FF0F7B] to-[#FFD81A] rounded-full"
            style={{ width: `${printProgress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>

        {/* Live Status Log */}
        <div className="w-full bg-[#09562C] border-2 border-[#09562C] rounded-xl p-3 font-mono text-xs text-[#FFD81A] font-bold text-center flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-[#FF0F7B] animate-pulse" />
          <span>{PRINT_STEPS[currentStepIndex]}</span>
        </div>

        {/* Printer Output Slot */}
        <div className="w-full bg-[#09562C] h-3 rounded-full border-2 border-black/40 mb-2 relative">
          <div className="absolute inset-x-4 top-0.5 h-1 bg-black/60 rounded-full" />
        </div>

        {/* Sliding Ticket/Pass coming out of machine */}
        <motion.div
          initial={{ y: -80, opacity: 0.2 }}
          animate={{ y: Math.min(printProgress * 1.5, 30), opacity: 1 }}
          className="w-[90%] bg-[#F7F0DD] border-4 border-[#09562C] rounded-xl p-4 shadow-goa-lg text-[#09562C] relative"
        >
          <div className="border-2 border-dashed border-[#0E6D38] p-3 rounded-lg bg-white flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-[#09562C] overflow-hidden bg-[#FFD81A] flex-shrink-0">
              <img
                src={builder.selfieUrl}
                alt="Selfie"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[9px] text-[#0E6D38] font-bold">
                PRINTING BUILDER:
              </div>
              <div className="font-serif text-base font-bold text-[#09562C] truncate">
                {builder.fullName}
              </div>
              <div className="font-mono text-[10px] text-[#FF0F7B] font-extrabold truncate">
                "{builder.title}"
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
