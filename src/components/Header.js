import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1> Jiovanni Sanchez</h1>
        <Typed 
        className="typed-text"
        strings={["web design", "front-end", "web-developer"]}
        typeSpeed={40}
        backSpeed={60}
        loop
        />
        <a href="#" className="btn-main-offer">contact me</a>
      </div>
    </div>
  );
};

export default Header;
