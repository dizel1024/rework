import React from 'react';
import { Plus, Minus, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface AddOn {
    id: keyof Quantities;
    title: string;
    description: string;
    price: number;
    type: 'quantity' | 'toggle';
}

interface Quantities {
    translations: number;
    videos: number;
    widgets: number;
    agent: boolean;
}

interface GlobalAddOnsProps {
    quantities: Quantities;
    onChange: (id: keyof Quantities, value: number | boolean) => void;
}

const addOns: AddOn[] = [
    {
        id: 'translations',
        title: 'תרגום מקצועי (לפי שפה)',
        description: 'הוסיפו שפות נוספות לאתר ופנו לקהל יעד בינלאומי. המחיר כולל תרגום + עיצוב RTL.',
        price: 2000,
        type: 'quantity'
    },
    {
        id: 'videos',
        title: 'סרטון תדמית פרימיום',
        description: 'הפקה ועריכה של סרטון תדמית קצר (15-30 שניות) המותאם לסושיאל מדיה ולאתר.',
        price: 2500,
        type: 'quantity'
    },
    {
        id: 'widgets',
        title: "ווידג'טים חכמים אישיים",
        description: 'מערכות קטנות (מחשבונים, פופ-אפים מורכבים, אינטגרציות CRM) בהזמנה אישית.',
        price: 1500,
        type: 'quantity'
    },
    {
        id: 'agent',
        title: 'סוכן דיגיטלי חכם (חודשי)',
        description: 'סוכן AI חכם שעונה ללקוחות 24/7, סוגר פגישות ומטפל במכירות. המחיר כולל ליווי ותחזוקה.',
        price: 1000,
        type: 'toggle'
    }
];

const GlobalAddOns: React.FC<GlobalAddOnsProps> = ({ quantities, onChange }) => {
    return (
        <div className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm mt-12" dir="rtl">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                    <Plus size={24} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold font-heebo text-gray-900">תוספות פרימיום —</h3>
                    <p className="text-sm text-gray-400 font-medium tracking-tight mt-0.5">זמינות לכל מסלול ליצירת פתרון מלא</p>
                </div>
            </div>

            <div className="space-y-6">
                {addOns.map((item) => (
                    <div
                        key={item.id}
                        className={cn(
                            "group p-6 rounded-3xl border transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6",
                            (item.type === 'toggle' ? quantities[item.id] : quantities[item.id] > 0)
                                ? "bg-purple-50/30 border-purple-200"
                                : "bg-gray-50/50 border-gray-100 hover:border-gray-200"
                        )}
                    >
                        <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-1">
                                <h4 className="font-bold text-gray-900 font-heebo">{item.title}</h4>
                                <span className="text-[12px] font-bold text-purple-600 bg-white px-2 py-0.5 rounded-md border border-purple-100 shadow-sm">
                                    ₪{item.price.toLocaleString()}
                                </span>
                            </div>
                            <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            {item.type === 'quantity' ? (
                                <div className="flex items-center bg-white border border-gray-200 rounded-2xl p-1 shadow-sm">
                                    <button
                                        onClick={() => onChange(item.id, Math.max(0, (quantities[item.id] as number) - 1))}
                                        className="w-10 h-10 rounded-xl hover:bg-gray-50 flex items-center justify-center text-gray-400 transition-colors"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="w-12 text-center font-black text-gray-900 text-lg">
                                        {quantities[item.id]}
                                    </span>
                                    <button
                                        onClick={() => onChange(item.id, (quantities[item.id] as number) + 1)}
                                        className="w-10 h-10 rounded-xl hover:bg-purple-50 hover:text-purple-600 flex items-center justify-center text-gray-400 transition-colors"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => onChange(item.id, !quantities[item.id])}
                                    className={cn(
                                        "flex items-center gap-3 py-3 px-6 rounded-2xl border-2 font-bold transition-all duration-300",
                                        quantities[item.id]
                                            ? "bg-white border-purple-400 text-purple-600 shadow-md"
                                            : "bg-white border-gray-100 text-gray-400"
                                    )}
                                >
                                    <span className="text-sm">הוסף לשירות</span>
                                    <div className={cn(
                                        "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                                        quantities[item.id] ? "bg-purple-600 border-purple-600 text-white" : "border-gray-200 text-transparent"
                                    )}>
                                        <CheckCircle2 size={14} />
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GlobalAddOns;
