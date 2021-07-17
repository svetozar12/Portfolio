import React, { useEffect } from "react";

function About() {
  return (
    <>
      <div className="about" id="about">
        <h1>About me</h1>
        <div className="underline"></div>
        <h3>I'm Svetozar Gospodiniov</h3>
        <p>
          I'm an web developer from Bulgaria/Varna, which is in love with
          programming in general. I can help you with your personal
          projects,hire me for specific job or long term, both are fine for me
          and will be ruled by your requirements.
        </p>
        <a
          target="_blank"
          href="https://fullstack-app-frontend-backend.herokuapp.com"
        >
          <button type="submit" name="submit" className="btn-cv">
            Download CV
          </button>
        </a>
      </div>
    </>
  );
}

export default About;
