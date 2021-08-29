import React, { useState, useEffect } from "react";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(true);

  function Hamburger() {
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
        {/* links */}
        <div className="links">
          <a href="#home" onClick={() => setToggle(!toggle)}>
            Home
          </a>
          <a href="#about" onClick={() => setToggle(!toggle)}>
            About
          </a>
          <a href="#services" onClick={() => setToggle(!toggle)}>
            Services
          </a>
          <a href="#projects" onClick={() => setToggle(!toggle)}>
            Projects
          </a>
          <a href="#contacts" onClick={() => setToggle(!toggle)}>
            Contacts
          </a>
          {/* small ass screen */}
        </div>
      </>
    );
  }

  function Navbar() {
    return (
      <ol className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contact</a>
      </ol>
    );
  }

  const checkSize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log(width);
    if (width <= 900) {
      setShow(false);
    } else {
      setShow(true);
    }
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <div className={toggle ? "mobile-nav" : null}>
        {show ? <Navbar /> : <Hamburger />}
      </div>
    </>
  );
}

export default Nav;
