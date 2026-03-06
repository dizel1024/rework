import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface TeamMember {
  src: string;
  name: string;
  role: string;
  index: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    src: '/assets/team-1.webp',
    name: 'אנטולי קיזוב',
    role: 'סמנכ״ל פיתוח עסקי (Web)',
    index: '01',
    bio: 'מוביל את הפיתוח העסקי עם דגש על אקו-סיסטם דיגיטלי וצמיחה אסטרטגית מבוססת נתונים.'
  },
  {
    src: '/assets/team-2.webp',
    name: 'תומר הרץ',
    role: 'מנכ״ל',
    index: '02',
    bio: 'מוביל את הסטודיו עם דגש על אסטרטגיה, מצוינות וצמיחה מתמדת בכל פרויקט.'
  },
  {
    src: '/assets/team-3.webp',
    name: 'קטיה נסטרינקו',
    role: 'אחראית תיקי לקוחות',
    index: '03',
    bio: 'מוקדשת להצלחת הלקוחות שלנו ולניהול תקשורת שוטפת, מקצועית ומחברת.'
  },
  {
    src: '/assets/team-4.webp',
    name: 'אנדרי קיזוב',
    role: 'מנהל פרויקטים בכיר',
    index: '04',
    bio: 'מומחה בניהול פרויקטים מורכבים והבטחת עמידה בלוחות זמנים ובאיכות ללא פשרות.'
  }
];

const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the tilt
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize values to -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="relative aspect-[4/5] sm:aspect-auto sm:h-[450px] md:h-[500px] bg-white/75 border border-white/90 rounded-[4px] overflow-hidden group md:cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.02),inset_0_0_20px_rgba(255,255,255,0.5)] backdrop-blur-[12px] transition-all duration-500 md:hover:translate-y-[-10px] md:hover:shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_0_40px_rgba(255,255,255,0.8)] md:hover:border-white"
    >
      {/* Porcelain Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 pointer-events-none z-10" />

      {/* Image Wrapper */}
      <div className="w-full h-full relative filter md:grayscale md:contrast-[1.1] md:group-hover:grayscale-0 md:group-hover:contrast-100 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] md:group-hover:scale-[1.05]">
        <img src={member.src} alt={member.name} className="w-full h-full object-cover object-top" loading="lazy" />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-white/95 via-white/80 to-transparent backdrop-blur-[4px] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] text-right">
        <span className="font-mono text-[0.75rem] uppercase tracking-widest text-neutral-900 mb-2 block">
          {member.index} / {member.role}
        </span>
        <h3 className="text-[1.5rem] font-bold mb-3 tracking-tight text-neutral-900 leading-none">
          {member.name}
        </h3>
        <motion.p
          className="text-[0.85rem] leading-relaxed text-neutral-600 max-h-[100px] opacity-100 mt-3 md:max-h-0 md:opacity-0 md:group-hover:max-h-[100px] md:group-hover:opacity-100 md:group-hover:mt-3 transition-all duration-500 overflow-hidden"
        >
          {member.bio}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="relative py-16 bg-white text-neutral-900 overflow-hidden selection:bg-neutral-900 selection:text-white" dir="rtl">
      {/* Ambient Light Simulation */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(230,235,255,0.4)_0%,transparent_40%)] pointer-events-none z-0" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Our Team Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="p-10 bg-white/50 border border-neutral-100 rounded-2xl backdrop-blur-sm shadow-sm"
          >
            <h2 className="text-[3.5rem] font-bold tracking-tighter leading-none mb-8 text-neutral-900">
              הצוות שלנו.
            </h2>
            <p className="text-[1.1rem] text-neutral-600 leading-relaxed font-light">
              אנחנו צוות של אנשי קריאייטיב, אסטרטגיה ודיגיטל, שמחבר בין עיצוב מדויק, חשיבה שיווקית וטכנולוגיה חכמה. כל פרויקט אצלנו נבנה מתוך הבנה עמוקה של העסק, הקהל והמטרה — כדי ליצור נוכחות דיגיטלית שלא רק נראית מצוין, אלא גם עובדת באמת.
            </p>
          </motion.div>

          {/* Your Vision Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="p-10 bg-neutral-50/50 border border-neutral-100 rounded-2xl backdrop-blur-sm"
          >
            <h2 className="text-[3.5rem] font-bold tracking-tighter leading-none mb-8 text-neutral-900">
              החזון שלכם.
            </h2>
            <p className="text-[1.1rem] text-neutral-500 leading-relaxed font-light">
              אנחנו מאמינים שלכל עסק יש חזון ייחודי, והתפקיד שלנו הוא להפוך אותו לנוכחות דיגיטלית ברורה, מרשימה ומשכנעת. המטרה שלנו היא לקחת את הרעיונות, הערכים והשאיפות שלכם — ולתרגם אותם לאתר שמציג אתכם ברמה הגבוהה ביותר.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, idx) => (
            <MemberCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;