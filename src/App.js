import React from "react";

import "./app.css";
//importing components
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container">
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
    </div>
  );
} //410x576

export default App;
