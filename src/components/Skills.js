import React from "react";

function Skills({ id, name, progress }) {
  return (
    <>
      <ul id="skills">
        <li className="absolute">{name}</li>
        <div className="progress-bar-flex">
          <li>{progress}</li>
        </div>
        <div className="progress">
          <span
            style={{ width: `${progress}` }}
            className="progress-bar"
          ></span>
        </div>
      </ul>
    </>
  );
}

export default Skills;
