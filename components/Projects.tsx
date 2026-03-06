import React from 'react';

interface Project {
  id: string;
  name: string;
  year: string;
  categories: string[];
  imageUrl: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: 'nexalum',
    name: 'Nexalum',
    year: '2026',
    categories: ['עיצוב אתרים', 'פיתוח', 'אנימציה'],
    imageUrl: '/assets/nexalum.avif',
    link: 'https://www.nexalum.co'
  },
  {
    id: 'nexclean',
    name: 'Nexclean',
    year: '2026',
    categories: ['זהות מותגית', 'UX/UI', 'עיצוב אפליקציות'],
    imageUrl: '/assets/nexclean.avif',
    link: 'https://www.nexclean.co.il'
  },
  {
    id: 'furniq',
    name: 'Furniq',
    year: '2026',
    categories: ['מסחר אלקטרוני', 'עיצוב מוצר', 'פיתוח'],
    imageUrl: '/assets/Furniq.avif',
    link: 'https://www.furniq.co.il'
  },
  {
    id: 'designdream',
    name: 'DesignDream',
    year: '2026',
    categories: ['אנימציה', 'עיצוב בתלת מימד', 'מותג'],
    imageUrl: '/assets/designdream.avif',
    link: 'https://designdream.co.il/'
  },
  {
    id: 'roman-abramov',
    name: 'Roman Abramov',
    year: '2026',
    categories: ['פרויקט דגל', 'אסטרטגיה', 'עיצוב'],
    imageUrl: '/assets/roman abramov.avif',
    link: 'https://www.roman-abramov.com'
  },
  {
    id: 'dancetop',
    name: 'Dance Top',
    year: '2026',
    categories: ['מיתוג', 'UX/UI', 'עיצוב אתרים'],
    imageUrl: '/assets/dance top.avif',
    link: '#'
  }
];

const ProjectCard: React.FC<{ project: Project; isFirst?: boolean }> = ({ project, isFirst = false }) => {
  return (
    <div className="relative group cursor-pointer bg-white overflow-hidden rounded-[18px]">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        {/* Card Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-white group-hover:bg-black transition-colors duration-300 relative z-20">
          <div className="flex items-baseline gap-6 relative truncate">
            <h3 className="text-[20px] font-bold tracking-tight text-[#0A0A0A] group-hover:text-white transition-colors duration-300">
              {project.name}
            </h3>

            <div className="hidden sm:flex overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-2">
                {project.categories.map((cat, idx) => (
                  <span key={idx} className="text-[11px] font-medium text-white/50 border border-white/20 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[#0A0A0A]/40 group-hover:text-white/40 transition-colors duration-300">
            <span className="text-[12px] font-medium">/</span>
            <span className="text-[12px] font-bold tracking-tight">{project.year}</span>
          </div>
        </div>

        {/* Static Image */}
        <div className="relative overflow-hidden w-full aspect-[4/3]">
          <img
            src={project.imageUrl}
            alt={project.name}
            loading={isFirst ? 'eager' : 'lazy'}
            className="w-full h-full object-cover object-top grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </a>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full bg-[#FFFFFF] pt-6 pb-16 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 font-sans selection:bg-black selection:text-white">
      <div className="max-w-[1520px] mx-auto flex flex-col gap-[45px]">

        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
          <div className="lg:col-span-1 pt-2">
            <p className="text-[16px] font-medium text-[#0A0A0A]/60 tracking-[-0.6px] leading-relaxed max-w-[200px]">
              פתרונות ייחודיים<br />שמייצרים לידים
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[40px] md:text-[60px] font-semibold text-[#090909] tracking-[-2px] md:tracking-[-3.6px] leading-tight md:leading-[1.1] pb-2">
              <span className="inline-block ml-3">פרויקטים</span>
              <span className="inline-block">נבחרים</span>
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} isFirst={index < 2} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;