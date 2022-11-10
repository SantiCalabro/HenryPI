import React from "react";
import Card from "../styles/Card.module.css";
import { Link } from "react-router-dom";

export default function card(props) {
  return (
    <div>
      <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
        <div className={Card.container}>
          <div className={Card.imgContainer}>
            <img src={props.image} className={Card.img} alt="" />
          </div>
          <div className={Card.dataContainer}>
            <h4 className={Card.raceTitle}>{props.name}</h4>
            <div className={Card.temperamentContainer}>
              <p className={Card.temperament}>
                {props.temperament !== "No temperaments"
                  ? props.temperament.slice(0, 2) + " "
                  : "No temperaments"}
              </p>
            </div>
          </div>
          <p className={Card.life}>
            Life expectancy: {props.minYearsOfLife} - {props.maxYearsOfLife}{" "}
            years
          </p>
        </div>
      </Link>
    </div>
  );
}
