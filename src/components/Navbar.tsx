import React from "react";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <div
      className={`px-4 w-full flex absolute justify-between items-center mt-5`}
    >
      <a href="#">
        <h1 className="text-white font-bold text-2xl">Svetozar Gospodinov</h1>
      </a>
      <Hamburger />
    </div>
  );
};

export default Navbar;
