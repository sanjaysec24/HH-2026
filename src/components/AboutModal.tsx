import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Palmtree, Users, Building2, Gift } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
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
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#F7F0DD] border-2 border-[#09562C] rounded-3xl p-6 sm:p-8 shadow-goa-lg z-10 text-[#09562C]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#FFD81A] border-2 border-[#09562C] hover:bg-[#FF0F7B] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <Palmtree className="w-8 h-8 text-[#0E6D38] shrink-0" />
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#09562C]">
                  About Hacker House Goa 2026
                </h3>
                <p className="font-mono text-xs font-bold text-[#FF0F7B] uppercase tracking-wider mt-0.5">
                  Official 4-Day Builder Residency
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed font-medium">
              <p>
                <strong>Hacker House Goa 2026</strong> is a four-day immersive builder residency taking place in <strong>Goa, India</strong>, from <strong>28–31 October 2026</strong>. Unlike a traditional hackathon, it brings together selected developers, designers, founders, and builders to collaborate, ship real products, and learn from mentors in an intensive build-focused environment.
              </p>

              <p>
                The experience is designed around four themed days—Genesis Day, Day of Triangle, Build Day, and Launch Day—encouraging participants to move from idea validation to product launch while working alongside some of India&apos;s most passionate builders.
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5 font-mono text-xs font-bold">
                <div className="p-3 bg-[#FFD81A] border-2 border-[#09562C] rounded-xl flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FF0F7B] shrink-0" />
                  <span>📍 Location: Goa, India</span>
                </div>
                <div className="p-3 bg-[#FFD81A] border-2 border-[#09562C] rounded-xl flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#0E6D38] shrink-0" />
                  <span>📅 Dates: 28–31 October 2026</span>
                </div>
                <div className="p-3 bg-[#FFD81A] border-2 border-[#09562C] rounded-xl flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-[#09562C] shrink-0" />
                  <span>🏗 Format: 4-Day Residency</span>
                </div>
                <div className="p-3 bg-[#FFD81A] border-2 border-[#09562C] rounded-xl flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[#0E6D38] shrink-0" />
                  <span>👥 Team Size: 1–3 Builders</span>
                </div>
              </div>

              <div className="p-3 bg-[#0E6D38]/10 border-2 border-[#0E6D38] rounded-xl flex items-center gap-2 font-mono text-xs font-bold text-[#0E6D38]">
                <Gift className="w-4 h-4 text-[#FF0F7B] shrink-0" />
                <span>💰 Registration: Free for selected participants</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-[#09562C]/20 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#09562C] text-[#F7F0DD] font-mono text-sm font-bold border-2 border-[#09562C] hover:bg-[#FF0F7B] transition-colors cursor-pointer"
              >
                Got It!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
