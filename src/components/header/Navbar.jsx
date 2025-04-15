import React from "react";
import "../style-components/header/Navbar.css";
import logo from "../../assets/logo.svg";
import MenuButton from "../buttons/MenuButton.jsx";
function Navbar() {
  return (
    <nav className="Navbar">
      <div className="LogoNav">
        <img src={logo} alt="" className="logo" />
      </div>
      <ul className="NavList">
        <li className="NavItem">Home</li>
        <li className="NavItem">Packages</li>
        <li className="NavItem">About</li>
        <li className="NavItem">Contact Us</li>
      </ul>
      <div className="MenuButton">
        <MenuButton />
      </div>
    </nav>
  );
}

export default Navbar;
