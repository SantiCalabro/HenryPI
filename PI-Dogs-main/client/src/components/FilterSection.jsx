import React, { useState } from "react";
import F from "../styles/FilterSection.module.css";
import {
  getFiltered,
  showDogs,
  showBreeds,
  clearFilter,
} from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import filter from "../statics/filter.png";

export default function FilterSection() {
  // const [breed, setBreed] = useState("");
  const [input, setInput] = useState({
    breed: "",
    temperament: "",
  });

  const dogs = useSelector(state => state.showDogs);
  const breeds = useSelector(state => state.showBreeds);

  const temperaments = useSelector(state => state.showTemperaments);

  const dispatch = useDispatch();

  // function validate(input) {
  //   let errors = {};
  // }

  // function handleChange(e) {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // }
  function handleFilterTemp(e) {
    dispatch(clearFilter());
    const filter = dogs.filter(el =>
      el.temperament.length > 0
        ? el.temperament.includes(e.target.value)
        : "no hay nada"
    );

    dispatch(getFiltered(filter));
  }

  function handleSort(e) {
    dispatch(clearFilter());
    if (e.target.innerText === "A-Z") {
      var sorted = dogs.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else if (e.target.innerText === "Z-A") {
      var sorted = dogs.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    }
    dispatch(getFiltered(sorted));
  }

  function handleFilterBreed(e) {
    dispatch(clearFilter());
    const filter = dogs.filter(el => el.breedGroup == e.target.value);
    console.log(filter);
    dispatch(getFiltered(filter));
  }

  React.useEffect(() => {
    dispatch(showBreeds());
  }, []);
  return (
    <div>
      <div className={F.container}>
        <img src={filter} className={F.filterLabel} />
        <form>
          <select
            name="breed"
            id="breed"
            onChange={e => handleFilterBreed(e)}
            defaultValue={"DEFAULT"}
            className={F.tempSelector}
          >
            <option value="DEFAULT" onChange={() => dispatch(showDogs())}>
              Breed Group
            </option>
            {breeds &&
              breeds.map(el => {
                return <option key={el.id}>{el.name}</option>;
              })}
          </select>

          <select
            name="temperament"
            id="temp"
            onChange={e => handleFilterTemp(e)}
            defaultValue={"DEFAULT"}
            className={F.tempSelector}
          >
            <option value="DEFAULT" onChange={() => dispatch(showDogs())}>
              Temperament
            </option>
            {temperaments &&
              temperaments.map(el => {
                return <option key={el.id}>{el.name}</option>;
              })}
          </select>
          <p className={F.orderTitle}>Order alphabetically</p>
          <div className={F.orderBtn}>
            <span className={F.order} onClick={e => handleSort(e)}>
              A-Z
            </span>
            <span className={F.order} onClick={e => handleSort(e)}>
              Z-A
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
