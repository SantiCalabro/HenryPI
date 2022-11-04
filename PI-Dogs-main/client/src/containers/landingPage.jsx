import React from "react";
import { Link } from "react-router-dom";
import btn from "../statics/click.png";
import mainImage from "../statics/pugstronaut.jpg";
import L from "../styles/landingPage.module.css";

export default function landingPage() {
  return (
    <>
      <div className={L.background}>
        <div className={L.imageContainer}>
          <img src={mainImage} className={L.image} alt="" />
        </div>
        <p className={L.subtitle}>And join us in this spacial trip</p>
      </div>
      <div className={L.btnContainer}>
        <Link to="/home">
          <img src={btn} className={L.btn} alt="" />
        </Link>
      </div>
    </>
  );
}
