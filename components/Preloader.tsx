import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return prev + 2; // 2% per tick at 8ms = ~400ms total + 200ms exit
      });
    }, 8);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -1000 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img
                src="/assets/rework logo.webp"
                alt="REWORK"
                className="h-12 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-48 h-[2px] bg-neutral-800 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            {/* Percentage Text */}
            <motion.div
              className="mt-4 text-neutral-500 font-mono text-xs tracking-widest"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              LOADING {progress}%
            </motion.div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute bottom-12 left-12 text-[10px] text-neutral-800 font-mono tracking-widest uppercase">
            Design Studio / Digital Presence
          </div>
          <div className="absolute top-12 right-12 text-[10px] text-neutral-800 font-mono tracking-widest uppercase">
            Est. 2024
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
