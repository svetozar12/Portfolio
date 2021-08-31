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
              value: 80,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            stroke: {
              width: 10,
            },
          },
        }}
      />
    </div>
  );
}

export default ParticleBG;
