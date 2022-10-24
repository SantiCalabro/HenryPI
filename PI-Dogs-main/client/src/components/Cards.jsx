import React from "react";
import Card from "./card";
import { useSelector } from "react-redux";

export default function Cards(props) {
  const dogs = useSelector(state => state.loadedDogs);
  return (
    <div>
      {dogs?.map(el => (
        <div key={el.id}>
          <Card name={el.name} origin={el.origin} />
        </div>
      ))}
    </div>
  );
}
