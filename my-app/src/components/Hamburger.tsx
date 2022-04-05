import React from "react";
import style from "../styles/Hamburger.module.css";

const Hamburger = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  return (
    <div>
      <div
        className={`${toggle && style.change} ${style.hamburger}`}
        onClick={() => setToggle((currToggle) => !currToggle)}
      >
        <div className={`${style.burger_1} ${toggle && style.color_black}`}>
          {" "}
        </div>
        <div className={style.burger_2}> </div>
        <div className={`${style.burger_3} ${toggle && style.color_black}`}>
          {" "}
        </div>
      </div>
      <div className={style.menu}>Menu</div>
    </div>
  );
};

export default Hamburger;
