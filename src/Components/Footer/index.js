import React from "react";
import { Trust, Note, Social, Copyright } from "./footercomp";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <Trust />
      <Note />
      <Social />
      <Copyright />
    </div>
  );
}

export default Footer;