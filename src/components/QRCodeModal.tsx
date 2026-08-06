import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, QrCode, Download, ShieldCheck, Sparkles } from 'lucide-react';
import { BuilderData } from '../types';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  builderData: BuilderData;
  passNumber: string;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({
  isOpen,
  onClose,
  builderData,
  passNumber,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-[#F7F0DD] border-2 border-[#09562C] rounded-3xl p-6 max-w-sm w-full shadow-goa-lg relative text-[#09562C] text-center"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-[#FFD81A] border-2 border-[#09562C] text-[#09562C] hover:bg-[#FF0F7B] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0E6D38] text-[#FFD81A] font-mono text-[10px] font-black uppercase mb-3 border border-[#09562C]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFD81A]" />
            <span>EXPRESS ENTRY PASS</span>
          </div>

          <h3 className="font-serif text-2xl font-black text-[#09562C] mb-1">
            HH Goa QR Code
          </h3>
          <p className="font-mono text-xs text-[#0E6D38] font-bold mb-4">
            Show this QR at the venue entrance for fast check-in verification.
          </p>

          {/* Simulated QR Code Canvas/SVG */}
          <div className="bg-white p-4 border-2 border-[#09562C] rounded-2xl shadow-goa-sm inline-block mx-auto mb-4 relative group">
            <svg
              viewBox="0 0 100 100"
              className="w-48 h-48 text-[#09562C] fill-current"
            >
              {/* Corner position squares */}
              <rect x="5" y="5" width="25" height="25" rx="3" fill="#09562C" />
              <rect x="9" y="9" width="17" height="17" rx="2" fill="#FFFFFF" />
              <rect x="13" y="13" width="9" height="9" fill="#09562C" />

              <rect x="70" y="5" width="25" height="25" rx="3" fill="#09562C" />
              <rect x="74" y="9" width="17" height="17" rx="2" fill="#FFFFFF" />
              <rect x="78" y="13" width="9" height="9" fill="#09562C" />

              <rect x="5" y="70" width="25" height="25" rx="3" fill="#09562C" />
              <rect x="9" y="74" width="17" height="17" rx="2" fill="#FFFFFF" />
              <rect x="13" y="78" width="9" height="9" fill="#09562C" />

              {/* Data pattern squares */}
              <rect x="35" y="8" width="8" height="8" fill="#09562C" />
              <rect x="48" y="8" width="8" height="8" fill="#FF0F7B" />
              <rect x="35" y="20" width="8" height="8" fill="#09562C" />
              <rect x="48" y="20" width="8" height="8" fill="#09562C" />
              <rect x="12" y="38" width="8" height="8" fill="#09562C" />
              <rect x="25" y="38" width="8" height="8" fill="#09562C" />
              <rect x="38" y="38" width="12" height="12" fill="#0E6D38" />
              <rect x="55" y="38" width="8" height="8" fill="#09562C" />
              <rect x="70" y="38" width="10" height="10" fill="#FFD81A" />
              <rect x="85" y="38" width="8" height="8" fill="#09562C" />
              <rect x="38" y="55" width="8" height="8" fill="#09562C" />
              <rect x="55" y="55" width="10" height="10" fill="#09562C" />
              <rect x="70" y="55" width="8" height="8" fill="#FF0F7B" />
              <rect x="38" y="70" width="12" height="12" fill="#09562C" />
              <rect x="55" y="70" width="8" height="8" fill="#09562C" />
              <rect x="70" y="70" width="12" height="12" fill="#09562C" />
              <rect x="85" y="70" width="8" height="8" fill="#0E6D38" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-[#FFD81A] border-2 border-[#09562C] px-2 py-0.5 rounded-md font-mono text-[9px] font-black text-[#09562C] shadow-xs">
                HH GOA
              </div>
            </div>
          </div>

          <div className="font-mono text-xs font-black text-[#09562C] bg-[#FFD81A] border-2 border-[#09562C] py-2 rounded-xl mb-4">
            PASS CODE: {passNumber}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-full bg-[#09562C] text-[#FFD81A] font-sans font-black text-sm border-2 border-[#09562C] shadow-goa-sm hover:bg-[#0E6D38] cursor-pointer"
          >
            Done
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
