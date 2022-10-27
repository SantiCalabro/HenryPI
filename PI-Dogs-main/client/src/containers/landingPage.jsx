import React from "react";
import { Link } from "react-router-dom";
import dogImage from "../statics/homeheader.jpg";
import L from "../styles/landingPage.module.css";

export default function landingPage() {
  return (
    <div className={L.background}>
      <div className={L.imageContainer}>
        <Link to="/home">
          <span className={L.btn}>Ingresar</span>
        </Link>
        <img src={dogImage} className={L.image} alt="" />
      </div>

      <h1 className={L.title}>Paws&Tails</h1>
      <p className={L.subtitle}>A total pet experience</p>
    </div>
  );
}
