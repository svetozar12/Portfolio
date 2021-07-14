import React, { useState } from "react";

function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={toggle ? "hamburger change" : "hamburger"}
        onClick={() => setToggle(!toggle)}
      >
        <div className="burger-1"></div>
        <div className="burger-2"></div>
        <div className="burger-3"></div>
      </div>
      <div className={toggle ? "mobile-nav" : "none"}>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contacts</a>
        </div>
      </div>
    </>
  );
}

export default Nav;
