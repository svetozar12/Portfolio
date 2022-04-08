import React from "react";
import { Section_Header } from "./Section_Header";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Icons = () => {
  return (
    <div className="flex mt-4" id="contacts">
      <a target="new_blank" href="https://github.com/svetozar12">
        <AiFillGithub className="w-20 h-20 hover:opacity-20 duration-300" />
      </a>
      <a
        target="new_blank"
        href="https://www.linkedin.com/in/svetozar-gospodinov-58657b236/"
      >
        <AiFillLinkedin className="w-20 h-20 hover:opacity-20 duration-300" />
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center relative py-24">
      <div
        style={{ height: "30rem" }}
        className="absolute bottom-0 w-full -z-20 h-96"
      >
        <Image
          src="/layered-waves.svg"
          layout="fill"
          objectFit="cover"
          alt="image"
        />
      </div>
      <Section_Header
        text_content="Interested in working with me ?"
        text_color="white"
      />
      <Icons />
      <div>
        {/* <Image />
        <Image /> */}
      </div>
    </div>
  );
};

export default Footer;
