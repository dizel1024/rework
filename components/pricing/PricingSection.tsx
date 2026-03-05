import React, { useState, useMemo } from 'react';
import PricingCard from './PricingCard';
import GlobalAddOns from './GlobalAddOns';
import OrderSummary from './OrderSummary';
import ContactForm from './ContactForm';

interface Quantities {
    translations: number;
    videos: number;
    widgets: number;
    agent: boolean;
}

const packages = [
    {
        id: 'studio',
        title: 'Studio',
        badge: 'Premium One-Stop Website',
        price: 4900,
        color: 'linear-gradient(to bottom, #3b82f6, #2563eb)',
        features: [
            'קונספט עיצובי מותאם אישית – לוגו, צבעים, פונטים',
            'בניית דף נחיתה / אתר תדמית',
            'RTL מלא ומובנה – מתאים לעברית בצורה מושלמת',
            'אופטימיזציה למהירות שיא – טעינה בפחות משנייה',
            'מותאם לכל המסכים (Responsive) – מובייל / טאבלט / דסקטופ',
            'חיבור דומיין מקצועי (ללא עלות נוספת)',
            'טופס לידים מתוחכם המחובר ישירות לאימייל או ל-WhatsApp',
            'גלריית עבודות / תיק עבודות המציג שירותים בצורה נקייה וסמכותית',
            'UX נקי ומתקדם, בלי גימיקים, קידום יחס המרה גבוה',
            'אופטימיזציה למנועי חיפוש (SEO) ברמה הבסיסית',
            'חיבור קוד מעקב של Google Analytics ו-Vercel Insights',
            'מפה דינמית (Google Maps) למיקום בית העסק',
            'SSL חזק ומאובטח – אתר שקיבל סימן מנעול ירוק',
            'סנכרון מלא עם רזולוציית 4K ומסכי Retina',
            'חיבור כפתורי שיתוף לרשתות חברתיות',
            'בלוק בלוג בסיסי לכתיבת מאמרים',
            'מערכת ניהול תוכן נוחה לשינויי טקסטים מהירים',
            'אבטחה מקסימלית (DDoS protection)',
            'שירות תחזוקה לשנה – עדכון תוספים ושדרוגי אבטחה',
            'תמיכה בוואטסאפ לכל שאלה ודרישה',
            'רישיון לכל החיים (פיתוח מבוסס קוד פתוח ללא תלות בפלטפורמה)'
        ]
    },
    {
        id: 'pro',
        title: 'Pro',
        badge: 'Smart Interactive Pro',
        price: 9900,
        color: 'linear-gradient(to bottom, #fbbf24, #f59e0b)',
        features: [
            'כל הפיצ\'רים של Studio',
            'פיתוח Custom Widget חכם אישי (מחשבון, השוואה, הערכת מחיר)',
            'Multi-Step Forms מותאמים אישית לאיסוף לידים מפורטים',
            'Smart Routing לשליחת הפניות למחלקות שונות לפי צורך',
            'Adaptive Hero Section לפי מקור הגעה (ממומן/אורגני)',
            'Advanced Booking / יומן קביעת תור ישירות מהאתר',
            'Bounce-Proof System למניעת עזיבות מהירות של גולשים',
            'Render Pages Structure Pro לשיפור SEO חזק יותר',
            'Performance Core Feel – מהירות גלישה חלקה להפליא',
            'SEO Layer מתקדם (Meta, JSON-LD, Sitemap)',
            'Direct Follow-Up Hooks לפי שורת הקוד (למכירות חכמות)'
        ]
    },
    {
        id: 'elite',
        title: 'Elite',
        badge: 'Digital System 360',
        price: 14900,
        color: 'linear-gradient(to bottom, #ef4444, #dc2626)',
        features: [
            'כל הפיצ\'רים של Pro',
            'בניית Backend חזק ב-Netlify/Vercel לניהול מורכב',
            'Form Content Workflow – טיפול אוטומטי בלידים',
            'Custom API Integration לחיבור ישיר של CRM (Monday/Pipedrive)',
            'Smart Retention Layer לשמירה על לקוחות חוזרים',
            'Auto-Representation מערכת הפצת תוכן אוטומטית',
            'Automation Pack לשליחת מיילים חוזרים ואסמסים אחרי ליד',
            'Multi-Model Base – בניית כמה דפי נחיתה תחת דומיין אחד',
            'Advanced Testing V2 לבדיקת אלפי גירסאות של האתר',
            'Learning Loop לשיפור האתר באופן אוטומטי לפי התנהגות גולשים',
            'Enterprise Backbone Pack – יציבות, מהירות ושירות ללא הפסקה'
        ]
    }
];

const PricingSection: React.FC = () => {
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
    const [quantities, setQuantities] = useState<Quantities>({
        translations: 0,
        videos: 0,
        widgets: 0,
        agent: false
    });

    const handlePackageSelect = (id: string) => {
        setSelectedPackage(prev => prev === id ? null : id);
    };

    const handleQuantityChange = (id: keyof Quantities, value: number | boolean) => {
        setQuantities(prev => ({ ...prev, [id]: value }));
    };

    const selectedPackageData = useMemo(() =>
        packages.find(p => p.id === selectedPackage), [selectedPackage]
    );

    const total = useMemo(() => {
        let sum = selectedPackageData?.price || 0;
        sum += quantities.translations * 2000;
        sum += quantities.videos * 2500;
        sum += quantities.widgets * 1500;
        if (quantities.agent) sum += 1000;
        return sum;
    }, [selectedPackageData, quantities]);

    const configurationDescription = useMemo(() => {
        let desc = `Package: ${selectedPackage?.toUpperCase() || 'None'}\n`;
        desc += `Add-ons:\n`;
        desc += `- Translations: ${quantities.translations}\n`;
        desc += `- Videos: ${quantities.videos}\n`;
        desc += `- Widgets: ${quantities.widgets}\n`;
        desc += `- AI Agent: ${quantities.agent ? 'Yes' : 'No'}\n`;
        desc += `Total Price Estimate: ₪${total.toLocaleString()}`;
        return desc;
    }, [selectedPackage, quantities, total]);

    return (
        <section className="py-20 bg-[#fafafa]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1 bg-white border border-gray-100 rounded-full shadow-sm text-xs font-bold text-gray-500 uppercase tracking-widest">
                        Build With Us
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 font-heebo tracking-tight">
                        Let's Bring Your Vision to Life
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <PricingCard
                            key={pkg.id}
                            {...pkg}
                            isSelected={selectedPackage === pkg.id}
                            onSelect={() => handlePackageSelect(pkg.id)}
                        />
                    ))}
                </div>

                <GlobalAddOns
                    quantities={quantities}
                    onChange={handleQuantityChange}
                />

                <OrderSummary
                    selectedPackage={selectedPackage}
                    packagePrice={selectedPackageData?.price || 0}
                    quantities={quantities}
                    total={total}
                />

                <div className="mt-20">
                    <ContactForm description={configurationDescription} />
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
