import React from 'react';
import { Check } from 'lucide-react';

interface FeatureItemProps {
    label: string;
    included?: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ label, included = true }) => {
    return (
        <div className="flex items-start gap-2.5 py-1.5 group/item">
            <div className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${included ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                <Check size={10} strokeWidth={3} />
            </div>
            <span className={`text-[13px] leading-snug font-heebo ${included ? 'text-gray-700' : 'text-gray-400'}`}>
                {label}
            </span>
        </div>
    );
};

export default FeatureItem;
