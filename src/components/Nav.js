import React, { useState, useEffect } from "react";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(true);
  const checkSize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log(width);
    if (width <= 480) {
      // console.log("LITTLE");
    }
    if (width <= 1499) {
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
          {show ? (
            <>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#contacts">Contacts</a>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
