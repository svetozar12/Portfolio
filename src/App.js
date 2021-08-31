import React, { useState } from "react";

import "./App.css";
//importing data
import data from "./data/data";

//importing components
import Home from "./components/Header/Home";
import About from "./components/Header/About";
import Services from "./components/Main/Services";
import Projects from "./components/Main/Projects";
import Contact from "./components/Main/Contact";
import Footer from "./components/Footer/Footer";
// curves and waves components
import SimpleWave from "./components/curves/SimpleWave";
import LayeredWaves from "./components/curves/LayeredWaves";
import CombinedBlobs from "./components/curves/CombinedBlobs";
import { useGlobalContext } from "./Context";
import { MobileBlob } from "./components/curves/CombinedBlobs";

function App() {
  const [services, setServices] = useState(data);
  const { show } = useGlobalContext();

  return (
    <>
      <Home />
      <LayeredWaves />
      <About
        CombinedBlobs={CombinedBlobs}
        MobileBlob={MobileBlob}
        show={show}
      />{" "}
      {/* services component start */} <LayeredWaves flipped={true} />{" "}
      <div className="flex-services">
        <h1 className="myServices"> My services </h1>{" "}
        <div className="big-res">
          {" "}
          {services.map((service) => {
            return <Services key={service.id} {...service} />;
          })}{" "}
        </div>{" "}
        <div className="underline-black"> </div>{" "}
      </div>{" "}
      <LayeredWaves />
      <div className="skills">
        {show ? <CombinedBlobs /> : <MobileBlob />}
        <h1> My skills in web development </h1>{" "}
        <p>
          I already have a lot experience with the internet technologies HTML5,
          CSS3, JavaScript, Git, React and some experience with NodeJs.I know
          how to solve a problems and when there are some that.I can solve it.I
          am happy to learn how to overcome them The projects I 'm working on
          constantly are in my github account, as well as learned the basic
          commands for "git".I have basic concepts in the field of networks and
          how the connection between the client and the server works.I speak a
          good working English.{" "}
        </p>
        <a href="#about">
          <button className="skills-btn"> Read more </button>{" "}
        </a>{" "}
      </div>{" "}
      <LayeredWaves flipped={true} /> {/* services component end */}{" "}
      <Projects />
      <SimpleWave curve="200" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
