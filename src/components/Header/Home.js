import React from "react";
import Nav from "./Nav";
import ParticleBG from "./ParticleBG";
const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    width: "100%",
    height: "100vh",
    background: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
function Home() {
  return (
    <>
      <Nav />
      <div style={styles.root}>
        <ParticleBG />
      </div>
    </>
  );
}

export default Home;
