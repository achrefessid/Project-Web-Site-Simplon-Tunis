import React from "react";
import "./style.css";
import img from "./simplon.png";

const head = ["Accueil", "Equipe", "A propos", "contact"];

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={img} alt="Logo de Simplon" className="img" />
      </div>
      <div className="links">
        {head.map((el) => (
          <a href="#">{el}</a>
        ))}
      </div>
    </div>
  );
}

export default Header;
