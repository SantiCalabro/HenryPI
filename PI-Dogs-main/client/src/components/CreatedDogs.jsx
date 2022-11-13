import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCreated } from "../redux/actions";
import Card from "./card";
import Cr from "../styles/Created.module.css";

export default function CreatedDogs() {
  const dispatch = useDispatch();
  const created = useSelector(state => state.created);
  React.useEffect(() => {
    dispatch(getCreated());
  }, []);

  return (
    <>
      <div className={Cr.cardsContainer}>
        {created.length > 0
          ? created.map(el => (
              <div key={el.id} className={Cr.card}>
                <Card
                  name={el.name}
                  key={el.id}
                  image={el.image}
                  temperament={
                    typeof el.temperaments[0] === "string"
                      ? el.temperaments
                      : el.temperaments.map(el => el.name)
                  }
                  id={el.id}
                  minYearsOfLife={el.minYearsOfLife}
                  maxYearsOfLife={el.maxYearsOfLife}
                />
              </div>
            ))
          : "No hay nada"}
      </div>
    </>
  );
}
