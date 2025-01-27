import React from 'react';

interface CheckboxProps {
  id: string;
  heading?: string; // Optional, add the '?' to make heading optional
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, heading, label, checked, onChange }) => (
  <div className="mb-2 mt-2 flex items-center">
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    />
    <div className=''>

      {heading && <h1 className="ml-2 text-lg font-semibold text-gray-900">{heading}</h1>} {/* Conditionally render heading */}
      <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-700">
        {label}
      </label>
    </div>
  </div>
);

export default Checkbox;
