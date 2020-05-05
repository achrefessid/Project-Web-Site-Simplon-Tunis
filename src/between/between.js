import React from "react";
import "./between.css";
import img from "./between.jpg";
function Between() {
  return (
    <div className="container">
      <img src={img} className="inside" />
      <div className="text-block ">
        <h4 className="btext">
          " Si debugger, c’est supprimer des bugs, alors programmer ne peut être
          que les ajouter."
        </h4>
      </div>
    </div>
  );
}
export default Between;
