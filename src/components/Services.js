import React, { useState } from "react";
import data from "./data/data";
function Services({ name, img, title, description }) {
  return (
    <>
      {/* have id 3 */}
      <div id="services" className="Services">
        <div className="services-boxes">
          <img src={img} alt={name} />
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default Services;
