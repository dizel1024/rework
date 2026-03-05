import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface Quantities {
    translations: number;
    videos: number;
    widgets: number;
    agent: boolean;
}

interface OrderSummaryProps {
    selectedPackage: string | null;
    packagePrice: number;
    quantities: Quantities;
    total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
    selectedPackage,
    packagePrice,
    quantities,
    total
}) => {
    if (!selectedPackage && total === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 overflow-hidden bg-gray-900 rounded-[40px] shadow-2xl"
        >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 text-white relative overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -ml-32 -mb-32" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12" dir="rtl">
                    <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-6 text-purple-400">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                <ShoppingBag size={24} />
                            </div>
                            <h3 className="text-3xl font-black font-heebo tracking-tight">סיכום הבנייה שלכם</h3>
                        </div>

                        <div className="space-y-4">
                            {selectedPackage && (
                                <div className="flex justify-between items-center text-lg border-b border-white/5 pb-4">
                                    <span className="text-gray-400 font-medium">מסלול נבחר: <span className="text-white font-bold">{selectedPackage.toUpperCase()}</span></span>
                                    <span className="font-bold">₪{packagePrice.toLocaleString()}</span>
                                </div>
                            )}

                            <div className="space-y-3">
                                {quantities.translations > 0 && (
                                    <div className="flex justify-between text-sm text-gray-400 font-heebo">
                                        <span>תרגום ({quantities.translations} שפות)</span>
                                        <span>+ ₪{(quantities.translations * 2000).toLocaleString()}</span>
                                    </div>
                                )}
                                {quantities.videos > 0 && (
                                    <div className="flex justify-between text-sm text-gray-400 font-heebo">
                                        <span>סרטוני תדמית ({quantities.videos} יח')</span>
                                        <span>+ ₪{(quantities.videos * 2500).toLocaleString()}</span>
                                    </div>
                                )}
                                {quantities.widgets > 0 && (
                                    <div className="flex justify-between text-sm text-gray-400 font-heebo">
                                        <span>ווידג'טים חכמים ({quantities.widgets} יח')</span>
                                        <span>+ ₪{(quantities.widgets * 1500).toLocaleString()}</span>
                                    </div>
                                )}
                                {quantities.agent && (
                                    <div className="flex justify-between text-sm text-gray-400 font-heebo">
                                        <span>סוכן AI חכם (מנוי חודשי)</span>
                                        <span>+ ₪1,000</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6 md:min-w-[300px]">
                        <div className="text-center md:text-right">
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">סה"כ השקעה</p>
                            <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                ₪{total.toLocaleString()}
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const element = document.getElementById('contact-form-section');
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-white/5 hover:bg-white/90 transition-all"
                        >
                            <span>בואו נצא לדרך</span>
                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default OrderSummary;
