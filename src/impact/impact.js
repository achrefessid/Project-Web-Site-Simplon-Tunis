import React from "react";
import "./impact.css";

function Impact() {
  return (
    <div>
      <h2 className="impact-title">Notre impact</h2>
      <div className="impact">
        <div className="imp">
          <h2 className="wow fadeInUp animated slow num">7 180</h2>
          <h4>Simplonien.nes formé.es dans le monde</h4>
        </div>
        <div className="imp">
          <h2 className="wow fadeInUp animated slow delay-1s num">111 </h2>
          <h4>Fabriques ouvertes en France et dans le monde</h4>
        </div>
        <div className="imp">
          <h2 className="wow fadeInUp animated slow delay-2s num">148 256</h2>
          <h4>jeunes sensibilisé.es dans le monde depuis 2014</h4>
        </div>
        <div className="imp">
          <h2 className="wow fadeInUp animated slow delay-3s num">748</h2>
          <h4>Salarié.es acculturé.es et/ou formé.es au numérique</h4>
        </div>
        <div className="imp">
          <h2 className="wow fadeInUp animated slow delay-4s num">72%</h2>
          <h4>De sorties positives après la formation</h4>
        </div>
      </div>
    </div>
  );
}

export default Impact;
