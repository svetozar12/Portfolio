import React, { useState, useEffect } from "react";
import SubProjects from "./sub-components/SubProjects";
import projects from "./data/projectsData";
//importing icons
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Projects() {
  const [index, setIndex] = useState(0);
  const [project, setProject] = useState(projects);
  const lastIndex = project.length - 1;
  if (index < 0) {
    setIndex(lastIndex);
  }
  if (index > lastIndex) {
    setIndex(0);
  }
  return (
    <>
      <div className="projects">
        <h1 id="projects">My projects</h1>
        <div className="slider">
          {project.map((projects, projectsIndex) => {
            const { id, image, link, name, info } = projects;
            let position = "next-slide";
            if (projectsIndex === index) {
              position = " main-slide";
            }
            if (projectsIndex === index - 1) {
              position = "prev-slide";
            }
            if (projectsIndex === index + 1) {
              position = "next-slide";
            }
            return <SubProjects key={id} {...projects} position={position} />;
          })}
        </div>
        <div className="prev-next">
          <button onClick={() => setIndex(index - 1)} className="prev">
            <AiFillCaretLeft />
          </button>
          <button onClick={() => setIndex(index + 1)} className="next">
            <AiFillCaretRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default Projects;
