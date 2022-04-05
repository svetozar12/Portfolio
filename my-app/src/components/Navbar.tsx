import React from "react";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <div className={`px-4 w-full flex fixed justify-between items-center mt-5`}>
      <a href="#">some logo</a>
      <Hamburger />
    </div>
  );
};

export default Navbar;
