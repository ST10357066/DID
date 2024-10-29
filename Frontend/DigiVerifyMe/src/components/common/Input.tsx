// Frontend\DigiVerifyMe\src\components\Input.tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
});

Input.displayName = 'Input';
export default Input;
