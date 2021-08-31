import React from "react";
import Nav from "./Nav";
import ParticleBG from "./ParticleBG";
const styles = {
  root: {
    fontFamily: "sans-serif",
    width: "100%",
    height: "100vh",
    background: "#000",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
};
function Home() {
  return (
    <>
      <Nav />
      <div style={styles.root}>
        <ParticleBG />
        <div className="header-background-image" id="home">
          <div className="svetozar-gospodinov">
            <h4>Hello, my name is</h4>
            <h1>Svetozar Gospodinov</h1>
            <h2>And i'm a front end developer</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
