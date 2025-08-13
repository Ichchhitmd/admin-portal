import React from 'react';

interface ToggleProps {
  isActive: boolean;
  onChange?: (isActive: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ isActive, onChange }) => {
  return (
    <div 
      onClick={() => onChange?.(!isActive)}
      className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out cursor-pointer ${
        isActive ? 'bg-teal-500' : 'bg-gray-200'
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${
          isActive ? 'translate-x-6' : 'translate-x-1'
        } mt-0.5`}
      />
    </div>
  );
};

export default Toggle;