import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    number: '001',
    title: 'מיתוג',
    description: 'חוויות מותג ייחודיות ובלתי נשכחות שמתקשרות את הערכים שלכם ויוצרות חיבור רגשי עם הלקוחות.',
    tags: ['Offline Branding', 'Logo Design', 'Rebranding', 'Typography', 'Guidelines', 'Visual Identity']
  },
  {
    id: '2',
    number: '002',
    title: 'עיצוב אתרים ואפליקציות',
    description: 'עיצוב ממשקים חכמים ואינטואיטיביים שממוקדים בחוויית משתמש והמרות גבוהות.',
    tags: ['UX/UI', 'Web Design', 'Mobile Apps', 'SaaS', 'E-commerce']
  },
  {
    id: '3',
    number: '003',
    title: 'פיתוח',
    description: 'פיתוח פרונט-אנד ובק-אנד בטכנולוגיות המתקדמות ביותר כדי להבטיח ביצועים וסקייל.',
    tags: ['React', 'Next.js', 'Node.js', 'Cloud SQL', 'Google Cloud', 'CMS Development']
  },
  {
    id: '4',
    number: '004',
    title: 'תלת מימד (3D)',
    description: 'יצירת הדמיות ואנימציות תלת מימד שמוסיפות עומק וחדשנות למותג שלכם.',
    tags: ['Motion Graphics', '3D Modeling', 'Product Viz', 'Animation']
  }
];

const Services: React.FC = () => {
  const [openId, setOpenId] = useState<string>('1');

  return (
    <section id="services" className="bg-black text-white py-12 rounded-[3rem] mx-2 md:mx-4 mb-4">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          <div className="lg:col-span-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-neutral-500 mb-8"
            >
              מה אנחנו עושים
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              שירותים
            </motion.h3>
          </div>

          <div className="lg:col-span-8 flex flex-col">
            {services.map((service) => {
              const isOpen = openId === service.id;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-t border-neutral-800 py-8 first:border-t-0"
                >
                  <div
                    className="flex justify-between items-start cursor-pointer group"
                    onClick={() => setOpenId(isOpen ? '' : service.id)}
                  >
                    <div className="flex gap-12 items-baseline">
                      <span className="text-neutral-500 text-sm font-mono">{service.number}</span>
                      <h4 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                        {service.title}
                      </h4>
                    </div>
                    <span className="p-2 border border-neutral-700 rounded-full text-neutral-400 transition-colors group-hover:border-white group-hover:text-white">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 flex flex-col items-center text-center gap-6">
                          <p className="text-neutral-400 leading-relaxed text-lg max-w-3xl">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap justify-center gap-2">
                            {service.tags.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-white">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 mb-4">
                            <button
                              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                              className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-neutral-200 transition-colors"
                            >
                              התחילו פרויקט
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;