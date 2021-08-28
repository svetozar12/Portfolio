import React from "react";

function LayeredWaves({ flipped }) {
  return <div className={`spacer layer1 ${flipped ? "flipped" : null}`}></div>;
}

export default LayeredWaves;
