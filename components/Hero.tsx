import React from 'react';
import { ArrowDownLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { TubesBackground } from './ui/neon-flow';

const Hero: React.FC = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col relative overflow-hidden rounded-b-[3rem]">

      <TubesBackground className="absolute inset-0 w-full h-full">
        <div className="container mx-auto px-6 h-full flex flex-col justify-between pt-24 pb-12 pointer-events-none">

          {/* Top Info */}
          <div className="flex justify-between items-start mb-20 md:mb-0 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden md:flex gap-8 text-sm text-neutral-400"
            >
              <span>50+ עובדים</span>
              <span>6 מדינות</span>
              <span>נוסד ב-2015</span>
            </motion.div>
          </div>

          {/* Main Title */}
          <div className="flex-grow flex flex-col justify-center my-12 md:my-0 pointer-events-auto">
            <motion.h1
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18vw] leading-[0.8] font-black tracking-tighter text-center md:text-right select-none"
            >
              REWORK
            </motion.h1>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-4 group cursor-pointer"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -45 }}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors"
              >
                <ArrowDownLeft size={20} />
              </motion.div>
              <span className="text-sm font-medium">גללו למטה</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="max-w-md text-xl md:text-2xl font-light leading-snug text-neutral-200"
            >
              אנחנו יוצרים מותגים דיגיטליים <span className="text-white font-bold">שבולטים וצומחים</span>. דרך עיצוב מותאם אישית ואנימציה שמספרת סיפור.
            </motion.div>
          </div>
        </div>
      </TubesBackground>
    </section>
  );
};

export default Hero;