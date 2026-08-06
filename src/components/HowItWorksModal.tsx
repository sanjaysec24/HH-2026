import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Camera, UserCheck, Share2, Sparkles, HelpCircle } from 'lucide-react';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartCheckIn: () => void;
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({
  isOpen,
  onClose,
  onStartCheckIn,
}) => {
  const steps = [
    {
      icon: <Camera className="w-6 h-6 text-[#FF0F7B]" />,
      title: '1. Take or Upload Selfie',
      desc: 'Capture a quick photo or pick your favorite profile picture.',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#0E6D38]" />,
      title: '2. Fill Builder Info',
      desc: 'Add your name, role, tech stack, project idea, and social links.',
    },
    {
      icon: <Share2 className="w-6 h-6 text-[#09562C]" />,
      title: '3. Generate & Share Pass',
      desc: 'Get your customized tropical HH Goa Builder Pass card to download or post on X!',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#F7F0DD] border-2 border-[#09562C] rounded-3xl p-6 sm:p-8 shadow-goa-lg z-10 text-[#09562C]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#FFD81A] border-2 border-[#09562C] hover:bg-[#FF0F7B] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-7 h-7 text-[#FF0F7B] shrink-0" />
              <div>
                <h3 className="font-serif text-2xl font-black text-[#09562C]">
                  How It Works
                </h3>
                <p className="font-mono text-xs font-bold text-[#0E6D38] uppercase tracking-wider">
                  3 Easy Steps to Your Pass
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white/80 border-2 border-[#09562C] rounded-2xl flex items-start gap-3 shadow-goa-sm"
                >
                  <div className="p-2 bg-[#FFD81A] border-2 border-[#09562C] rounded-xl shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-base text-[#09562C]">
                      {s.title}
                    </h4>
                    <p className="font-sans text-xs text-[#09562C]/80 mt-0.5">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t-2 border-[#09562C]/20 flex items-center justify-between">
              <button
                onClick={onClose}
                className="font-mono text-xs font-bold text-[#09562C] hover:underline"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onStartCheckIn();
                }}
                className="px-6 py-3 rounded-full bg-[#FF0F7B] text-white font-mono text-sm font-black border-2 border-[#09562C] shadow-goa-sm hover:bg-[#09562C] transition-colors"
              >
                Start Now 🌴
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
