import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden text-black"
            dir="rtl"
          >
            <div className="flex items-center justify-between p-6 border-b border-neutral-100 shrink-0">
              <h2 className="text-2xl font-bold">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="prose prose-neutral max-w-none space-y-4">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const PrivacyPolicyContent = () => (
  <div className="space-y-6 text-neutral-800 leading-relaxed">
    <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 mb-8">
      <p className="text-sm font-bold">תאריך עדכון אחרון: 5 במרץ 2026</p>
      <p className="text-xs text-neutral-500 mt-1">מדיניות זו חלה על כלל המשתמשים באתר REWORK (להלן: "האתר") המופעל על ידי REWORK DESIGN STUDIO (להלן: "החברה").</p>
    </div>

    <section>
      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
        <span className="w-6 h-6 bg-black text-white text-[12px] rounded-full flex items-center justify-center">01</span>
        כללי
      </h3>
      <p>החברה מכבדת את פרטיות המשתמשים באתר. מטרת מדיניות זו היא לפרט איזה מידע נאסף, כיצד נעשה בו שימוש ומהן האפשרויות העומדות בפני המשתמש בנוגע למידע זה. שימוש באתר מהווה הסכמה לתנאי מדיניות זו.</p>
    </section>

    <section>
      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
        <span className="w-6 h-6 bg-black text-white text-[12px] rounded-full flex items-center justify-center">02</span>
        איסוף מידע וסוגיו
      </h3>
      <p>מידע הנמסר מרצון: בעת מילוי טופס יצירת קשר, המשתמש מתבקש למסור פרטים אישיים כגון שם מלא, כתובת דואר אלקטרוני ומספר טלפון. מידע זה משמש אך ורק למטרת חזרה למשתמש ומתן שירות.</p>
      <p className="mt-2 text-sm text-neutral-600 italic">* האתר מוגן על ידי Google reCAPTCHA ומידע טכני מועבר ל-Google לצורך מניעת ספאם בלבד.</p>
    </section>

    <section>
      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
        <span className="w-6 h-6 bg-black text-white text-[12px] rounded-full flex items-center justify-center">03</span>
        קובצי Cookie (עוגיות)
      </h3>
      <p>האתר עשוי להשתמש ב"עוגיות" לצורך תפעולו השוטף והתקין, ובכלל זה כדי לאסוף נתונים סטטיסטיים אודות השימוש באתר, לאימות פרטים ולהתאמת האתר להעדפותיך האישיות. ניתן לנטרל את העוגיות דרך הגדרות הדפדפן שלך.</p>
    </section>

    <section>
      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
        <span className="w-6 h-6 bg-black text-white text-[12px] rounded-full flex items-center justify-center">04</span>
        אבטחת מידע
      </h3>
      <p>החברה מיישמת באתר מערכות ונהלים עדכניים לאבטחת מידע. בעוד שמערכות אלו מצמצמות את הסיכונים לחדירה בלתי-מורשית, הן אינן מעניקות חסינות מוחלטת. לכן, החברה לא מתחייבת שהשירותים באתר יהיו חסינים באופן מוחלט מפני גישה בלתי-מורשית.</p>
    </section>

    <section>
      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
        <span className="w-6 h-6 bg-black text-white text-[12px] rounded-full flex items-center justify-center">05</span>
        זכות לעיון במידע ותיקונו
      </h3>
      <p>על-פי חוק הגנת הפרטיות, התשמ"א-1981, כל אדם זכאי לעיין במידע עליו המוחזק במאגר מידע. אדם שעיין במידע עליו ומצא כי אינו נכון, שלם, ברור או מעודכן, רשאי לפנות לבעל מאגר המידע בבקשה לתקן את המידע או למוחקו.</p>
    </section>
  </div>
);

export const AccessibilityContent = () => (
  <div className="space-y-6 text-neutral-800 leading-relaxed">
    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-8">
      <p className="text-sm font-bold text-blue-900">תאריך עדכון אחרון: 5 במרץ 2026</p>
      <p className="text-xs text-blue-800 mt-1">אנו פועלים למתן הזדמנות שווה לאנשים עם מוגבלות ומחויבים להנגיש את חוויית הגלישה לכלל האוכלוסייה.</p>
    </div>

    <section>
      <h3 className="text-xl font-bold mb-3">רמת הנגישות</h3>
      <p>אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013. התאמות הנגישות בוצעו עפ"י המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG2.0 הבינלאומי.</p>
    </section>

    <section>
      <h3 className="text-xl font-bold mb-3">התאמות שבוצעו באתר</h3>
      <ul className="list-disc list-inside space-y-2 marker:text-blue-500">
        <li><strong>ניווט מקלדת:</strong> תמיכה מלאה בשימוש במקש TAB למעבר בין אלמנטים.</li>
        <li><strong>ניגודיות צבעים:</strong> הקפדה על יחסי ניגודיות גבוהים לקריאה נוחה.</li>
        <li><strong>תמיכה בטכנולוגיות מסייעות:</strong> האתר מותאם לעבודה עם קוראי מסך מובילים (JAWS, NVDA).</li>
        <li><strong>מבנה סמנטי:</strong> שימוש בתגיות HTML5 תקניות (H1-H6, Main, Nav, Footer).</li>
        <li><strong>תיאור חלופי (Alt):</strong> הוספת תיאור לכל התמונות המשמעותיות באתר.</li>
      </ul>
    </section>

    <section>
      <h3 className="text-xl font-bold mb-3">הערה לגבי רכיבי צד שלישי</h3>
      <p>ייתכן ורכיבים חיצוניים מסוימים המשולבים באתר (כגון מפות או נגני וידאו) אינם נגישים באופן מלא. אנו פועלים מול הספקים לשיפור המצב באופן מתמיד.</p>
    </section>

    <div className="bg-neutral-900 text-white p-6 rounded-2xl mt-8">
      <h3 className="text-lg font-bold mb-2">נתקלתם בבעיה? דברו איתנו</h3>
      <p className="text-sm opacity-80 mb-4">אנו ממשיכים במאמצים לשפר את נגישות האתר. אם נתקלתם בקושי או שיש לכם הצעה לשיפור, נשמח לשמוע מכם:</p>
      <div className="space-y-1 text-sm font-medium">
        <p>רכז נגישות: אנטולי</p>
        <p>אימייל: hi@rework.co.il</p>
        <p>מענה תוך 2 ימי עסקים.</p>
      </div>
    </div>
  </div>
);
