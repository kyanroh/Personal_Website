import React from "react";
import "../styles/Footer.css";
import { GitHub, LinkedIn } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footerIconDiv" >
        <GitHub className="footerIcon" onClick={() => window.open("https://github.com/kyanroh")} fontSize = "large"/>
        <LinkedIn className="footerIcon" onClick={() => window.open("https://www.linkedin.com/in/ryan-koh-fr/")} fontSize ="large"/>
      </div>
      <p className="copyright"> &copy; 2023 Ryan Koh</p>
     
    </div>
  );
}

export default Footer;
