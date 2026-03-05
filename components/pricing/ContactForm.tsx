import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
    description: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ description }) => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Combine form data with selected package/add-ons info
        const finalData = {
            ...data,
            message: `[PROJECT CONFIGURATION]\n${description}\n\n[USER MESSAGE]\n${data.message}`
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(finalData),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-white rounded-[40px] p-20 border border-gray-100 shadow-sm text-center" dir="rtl">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                </div>
                <h3 className="text-4xl font-black font-heebo text-gray-900 mb-4">ההזמנה נשלחה בהצלחה!</h3>
                <p className="text-xl text-gray-400 font-medium">נחזור אליך בהקדם כדי להתחיל לבנות את החלום שלך.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-sm" dir="rtl" id="contact-form-section">
            <div className="text-center mb-12">
                <h3 className="text-4xl font-black font-heebo text-gray-900 mb-4">בואו נבנה את החלום שלכם</h3>
                <p className="text-xl text-gray-400 font-medium">השאירו פרטים ונחזור אליכם בהקדם</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 text-right">
                        <label className="text-sm font-bold text-gray-900 mr-2">שם מלא</label>
                        <input
                            name="user_name"
                            required
                            className="w-full bg-gray-50 border-none rounded-2xl p-5 outline-none focus:ring-2 focus:ring-purple-200 transition-all font-heebo text-lg"
                            placeholder="הכניסו שם מלא"
                        />
                    </div>
                    <div className="space-y-2 text-right">
                        <label className="text-sm font-bold text-gray-900 mr-2">אימייל</label>
                        <input
                            name="user_email"
                            type="email"
                            required
                            className="w-full bg-gray-50 border-none rounded-2xl p-5 outline-none focus:ring-2 focus:ring-purple-200 transition-all font-heebo text-lg"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div className="space-y-2 text-right md:col-span-2">
                        <label className="text-sm font-bold text-gray-900 mr-2">טלפון</label>
                        <input
                            name="user_phone"
                            type="tel"
                            required
                            className="w-full bg-gray-50 border-none rounded-2xl p-5 outline-none focus:ring-2 focus:ring-purple-200 transition-all font-heebo text-lg"
                            placeholder="050-0000000"
                        />
                    </div>
                </div>

                <div className="space-y-2 text-right">
                    <label className="text-sm font-bold text-gray-900 mr-2">הערות / בקשות מיוחדות</label>
                    <textarea
                        name="message"
                        rows={4}
                        className="w-full bg-gray-50 border-none rounded-2xl p-5 outline-none focus:ring-2 focus:ring-purple-200 transition-all resize-none font-heebo text-lg"
                        placeholder="ספרו לנו קצת על הפרויקט שלכם..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-xl py-6 rounded-2xl shadow-xl shadow-blue-500/20 hover:opacity-90 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                >
                    {status === 'loading' ? (
                        <span>שולח...</span>
                    ) : (
                        <>
                            <span>בואו נבנה לך אתר פורץ דרך</span>
                            <Send size={24} />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
