import React, { useState } from "react";
import F from "../styles/FilterSection.module.css";
import { getFiltered } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

export default function FilterSection() {
  const [breed, setBreed] = useState("");
  const dogs = useSelector(state => state.showDogs);
  const dispatch = useDispatch();
  function handleChange(e) {
    setBreed(e.target.value);
  }

  function handleSubmit(e) {
    const arr = dogs.filter(el => el.breedGroup === breed);
    console.log(arr);
    e.preventDefault();
    dispatch(getFiltered(arr));
  }

  return (
    <div>
      <div className={F.container}>
        <h4 className={F.title}>Filter by:</h4>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Breed group"
            className={F.input}
            value={breed}
            onChange={e => handleChange(e)}
          />
          <input type="text" placeholder="Temperament" className={F.input} />

          <div className={F.btnContainer}>
            <input type="submit" placeholder="Filter" className={F.filterBtn} />
          </div>
        </form>
      </div>
    </div>
  );
}
