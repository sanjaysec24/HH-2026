import React from 'react';
import { motion } from 'motion/react';

export const HeroIllustration: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full max-w-4xl mx-auto h-[260px] sm:h-[340px] md:h-[400px] my-2 sm:my-4 flex items-center justify-center"
    >
      <svg
        viewBox="0 0 900 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md select-none overflow-visible"
      >
        {/* Background Sun Rays & Sun Circle */}
        <g id="sunset">
          {/* Glowing Sunset Rays */}
          <circle cx="450" cy="220" r="110" fill="#FFD81A" stroke="#09562C" strokeWidth="4" />
          <path d="M450 80 V60" stroke="#09562C" strokeWidth="4" strokeLinecap="round" />
          <path d="M450 360 V380" stroke="#09562C" strokeWidth="4" strokeLinecap="round" />
          <path d="M310 220 H290" stroke="#09562C" strokeWidth="4" strokeLinecap="round" />
          <path d="M590 220 H610" stroke="#09562C" strokeWidth="4" strokeLinecap="round" />
          <path d="M350 120 L335 105" stroke="#09562C" strokeWidth="4" strokeLinecap="round" />
          <path d="M550 320 L565 335" stroke="#09562C" strokeWidth="4" strokeLinecap="round" />
          <path d="M550 120 L565 105" stroke="#09562C" strokeWidth="4" strokeLinecap="round" />
          <path d="M350 320 L335 335" stroke="#09562C" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Small Birds Slowly Moving across sky */}
        <g id="birds">
          <motion.g
            animate={{ x: [0, 40, 0], y: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path
              d="M 280 110 Q 295 95 310 110 Q 325 95 340 110"
              stroke="#09562C"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 330 85 Q 340 75 350 85 Q 360 75 370 85"
              stroke="#09562C"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </motion.g>

          <motion.g
            animate={{ x: [0, -35, 0], y: [0, -8, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <path
              d="M 560 100 Q 572 88 584 100 Q 596 88 608 100"
              stroke="#09562C"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </motion.g>
        </g>

        {/* Goa Beach Sand Bank */}
        <path
          d="M 0 320 Q 250 260 450 310 T 900 300 V 450 H 0 Z"
          fill="#F7F0DD"
          stroke="#09562C"
          strokeWidth="4"
        />

        {/* Ocean Waves */}
        <g id="ocean-waves">
          <path
            d="M 50 300 Q 150 280 250 300 T 450 300 T 650 300 T 850 300"
            stroke="#0E6D38"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 100 320 Q 200 305 300 320 T 500 320 T 700 320"
            stroke="#FF0F7B"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Small Boat on Ocean */}
        <motion.g
          id="small-boat"
          animate={{ y: [0, 4, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Boat Hull */}
          <path
            d="M 280 285 L 340 285 L 330 302 L 290 302 Z"
            fill="#FF0F7B"
            stroke="#09562C"
            strokeWidth="3"
          />
          {/* Sail Pole & Triangular Sail */}
          <path d="M 310 285 V 245" stroke="#09562C" strokeWidth="3" />
          <path d="M 310 248 L 335 270 H 310 Z" fill="#FFD81A" stroke="#09562C" strokeWidth="2.5" />
        </motion.g>

        {/* Beach Umbrella */}
        <g id="beach-umbrella">
          {/* Pole */}
          <path d="M 620 380 L 600 300" stroke="#09562C" strokeWidth="4" strokeLinecap="round" />
          {/* Umbrella Top */}
          <path
            d="M 550 300 C 560 260 640 260 650 300 Z"
            fill="#FF0F7B"
            stroke="#09562C"
            strokeWidth="3.5"
          />
          {/* Umbrella Yellow Stripes */}
          <path
            d="M 575 300 C 580 270 620 270 625 300 Z"
            fill="#FFD81A"
            stroke="#09562C"
            strokeWidth="2.5"
          />
        </g>

        {/* Direction Board Signpost */}
        <g id="direction-board">
          <rect x="210" y="270" width="12" height="110" fill="#5C3A21" stroke="#09562C" strokeWidth="3" />
          {/* Sign 1: ANJUNA BEACH */}
          <path d="M 130 280 H 230 L 245 295 L 230 310 H 130 Z" fill="#FFD81A" stroke="#09562C" strokeWidth="3" />
          <text x="180" y="299" fill="#09562C" fontSize="11" fontWeight="900" fontFamily="monospace" textAnchor="middle">
            ANJUNA 2KM
          </text>
          {/* Sign 2: HH GOA 2026 */}
          <path d="M 240 320 H 140 L 125 335 L 140 350 H 240 Z" fill="#FF0F7B" stroke="#09562C" strokeWidth="3" />
          <text x="188" y="339" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="monospace" textAnchor="middle">
            HH GOA 0KM 🌴
          </text>
        </g>

        {/* Swaying Palm Tree Left */}
        <motion.g
          id="palm-left"
          animate={{ rotate: [-2.5, 2.5, -2.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '100px 420px' }}
        >
          {/* Trunk */}
          <path
            d="M 90 420 Q 110 320 80 210 Q 82 208 86 210 Q 120 320 102 420 Z"
            fill="#09562C"
            stroke="#09562C"
            strokeWidth="2"
          />
          <path d="M 90 420 Q 110 320 80 210" stroke="#FFD81A" strokeWidth="2" strokeDasharray="5 5" />
          {/* Coconuts */}
          <circle cx="78" cy="214" r="7" fill="#5C3A21" stroke="#09562C" strokeWidth="2" />
          <circle cx="88" cy="216" r="7" fill="#7C4A21" stroke="#09562C" strokeWidth="2" />

          {/* Leaves */}
          <path d="M 80 210 C 50 180 10 190 0 210 C 20 205 50 205 80 212 Z" fill="#0E6D38" stroke="#09562C" strokeWidth="3" />
          <path d="M 80 210 C 40 150 10 130 0 140 C 20 155 50 175 80 210 Z" fill="#FFD81A" stroke="#09562C" strokeWidth="3" />
          <path d="M 80 210 C 90 140 130 130 150 140 C 130 160 100 180 80 210 Z" fill="#0E6D38" stroke="#09562C" strokeWidth="3" />
          <path d="M 80 210 C 120 170 160 190 170 210 C 140 205 110 205 80 212 Z" fill="#FF0F7B" stroke="#09562C" strokeWidth="3" />
        </motion.g>

        {/* Swaying Palm Tree Right */}
        <motion.g
          id="palm-right"
          animate={{ rotate: [2, -2, 2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ transformOrigin: '780px 420px' }}
        >
          {/* Trunk */}
          <path
            d="M 770 420 Q 750 310 790 190 Q 794 188 796 190 Q 760 310 782 420 Z"
            fill="#09562C"
            stroke="#09562C"
            strokeWidth="2"
          />
          {/* Leaves */}
          <path d="M 790 190 C 820 160 860 170 880 190 C 850 185 820 185 790 192 Z" fill="#0E6D38" stroke="#09562C" strokeWidth="3" />
          <path d="M 790 190 C 820 130 850 110 870 120 C 840 135 810 155 790 190 Z" fill="#FF0F7B" stroke="#09562C" strokeWidth="3" />
          <path d="M 790 190 C 740 130 700 120 680 130 C 700 150 730 170 790 190 Z" fill="#FFD81A" stroke="#09562C" strokeWidth="3" />
          <path d="M 790 190 C 730 160 690 180 670 200 C 710 195 750 195 790 192 Z" fill="#0E6D38" stroke="#09562C" strokeWidth="3" />
        </motion.g>

        {/* Tropical Shrubs & Plants on Foreground Sand */}
        <g id="tropical-plants">
          <path d="M 380 390 C 370 360 350 360 340 390 C 360 375 370 380 380 390 Z" fill="#0E6D38" stroke="#09562C" strokeWidth="2.5" />
          <path d="M 520 395 C 530 365 550 365 560 395 C 540 380 530 385 520 395 Z" fill="#0E6D38" stroke="#09562C" strokeWidth="2.5" />
        </g>
      </svg>
    </motion.div>
  );
};
