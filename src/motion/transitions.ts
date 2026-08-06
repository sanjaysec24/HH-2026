import { Variants, Transition } from 'motion/react';

// Smooth GPU-friendly spring transitions
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
};

export const bouncySpring: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 18,
};

export const gentleEase: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1.0],
};

export const fastEase: Transition = {
  duration: 0.25,
  ease: [0.25, 0.1, 0.25, 1.0],
};
