import React from "react";
import Ec from "../styles/errorConnection.module.css";
import errorGif from "../statics/floating.gif";
import ship from "../statics/ship.png";
import errorBowl from "../statics/404.png";
import { useSelector } from "react-redux";

export default function Error() {
  const lang = useSelector(state => state.language);
  return (
    <div>
      <img src={errorBowl} className={Ec.errorBowl} alt="" />
      {lang === "English" ? (
        <p className={Ec.sentence}>Error of conectivity, try again!</p>
      ) : (
        <p className={Ec.sentence}>
          Error de conectividad, inténtalo nuevamente!
        </p>
      )}
      <div className={Ec.imgContainer}>
        <img className={Ec.ship} src={ship} alt="" />
        <img className={Ec.dog} src={errorGif} alt="" />
      </div>
    </div>
  );
}
