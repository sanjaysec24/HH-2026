import React, { useState } from 'react';
import { domToPng } from 'modern-screenshot';
import { Download, Share2, Twitter, Copy, Check, Sparkles, Loader2, Image as ImageIcon } from 'lucide-react';
import { BuilderProfile } from '../types';

interface ShareModalProps {
  builder: BuilderProfile;
  passElementId: string;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  builder,
  passElementId,
  onClose,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const tweetText = `Just checked in for HH Goa 2026! 🌴\n\nI got my official builder title: "${builder.title}"\n\nBuilding: ${builder.project}\nSee you in Goa, India! 🍹🌊\n\n#HHGoa2026 #BuilderCheckIn`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  const handleDownloadImage = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById(passElementId);
      if (!element) {
        alert('Pass card element not found');
        return;
      }

      if (typeof document !== 'undefined' && document.fonts?.ready) {
        await document.fonts.ready;
      }

      const dataUrl = await domToPng(element, {
        scale: 2,
        backgroundColor: '#F7F0DD',
        quality: 1,
      });
      const link = document.createElement('a');
      link.download = `builder-pass-${builder.serialNumber}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Download pass error:', err);
      alert('Generating image... You can also screenshot your pass directly!');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'HH Goa 2026 Builder Pass',
          text: tweetText,
          url: window.location.href,
        });
      } catch (e) {
        console.log('Share canceled');
      }
    } else {
      window.open(twitterShareUrl, '_blank');
    }
  };

  return (
    <div className="bg-white border-4 border-[#09562C] rounded-3xl p-6 shadow-goa-xl max-w-md w-full mx-auto flex flex-col gap-4">
      <div className="text-center border-b-2 border-[#09562C] pb-3">
        <div className="inline-flex items-center gap-1.5 bg-[#FFD81A] text-[#09562C] px-3 py-0.5 rounded-full font-mono text-xs font-black border border-[#09562C] mb-1">
          <Sparkles className="w-3.5 h-3.5 text-[#FF0F7B]" />
          <span>OFFICIAL HH GOA PASS READY</span>
        </div>
        <h3 className="font-serif text-2xl font-black text-[#09562C]">
          Share Your Festival Badge
        </h3>
        <p className="font-mono text-xs text-[#0E6D38]">
          Show the world you're building in Goa 28–31 October 2026
        </p>
      </div>

      {/* Primary Actions */}
      <div className="flex flex-col gap-3 my-2">
        {/* Download Pass Image Button */}
        <button
          onClick={handleDownloadImage}
          disabled={isDownloading}
          className="bg-[#0E6D38] text-[#FFD81A] border-3 border-[#09562C] p-3.5 rounded-2xl font-mono text-xs font-black shadow-goa-md hover:bg-[#09562C] transition-all flex items-center justify-center gap-2"
        >
          {isDownloading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Download className="w-4 h-4" />
          )}
          <span>DOWNLOAD HIGH-RES PASS (PNG)</span>
        </button>

        {/* Share to X / Twitter Button */}
        <a
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF0F7B] text-white border-3 border-[#09562C] p-3.5 rounded-2xl font-mono text-xs font-black shadow-goa-md hover:bg-black transition-all flex items-center justify-center gap-2 text-center"
        >
          <Twitter className="w-4 h-4 fill-current" />
          <span>SHARE DIRECTLY TO X / TWITTER</span>
        </a>

        {/* Native Mobile Share / Copy Link */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleNativeShare}
            className="bg-[#FFD81A] text-[#09562C] border-2 border-[#09562C] p-3 rounded-xl font-mono text-xs font-bold shadow-goa-sm hover:bg-[#FF0F7B] hover:text-white transition-all flex items-center justify-center gap-1.5"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Badge</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="bg-[#F7F0DD] text-[#09562C] border-2 border-[#09562C] p-3 rounded-xl font-mono text-xs font-bold shadow-goa-sm hover:bg-white transition-all flex items-center justify-center gap-1.5"
          >
            {copiedLink ? <Check className="w-4 h-4 text-[#0E6D38]" /> : <Copy className="w-4 h-4" />}
            <span>{copiedLink ? 'Link Copied!' : 'Copy Link'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
