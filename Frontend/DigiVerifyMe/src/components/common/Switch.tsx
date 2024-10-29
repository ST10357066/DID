import React, { useState } from "react";

interface SwitchProps {
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ initialChecked = false, onChange }) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <button
      className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-200 ease-in-out ${
        checked ? "bg-blue-600" : "bg-gray-200"
      }`}
      onClick={handleToggle}
      aria-pressed={checked}
    >
      <span
        className={`translate-x-0.5 inline-block w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
};

export default Switch;
