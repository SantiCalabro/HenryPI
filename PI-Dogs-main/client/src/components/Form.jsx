import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Tags from "./Tags";
import { postDog } from "../redux/actions";
import F from "../styles/Form.module.css";
import { useState } from "react";

export default function Form(props) {
  const breeds = useSelector(state => state.showBreeds);
  const temperaments = useSelector(state => state.showTemperaments);
  const dispatch = useDispatch();

  const [disable, setDisable] = useState({
    submit: true,
    tags: false,
  });
  const [clicks, setClicks] = useState(0);
  const [error, setError] = useState({});
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

  function validate(input) {
    const errors = {};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexUrl =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;

    if (!input.name) {
      errors.name = "Name is required";
    } else if (!regexName.test(input.name)) {
      errors.name = "Name is invalid";
    }
    if (!input.image) {
      errors.image = "Image is required";
    } else if (!regexUrl.test(input.image)) {
      errors.image = "It must be an URL";
    }
    if (!input.minHeight || !input.maxHeight) {
      errors.height = "Height is required";
    }
    if (!input.minWeight || !input.minWeight) {
      errors.weight = "Weight is required";
    }
    if (!input.minYearsOfLife || !input.maxYearsOfLife) {
      errors.yearsOfLife = "Years of life are required";
    }
    if (input.image && Object.keys(error).length === 0) {
      setDisable({ ...disable, submit: false });
    }
    return errors;
  }

  function setTemp(e) {
    if (input.temperaments.length < 3) {
      handleChange(e);
      setInput({
        ...input,
        temperaments: input.temperaments.concat(e.target.innerText),
      });
    }
    if (clicks > 2) {
      setError({
        ...error,
        temperament: "Clicked more than three times",
      });
      setDisable({
        ...disable,
        tags: true,
      });
    }
    setClicks(clicks + 1);
  }

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(postDog(input));
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div className={F.NameAndBreed}>
          <div className={F.NameCont}>
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={e => handleChange(e)}
              onBlur={e => handleChange(e)}
            />
            {!error.name ? null : <span>{error.name}</span>}
          </div>
          <div className={F.BreedCont}>
            <label>BreedGroup</label>
            <select
              id="breedGroup"
              name="breedGroup"
              defaultValue={"DEFAULT"}
              onChange={e => handleChange(e)}
              onBlur={e => handleChange(e)}
            >
              <option value="DEFAULT">No Breed</option>
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
            type="text"
            id="minYearsOfLife"
            value={input.minYearsOfLife}
            name="minYearsOfLife"
            onChange={e => handleChange(e)}
            onBlur={e => handleChange(e)}
          />
          <label>Max.</label>
          <input
            type="text"
            id="maxYearsOfLife"
            value={input.maxYearsOfLife}
            name="maxYearsOfLife"
            onChange={e => handleChange(e)}
            onBlur={e => handleChange(e)}
          />
          {!error.yearsOfLife ? null : <span>{error.yearsOfLife}</span>}
          <h4>Average weight</h4>
          <label>Min.</label>
          <input
            type="text"
            id="minWeight"
            value={input.minWeight}
            name="minWeight"
            onChange={e => handleChange(e)}
            onBlur={e => handleChange(e)}
          />
          <label>Max.</label>
          <input
            type="text"
            id="maxWeight"
            value={input.maxWeight}
            name="maxWeight"
            onChange={e => handleChange(e)}
            onBlur={e => handleChange(e)}
          />
          {!error.weight ? null : <span>{error.weight}</span>}

          <h4>Average height</h4>
          <label>Min.</label>
          <input
            type="text"
            id="minHeight"
            value={input.minHeight}
            name="minHeight"
            onChange={e => handleChange(e)}
            onBlur={e => handleChange(e)}
          />
          <label>Max.</label>
          <input
            type="text"
            id="maxHeight"
            value={input.maxHeight}
            name="maxHeight"
            onChange={e => handleChange(e)}
            onBlur={e => handleChange(e)}
          />
          {!error.height ? null : <span>{error.height}</span>}
        </div>

        <div className={F.url}>
          <h4>Upload an image</h4>
          <input
            id="image"
            type="text"
            value={input.image}
            name="image"
            onChange={e => handleChange(e)}
            onBlur={e => handleChange(e)}
          />
          {!error.image ? null : <p>{error.image}</p>}
        </div>

        <label className={F.tempTitle}>Temperament</label>
        {!error.temperament ? null : <span>{error.temperament}</span>}

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
                      disabled={disable.tags}
                    />
                  );
                })
              : "no tempers"}
          </div>
        </div>
        <button type="submit" disabled={disable.submit}>
          Create your dog!
        </button>
      </form>
    </div>
  );
}
