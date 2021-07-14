import React from "react";
import { VscGithubInverted } from "react-icons/vsc";

function SubProjects({ id, image, link, name, info, position }) {
  return (
    <>
      <article key={id} className={`${position} slider`} id="projects">
        <div className="project-box">
          <a className="git" href={link} target="_blank">
            <VscGithubInverted />
          </a>
          <p className="project-info">{info}</p>
        </div>
      </article>
    </>
  );
}

export default SubProjects;
