import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  let d = new Date();
  let getDate = d.getFullYear();
  return (
    <div className="footer">
      <div className="footer-line"></div>
      <div className="section-one">
        <p>© {getDate} Svetozar Gospodinov</p>
        <a target="_blank" href="https://github.com/svetozar12">
          <VscGithubInverted />
        </a>
        <a target="_blank" href="https://www.instagram.com/heyits.me902/">
          <FaInstagramSquare />
        </a>
      </div>
    </div>
  );
}

export default Footer;
