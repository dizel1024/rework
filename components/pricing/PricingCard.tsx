import React from 'react';
import { motion } from 'framer-motion';
import FeatureItem from './FeatureItem';
import { cn } from '../../lib/utils';

interface PricingCardProps {
    id: string;
    title: string;
    badge: string;
    price: number;
    features: string[];
    isSelected: boolean;
    onSelect: () => void;
    color: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
    id,
    title,
    badge,
    price,
    features,
    isSelected,
    onSelect,
    color
}) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            onClick={onSelect}
            className={cn(
                "relative flex flex-col p-8 bg-white rounded-[40px] border-2 cursor-pointer transition-all duration-500 overflow-hidden",
                isSelected
                    ? "shadow-[0_20px_50px_rgba(0,0,0,0.1)] scale-[1.02]"
                    : "border-gray-100 hover:border-gray-200 shadow-sm"
            )}
            dir="rtl"
            style={{
                borderImage: isSelected ? `linear-gradient(to bottom, ${color}, transparent) 1` : undefined,
                borderColor: isSelected ? 'transparent' : undefined
            }}
        >
            {/* Selection Glow */}
            {isSelected && (
                <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ background: `linear-gradient(to right, ${color})` }}
                />
            )}

            {/* Header Info */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                    <h3 className="text-3xl font-bold font-heebo text-gray-900">{title}</h3>
                    <span className="text-xs font-semibold text-gray-400 mt-1 uppercase tracking-wider">{id.charAt(0)}</span>
                </div>
                {id === 'pro' && (
                    <div className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                        Favorite ★
                    </div>
                )}
            </div>

            <div className="mb-6">
                <div className={cn("inline-block px-4 py-1.5 rounded-full text-[13px] font-bold text-white mb-4", color.split(' ')[0])}
                    style={{ background: color.includes('linear') ? color : undefined }}
                >
                    {badge}
                </div>
                <p className="text-[14px] leading-relaxed text-gray-500 font-heebo h-12">
                    {id === 'studio' && "האתר המושלם לעסק – בלי הסתבכויות, בלי כאב ראש, פשוט עובד."}
                    {id === 'pro' && "אתר מתוחכם + מערכת המרה המאפשרת לך להפוך מבקרים ללקוחות משלמים בצורה חכמה."}
                    {id === 'elite' && "אתר + מערכת מנהלים + אוטומציה + חיבורי API שמייצרים לך עבודת שיווק ומכירה ללא הפסקה."}
                </p>
            </div>

            <div className="flex items-baseline gap-1 mb-10">
                <span className="text-4xl font-black text-gray-900">₪{price.toLocaleString()}</span>
                <span className="text-gray-400 text-sm font-medium">/ פרויקט</span>
            </div>

            <div className="space-y-1 mb-8">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                    מה תקבלו ({features.length} פיצ'רים)
                </div>
                <div className="max-h-[350px] overflow-y-auto pr-2 custom-scrollbar space-y-1">
                    {features.map((feature, idx) => (
                        <FeatureItem key={idx} label={feature} />
                    ))}
                </div>
            </div>

            {/* Select Circle */}
            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className={`text-sm font-bold ${isSelected ? 'text-gray-900' : 'text-gray-400'}`}>
                    {isSelected ? 'נבחר' : 'בחרו מסלול'}
                </span>
                <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    isSelected ? "bg-black border-black" : "border-gray-200"
                )}>
                    {isSelected && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                </div>
            </div>
        </motion.div>
    );
};

export default PricingCard;
