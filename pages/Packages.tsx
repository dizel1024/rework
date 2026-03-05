import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import PricingSection from '../components/pricing/PricingSection';

const Packages: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#fafafa]" dir="ltr">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
                <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                    <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
                        <img src="/assets/rework logo Black.webp" alt="REWORK" className="h-8 w-auto" />
                    </a>

                    <div className="flex items-center gap-6" dir="rtl">
                        <a
                            href="https://wa.me/972556775456"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors"
                        >
                            <MessageCircle size={18} className="text-gray-400" />
                            <span>055-6775456</span>
                        </a>

                        <a
                            href="/"
                            className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-2xl text-sm font-bold hover:bg-gray-800 transition-all"
                        >
                            <ArrowLeft size={16} />
                            <span>חזרה לאתר</span>
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <PricingSection />
            </main>

            <footer className="py-12 border-t border-gray-100 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-400 text-sm font-medium font-heebo">
                        © 2024 REWORK. כל הזכויות שמורות.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Packages;
