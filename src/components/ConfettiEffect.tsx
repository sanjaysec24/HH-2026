import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  yStart: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

interface DustParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export const ConfettiEffect: React.FC = () => {
  const [confettiPieces, setConfettiPieces] = useState<Particle[]>([]);
  const [dustParticles, setDustParticles] = useState<DustParticle[]>([]);

  useEffect(() => {
    const colors = ['#FFD81A', '#FF0F7B', '#0E6D38', '#FFFFFF'];

    // 1. One-time delicate confetti burst (8 tiny pieces near top header, finishes in 2-3s)
    const newConfetti: Particle[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: 25 + Math.random() * 50, // Concentrated near top header center
      yStart: 15 + Math.random() * 30,
      size: 4 + Math.random() * 4, // 4–8px (30–50% smaller)
      color: colors[i % colors.length],
      delay: Math.random() * 0.3,
      duration: 2.2 + Math.random() * 0.8, // Slowly disappears after 2–3s
    }));

    // 2. Subtle ambient dust particles
    const newDust: DustParticle[] = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 2.5,
      opacity: 0.08 + Math.random() * 0.12, // 8–20% opacity
    }));

    setConfettiPieces(newConfetti);
    setDustParticles(newDust);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Faint Luxury Paper Micro-Texture Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#09562C 0.75px, transparent 0.75px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Soft Ambient Radial Glow behind top header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[220px] bg-radial from-[#FFD81A]/10 via-[#0E6D38]/5 to-transparent blur-3xl pointer-events-none" />

      {/* Light Tropical Leaf Silhouettes in Top Background (4% Opacity) */}
      <div className="absolute top-4 left-4 opacity-[0.04] text-[#09562C] pointer-events-none">
        <svg width="110" height="110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 3.12 1.43 5.91 3.67 7.76L12 12l6.33 7.76C20.57 17.91 22 15.12 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
      </div>
      <div className="absolute top-4 right-4 opacity-[0.04] text-[#09562C] pointer-events-none scale-x-[-1]">
        <svg width="110" height="110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 3.12 1.43 5.91 3.67 7.76L12 12l6.33 7.76C20.57 17.91 22 15.12 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
      </div>

      {/* Static Tiny Ambient Dust Particles */}
      {dustParticles.map((d) => (
        <motion.div
          key={`dust-${d.id}`}
          animate={{
            opacity: [d.opacity * 0.5, d.opacity, d.opacity * 0.5],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4 + (d.id % 4),
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            backgroundColor: '#09562C',
            borderRadius: '50%',
          }}
        />
      ))}

      {/* One-Time Elegant Confetti (Appears once on page load and disappears in 2-3s) */}
      {confettiPieces.map((p) => (
        <motion.div
          key={`confetti-${p.id}`}
          initial={{
            x: `${p.x}vw`,
            y: p.yStart,
            opacity: 0.25, // 15–25% opacity
          }}
          animate={{
            y: p.yStart + 70,
            x: `${p.x + (p.id % 2 === 0 ? 2 : -2)}vw`,
            opacity: [0.25, 0.2, 0], // Fades out completely
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeOut',
            repeat: 0, // Disabled continuous looping
          }}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};

