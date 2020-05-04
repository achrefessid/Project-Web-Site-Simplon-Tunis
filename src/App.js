import React from "react";
import "./App.css";
import Footer from "./footer/footer";
import Header from "./Header/header";
import Impact from "./impact/impact";
import Partenaires from "./partenaires/partenaireP";
import Between from "./between/between";
import Nous from "./Nous/nous";
import Upbutton from "./up/up";

function App() {
  return (
    <div className="App">
      <Header />
      <Nous />
      <Impact />
      <Between />
      <Partenaires />
      <Upbutton />
      <Footer />
    </div>
  );
}

export default App;
