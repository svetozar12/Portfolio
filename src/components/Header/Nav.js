import React, { useState, useEffect } from "react";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(true);

  function HamburgerLinks() {
    return (
      <>
        {/*have to fix transition animation of the nav mobile menu*/}
        <div
          className={toggle ? "hamburger change" : "hamburger"}
          onClick={() => setToggle(!toggle)}
        >
          <div className="burger-1"></div>
          <div className="burger-2"></div>
          <div className="burger-3"></div>
        </div>
        {toggle ? (
          <div className="links">
            <li style={{ width: "100%" }}>
              <a href="#" onClick={() => setToggle(!toggle)}>
                Home
              </a>
            </li>

            <li style={{ width: "100%" }}>
              <a href="#about" onClick={() => setToggle(!toggle)}>
                About
              </a>
            </li>

            <li style={{ width: "100%" }}>
              <a href="#services" onClick={() => setToggle(!toggle)}>
                Services
              </a>
            </li>

            <li style={{ width: "100%" }}>
              <a href="#projects" onClick={() => setToggle(!toggle)}>
                Projects
              </a>
            </li>

            <li style={{ width: "100%" }}>
              <a href="#contacts" onClick={() => setToggle(!toggle)}>
                Contacts
              </a>
            </li>
            {/* small ass screen */}
          </div>
        ) : null}
      </>
    );
  }

  function Navbar() {
    return (
      <ol className="navbar">
        <a href="#">Home</a>
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
    // console.log(width); testing purposes
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
      <div className={toggle && "mobile-nav"}>
        {show ? <Navbar /> : <HamburgerLinks />}
      </div>
    </>
  );
}

export default Nav;
