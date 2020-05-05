import React from "react";
import "./partenaires.css";

function Partenair(props) {
  return (
    <div>
      <h2 className="pa">Partenaires</h2>
      <div className="parts">
        {props.card.map((el) => (
          <div className="only">
            <img src={el.src} />
            <h4>{el.title}</h4>
            <p>{el.parag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Partenair;
