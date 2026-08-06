import React from 'react';
import { motion } from 'motion/react';
import { RefreshCw, Trash2, CheckCircle2, Sparkles, Image as ImageIcon } from 'lucide-react';

interface ImagePreviewProps {
  imageSrc: string;
  fileName: string;
  fileSize: string;
  onReplace: () => void;
  onRemove: () => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  imageSrc,
  fileName,
  fileSize,
  onReplace,
  onRemove,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center p-4 sm:p-6 w-full"
    >
      {/* Success Badge popping in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD81A] border-2 border-[#09562C] text-[#09562C] font-mono text-xs sm:text-sm font-black shadow-goa-sm mb-4"
      >
        <Sparkles className="w-4 h-4 text-[#FF0F7B]" />
        <span>Looking great! 🌴</span>
      </motion.div>

      {/* Rounded Photo Frame with Passport Badge Frame */}
      <div className="relative group mb-4">
        {/* Decorative Tape / Clip on top of frame */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#FFD81A]/90 border border-[#09562C] rotate-[-2deg] z-10 shadow-sm flex items-center justify-center font-mono text-[9px] font-black text-[#09562C] tracking-widest uppercase">
          HH GOA
        </div>

        {/* Photo Container */}
        <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-[#09562C] bg-white shadow-goa relative flex items-center justify-center">
          <img
            src={imageSrc}
            alt="Builder Selfie Preview"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Tropical Stamp Overlay */}
          <div className="absolute bottom-2 right-2 px-2.5 py-1 bg-[#09562C] text-[#FFD81A] border border-[#FFD81A] rounded-lg font-mono text-[9px] font-black tracking-widest uppercase rotate-[-6deg] opacity-90 shadow-sm pointer-events-none">
            PASSED 2026 ✓
          </div>
        </div>
      </div>

      {/* File Details */}
      <div className="text-center mb-6 max-w-xs">
        <div className="font-mono text-xs font-bold text-[#09562C] truncate max-w-[240px] mx-auto flex items-center justify-center gap-1">
          <ImageIcon className="w-3.5 h-3.5 text-[#0E6D38] shrink-0" />
          <span className="truncate">{fileName}</span>
        </div>
        <div className="font-mono text-[11px] text-[#0E6D38] font-semibold mt-0.5">
          Size: {fileSize}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-xs">
        <button
          type="button"
          onClick={onReplace}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-[#FFD81A] border-2 border-[#09562C] text-[#09562C] font-mono text-xs font-black shadow-goa-sm hover:bg-[#FF0F7B] hover:text-white transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Replace Image</span>
        </button>

        <button
          type="button"
          onClick={onRemove}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-[#F7F0DD] border-2 border-[#09562C] text-[#FF0F7B] font-mono text-xs font-black shadow-goa-sm hover:bg-[#FF0F7B] hover:text-white transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Remove</span>
        </button>
      </div>
    </motion.div>
  );
};
