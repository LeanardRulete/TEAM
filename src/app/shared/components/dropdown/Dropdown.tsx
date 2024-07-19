import React from 'react';
import './Dropdown.scss';

interface DropdownProps<T> {
  name: string;
  values: { [key: string]: T };
  selectedValue: T | null;
  onChange: (value: T | null) => void;
}

const Dropdown = <T extends string | number>({
  name,
  values,
  selectedValue,
  onChange,
}: DropdownProps<T>) => {
  return (
    <div className="dropdown-container">
      <select
        name={name}
        className="dropdown-select"
        value={selectedValue ?? ''}
        onChange={(e) =>
          onChange(e.target.value ? (e.target.value as T) : null)
        }
      >
        <option value="">-- Select an option --</option>
        {Object.values(values).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
