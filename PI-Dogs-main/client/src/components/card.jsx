import React from "react";
import CardStyle from "../styles/Card.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Card(props) {
  const lang = useSelector(state => state.language);
  return (
    <div>
      <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
        <div className={CardStyle.container}>
          <div className={CardStyle.imgContainer}>
            <img src={props.image} className={CardStyle.img} alt="" />
          </div>
          <div className={CardStyle.dataContainer}>
            <h4 className={CardStyle.raceTitle}>{props.name}</h4>
            <div className={CardStyle.temperamentContainer}>
              <p className={CardStyle.temperament}>
                {props.temperament !== "No temperaments"
                  ? props.temperament.slice(0, 2) + " "
                  : "No temperaments"}
              </p>
            </div>
          </div>
          {lang === "English" ? (
            <p className={CardStyle.life}>
              Life expectancy: {props.minYearsOfLife} - {props.maxYearsOfLife}{" "}
              years
            </p>
          ) : (
            <p className={CardStyle.life}>
              Expectativa de vida: {props.minYearsOfLife} -{" "}
              {props.maxYearsOfLife} años
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
