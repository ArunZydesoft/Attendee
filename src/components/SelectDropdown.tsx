import React from "react";

interface SelectDropdownProps {
  id: string;
  label: string;
  options: { key: string; value: string }[]; // Array of objects with key-value pairs
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  id,
  label,
  options,
  value,
  onChange,
}) => (
  <div className="mb-5 mt-5">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  </div>
);

export default SelectDropdown;
