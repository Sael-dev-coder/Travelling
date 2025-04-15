import React from "react";
// components
import Navbar from "./components/header/Navbar";
import HeaderButton from "./components/buttons/HeaderButton";
import headerimage from "./assets/header.svg";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <header>
        <main className="container">
          <div className="containerUno">
            <span className="headerText">
              <h1 className="title">Explore beautiful places to visit.</h1>
              <p className="description">
                Enjoy the breathtaking view of the nature, Relax and cherish
                your dream to the fullest.
              </p>
              <HeaderButton />
            </span>
          </div>
          <div className="containerDos">
            <img src={headerimage} alt="" className="headerImage" />
          </div>
        </main>
      </header>
    </>
  );
}

export default App;
