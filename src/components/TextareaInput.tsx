import React from 'react';

interface TextareaInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const TextareaInput: React.FC<TextareaInputProps> = ({ id, label, value, onChange, placeholder }) => (
  <div className="mb-5 mt-5">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      rows={5}
      cols={10}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
    />
  </div>
);

export default TextareaInput;
