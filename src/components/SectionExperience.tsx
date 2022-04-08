import React from "react";
import data from "../data/skill.json";
import style from "../styles/SectionExperience.module.css";
import { Section_Header } from "./Section_Header";

const SectionExperience = () => {
  return (
    <div
      className={`flex items-center justify-center flex-col ${style.desktop_width} mx-auto`}
    >
      <Section_Header text_content="My Stack" text_color="" />
      <div className="flex flex-wrap justify-center">
        {data.map(
          (
            item: {
              skill_icon: string;
              skill_name: string;
              skill_description?: string;
              bg_color_gradient: string;
            },
            index,
          ) => {
            return (
              <div
                className="w-58 h-58 mx-4 flex items-center justify-center flex-col bg-white"
                style={{ maxWidth: "14rem", maxHeight: "14rem" }}
                key={index}
              >
                <div
                  style={{
                    background: item.bg_color_gradient,
                    maxWidth: "6rem",
                    maxHeight: "6rem",
                  }}
                  className={`flex items-center justify-center flex-col w-24 h-24 rounded-full`}
                >
                  <img
                    src={item.skill_icon}
                    className="hover:w-20 duration-300"
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
