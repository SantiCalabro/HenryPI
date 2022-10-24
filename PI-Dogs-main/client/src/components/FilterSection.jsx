import React from "react";
import F from "../styles/FilterSection.module.css";

export default function FilterSection() {
  return (
    <div>
      <div className={F.container}>
        <h4>Filter by:</h4>
        <div className={F.input}>
          <input type="text" placeholder="Breed" />
        </div>
        <div className={F.input}>
          <input type="text" placeholder="Temperament" />
        </div>
      </div>
    </div>
  );
}
