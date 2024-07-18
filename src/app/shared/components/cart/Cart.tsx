import React from 'react';
import { IconType } from 'react-icons';
import './Cart.scss';

interface CartProps {
  title: string;
  value: number;
  icon: IconType; // Icon prop for react-icons
  description: string; // Add description prop
}

const Cart: React.FC<CartProps> = ({
  title,
  value,
  icon: Icon,
  description,
}) => {
  const getValueColor = (title: string): string => {
    switch (title.toLowerCase()) {
      case 'households':
        return '#3498db'; // Blue color for Total Households value
      case 'inhabitants':
        return '#2ecc71'; // Green color for Total Inhabitants value
      case 'voters':
        return '#bb0a86'; // Red color for Total Voters value
      case 'non-voters':
        return '#f81010'; // Orange color for Total Non-Voters value
      default:
        return '#000'; // Default color if title does not match
    }
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-title">
          <h4>{title}</h4>
        </div>
        <div className="cart-icon">
          <Icon size={40} /> {/* Render the icon */}
        </div>
      </div>
      <p className="value" style={{ color: getValueColor(title) }}>
        {value}
      </p>
      <p className="description">{description}</p>
    </div>
  );
};

export default Cart;
