import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Camera,
  Twitter,
  Rocket,
  Download,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Palmtree,
} from 'lucide-react';

interface ShareXModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenX: () => void;
  onReDownload: () => void;
  passNumber?: string;
}

export const ShareXModal: React.FC<ShareXModalProps> = ({
  isOpen,
  onClose,
  onOpenX,
  onReDownload,
  passNumber = 'HH-2026-DELEGATE',
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-md bg-[#F7F0DD] border-2 border-[#09562C] rounded-3xl p-6 sm:p-7 shadow-goa-xl z-10 text-[#09562C] overflow-hidden"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border border-[#09562C] text-[#09562C] hover:bg-[#FFD81A] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD81A] border border-[#09562C] font-mono text-[10px] font-black text-[#09562C] uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0E6D38]" />
            <span>X / TWITTER SHARE READY</span>
          </div>

          {/* Main Title */}
          <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#09562C] leading-tight mb-2 flex items-center gap-2">
            <span>Share on X</span>
            <Palmtree className="w-6 h-6 text-[#0E6D38] inline-block shrink-0" />
          </h3>

          {/* Primary Notice Box */}
          <div className="bg-white/90 border border-[#09562C]/20 rounded-2xl p-4 my-3 text-left space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 text-[#0E6D38] font-mono text-xs font-black">
              <CheckCircle2 className="w-4 h-4 text-[#0E6D38] shrink-0" />
              <span>Ticket Saved to Downloads!</span>
            </div>

            <p className="font-sans text-sm font-semibold text-[#09562C] leading-relaxed">
              Your Builder Ticket has been downloaded successfully.
            </p>

            <p className="font-mono text-xs font-bold text-[#FF0F7B] bg-[#FF0F7B]/10 border border-[#FF0F7B]/30 rounded-xl p-2.5 leading-snug">
              💡 Please attach the downloaded image to your X post before publishing.
            </p>
          </div>

          {/* Step-by-step Visual Illustration (📷 → X → 🚀) */}
          <div className="my-4 py-3 bg-[#09562C] rounded-2xl border border-[#09562C] text-white shadow-xs px-3">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FFD81A] text-center mb-2">
              HOW TO ATTACH YOUR TICKET ON X
            </div>

            <div className="flex items-center justify-around gap-1 text-center font-mono text-[11px] font-bold">
              {/* Step 1: 📷 */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-xl bg-[#FFD81A] border border-[#09562C] text-[#09562C] flex items-center justify-center shadow-xs">
                  <Camera className="w-5 h-5 text-[#09562C]" />
                </div>
                <span className="text-[10px] text-[#F7F0DD]">1. Ticket Saved</span>
              </div>

              {/* Arrow 1 */}
              <span className="text-base text-[#FFD81A] font-black">→</span>

              {/* Step 2: X */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-xl bg-[#FF0F7B] border border-white text-white flex items-center justify-center shadow-xs">
                  <Twitter className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[10px] text-[#F7F0DD]">2. Attach Image</span>
              </div>

              {/* Arrow 2 */}
              <span className="text-base text-[#FFD81A] font-black">→</span>

              {/* Step 3: 🚀 */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#09562C] text-[#09562C] flex items-center justify-center shadow-xs">
                  <Rocket className="w-5 h-5 text-[#0E6D38]" />
                </div>
                <span className="text-[10px] text-[#FFD81A]">3. Post & Launch</span>
              </div>
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="space-y-2 mt-4">
            <button
              type="button"
              onClick={onOpenX}
              className="w-full h-12 px-5 rounded-full bg-[#09562C] text-[#FFD81A] font-mono text-sm font-black border-2 border-[#09562C] hover:bg-[#0E6D38] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-goa-sm"
            >
              <Twitter className="w-4 h-4 fill-current shrink-0" />
              <span>Open X Compose Window</span>
              <ExternalLink className="w-4 h-4 text-[#FFD81A] shrink-0" />
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={onReDownload}
                className="h-10 px-3 rounded-full bg-white text-[#09562C] font-mono text-xs font-bold border border-[#09562C] hover:bg-[#FFD81A] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Re-download Ticket</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="h-10 px-3 rounded-full bg-[#F7F0DD] text-[#09562C] font-mono text-xs font-bold border border-[#09562C] hover:bg-white active:scale-[0.98] transition-all duration-200 flex items-center justify-center cursor-pointer shadow-2xs"
              >
                <span>Got It! 👍</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
