import React from "react";
import E from "../styles/Error.module.css";
import errorGif from "../statics/floating.gif";
import ship from "../statics/ship.png";
import { Link } from "react-router-dom";
import errorBowl from "../statics/404.png";
import { useSelector } from "react-redux";

export default function Error() {
  const lang = useSelector(state => state.language);
  return (
    <div>
      <img src={errorBowl} className={E.errorBowl} alt="" />
      {lang === "English" ? (
        <p className={E.sentence}>Seems you're lost!</p>
      ) : (
        <p className={E.sentence}>Parece que te perdiste!</p>
      )}
      <Link to="/home">
        {lang === "English" ? (
          <span className={E.button}>Return to the ship</span>
        ) : (
          <span className={E.button}>Regresa a la nave</span>
        )}
      </Link>
      <div className={E.imgContainer}>
        <img className={E.ship} src={ship} alt="" />
        <img className={E.dog} src={errorGif} alt="" />
      </div>
    </div>
  );
}
