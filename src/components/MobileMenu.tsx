import React from "react";
import { useSelector } from "react-redux";
import { IInitialSet } from "../redux/reducers/setReducer/state";
import style from "../styles/MobileMenu.module.css";
const MobileMenu = () => {
  const state = useSelector(
    (state: { setReducer: IInitialSet }) => state.setReducer,
  );
  return (
    <ul
      style={{ zIndex: state.toggleNav ? "3" : "-1" }}
      className={`flex duration-300 fixed justify-center flex-col items-center w-full h-screen ${
        style.menu
      } ${
        state.toggleNav ? "opacity-1 overflow-hidden" : "opacity-0 z-0"
      } top-0 bg-white`}
    >
      <li className="pb-8 w-full">
        <a
          className="text-me_gray w-full block text-center opacity-75 duration-200 hover:opacity-100 text-sm font-medium"
          href="#"
        >
          HOME
        </a>
      </li>
      <li className="pb-8 w-full">
        <a
          className="text-me_gray w-full block text-center opacity-75 duration-200 hover:opacity-100 text-sm font-medium"
          href="#"
        >
          CONTACT
        </a>
      </li>
    </ul>
  );
};

export default MobileMenu;
