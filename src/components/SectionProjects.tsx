import React from "react";
import { Section_Header } from "./Section_Header";
import Footer from "./Footer";
import data from "../data/projects.json";
import style from "../styles/SectionProject.module.css";

const SectionProjects = () => {
  return (
    <div>
      <Section_Header text_content="My Projects" text_color="black" />
      {data.map(
        (
          item: {
            project_name: string;
            github_url: string;
            project_url: string;
            project_image: string;
            project_description: string;
            button_background: string;
          },
          index,
        ) => {
          return (
            <div
              style={{
                boxShadow: "0 70px 140px 0 rgba(130,136,171,.2)",
              }}
              className={`mx-auto bg-white text-white my-4 rounded-xl ${style.container}`}
              key={index}
            >
              <img
                className={style.image}
                src={item.project_image}
                width="288px"
                height="288px"
                alt="github project"
              />
              <div className="w-full xl:mb-24">
                <div className={`mx-auto w-3/4 ${style.description}`}>
                  <h1 className="text-3xl text-black">{item.project_name}</h1>
                  <p className="mt-6 text-me_gray_secondary text-xl">
                    {item.project_description}
                  </p>
                </div>
                <div className="lg:w-3/4 w-full xl:flex xl:items-center justify-center lg:flex-row flex-col mx-auto text-center pb-10 absolute bottom-0 left-0 right-0">
                  <button
                    style={{ background: item.button_background }}
                    className="mx-8 w-1/3 my-4 lg:my-0 h-12 rounded-full hover:opacity-75 duration-200"
                  >
                    <a target="new_blank" href={item.github_url}>
                      Source code
                    </a>
                  </button>
                  <button
                    style={{ background: item.button_background }}
                    className="mx-8 w-1/3 h-12 rounded-full hover:opacity-75 duration-200"
                  >
                    <a target="new_blank" href={item.project_url}>
                      Live demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        },
      )}
      <Footer />
    </div>
  );
};

export default SectionProjects;
