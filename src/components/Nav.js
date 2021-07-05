import React, { useState } from "react";

function Nav() {
  const [toggle, setToggle] = useState(false);

  return (<p>some text</p>
  {
    toggle ? <p>some true text</p> : <p>some false text</p>;
  }
  );
}

export default Nav;
