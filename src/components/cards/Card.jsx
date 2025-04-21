import React from "react";
import "../style-components/cards/Card.css";
import "boxicons";

function Card({ image, title, location, price, rating, reviews, days }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-location">
          <i className="bx bx-map"></i> {location}
        </p>
        <p className="card-price">${price}</p>
        <div className="card-rating">
          <span className="star"><box-icon className='starIcon' name='star' type='solid' color='#ffbfa0'  ></box-icon></span> {rating} ({reviews})
        </div>
        <p className="card-days">
          <i className="bx bx-calendar"></i> {days}
        </p>
      </div>
    </div>
  );
}

export default Card;
