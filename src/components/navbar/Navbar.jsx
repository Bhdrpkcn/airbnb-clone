import React from "react";
import "./style.css";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { TbBrandAirbnb } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <TbBrandAirbnb className="navbar-logo-icon" />
          <span className="navbar-logo-text">airbnb</span>
        </div>
        <Search />
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
