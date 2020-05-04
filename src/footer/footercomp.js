import React from "react";

export function Trust() {
  return <h1 className="trust">"In code we trust"</h1>;
}

export function Note() {
  return (
    <div className="all">
      <div className="contact">
        <span>
          <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;Le 15, 15
          avenue De Carthage, <br />
          Tunis 1001
        </span>
        <span>
          <i className="fas fa-phone"></i>&nbsp;&nbsp;&nbsp;50 881 540
        </span>
        <span>
          <i className="fas fa-envelope"></i>
          &nbsp;&nbsp;&nbsp;simplon@simplon.com
        </span>
      </div>
      <div className="note">
        <h4>Laissez une note</h4>
        <form action="">
          <div>
            <input type="text" placeholder="Name" className="one" />
            <input type="email" placeholder="Email" />
          </div>
          <input type="text" placeholder="Message" className="three" />
        </form>
        <button>Envoyer</button>
      </div>
    </div>
  );
}
export function Social() {
  return (
    <div className="social">
      <i class="fab fa-twitter-square"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-facebook-square"></i>
    </div>
  );
}
export function Copyright() {
  return (
    <div className="copyright">
      <p>
        Copyright &copy; 2020 Simplon Tunisie . Made with{" "}
        <i class="fas fa-heart"></i> by Manel, Achref and Amira Chaabane.
      </p>
    </div>
  );
}
