import React from "react";
import data from "../skill.json";
import Image from "next/image";
import style from "../styles/SectionExperience.module.css";
const SectionExperience = () => {
  return (
    <div
      className={`flex items-center justify-center flex-col ${style.desktop_width} mx-auto`}
    >
      <h1 className="py-5 w-full text-center text-5xl font-medium flex items-center flex-col">
        My stack
        <div className="border-2 border-red-500 rounded-full w-10 h-0 mt-5"></div>
      </h1>
      <div className="flex flex-wrap justify-center">
        {data.map(
          (
            item: {
              skill_icon: string;
              skill_name: string;
              skill_description?: string;
            },
            index,
          ) => {
            return (
              <div
                className="w-56 h-56 mx-4 flex items-center justify-center flex-col"
                key={index}
              >
                <div
                  className={`flex items-center justify-center flex-col bg-red-300 w-24 h-24 rounded-full`}
                >
                  <img
                    src={item.skill_icon}
                    width="60px"
                    height="60px"
                    alt={item.skill_name}
                  />
                </div>
                <h1>{item.skill_name}</h1>
                <p className={style.description}>{item.skill_description}</p>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default SectionExperience;
