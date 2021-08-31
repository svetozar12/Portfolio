import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(true);
  const [toggle, setToggle] = useState(false);

  const checkSize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    if (width <= 900) {
      setShow(false);
    } else {
      setShow(true);
    }
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <AppContext.Provider value={{ width, show, toggle, setToggle }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
