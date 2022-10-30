import React from "react";
import Card from "./card";
import C from "../styles/CardsContainer.module.css";
import { useSelector } from "react-redux";

export default function Cards(props) {
  const dogs = useSelector(state => state.showDogs);
  const filtered = useSelector(state => state.filteredDogs);

  return (
    <div className={C.border}>
      <div className={C.container}>
        {(filtered.length === 0 ? dogs : filtered).map(el => (
          <div key={el.id}>
            <Card
              name={el.name}
              key={el.id}
              image={el.image}
              temperament={el.temperament}
              id={el.id}
              minYearsOfLife={el.minYearsOfLife}
              maxYearsOfLife={el.maxYearsOfLife}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
