import React from "react";
import data from "../data.json";
const SectionExperience = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="py-5">My stack</h1>
      <div className="w-full relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
              <div key={index} className="flex justify-center items-center">
                number
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default SectionExperience;
