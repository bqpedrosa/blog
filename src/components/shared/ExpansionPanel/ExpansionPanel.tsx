import React, { useState } from "react";

import "./ExpansionPanel.scss";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export const ExpansionPanel: React.FC<{
  title?: string;
  slot: React.ReactNode;
}> = ({ title = "Title", slot }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTitleClick = (): void => {
    setIsOpen(!isOpen);
  };

  const getIcon = (): React.ReactNode => {
    return <>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</>;
  };

  return (
    <div className="shared-expansion">
      <div className="shared-expansion__title" onClick={handleTitleClick}>
        <span>{title}</span>
        <span>{getIcon()}</span>
      </div>
      {isOpen && <div className="shared-expansion__child-slot">{slot}</div>}
    </div>
  );
};
