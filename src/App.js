import React, { useState, useEffect } from "react";

import "./App.css";
//importing icons
import { AiOutlineCaretUp } from "react-icons/ai";
//importing data
import data from "./components/data/data";

//importing components
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// curves and waves components
import Curves from "./components/curves/Curves";
import FlippedCurves from "./components/curves/flipedCurves";
import LayeredWave from "./components/curves/LayeredWave";
import FlippedLayeredWaves from "./components/curves/FlippedLayeredWaves";

function App() {
  const [services, setServices] = useState(data);

  return (
    <>
      <Home />
      <LayeredWave />
      <About />
      {/* services component start */}
      <FlippedLayeredWaves />
      <div className="flex-services">
        <h1 className="myServices">My services</h1>
        <div className="big-res">
          {services.map((service) => {
            return <Services key={service.id} {...service} Curves={Curves} />;
          })}
        </div>
        <div className="underline-black"></div>
      </div>
      <Curves curve="120" />
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
      <FlippedLayeredWaves />
      <Projects />
      <Curves curve="320" />
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
