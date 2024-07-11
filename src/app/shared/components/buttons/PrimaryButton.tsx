import React from "react";
import "./PrimaryButton.scss";

interface PrimaryButtonProps {
  buttonText: string;
  handleButtonClick: () => void;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  handleButtonClick,
  className
}) => {
  return (
    <button className={className} onClick={handleButtonClick}>
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
