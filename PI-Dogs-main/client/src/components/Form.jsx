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
      errors.name = "*Ups! Name is required";
    } else if (!regexName.test(input.name)) {
      errors.name = "*Name is invalid";
    }
    if (!input.image) {
      errors.image = "*Image is required";
    } else if (!regexUrl.test(input.image)) {
      errors.image = "*It must be an URL";
    }
    if (!input.minHeight || !input.maxHeight) {
      errors.height = "*Height is required";
    }
    if (!input.minWeight || !input.minWeight) {
      errors.weight = "*Weight is required";
    }
    if (!input.minYearsOfLife || !input.maxYearsOfLife) {
      errors.yearsOfLife = "*Years of life are required";
    }
    if (input.temperaments.length > 0 && Object.keys(error).length === 0) {
      setDisable({ ...disable, submit: false });
    }
    return errors;
  }
  function handleClear(e) {
    setInput({
      ...input,
      temperaments: input.temperaments.filter(
        el => !el.includes(e.target.innerText.slice(4))
      ),
    });
    setClicks(clicks - 1);
    if (clicks < 5) {
      console.log("holisssss");
      setError({
        ...error,
        temperament: "",
      });
      setDisable({
        ...disable,
        tags: false,
      });
    }
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
        temperament: "*You can't select more than three temperaments",
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
            <input
              type="text"
              id="name"
              name="name"
              onChange={e => handleChange(e)}
              onBlur={e => handleChange(e)}
              placeholder="Name"
            />
            {!error.name ? null : (
              <span className={F.errorName}>{error.name}</span>
            )}
          </div>

          <div className={F.BreedCont}>
            <label>Breed</label>
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

        <div className={F.yearsContainer}>
          <h4>Years of life</h4>
          <div className={F.values}>
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
          </div>
          {!error.yearsOfLife ? null : (
            <span className={F.errorYears}>{error.yearsOfLife}</span>
          )}
        </div>
        <div className={F.weightContainer}>
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
          {!error.weight ? null : (
            <span className={F.errorWeight}>{error.weight}</span>
          )}
        </div>
        <div className={F.heightContainer}>
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
          {!error.height ? null : (
            <span className={F.errorWeight}>{error.height}</span>
          )}
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
          {!error.image ? null : (
            <span className={F.errorUrl}>{error.image}</span>
          )}
        </div>
        <div className={F.tempContainer}>
          <label>Temperament</label>
          {!error.temperament ? null : (
            <span className={F.errorTemp}>{error.temperament}</span>
          )}
          <div className={F.selectedTempers}>
            {input.temperaments &&
              input.temperaments.map(el => {
                return (
                  <span
                    key={el}
                    className={F.miniTags}
                    onClick={e => handleClear(e)}
                  >
                    x | {el}
                  </span>
                );
              })}
          </div>
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
        </div>
        <button
          type="submit"
          className={disable.submit === true ? F.submitBtn : F.btnActive}
          disabled={disable.submit}
        >
          Create your dog!
        </button>
      </form>
    </div>
  );
}
