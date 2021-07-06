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
      <div className={toggle ? "mobile-nav" : "transition"}>
        <div className="links">
          {toggle ? (
            <>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Skills</a>
              <a href="#">Projects</a>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Nav;
