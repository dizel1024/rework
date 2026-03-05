import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "תוך כמה זמן האתר החדש שלי באוויר?",
    a: `תלוי כמה מהר תתפסו מקום בלו"ז שלנו. אתרים בסיסיים יכולים לעלות תוך 3-4 שבועות, ופרויקטים מורכבים יותר תוך 6-16 שבועות. אבל שימו לב: היומן שלנו מתמלא חודשים קדימה. ככל שתחכו עם ההחלטה, ככה המתחרים שלכם ימשיכו לגנוב לכם לקוחות בזמן שאתם מתלבטים.`
  },
  {
    q: "כמה ההשקעה הזו הולכת לעלות לי?",
    a: `השאלה האמיתית היא כמה עולה לכם לא לשדרג את האתר שלכם עכשיו. המחירים שלנו מתחילים מ-6,000 ש"ח לאתרי בסיס ועולים בהתאם לדרישות. הערה חשובה: בגלל הביקוש, אנחנו מעדכנים מחירונים כל רבעון. המחיר של היום הוא כנראה לא המחיר של מחר – הבטיחו את המחיר הנוכחי עכשיו.`
  },
  {
    q: "אני בפנים. איך מתחילים לפני שייגמר המקום החודש?",
    a: `פשוט מאוד – משאירים פרטים ממש עכשיו וקובעים פגישת ייעוץ (היא עדיין בחינם, בינתיים). אנחנו לוקחים רק מספר מצומצם של פרויקטים כל חודש כדי לשמור על רמה פסיכית של איכות ותשומת לב אישית. תפסו את המקום שלכם לפני שנעשה סולד-אאוט לחודש הקרוב.`
  },
  {
    q: "האתר הזה יביא לי לקוחות מגוגל או שהוא סתם יפה?",
    a: `אנחנו לא בונים "אתרי רפאים". כל אתר שיוצא מאיתנו נבנה מראש עם תשתית SEO מושחזת ועוצמתית (מהירות שיא, תגיות, Schema Markup). בזמן שהמתחרים שלכם משלמים הון כדי לקדם אתר בנוי רע, אתם מקבלים את נקודת הזינוק הכי טובה שיש לעמוד הראשון בגוגל.`
  },
  {
    q: "ברור שהאתר מותאם לנייד, נכון?",
    a: `אנחנו ב-2026, מי שהאתר שלו לא נראה מושלם בנייד פשוט לא קיים. האתר שלכם יעבור אופטימיזציה אובססיבית לכל מסך קיים – סמארטפון, טאבלט או מחשב. גוגל מעניש היום אתרים שלא מותאמים למובייל, ואנחנו דואגים שאתם תהיו אלה ששואבים את כל התנועה.`
  },
  {
    q: "מי כותב את התוכן שגורם לאנשים לקנות?",
    a: `אם התוכן שלכם משעמם, הלקוחות יברחו בשנייה, לא משנה כמה האתר יפה. אנחנו מציעים שירותי קופירייטינג השחזה שיודעים לכתוב טקסטים שיווקיים שמהפנטים את הגולשים וגורמים להם להשאיר פרטים. אל תהרסו אתר פרימיום עם טקסט בינוני.`
  },
  {
    q: "ומה קורה אחרי ההשקה? אתם נעלמים לי?",
    a: `ממש לא. אתם מקבלים הדרכה מלאה כדי לשלוט באתר שלכם לגמרי. מעבר לזה, הלקוחות החכמים שלנו חוטפים את חבילות התחזוקה והביטוח שלנו, כי הם יודעים שאתר מצליח צריך גב טכני חזק 24/7. אל תשאירו את הנכס הדיגיטלי הכי חשוב שלכם חשוף.`
  },
  {
    q: "למה שאבחר דווקא ב-REWORK מכל הסוכנויות בחוץ?",
    a: `כי ב-REWORK אנחנו לא עובדים בשיטת הסרט הנע. אנחנו בוחרים בקפידה את הפרויקטים שאנחנו נכנסים אליהם ומתחייבים לתוצאות בלתי מתפשרות. ברגע שתראו את תיק העבודות שלנו ותשמעו על התוצאות שהבאנו ללקוחות אחרים, תבינו בדיוק למה כולם מדברים עלינו ולמה התורים לסטודיו שלנו רק מתארכים.`
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 bg-white text-black">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-black mb-4 tracking-tighter"
          >
            FAQ
          </motion.h2>
          <p className="text-neutral-500 max-w-xs">יש לכם שאלות? יש לנו תשובות. כל מה שצריך לדעת לפני שמתחילים לעבוד יחד.</p>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-b border-neutral-200 py-6 first:border-t"
              >
                <button
                  className="flex justify-between items-center w-full text-right hover:text-neutral-600 transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <div className="bg-neutral-100 rounded-full p-1 transition-colors duration-300">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-neutral-500 text-sm leading-relaxed pl-8 pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;