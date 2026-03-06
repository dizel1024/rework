import React, { useEffect } from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { PROJECTS, ProjectCard } from '../components/Projects';

const ProjectsPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    return (
        <div className="min-h-screen bg-[#fafafa]" dir="rtl">
            {/* Main Content */}
            <main className="py-20 lg:py-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="mb-16 md:mb-24 flex flex-col gap-6 max-w-2xl">
                        <div className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[12px] font-bold tracking-widest uppercase">
                            Our Portfolio
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 font-heebo tracking-tight leading-none">
                            העבודות שלנו
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed font-heebo">
                            גלריה מלאה של פרויקטים נבחרים שיצרנו עבור לקוחות, ממיתוג, דרך חוויית משתמש ועד לפיתוח חכם.
                        </p>
                    </div>

                    {/* Projects Grid Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16" dir="ltr">
                        {PROJECTS.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="border-t border-gray-200 bg-white py-8 mt-20">
                <div className="container mx-auto px-6 max-w-7xl text-center text-sm font-bold text-gray-400 font-heebo">
                    © {new Date().getFullYear()} REWORK Studio. כל הזכויות שמורות.
                </div>
            </footer>
        </div>
    );
};

export default ProjectsPage;
