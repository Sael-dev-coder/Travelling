import React from "react";
// components
import Navbar from "./components/header/Navbar";
import HeaderButton from "./components/buttons/HeaderButton";
import headerimage from "./assets/header.svg";
import Card from "./components/cards/Card";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
        <main className="container">
          <div className="containerUno">
            <h1 className="title">Explore beautiful places to visit.</h1>
            <p className="description">
              Enjoy the breathtaking view of the nature, Relax and cherish your
              dream to the fullest.
            </p>
            <HeaderButton />
          </div>
          <div className="containerDos">
            <img src={headerimage} alt="" className="headerImage" />
            <img
              src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="headerImageDos"
            />
          </div>
        </main>
      </header>
      <section className="hotOffers">
        <main>
          <span>
            <p>HOT OFFERS</p>
            <h2>Best offer of the month</h2>
            <p>
              Explore our best offer for your stay while you’re on vacation with
              family or business trip.
            </p>
          </span>
          <div>
            <button>
              View All
              <box-icon name="right-arrow-alt" color="#37718e"></box-icon>
            </button>
          </div>
        </main>
        <Card
          image="https://images.pexels.com/photos/19226163/pexels-photo-19226163/free-photo-of-el-arco-cabos.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Cedar Point"
          location="6391 Elgin St. Celina"
          price="830.75"
          rating="4.8"
          reviews="45"
          days="5Day/4Night"
        />
      </section>
    </>
  );
}

export default App;
