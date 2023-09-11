import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/en-in/">
        <img
          src="https://files.techmahindra.com/static/img/techm-logo.png"
          alt=""
        />
      </a>
      <div className="container">
      <h1>EMPLOYEE EXPENSES</h1>
      </div>
    
    </header>
  );
};

export default Header;
