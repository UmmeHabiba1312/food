'use client';
import { motion } from 'framer-motion';

export default function TypingDots() {
  const bounceTransition = {
    y: {
      duration: 0.6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="flex justify-start items-center mt-1 ml-2">
      <div className="bg-white shadow rounded-full px-3 py-2 flex gap-2">
        {[0, 0.2, 0.4].map((delay, index) => (
          <motion.span
            key={index}
            className="w-2 h-2 bg-yellow-400 rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ ...bounceTransition, delay }}
          />
        ))}
      </div>
    </div>
  );
}
