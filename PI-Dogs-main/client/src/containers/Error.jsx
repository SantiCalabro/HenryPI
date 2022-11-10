import React from "react";
import E from "../styles/Error.module.css";
import errorGif from "../statics/floating.gif";
import ship from "../statics/ship.png";
import { Link } from "react-router-dom";
import errorBowl from "../statics/404.png";

export default function Error() {
  return (
    <div>
      <img src={errorBowl} className={E.errorBowl} alt="" />
      <p className={E.sentence}>Seems you're lost!</p>
      <Link to="/home">
        <span className={E.button}>Return to the ship</span>
      </Link>
      <div className={E.imgContainer}>
        <img className={E.ship} src={ship} alt="" />
        <img className={E.dog} src={errorGif} alt="" />
      </div>
    </div>
  );
}
