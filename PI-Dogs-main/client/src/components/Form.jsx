import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Tags from "./Tags";
import { showTemperaments, postDog } from "../redux/actions";
import F from "../styles/Form.module.css";
import { useState } from "react";

export default function Form({ click }) {
  const breeds = useSelector(state => state.showBreeds);
  const temperaments = useSelector(state => state.showTemperaments);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    breedGroup: "",
    image: "",
    minYearsOfLife: "",
    maxYearsOfLife: "",
    minWeight: "",
    maxWeight: "",
    minHeight: "",
    maxHeight: "",
    temperaments: [],
  });
  React.useEffect(() => {
    dispatch(showTemperaments());
  }, []);
  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  function setBreed(e) {
    setInput({ ...input, breedGroup: e.target.value });
  }
  function setTemp(e) {
    if (input.temperaments.length < 5) {
      setInput({
        ...input,
        temperaments: input.temperaments.concat(e.target.innerText),
      });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postDog(input));
  }

  return (
    <div>
      <div>
        <h1>Upload your buddy!</h1>
        <p>Let the world know who your best friend is</p>
      </div>
      <form onSubmit={E => handleSubmit(E)}>
        <div className={F.NameAndBreed}>
          <div className={F.NameCont}>
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={e => handleChange(e)}
            />
          </div>
          <div className={F.BreedCont}>
            <label>BreedGroup</label>
            <select
              id="breedGroup"
              name="breedGroup"
              defaultValue={"DEFAULT"}
              onChange={e => setBreed(e)}
            >
              <option value="DEFAULT">Select an option</option>
              {breeds
                ? breeds.map(el => {
                    return <option key={el.id}>{el.name}</option>;
                  })
                : "no breeds"}
            </select>
          </div>
        </div>

        <div className={F.CheckCont}>
          <h4>Years of life</h4>
          <label>Min.</label>
          <input
            type="number"
            id="minYearsOfLife"
            value={input.minYearsOfLife}
            name="minYearsOfLife"
            onChange={e => handleChange(e)}
          />
          <label>Max.</label>
          <input
            type="number"
            id="maxYearsOfLife"
            value={input.maxYearsOfLife}
            name="maxYearsOfLife"
            onChange={e => handleChange(e)}
          />
          <h4>Average weight</h4>
          <label>Min.</label>
          <input
            type="minWeight"
            id="minWeight"
            value={input.minWeight}
            name="minWeight"
            onChange={e => handleChange(e)}
          />
          <label>Max.</label>
          <input
            type="maxWeight"
            id="maxWeight"
            value={input.maxWeight}
            name="maxWeight"
            onChange={e => handleChange(e)}
          />
          <h4>Average height</h4>
          <label>Min.</label>
          <input
            type="minHeight"
            id="minHeight"
            value={input.minHeight}
            name="minHeight"
            onChange={e => handleChange(e)}
          />
          <label>Max.</label>
          <input
            type="maxHeight"
            id="maxHeight"
            value={input.maxHeight}
            name="maxHeight"
            onChange={e => handleChange(e)}
          />
        </div>

        <div className={F.url}>
          <h4>Upload an image</h4>
          <p>It must be an URL</p>
          <input
            id="image"
            type="text"
            value={input.image}
            name="image"
            onChange={e => handleChange(e)}
          />
        </div>
        <label className={F.tempTitle}>Temperament</label>
        <div className={F.tagsArea}>
          <div className={F.tags}>
            {temperaments
              ? temperaments.map(el => {
                  return (
                    <Tags
                      key={el.id}
                      name={el.name}
                      id={el.id}
                      value={el.name}
                      setTemp={setTemp}
                    />
                  );
                })
              : "no tempers"}
          </div>
        </div>
        <button type="submit">Create your dog!</button>
      </form>
    </div>
  );
}
