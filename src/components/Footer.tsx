import React from "react";
import { Section_Header } from "./Section_Header";
import Image from "next/image";
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
      <button className="px-1.5 py-4 w-60 bg-red-500 text-white rounded-full leading-5 tracking-widest text-xm font-bold hover:opacity-75 duration-500">
        Let&apos;s talk
      </button>
      <div>
        {/* <Image />
        <Image /> */}
      </div>
    </div>
  );
};

export default Footer;
