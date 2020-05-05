import React from "react";
import Partenair from "./partenaires";
import "./partenaires.css";
import part1 from "./part1.png";
import part2 from "./part2.jpg";
import part3 from "./part3.png";

const cards = [
  {
    src: part1,
    title: "A propos de la Fondation Société Générale",
    parag:
      "La Fondation a soutenu Simplon.co en 2015 pour le lancement d’une école dans les quartiers Nord de Marseille en France, en 2016 pour le développement de la structure en Ile-de-France et l’an dernier pour le déploiement d’un programme national d’éducation au code pour les plus jeunes.",
  },
  {
    src: part2,
    title: "A propos de Le 15",
    parag:
      "Le 15 est une initiative entrepreneuriale qui offre une approche intégrale et qui servira de point d’ancrage à l’écosystème de startups , situé au centre-ville de Tunis.",
  },
  {
    src: part3,
    title: "A propos de la Région Ile de France",
    parag:
      "Dans le cadre de l’Accord de Coopération Décentralisée signé entre la Région Ile de France et la Gouvernorat du Grand Tunis, la Région Ile de France participe à Simplon Tunisie par la financement des investissements du réseau des fabriques Simplon.co à Tunis.",
  },
];

function Partenaires() {
  return (
    <div className="partners">
      <Partenair card={cards} />
    </div>
  );
}
export default Partenaires;
