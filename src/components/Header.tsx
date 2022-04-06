import React from "react";
import style from "../styles/Header.module.css";
import { AiFillMessage } from "react-icons/ai";

const Header = () => {
  const [bottom, setBottom] = React.useState(false);
  const buttonMessage = !bottom ? (
    <div className="bg-red-500 w-16 h-16 rounded-full flex justify-center items-center duration-500">
      <AiFillMessage className="w-8 h-8 text-white" />
    </div>
  ) : (
    "LET'S TALK"
  );
  return (
    <div
      className="flex justify-center items-center flex-col text-center"
      style={{
        background: "linear-gradient(to top right,#450b7c,#563cc9,#49e9fb)",
        height: "600px",
      }}
    >
      <h1
        onClick={() => setBottom((currBottom) => !currBottom)}
        className="text-white font-bold text-4xl tracking-tight"
      >
        I&apos;m Svetozar Gospodinov
      </h1>
      <p className="text-white font-normal py-8 text-lg">
        Mid level Web developer from Varna
      </p>
      <button
        className={`${
          bottom
            ? `${style.pre_transformed_button} px-1.5 py-4 w-60 bg-white text-me_purple rounded-full leading-5 tracking-widest text-xm font-bold hover:opacity-75`
            : style.post_transformed_button
        } duration-500`}
        type="button"
      >
        {buttonMessage}
      </button>
    </div>
  );
};

export default Header;
