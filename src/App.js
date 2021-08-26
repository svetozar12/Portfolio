import React, { useState, useEffect } from "react";

import "./App.css";
//importing icons
import { AiOutlineCaretUp } from "react-icons/ai";
//importing data
import data from "./data/data";

// importing js libaries
// import ParticleBG from "./components/ParticleBG";

//importing components
import Home from "./components/Header/Home";
import About from "./components/Header/About";
import Services from "./components/Main/Services";
import Projects from "./components/Main/Projects";
import Contact from "./components/Main/Contact";
import Footer from "./components/Footer/Footer";
// curves and waves components
import Curves from "./components/curves/Curves";
import Layer2 from "./components/curves/Layer2";
import Layer1 from "./components/curves/Layer1";

function App() {
  const [services, setServices] = useState(data);

  return (
    <>
      {/* <ParticleBG /> */}
      <Home />
      <Layer1 />
      <About />
      {/* services component start */}
      <Layer2 />
      <div className="flex-services">
        <h1 className="myServices">My services</h1>
        <div className="big-res">
          {services.map((service) => {
            return <Services key={service.id} {...service} Curves={Curves} />;
          })}
        </div>
        <div className="underline-black"></div>
      </div>
      <Layer1 />
      <div className="skills">
        <h1>My skills in web development</h1>
        <p>
          I already have a lot experience with the internet technologies HTML5,
          CSS3, JavaScript,Git, React and some experience with NodeJs. I know
          how to solve a problems and when there are some that. I can solve it.
          I am happy to learn how to overcome them The projects I'm working on
          constantly are in my github account, as well as learned the basic
          commands for "git". I have basic concepts in the field of networks and
          how the connection between the client and the server works. I speak a
          good working English.
        </p>

        <a href="#about">
          <button className="skills-btn">Read more</button>
        </a>
      </div>
      {/* services component end */}
      <Layer2 />
      <Projects />
      <Curves curve="200" />
      {/* <Curves /> */}
      <Contact />
      <Footer />
      <div className="toTop">
        <AiOutlineCaretUp />
      </div>
    </>
  );
}

export default App;
