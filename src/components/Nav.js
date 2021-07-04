import React, { useState } from "react";

function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle ? (
        <div className="hamburger" onClick={() => setToggle(!toggle)}>
          <div className="burger-1"></div>
          <div className="burger-2"></div>
          <div className="burger-3"></div>
        </div>
      ) : (
        <>
          <div className="mobile-nav">
            <div className="links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Skills</a>
              <a href="#">Projects</a>
            </div>
          </div>
          <div className="change hamburger " onClick={() => setToggle(!toggle)}>
            <div className="burger-1 "></div>
            <div className="burger-2 "></div>
            <div className="burger-3 "></div>
          </div>
        </>
      )}

      <div className="side-nav-bar">
        {/* <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a> */}
      </div>
    </>
  );
}

export default Nav;
