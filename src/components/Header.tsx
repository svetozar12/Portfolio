import React from "react";
import style from "../styles/Header.module.css";
import Image from "next/image";
import { AiFillMessage } from "react-icons/ai";
import useVisibility from "../utils/useIsVisible";
import { Icons } from "./Footer";
import wave from "../../public/curveNegative.svg";
const Header = () => {
  const [isVisible, elementRef] = useVisibility<HTMLParagraphElement>(100);

  const buttonMessage = !isVisible ? (
    <div className="bg-red-500 w-16 h-16 rounded-full flex justify-center items-center">
      <AiFillMessage className="w-8 h-8 text-white" />
    </div>
  ) : (
    "LET'S TALK"
  );
  return (
    <div
      className="flex justify-center items-center flex-col relative text-center font-sans"
      style={{
        background: "linear-gradient(to top right,#450b7c,#563cc9,#49e9fb)",
        height: "600px",
      }}
    >
      <h1 className="text-white font-bold text-7xl tracking-tight">
        I&apos;m Svetozar Gospodinov
      </h1>
      <p ref={elementRef} className="text-white font-normal py-8 text-3xl">
        Mid level Web developer from Varna
      </p>
      <a href="#contacts">
        <button
          className={`${
            isVisible
              ? `${style.pre_transformed_button} px-1.5 py-4 w-60 bg-white text-me_purple rounded-full leading-5 tracking-widest text-xm font-bold hover:opacity-75`
              : style.post_transformed_button
          }`}
          type="button"
        >
          {buttonMessage}
        </button>
      </a>
      <Icons />
      <div
        style={{ width: "100%", height: wave.height }}
        className="absolute bottom-0 flex items-center justify-center"
      >
        <Image src={wave.src} layout="fill" alt="wave" />
      </div>
    </div>
  );
};

export default Header;
