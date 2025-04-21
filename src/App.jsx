import React from "react";
// components
import Navbar from "./components/header/Navbar";
import HeaderButton from "./components/buttons/HeaderButton";
import ViewAll from "./components/buttons/ViewAll";
import headerimage from "./assets/header.svg";
import CardCarousel from "./components/cards/CardCarousel";
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
        <main className="hotOffersContainer">
          <span className="hotOffersText">
            <p className="Offers">HOT OFFERS</p>
            <h2 className="BestOffer">Best offer of the month</h2>
            <p className="descriptionOffers">
              Explore our best offer for your stay while you’re on vacation with
              family or business trip.
            </p>
          </span>
          <div>
            <ViewAll />
          </div>
        </main>
        <span className="cardContainer">
          <CardCarousel>
            <Card
              image="https://images.pexels.com/photos/19226163/pexels-photo-19226163/free-photo-of-el-arco-cabos.jpeg?auto=compress&cs=tinysrgb&w=600"
              title="San Lucas"
              location="B.C.S., México"
              price="830.75"
              rating="4.9"
              reviews="40"
              days="4Day/3Night"
            />{" "}
            <Card
              image="https://images.pexels.com/photos/10610442/pexels-photo-10610442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Grand Canyon"
              location="Arizona, USA"
              price="830.75"
              rating="4.8"
              reviews="45"
              days="5Day/4Night"
            />{" "}
            <Card
              image="https://images.pexels.com/photos/31038107/pexels-photo-31038107/free-photo-of-oro-negro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Ouro Preto"
              location=" Minas Gerais, Brasil"
              price="830.75"
              rating="4.8"
              reviews="45"
              days="5Day/4Night"
            />
            <Card
              image="https://images.pexels.com/photos/7026306/pexels-photo-7026306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Fira"
              location="Greece"
              price="830.75"
              rating="4.8"
              reviews="45"
              days="5Day/4Night"
            />  <Card
              image="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="San Lucas"
              location="B.C.S., Mexico"
              price="830.75"
              rating="4.8"
              reviews="45"
              days="5Day/4Night"
            />
          </CardCarousel>
        </span>
      </section>
    </>
  );
}

export default App;
