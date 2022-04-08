import React from "react";
import style from "../styles/Hamburger.module.css";
import { useSelector, useDispatch } from "react-redux";
import { IInitialSet } from "../redux/reducers/setReducer/state";

const Hamburger = () => {
  const dispatch = useDispatch();
  const state = useSelector(
    (state: { setReducer: IInitialSet }) => state.setReducer,
  );
  return (
    <div>
      <div
        className={`${state.toggleNav && style.change} ${style.hamburger}`}
        onClick={() => dispatch({ type: "SET_NAV" })}
      >
        <div
          className={`${style.burger_1} ${
            state.toggleNav && style.color_black
          }`}
        >
          {" "}
        </div>
        <div className={style.burger_2}> </div>
        <div
          className={`${style.burger_3} ${
            state.toggleNav && style.color_black
          }`}
        >
          {" "}
        </div>
      </div>
      <div className={style.menu}>
        <ul className="flex justify-center items-center w-8 text-white text-xl font-semibold">
          <li className="px-1 opacity-75 hover:opacity-100 mr-4 duration-500">
            <a href="">HOME</a>
          </li>
          <li className="px-1 opacity-75 hover:opacity-100 mr-4 duration-500">
            <a href="">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
