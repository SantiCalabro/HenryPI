import React, { useState } from "react";
import F from "../styles/FilterSection.module.css";
import { getFiltered, showDogs } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

export default function FilterSection() {
  // const [breed, setBreed] = useState("");
  const [input, setInput] = useState({
    breed: "",
    temperament: "",
  });

  const dogs = useSelector(state => state.showDogs);
  const temperaments = useSelector(state => state.showTemperaments);

  const dispatch = useDispatch();

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  function handleFilterTemp(e) {
    const filter = dogs.filter(el => el.temperament.includes(e.target.value));

    dispatch(getFiltered(filter));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const arr = dogs.filter(el => el.breedGroup === input.breed);
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
            value={input.breed}
            name="breed"
            onChange={e => handleChange(e)}
          />
          <label className={F.input}>Temperament</label>

          <select
            name="temperament"
            id="temp"
            onChange={e => handleFilterTemp(e)}
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" onChange={dispatch(showDogs())}>
              Select an option
            </option>
            {temperaments &&
              temperaments.map(el => {
                return <option key={el.id}>{el.name}</option>;
              })}
          </select>
          <div className={F.btnContainer}>
            <input type="submit" placeholder="Filter" className={F.filterBtn} />
          </div>
        </form>
      </div>
    </div>
  );
}
