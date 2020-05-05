import React from "react";
import { Trust, Note, Social, Copyright } from "./footercomp";
import "./footer.css";

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
