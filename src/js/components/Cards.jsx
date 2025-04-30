import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

function Cards({ titulo, descripcion }) {
  return (
    <div>
      <div className="card">
        <img src={rigoImage} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
