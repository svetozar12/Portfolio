import React from "react";

const Header = () => {
  return (
    <div
      className="flex justify-center items-center flex-col text-center"
      style={{
        background: "linear-gradient(to top right,#450b7c,#563cc9,#49e9fb)",
        height: "600px",
      }}
    >
      <h1 className="text-white font-bold text-4xl tracking-tight">
        I&apos;m Svetozar Gospodinov
      </h1>
      <p className="text-white font-normal py-8 text-lg">
        Mid level Web developer from Varna
      </p>
      <button
        className="px-1.5 py-3 w-52 bg-white text-me_purple rounded-3xl leading-5 tracking-widest text-xm font-bold"
        type="button"
      >
        LET&apos;S TALK
      </button>
    </div>
  );
};

export default Header;
