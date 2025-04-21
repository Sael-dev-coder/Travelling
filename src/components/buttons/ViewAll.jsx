import React from "react";
import "boxicons";
import "../style-components/buttons/ViewAll.css";
function ViewAll() {
  return (
    <button className="viewAllContainer">
      <p>View All</p>{" "}
      <box-icon className="arrow" name="right-arrow-alt" color="#37718e"></box-icon>
    </button>
  );
}

export default ViewAll;
