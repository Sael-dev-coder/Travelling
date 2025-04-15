import React from "react";
import "boxicons"; // Para usar los íconos de Boxicons
import "../style-components/buttons/HeaderButton.css"; // Archivo CSS para estilos

function HeaderButton() {
  return (
    <div className="header-buttons">
      <button className="explore-button">Explore More</button>
      <div className="destination-button">
        <box-icon name="play-circle" color="#6c757d"></box-icon>
        <span className="Destination">Destination</span>
      </div>
    </div>
  );
}

export default HeaderButton;
