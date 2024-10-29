// Frontend\DigiVerifyMe\src\components\Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'destructive'; // Added 'destructive' variant
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'default', size = 'medium', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none';
  
  // Define styles for each variant
  const variantStyles = {
    default: 'bg-blue-600 text-white',
    outline: 'border border-gray-300 text-gray-700',
    destructive: 'bg-red-600 text-white', // Styles for destructive variant
  }[variant];

  const sizeStyles = size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base';

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
