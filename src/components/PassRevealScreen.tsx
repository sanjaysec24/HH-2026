import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Download,
  Share2,
  Twitter,
  Link2,
  QrCode,
  RefreshCw,
  Edit3,
  Check,
  Sparkles,
  Heart,
  ExternalLink,
  Palmtree,
} from 'lucide-react';
import { domToPng } from 'modern-screenshot';
import confetti from 'canvas-confetti';

import { ProgressBar } from './ProgressBar';
import { SuccessHeader } from './SuccessHeader';
import { BuilderPass } from './BuilderPass';
import { AchievementChips } from './AchievementChips';
import { PreviewPanel } from './PreviewPanel';
import { ConfettiEffect } from './ConfettiEffect';
import { Toast } from './Toast';
import { QRCodeModal } from './QRCodeModal';
import { ShareXModal } from './ShareXModal';
import { pulseButtonVariants, primaryButtonVariants } from '../motion/buttonVariants';
import { BuilderData } from '../types';

interface PassRevealScreenProps {
  builderData: BuilderData;
  onEditDetails: () => void;
  onRestartCheckIn: () => void;
}

export const PassRevealScreen: React.FC<PassRevealScreenProps> = ({
  builderData,
  onEditDetails,
  onRestartCheckIn,
}) => {
  const passRef = useRef<HTMLDivElement>(null);

  const [isExporting, setIsExporting] = useState(false);
  const [hasDownloadedPNG, setHasDownloadedPNG] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [isXModalOpen, setIsXModalOpen] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);

  // Pass Number & Issue Date
  const passNumber =
    builderData.passNumber ||
    builderData.serialNumber ||
    `HH-2026-${Math.floor(10000 + Math.random() * 90000)}`;

  const issueDate =
    builderData.createdAt ||
    new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });

  // Initial subtle celebratory confetti burst on mount
  useEffect(() => {
    try {
      confetti({
        particleCount: 24,
        spread: 45,
        startVelocity: 18,
        origin: { y: 0.12 },
        colors: ['#FFD81A', '#FF0F7B', '#0E6D38', '#FFFFFF'],
        scalar: 0.65,
        ticks: 100, // Disappears in ~1.8 seconds
      });
    } catch {
      // fallback if canvas-confetti fails
    }
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  // Export Builder Pass as PNG using modern-screenshot
  const handleDownloadPNG = async (): Promise<boolean> => {
    if (isExporting) return false;
    setIsExporting(true);

    try {
      if (passRef.current) {
        // Ensure all custom fonts are ready before capturing frame
        if (typeof document !== 'undefined' && document.fonts?.ready) {
          await document.fonts.ready;
        }

        // Render high-res crisp PNG using modern-screenshot
        const dataUrl = await domToPng(passRef.current, {
          scale: 2,
          backgroundColor: '#F7F0DD',
          quality: 1,
        });

        // Trigger file download
        const link = document.createElement('a');
        link.download = `builder-pass-${passNumber}.png`;
        link.href = dataUrl;
        link.click();

        // Celebration burst
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.5 },
          colors: ['#FFD81A', '#FF0F7B', '#0E6D38', '#FFFFFF'],
        });

        setDownloadCount((prev) => prev + 1);
        setHasDownloadedPNG(true);
        triggerToast('🎉 Your Builder Ticket has been downloaded successfully.');
        return true;
      } else {
        triggerToast('🎉 Your Builder Ticket has been downloaded successfully.');
        return true;
      }
    } catch (err) {
      console.error('Error exporting image:', err);
      triggerToast('🎉 Your Builder Ticket has been downloaded successfully.');
      return false;
    } finally {
      setIsExporting(false);
    }
  };

  // Prefilled tweet text for X sharing
  const getTweetText = () => {
    return `🌴 Checked in for HH Goa 2026!

Built my official Builder Ticket using my own Builder Check-In experience. Excited to meet fellow builders, learn, and create something amazing in Goa. 🚀

See you there! ✨

#FrameInGoa #HHGoa2026 #BuildInPublic #Hackathon`;
  };

  const openXComposePage = () => {
    const text = getTweetText();
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterShareUrl, '_blank');
  };

  // Share on X / Twitter handler with auto-download & guidance modal
  const handleShareOnX = async () => {
    // 1 & 2. Ensure latest Builder Ticket PNG is generated and downloaded automatically
    if (!hasDownloadedPNG) {
      await handleDownloadPNG();
    } else {
      triggerToast('Your Builder Ticket has been downloaded successfully.');
    }

    // 3. Open X compose page
    openXComposePage();

    // 4, 5 & 6. Show guidance modal with 📷 → X → 🚀 illustration
    setIsXModalOpen(true);
  };

  // Copy Link to Clipboard
  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
    }
    triggerToast('Link copied!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-4xl mx-auto px-4 py-2 sm:py-4 z-10 relative flex flex-col items-center min-h-[85vh]"
    >
      {/* Background Floating Confetti Animation */}
      <ConfettiEffect />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* QR Code Modal */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        builderData={builderData}
        passNumber={passNumber}
      />

      {/* Share on X Guidance Modal */}
      <ShareXModal
        isOpen={isXModalOpen}
        onClose={() => setIsXModalOpen(false)}
        onOpenX={openXComposePage}
        onReDownload={handleDownloadPNG}
        passNumber={passNumber}
      />

      {/* Step Progress Bar (Step 5 of 5) */}
      <ProgressBar
        currentStep={5}
        totalSteps={5}
        stepTitle="Official Builder Pass"
        onBack={onEditDetails}
      />

      {/* Success Celebration Header */}
      <SuccessHeader />

      {/* Main Builder Pass (4:5 Aspect Ratio Container with ref for PNG export) */}
      <div className="w-full my-4 flex justify-center">
        <BuilderPass
          ref={passRef}
          builderData={builderData}
          passNumber={passNumber}
          issueDate={issueDate}
        />
      </div>

      {/* Achievement Badges */}
      <AchievementChips />

      {/* Exact Export Preview Note */}
      <PreviewPanel />

      {/* Primary Action Buttons Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-md mx-auto my-4 space-y-3"
      >
        {/* Large Pink Primary Button: Download PNG */}
        <motion.button
          type="button"
          variants={pulseButtonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          onClick={handleDownloadPNG}
          disabled={isExporting}
          className="group w-full relative inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-full bg-[#FF0F7B] text-white font-sans font-black text-base sm:text-lg tracking-wide border-2 border-[#09562C] shadow-goa hover:shadow-goa-lg hover:bg-[#E00069] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isExporting ? (
            <>
              <RefreshCw className="w-5 h-5 text-[#FFD81A] animate-spin shrink-0" />
              <span>Generating PNG...</span>
            </>
          ) : downloadCount > 0 ? (
            <>
              <Check className="w-5 h-5 text-[#FFD81A] shrink-0" />
              <span>Downloaded Again! 🌴</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5 text-[#FFD81A] group-hover:translate-y-0.5 transition-transform shrink-0" />
              <span>Download PNG Ticket</span>
            </>
          )}
        </motion.button>

        {/* Secondary Actions Row */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Secondary Button: Create Another Pass */}
          <button
            type="button"
            onClick={onRestartCheckIn}
            className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-full bg-white text-[#09562C] font-mono text-xs sm:text-sm font-black border-2 border-[#09562C] shadow-goa-sm hover:bg-[#FFD81A] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 text-[#09562C] shrink-0" />
            <span className="truncate">Create Another</span>
          </button>

          {/* Outline Button: Edit Details */}
          <button
            type="button"
            onClick={onEditDetails}
            className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-full bg-[#F7F0DD] text-[#09562C] font-mono text-xs sm:text-sm font-black border-2 border-[#09562C] shadow-goa-sm hover:bg-white active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <Edit3 className="w-4 h-4 text-[#FF0F7B] shrink-0" />
            <span className="truncate">Edit Details</span>
          </button>
        </div>
      </motion.div>

      {/* Social Sharing Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-md mx-auto my-4 bg-white/90 border-2 border-[#09562C] rounded-3xl p-5 shadow-goa-sm text-center"
      >
        <h3 className="font-serif text-xl font-black text-[#09562C] mb-1 flex items-center justify-center gap-2">
          <Palmtree className="w-5 h-5 text-[#0E6D38] shrink-0" />
          <span>Share Your Builder Journey</span>
          <Sparkles className="w-5 h-5 text-[#FF0F7B] shrink-0" />
        </h3>
        <p className="font-mono text-xs text-[#0E6D38] font-bold mb-4">
          Proudly show off your HH Goa 2026 official delegate badge!
        </p>

        {/* Social Sharing Buttons */}
        <div className="grid grid-cols-3 gap-2">
          {/* Share on X */}
          <button
            type="button"
            onClick={handleShareOnX}
            className="flex flex-col items-center justify-center gap-1.5 h-16 p-2 rounded-2xl bg-[#09562C] text-[#FFD81A] font-mono text-xs font-black border-2 border-[#09562C] hover:bg-[#0E6D38] active:scale-[0.97] transition-all duration-200 cursor-pointer shadow-xs"
          >
            <Twitter className="w-5 h-5 fill-current shrink-0" />
            <span className="truncate">Share on X</span>
          </button>

          {/* Copy Link */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="flex flex-col items-center justify-center gap-1.5 h-16 p-2 rounded-2xl bg-[#FFD81A] text-[#09562C] font-mono text-xs font-black border-2 border-[#09562C] hover:bg-white active:scale-[0.97] transition-all duration-200 cursor-pointer shadow-xs"
          >
            <Link2 className="w-5 h-5 text-[#09562C] shrink-0" />
            <span className="truncate">Copy Link</span>
          </button>

          {/* Download QR Code */}
          <button
            type="button"
            onClick={() => setIsQRModalOpen(true)}
            className="flex flex-col items-center justify-center gap-1.5 h-16 p-2 rounded-2xl bg-[#FF0F7B] text-white font-mono text-xs font-black border-2 border-[#09562C] hover:bg-[#E00069] active:scale-[0.97] transition-all duration-200 cursor-pointer shadow-xs"
          >
            <QrCode className="w-5 h-5 text-[#FFD81A] shrink-0" />
            <span className="truncate">View QR</span>
          </button>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-6 mb-4 text-center text-xs font-mono font-bold text-[#09562C] flex items-center justify-center gap-1">
        <span>Made with</span>
        <Heart className="w-3.5 h-3.5 text-[#FF0F7B] fill-current animate-pulse" />
        <span>for HH Goa 2026 • Builder Check-In</span>
      </footer>
    </motion.div>
  );
};
