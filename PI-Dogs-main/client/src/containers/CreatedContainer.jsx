import React from "react";
import Created from "../components/CreatedDogs";
import CrCont from "../styles/createdContainer.module.css";
import dogstronaut from "../statics/dogstronaut.png";

export default function CreatedContainer() {
  return (
    <>
      <div className={CrCont.general}>
        <Created />
        <hr />
        <div className={CrCont.container}>
          <h1 className={CrCont.title}>These are your new friends!</h1>
          <p className={CrCont.subtitle}>Know them all!</p>
        </div>
      </div>

      <img src={dogstronaut} alt="" className={CrCont.pic} />
    </>
  );
}
