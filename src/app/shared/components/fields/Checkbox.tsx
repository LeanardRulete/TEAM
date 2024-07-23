import React from 'react';
import './Checkbox.scss';

interface CheckboxProps {
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, checked, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className="checkbox-wrapper">
      <input
        className="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className="checkbox-label">{name}</span>
    </label>
  );
};

export default Checkbox;
