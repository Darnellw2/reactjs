import React, { useState } from "react";
import getRandomImageUrl from "../../../Helpers/getRandomImageUrl";
import "./Card.css";

//card returned html van een button. Kan je gebruiken in een html pagina met <Card title=""/>
const Card = (props) => {
  const [isActive, setIsActive] = useState(false);

  //click event, zet isactive naar true en checkt of de property een onclick event heeft en ...?
  const handleClick = () => {
    setIsActive(true);
    props.onClick && props.onClick();
  };

  return (
    <button
      //als isActive is true, dan zet ie de class op active (in dit geval een blauwe kader om de kaart heen)
      className={`card ${isActive ? "card--active" : ""}`}
      onClick={handleClick}
    >
      <div className="card__image">
        <img
          src={getRandomImageUrl({
            seed: props.title,
            width: 1200,
            height: 400
          })}
          alt={props.title}
        />
      </div>
      <div className="card__content">
        <div className="card__title">{props.title}</div>
        <div className="card__subtitle">{props.climate}</div>
      </div>
    </button>
  );
};

export default Card;
