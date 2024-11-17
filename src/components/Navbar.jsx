import React from "react";

const Navbar = () => {
  return (
    <div id="Navbar">
      <img src="images/solid.svg" id="siliLogo" />
      <p id="Features">Features</p>
      <div id="Darkmode">
        <p id="Darkmode-text">Dark mode</p>
        <div id="Darkmode-switch">
          <div id="Darkmode-switch2"></div>
        </div>
      </div>
      <div id="Login">
        <img id="Login_img" src="images/Subtract.svg" />
        <p id="Login_text">Sing in / up</p>
      </div>
    </div>
  );
};

export default Navbar;
