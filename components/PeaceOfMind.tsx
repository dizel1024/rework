import React from 'react';
import { motion } from 'framer-motion';

const PeaceOfMind: React.FC = () => {
  const standardList = [
    "מבקשים מכם לכתוב את כל התוכן",
    "מבקשים תמונות (ואז משתמשים בתמונות בעייתיות)",
    "בונים אתר יפה — אבל לא מותאם ל-SEO או סושיאל",
    "משאירים אתכם לטפל בנגישות, מדיניות ופרטים משפטיים",
    "יוצרים אתר שדורש תחזוקה והתעסקות מתמדת"
  ];

  const reworkList = [
    "אנחנו כותבים ומחדדים את כל התוכן",
    "אנחנו דואגים לוויזואלים בטוחים לשימוש",
    "האתר נבנה מותאם ל-SEO מהיום הראשון",
    "מוכן לשיתוף בסושיאל בלי התאמות",
    "כולל נגישות ומדיניות לפי סטנדרט",
    "בנוי לעבוד — לא לבקש תשומת לב"
  ];

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-6">

        {/* Centered Column Layout */}
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight pb-2">
              אנחנו לא בונים רק אתר.<br />
              <span className="text-neutral-400">אנחנו סוגרים את כל הקצוות.</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-500 font-light leading-relaxed">
              אתר, תוכן, חוקיות, נגישות, SEO ונראות — במקום אחד.
            </p>
          </motion.div>

          {/* Comparison Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-12">

            {/* The Standard Way (Left in LTR / Right in RTL visually) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8 border-b border-neutral-100 pb-4">
                רוב הסוכנויות והפרילנסרים
              </h3>
              <ul className="space-y-6">
                {standardList.map((item, i) => (
                  <li key={i} className="text-neutral-400 leading-relaxed text-lg flex items-start gap-4">
                    <span className="block w-1.5 h-1.5 rounded-full bg-neutral-200 mt-2.5 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* The Rework Way */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-8 border-b border-black pb-4">
                עם REWORK
              </h3>
              <ul className="space-y-6">
                {reworkList.map((item, i) => (
                  <li key={i} className="text-black font-medium leading-relaxed text-lg flex items-start gap-4">
                    <span className="block w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default PeaceOfMind;