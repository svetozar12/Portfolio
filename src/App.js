import React, { useState, useEffect } from "react";

import "./App.css";
//importing icons
import { AiOutlineCaretUp } from "react-icons/ai";
//importing data
import data from "./components/data/data";
import dataProgress from "./components/data/progressBars";
import projects from "./components/data/projectsData";
//importing components
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [services, setServices] = useState(data);
  const [skill, setDataProgress] = useState(dataProgress);
  const [project, setProject] = useState(projects);
  return (
    <>
      <Home />
      <About />
      <div className="flex-services">
        <h1 className="myServices">My services</h1>
        <div className="big-res">
          {services.map((service) => {
            return <Services key={service.id} {...service} />;
          })}
        </div>
        <div className="underline-black"></div>
      </div>
      <div className="skills">
        <h1>My skills in web development</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          voluptatem iusto voluptatum corporis velit cum, accusamus quia
          laboriosam deserunt dolorum blanditiis provident error, eaque ob
        </p>
        <button className="skills-btn">
          <a href="">Read more</a>
        </button>
      </div>
      {skill.map((skills) => {
        return <Skills key={skills.id} {...skills} />;
      })}
      <Projects />
      <Contact />
      <Footer />
      <div className="toTop">
        <AiOutlineCaretUp />
      </div>
    </>
  );
} //410x576

export default App;
