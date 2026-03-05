import React, { useRef } from 'react';
import { Star, Linkedin, Award, Facebook } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Testimonial } from '../types';

// Custom Google Icon
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const testimonials: Testimonial[] = [
  { id: '1', content: 'העבודה עם אנטולי ותומר הייתה פשוט מעבר לכל ציפיות. הם לקחו מערכת מורכבת והפכו אותה לחווית משתמש פשוטה, מהירה וממכרת ששינתה לנו את כל אחוזי ההמרה באתר תוך פחות מחודש.', author: 'טורסטן גוסטבסן', role: 'מנכ״ל Trevis', company: 'Trevis', rating: 5, source: 'LinkedIn' },
  { id: '2', content: 'חיפשתי צוות שיודע לקחת חזון עיצובי פרימיום ולתרגם אותו לקוד נקי ומהיר בטירוף. התוצאה הסופית שקיבלנו מהסטודיו היא רמה אחת מעל כל מה שקיים היום בשוק הישראלי, פשוט יצירת אמנות.', author: 'אונו מאבריק', role: 'יזם', company: 'UNO', rating: 5, source: 'Google' },
  { id: '3', content: 'הדיוק בפרטים הקטנים הוא מה שמבדיל אותם מאחרים. כל פיקסל יושב במקום, כל אנימציה מרגישה טבעית, והכי חשוב - האתר טוען דפים בשבריר שנייה. הגולשים שלנו לא מפסיקים להחמיא.', author: 'רוברט אברם', role: 'מייסד', company: 'Avram Inc', rating: 5, source: 'Facebook' },
  { id: '4', content: 'מאז שהשקנו את המיתוג החדש והאתר שעיצבו לנו, כמות הלידים האיכותיים קפצה ביותר מ-40%. מדובר בהשקעה הכי משתלמת שעשינו השנה לעסק. מקצוענות ללא פשרות לאורך כל הדרך.', author: 'עידן לוי', role: 'בעלים', company: 'Levin Law', rating: 5, source: 'Google' },
  { id: '5', content: 'היכולת שלהם להבין את הצרכים העסקיים שלי עוד לפני שהסברתי אותם היא נדירה. הם לא רק מעצבים ובונים אתרים, הם בונים אסטרטגיה שלמה של מותג שמשדר יוקרה ואמינות מהרגע הראשון.', author: 'אלונה כהן', role: 'מנהלת שיווק', company: 'Sparkle', rating: 5, source: 'Facebook' },
  { id: '6', content: 'המעבר לאתר החדש בבנייה אישית שיפר לנו את ציון ה-SEO פלאים. הקוד של תומר כל כך נקי ומותאם לגוגל שתוך חודשיים עלינו לדף הראשון בביטויים הכי תחרותיים שלנו. ממליצה בחום!', author: 'מיכל שרון', role: 'בלוגרית', company: 'Lifestyle', rating: 5, source: 'Google' },
  { id: '7', content: 'אנטולי הוא מאסטר בעיצוב ממשקים. הוא יצר עבורנו שפת מותג ייחודית שתפסה חזק בשוק. התהליך היה שקוף, נעים ומקצועי מאוד. מרגישים שהם שותפים אמיתיים להצלחה ולא סתם ספקים.', author: 'יוסי ברק', role: 'מנהל מוצר', company: 'CloudWay', rating: 5, source: 'LinkedIn' },
  { id: '8', content: 'המהירות של האתר היא פשוט משהו שלא ראיתי קודם. הכל עובד בצורה חלקה, בלי תקיעות, והעיצוב המינימליסטי נותן תחושה של מותג בינלאומי ברמה הכי גבוהה שיש. תודה על הכל!', author: 'גיא מנור', role: 'מנכ״ל', company: 'Manor Group', rating: 5, source: 'Google' },
  { id: '9', content: 'סיימנו פרויקט גמר של אפליקציה מורכבת והתוצאה מרהיבה. תומר פתר את כל האתגרים הטכניים בקלות ואנטולי נתן לה פיניש יוקרתי שתפס את תשומת הלב של המשקיעים באופן מיידי.', author: 'הילה יוסף', role: 'מעצבת', company: 'Hila Design', rating: 5, source: 'LinkedIn' },
  { id: '10', content: 'אם אתם מחפשים סטודיו שחי ונושם עיצוב דיגיטלי וטכנולוגיה, הגעתם למקום הנכון. השילוב בין היכולת העיצובית של אנטולי לביצוע של תומר הוא פשוט קטלני. מומלץ לכל סטארטאפ בתחילת הדרך.', author: 'ניר זיו', role: 'מייסד', company: 'BioMed', rating: 5, source: 'Clutch' },
  { id: '11', content: 'שירות אישי ומקצועי ברמה הכי גבוהה שנתקלתי בה. הם זמינים לכל שאלה, תמיד מביאים רעיונות יצירתיים לשיפור והתוצאות מדברות בעד עצמן. האתר שלנו הוא הגאווה הגדולה של החברה.', author: 'שני רותם', role: 'מנהלת פרויקטים', company: 'RTM', rating: 5, source: 'Facebook' },
  { id: '12', content: 'חווית המשתמש באפליקציה שהם עיצבו לנו פשוט מושלמת. המשתמשים מדווחים על קלות שימוש וזרימה טבעית, מה שהוריד לנו את כמות קריאות התמיכה ב-30%. פשוט אלופים במה שהם עושים.', author: 'אורן אביב', role: 'מפיק', company: 'Aviv Events', rating: 5, source: 'Google' },
  { id: '13', content: 'כל פרט באתר נבחר בקפידה, מהטיפוגרפיה ועד לריווחים בין האלמנטים. זה מרגיש שהם השקיעו בנשמה של האתר כאילו הוא היה שלהם. התוצאה היא מותג חזק, בולט ומרשים.', author: 'לירון פז', role: 'מנכ״לית', company: 'Paz Tech', rating: 5, source: 'LinkedIn' },
  { id: '14', content: 'הפיתוח של תומר הוא ללא ספק הכי מהיר שפגשתי. הוא יודע לקחת את העיצובים הכי מורכבים ולהפוך אותם למציאות בלי פשרות על הביצועים. האתר פשוט זז חלק בכל מכשיר אפשרי.', author: 'יוסי דגן', role: 'סוכן נדל״ן', company: 'Dagan Group', rating: 5, source: 'Google' },
  { id: '15', content: 'עבדתי עם הרבה מעצבים בקריירה שלי, אבל אנטולי נמצא בליגה אחרת לגמרי. הוא מבין אסתטיקה וקומפוזיציה ברמה של אמן, והיכולת שלו להפוך דף ורוד לכלי שיווקי משומן היא מדהימה.', author: 'קרן אור', role: 'בעלים', company: 'Gems', rating: 5, source: 'Facebook' },
  { id: '16', content: 'התהליך היה פשוט תענוג. מהפגישה הראשונה הבנתי שיש פה עסק עם מקצוענים שאפשר לסמוך עליהם. הם סיפקו את הפרויקט לפני הזמן ובאיכות גבוהה בהרבה ממה שתכננו. ממליץ בחום רב!', author: 'דניאל שוורץ', role: 'יזם', company: 'Nexus', rating: 5, source: 'Google' }
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Shuffle testimonials once per mount
  const [shuffled] = React.useState(() => [...testimonials].sort(() => 0.5 - Math.random()));

  const ReviewCard = ({ item }: { item: Testimonial; key?: string }) => (
    <div className="flex-shrink-0 w-[380px] bg-white p-6 rounded-[1.5rem] flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 mx-3 border border-neutral-50 relative overflow-hidden">
      {/* FOMO Verified Badge */}
      <div className="absolute top-4 left-6 flex items-center gap-1.5 px-2 py-0.5 bg-green-50 rounded-full">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
        <span className="text-[9px] font-bold text-green-700 uppercase tracking-tight">Verified</span>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-0.5 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
          </div>
          <div className="opacity-40 grayscale hover:grayscale-0 transition-all">
            {item.source === 'LinkedIn' && <Linkedin className="text-[#0077b5]" size={16} />}
            {item.source === 'Google' && <GoogleIcon />}
            {item.source === 'Facebook' && <Facebook className="text-[#1877F2]" size={18} fill="currentColor" />}
            {item.source === 'Upwork' && <div className="bg-[#14a800] text-white text-[8px] font-bold p-1 rounded-full w-4 h-4 flex items-center justify-center">Up</div>}
            {item.source === 'Clutch' && <Award className="text-red-500" size={16} />}
          </div>
        </div>
        <p className="text-[15px] font-medium leading-[1.6] mb-6 text-neutral-800 text-right font-heebo">
          "{item.content}"
        </p>
      </div>

      <div className="flex items-center gap-3 border-t border-neutral-50 pt-4 mt-auto">
        <div className="w-10 h-10 bg-neutral-100 rounded-full overflow-hidden shrink-0 ring-2 ring-neutral-50">
          <img src={`https://i.pravatar.cc/100?u=${item.id}`} alt={item.author} loading="lazy" />
        </div>
        <div className="overflow-hidden text-right w-full">
          <h4 className="font-bold text-[13px] text-neutral-900 truncate">{item.author}</h4>
          <p className="text-[11px] text-neutral-400 truncate font-medium">{item.role} @ {item.company}</p>
        </div>
      </div>
    </div>
  );

  const row1 = shuffled.slice(0, 5);
  const row2 = shuffled.slice(5, 11);
  const row3 = shuffled.slice(11, 16);

  const CARD_WIDTH = 404; // 380px + 24px gap (mx-3)

  return (
    <section id="testimonials" className="py-20 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          Social Proof
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#090909] mb-4">
          חוויות מהמסע המשותף
        </h2>
        <p className="text-neutral-500 font-medium max-w-xl mx-auto">
          הצטרפו למאות עסקים שכבר שידרגו את הנוכחות הדיגיטלית שלהם עם העיצוב והפיתוח שלנו
        </p>
      </div>

      {/* Marquee Rows - Forced LTR to ensure animation coordinates work regardless of locale */}
      <div className="flex flex-col gap-6" dir="ltr">
        {/* Row 1 - Left */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee transform-gpu">
            {[...row1, ...row1, ...row1].map((item, idx) => (
              <ReviewCard key={`r1-${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right */}
        <div className="hidden md:flex overflow-hidden">
          <div className="animate-marquee-reverse transform-gpu">
            {[...row2, ...row2, ...row2].map((item, idx) => (
              <ReviewCard key={`r2-${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 3 - Left faster */}
        <div className="hidden md:flex overflow-hidden">
          <div className="animate-marquee-fast transform-gpu">
            {[...row3, ...row3, ...row3].map((item, idx) => (
              <ReviewCard key={`r3-${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Big Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 border-t border-neutral-200 pt-12">
          {[
            { val: '337+', label: 'לקוחות ברחבי העולם' },
            { val: '130+', label: 'פרויקטים מוצלחים לשנה' },
            { val: '60%', label: 'לקוחות חוזרים' },
            { val: '42', label: 'פרסי עיצוב' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center lg:text-right"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">{stat.val}</h3>
              <p className="text-xs font-medium text-neutral-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;