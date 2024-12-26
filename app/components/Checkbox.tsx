import React from 'react';

type CheckboxProps = {
  isChecked: boolean;
  onChange: () => void;
  id: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({ isChecked, onChange, id }) => (
  <div className="absolute top-2 right-2">
    <input type="checkbox" checked={isChecked} onChange={onChange} id={id} className="hidden" />
    <label htmlFor={id} className={`w-6 h-6 border-2 rounded-lg flex items-center justify-center cursor-pointer ${isChecked ? 'border-[#58cc02]' : 'border-[#313f47]'} bg-[#131f24]`}>
      {isChecked && <div className="text-xl text-[#58cc02]">🗸</div>}
    </label>
  </div>
);
