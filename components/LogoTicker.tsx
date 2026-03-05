import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "/assets/logo-1.webp",
  "/assets/logo-2.webp",
  "/assets/logo-3.webp",
  "/assets/logo-4.webp",
  "/assets/logo-5.webp",
  "/assets/logo-6.webp",
  "/assets/logo-7.webp",
  "/assets/logo-8.webp",
  "/assets/logo-9.webp",
  "/assets/logo-10.webp",
  "/assets/logo-11.webp",
  "/assets/logo-12.webp",
  "/assets/logo-13.webp",
  "/assets/logo-14.webp",
  "/assets/logo-15.webp"
];

const LogoTicker: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Header Text */}
          <div className="mb-10 text-center">
            <span className="text-black text-lg md:text-xl font-bold tracking-tight">
              יוצרים נוכחות דיגיטלית למותגים, עסקים ואנשי מקצוע
            </span>
          </div>

          {/* 3D Circular Stage */}
          <div className="relative w-full h-[300px] flex items-center justify-center [perspective:2000px] pointer-events-none">

            {/* The Rotating Ring */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d] transform-gpu"
              whileInView={{ rotateY: [0, -360] }}
              viewport={{ once: false }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {logos.map((logoSrc, index) => {
                const angle = (index / logos.length) * 360;
                // Wider radius for desktop, smaller for mobile
                const radiusX = typeof window !== 'undefined' && window.innerWidth < 768 ? 350 : 700;

                return (
                  <motion.div
                    key={index}
                    className="absolute w-[180px] md:w-[220px] h-[80px] bg-white rounded-2xl flex items-center justify-center px-6 backface-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-neutral-100/50"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${radiusX}px)`,
                    }}
                  >
                    <img
                      src={logoSrc}
                      alt={`Client Logo ${index}`}
                      className="max-w-full max-h-12 object-contain brightness-0 opacity-40 hover:opacity-100 transition-all duration-300 pointer-events-auto"
                      loading="lazy"
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Subtle Gradient Overlays for depth */}
            <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;