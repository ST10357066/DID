// Frontend\DigiVerifyMe\src\components\common\Tabs.tsx
import React, { useState, ReactElement, cloneElement, FC, ReactNode } from 'react';

// Define TabsProps interface
interface TabsProps {
  children: ReactNode;
  defaultValue: number;
  onValueChange?: (value: string) => void;
  className?: string;  // Added className prop
}

// Define Tabs component
const Tabs: FC<TabsProps> = ({ children, defaultValue, onValueChange, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (onValueChange) {
      const childArray = React.Children.toArray(children) as ReactElement[];
      const value = childArray[index]?.props.value; // Get value prop
      if (value) {
        onValueChange(value);
      }
    }
  };

  const childArray = React.Children.toArray(children) as ReactElement[];

  return (
    <div className={className}>
      {childArray.map((child, index) =>
        cloneElement(child, {
          // Pass down only the required props
          onClick: () => handleTabClick(index),
          isActive: index === activeTab, // Keep this for styling purposes
        })
      )}
    </div>
  );
};

// TabsList component definition
interface TabsListProps {
  children: ReactNode;
}
const TabsList: FC<TabsListProps> = ({ children }) => {
  return <div className="flex space-x-4">{children}</div>;
};

// Define TabsTriggerProps interface
interface TabsTriggerProps {
  value: string;  // Keep value prop
  onClick: () => void;
  isActive: boolean;  // Keep isActive for managing styles
  children: ReactNode;
}
const TabsTrigger: FC<TabsTriggerProps> = ({ onClick, isActive, children }) => {
  return (
    <button
      onClick={onClick}
      className={`tab-trigger ${isActive ? 'active-tab' : 'inactive-tab'}`} // Apply classes conditionally
    >
      {children}
    </button>
  );
};

// Define TabsContentProps interface
interface TabsContentProps {
  isActive: boolean;
  value: string;
  children: ReactNode;
}
const TabsContent: FC<TabsContentProps> = ({ isActive, children }) => {
  return isActive ? <div>{children}</div> : null; // Render content if active
};

// Exporting Tabs components
export { Tabs, TabsList, TabsTrigger, TabsContent };
