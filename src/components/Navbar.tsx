import React from "react";
import Hamburger from "./Hamburger";
import { useSelector } from "react-redux";
import { IInitialSet } from "../redux/reducers/setReducer/state";
const Navbar = () => {
  const state = useSelector(
    (state: { setReducer: IInitialSet }) => state.setReducer,
  );
  return (
    <div
      style={{ zIndex: "4" }}
      className={`px-4 w-full flex absolute justify-between items-center mt-5`}
    >
      <a
        className={`${state.toggleNav && "pointer-events-none select-none"}`}
        href="#"
      >
        <h1 className={`text-white font-bold text-2xl `}>
          Svetozar Gospodinov
        </h1>
      </a>
      <Hamburger />
    </div>
  );
};

export default Navbar;
