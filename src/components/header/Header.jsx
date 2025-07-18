import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import DarkModeToggle from './DarkModeToggle';

const Header = ({ isAuth }) => {
  return (
    <header>
      <div className="logo">SHIKSHA</div>

      <div className="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
      
      <div className="header-actions">
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;