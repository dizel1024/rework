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
            {/* Main Content */}
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
