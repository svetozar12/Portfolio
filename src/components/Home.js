import React from "react";
import Nav from "./sub-components/Nav";

function Home() {
  return (
    <>
      <Nav />
      <div className="header-background-image" id="home">
        <div className="svetozar-gospodinov">
          <h4>Hello, my name is</h4>
          <h1>Svetozar Gospodinov</h1>
          <h2>And i'm a front end developer</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
