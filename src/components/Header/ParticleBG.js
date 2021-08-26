// not functional yet
import React from "react";
import Particles from "react-particles-js";

function ParticleBG() {
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            stroke: {
              width: 5,
              color: "red",
            },
          },
        }}
      />
      <div className="header-background-image" id="home">
        <div className="svetozar-gospodinov">
          <h4>Hello, my name is</h4>
          <h1>Svetozar Gospodinov</h1>
          <h2>And i'm a front end developer</h2>
        </div>
      </div>
    </div>
  );
}

export default ParticleBG;
