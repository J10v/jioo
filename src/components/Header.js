import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1> BIG BOSS BITCH</h1>
        <Typed 
        className="typed-text"
        strings={["web design", "web bitch", "fb bitch", "hoe hoe", "hoe"]}
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
