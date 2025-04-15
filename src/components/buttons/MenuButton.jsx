import React, { useState } from "react";
import "boxicons";
import "../style-components/buttons/MenuButton.css";

function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-container">
      <button className="menu-button" onClick={toggleMenu}>
        <box-icon name={isMenuOpen ? "x" : "menu"}></box-icon>
      </button>
      {isMenuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li className="ItemBotton">Home</li>
            <li className="ItemBotton">Packages</li>
            <li className="ItemBotton">About</li>
            <li className="ItemBotton">Contact Us</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuButton;
