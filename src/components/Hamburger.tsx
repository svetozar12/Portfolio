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
        <ul className="flex justify-center items-center">
          <li className="px-1">
            <a href="">Home</a>
          </li>
          <li className="px-1">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
