import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Tags from "./Tags";
import { postDog } from "../redux/actions";
import F from "../styles/Form.module.css";
import { useState } from "react";
import SuccessMessage from "./SuccessMessage";

export default function Form() {
  const breeds = useSelector(state => state.showBreeds);
  const temperaments = useSelector(state => state.showTemperaments);
  const dispatch = useDispatch();

  const [disable, setDisable] = useState({
    submit: true,
    tags: false,
    msg: true,
  });
  const [clicks, setClicks] = useState(0);
  const [error, setError] = useState({});
  const initialState = {
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
  };
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

  function setTemp(e) {
    if (input.temperaments.length < 3) {
      handleChange(e);
      setInput({
        ...input,
        temperaments: input.temperaments.concat(e.target.innerText),
      });
      if (
        input.name.length > 0 &&
        input.image.length > 0 &&
        input.minYearsOfLife.length > 0 &&
        input.maxYearsOfLife.length > 0 &&
        input.minHeight.length > 0 &&
        input.maxHeight.length > 0 &&
        input.minWeight.length > 0 &&
        input.minWeight.length > 0
      ) {
        setDisable({ ...disable, submit: false });
      }

      setClicks(clicks + 1);
    }
    if (clicks === 3) {
      setError({
        ...error,
        temperament: "*You can't select more than three temperaments",
      });
      setDisable({
        ...disable,
        tags: true,
      });
      setClicks(3);
    }
  }

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
    } else if (input.minHeight < 0 || input.maxHeight < 0) {
      errors.height = "*Height must be a positive number";
    } else if (
      input.minHeight > input.maxHeight ||
      input.minHeight === input.maxHeight
    ) {
      errors.height = "*Max height must be greater than Min height";
    }
    if (!input.minWeight || !input.minWeight) {
      errors.weight = "*Weight is required";
    } else if (input.minWeight < 0 || input.maxWeight < 0) {
      errors.weight = "*Weight must be a positive number";
    } else if (
      input.minWeight > input.maxWeight ||
      input.minWeight === input.maxWeight
    ) {
      errors.weight = "*Max Weight must be greater than Min weight";
    }

    if (!input.minYearsOfLife || !input.maxYearsOfLife) {
      errors.yearsOfLife = "*Years of life are required";
    } else if (input.minYearsOfLife < 0 || input.maxYearsOfLife < 0) {
      errors.yearsOfLife = "*Years of life must be a positive number";
    } else if (
      input.minYearsOfLife > input.maxYearsOfLife ||
      input.minYearsOfLife === input.maxYearsOfLife
    ) {
      errors.yearsOfLife = "*Max years of life must be greater than Min";
    } else if (
      input.minYearsOfLife === parseInt(input.minYearsOfLife, 10) ||
      input.maxYearsOfLife === parseInt(input.maxYearsOfLife, 10)
    ) {
      errors.yearsOfLife = "*Years of life must be an integer number";
    }
    if (!input.temperaments.length) {
      errors.temperament = "*Choose at least one temperament";
    }
    if (input.image.length > 0 && Object.keys(error).length === 0) {
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

    setError({
      ...error,
      temperament: "",
    });
    setDisable({
      ...disable,
      tags: false,
    });
    if (input.temperaments.length === 1) {
      setDisable({ ...disable, submit: true });
    }

    setClicks(clicks - 1);
  }

  function clearForm() {
    setInput({ ...initialState });
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

    setDisable({ ...disable, msg: false, submit: true });
    setError({});
    setClicks(0);
    setInput({ ...input, temperaments: [] });
    clearForm();
  }

  return (
    <div>
      {disable.msg === false && (
        <>
          <div className={F.popUp}>
            <SuccessMessage />
          </div>
        </>
      )}

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
              type="number"
              id="minYearsOfLife"
              value={input.minYearsOfLife}
              name="minYearsOfLife"
              onChange={e => handleChange(e)}
              onBlur={e => handleChange(e)}
            />
            <label>Max.</label>
            <input
              type="number"
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
            type="number"
            id="minWeight"
            value={input.minWeight}
            name="minWeight"
            onChange={e => handleChange(e)}
            onBlur={e => handleChange(e)}
          />
          <label>Max.</label>
          <input
            type="number"
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
            type="number"
            id="minHeight"
            value={input.minHeight}
            name="minHeight"
            onChange={e => handleChange(e)}
            onBlur={e => handleChange(e)}
          />
          <label>Max.</label>
          <input
            type="number"
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
        <label className={F.label}>Choose up to three temperaments</label>
        <div className={F.tempContainer}>
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
                        handleChange={handleChange}
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
