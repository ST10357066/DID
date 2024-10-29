// Frontend\DigiVerifyMe\src\components\common\Badge.tsx
import React from 'react';

type BadgeVariant = 'default' | 'secondary' | 'success' | 'warning' | 'danger'|'destructive';

interface BadgeProps {
    children: React.ReactNode; 
    variant?: BadgeVariant; // Changed 'color' to 'variant'
    className?: string;  
    onClick?: () => void; 
}

const Badge: React.FC<BadgeProps> = ({children, variant = 'default', className, onClick }) => {
    // Define a mapping of variants to corresponding classes
    const variantClasses: Record<BadgeVariant, string> = {
        default: 'bg-gray-200 text-gray-800',
        secondary: 'bg-blue-200 text-blue-800',
        success: 'bg-green-200 text-green-800',
        warning: 'bg-yellow-200 text-yellow-800',
        danger: 'bg-red-200 text-red-800',
        destructive: 'bg-red-200 text-red-800',
    };

    
    return (
        <span 
            onClick={onClick} 
            className={`badge ${variantClasses[variant]} ${className}`}
        >
            {children} // Use children here
        </span>
    );
};

export default Badge;
