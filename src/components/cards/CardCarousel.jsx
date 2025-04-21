import React from "react";
import "../style-components/cards/CardCarousel.css";

function CardCarousel({ children }) {
  return (
    <div className="carousel-container">
      <div className="cards-carousel">{children}</div>
    </div>
  );
}

export default CardCarousel;
