import React from "react";
import "./nous.css";
import image from "./sp1.png";

function Nous() {
  return (
    <div className="nous">
      <h2 className="nous-title">Qui sommes-Nous</h2>
      <div className="container">
        <img src={image} alt="photo simplon prom 1" className="nous-img" />
        <div className="hover">
          <div className="textN">
            Nous sommes un réseau de fabriques numériques et inclusives en
            France et à l’étranger. Nous avons formé plus de 2000 apprenants aux
            métiers du numérique depuis 2013. Nous sommes une entreprise sociale
            et solidaire. Nous voulons faire du numérique un véritable levier
            d’inclusion et révéler des talents parmi des publics peu représentés
            dans le secteur. Nous conseillons les entreprises dans leur
            transformation digitale et parfois nous réalisons leurs sites et
            leurs applications.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nous;
