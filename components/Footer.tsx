import React, { useState } from 'react';
import Button from './Button';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LegalModal, PrivacyPolicyContent, AccessibilityContent } from './LegalModals';

const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);

  return (
    <footer className="bg-black text-white pt-24 pb-8 rounded-t-[3rem] mx-2 md:mx-4 mt-4 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-center">
          {/* Left Column (Visual) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] flex items-center justify-center"
          >
            {/* Stylized Shape with Moving Gradient */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  borderRadius: ["40% 60% 60% 40% / 60% 30% 70% 40%", "60% 40% 30% 70% / 40% 60% 40% 60%", "40% 60% 60% 40% / 60% 30% 70% 40%"]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-[300px] h-[450px] md:w-[450px] md:h-[600px] overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899, #6366f1)',
                  backgroundSize: '400% 400%',
                  animation: 'gradientMove 15s ease infinite'
                }}
              >
                {/* Subtle Wave Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              </motion.div>
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 text-right pr-8 md:pr-16 max-w-md">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                שלחו לנו<br />
                הודעה ונגשים<br />
                לכם את החזון
              </h2>
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-medium mb-12 text-neutral-300 font-heebo">נחזור אליכם תוך 24 שעות</h3>

            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                const originalText = submitBtn.innerText;

                // Loading state
                submitBtn.disabled = true;
                submitBtn.innerText = 'שולח...';
                submitBtn.style.opacity = '0.7';

                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                try {
                  const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });

                  if (response.ok) {
                    submitBtn.innerText = 'נשלח בהצלחה!';
                    submitBtn.style.backgroundColor = '#10b981'; // Success green
                    form.reset();
                    setTimeout(() => {
                      submitBtn.disabled = false;
                      submitBtn.innerText = originalText;
                      submitBtn.style.backgroundColor = '#ff006e';
                      submitBtn.style.opacity = '1';
                    }, 3000);
                  } else {
                    throw new Error('שגיאה בשליחה');
                  }
                } catch (error) {
                  submitBtn.innerText = 'שגיאה, נסו שוב';
                  submitBtn.style.backgroundColor = '#ef4444'; // Error red
                  setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalText;
                    submitBtn.style.backgroundColor = '#ff006e';
                    submitBtn.style.opacity = '1';
                  }, 3000);
                }
              }}
            >
              <div className="space-y-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="השם שלכם"
                  required
                  className="w-full bg-transparent border-b border-neutral-800 p-4 outline-none focus:border-pink-500 transition-all text-lg text-right font-heebo"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="אימייל"
                  required
                  className="w-full bg-transparent border-b border-neutral-800 p-4 outline-none focus:border-pink-500 transition-all text-lg text-right font-heebo"
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="טלפון"
                  required
                  className="w-full bg-transparent border-b border-neutral-800 p-4 outline-none focus:border-pink-500 transition-all text-lg text-right font-heebo"
                />
                <textarea
                  name="message"
                  placeholder="מה תרצו שנעשה עבורכם?..."
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-neutral-800 p-4 outline-none focus:border-pink-500 resize-none transition-all text-lg text-right font-heebo"
                ></textarea>
              </div>

              <div className="pt-8 flex flex-col items-start">
                <p className="text-[10px] text-neutral-500 mb-6 max-w-xs font-heebo">
                  אתר זה מוגן על ידי reCAPTCHA, וחלים עליו <a href="#" className="underline">מדיניות הפרטיות</a> ו<a href="#" className="underline">תנאי השירות</a> של Google.
                </p>

                <button
                  type="submit"
                  className="bg-[#ff006e] hover:bg-[#d90368] text-white px-12 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-pink-500/20 font-heebo"
                >
                  צרו קשר
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
          <div className="flex gap-6">
            <a href="https://www.facebook.com/rework.il" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <a href="https://www.instagram.com/rework_il/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <span>© 2024 REWORK. כל הזכויות שמורות.</span>
            <div className="flex gap-6">
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors">מדיניות פרטיות</button>
              <button onClick={() => setIsAccessibilityOpen(true)} className="hover:text-white transition-colors">הצהרת נגישות</button>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />

      <LegalModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="מדיניות פרטיות"
      >
        <PrivacyPolicyContent />
      </LegalModal>

      <LegalModal
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
        title="הצהרת נגישות"
      >
        <AccessibilityContent />
      </LegalModal>
    </footer>
  );
};

export default Footer;