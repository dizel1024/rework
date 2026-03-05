import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const phoneNumber = '972548775466';

    const handleSendMessage = () => {
        if (message.trim()) {
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            setMessage('');
            setIsOpen(false);
        }
    };

    return (
        <div className="fixed left-6 bottom-6 z-[99999]" dir="rtl">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9, originX: 0, originY: 1 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 w-[340px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-100"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-5 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center relative">
                                    <MessageCircle size={28} />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg leading-tight">REWORK Support</h4>
                                    <p className="text-sm opacity-90">מחוברים עכשיו</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-black/10 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="p-5 bg-[#e5ddd5] min-h-[140px] relative">
                            <div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-neutral-800 max-w-[85%] relative before:content-[''] before:absolute before:top-0 before:-right-2 before:w-0 before:h-0 before:border-t-[10px] before:border-t-white before:border-r-[10px] before:border-r-transparent">
                                היי! איך נוכל לעזור לכם היום? 👋
                            </div>
                        </div>

                        {/* Input Wrapper */}
                        <div className="p-4 bg-white flex items-center gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="הקחידו הודעה..."
                                className="flex-grow bg-neutral-100 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-[#25D366] transition-all"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!message.trim()}
                                className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all shadow-md"
                            >
                                <Send size={18} className="translate-x-0.5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white border border-neutral-200 px-5 py-3 rounded-full shadow-xl shadow-black/5 group"
            >
                <div className="text-right">
                    <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider leading-none mb-1">צריכים עזרה?</p>
                    <p className="text-sm font-bold text-neutral-900 leading-none">דברו איתנו ב-WhatsApp</p>
                </div>
                <div className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#20ba5a] transition-colors">
                    <MessageCircle size={22} fill="currentColor" className="text-white" />
                </div>
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
