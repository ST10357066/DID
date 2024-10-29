// Frontend\DigiVerifyMe\src\components\common\Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // Add this line
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 ${className}`} // Tailwind styles
      onClick={onClick} // Add onClick here
    >
      {children}
    </div>
  );
};

const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`border-b border-gray-200 pb-2 mb-2 ${className}`}>{children}</div>
);

const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);
const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-gray-600 ${className}`}>{children}</p>
);

const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`text-gray-700 ${className}`}>{children}</div>
);

const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`border-t border-gray-200 pt-2 mt-2 ${className}`}>{children}</div>
);

export { Card, CardHeader, CardTitle,CardDescription, CardContent, CardFooter };
