import React from "react";
import Card from "../styles/Card.module.css";
import { Link } from "react-router-dom";

export default function card(props) {
  return (
    <div>
      <Link to={`/detail/${props.id}`}>
        <div className={Card.container}>
          <div className={Card.imgContainer}>
            <img src={props.image} className={Card.img} alt="" />
          </div>
          <div className={Card.dataContainer}>
            <h4 className={Card.raceTitle}>{props.name}</h4>
            <div className={Card.temperamentContainer}>
              <p className={Card.temperament}>
                {props.temperament
                  ? props.temperament.slice(0, 3) + " "
                  : props.temperament}
              </p>
              <p>
                {props.minYearsOfLife} - {props.maxYearsOfLife} years
              </p>
            </div>
          </div>
          <span className={Card.spanBtn}>See more</span>
        </div>
      </Link>
    </div>
  );
}
