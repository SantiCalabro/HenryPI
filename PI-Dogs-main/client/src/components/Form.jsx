import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Tags from "./Tags";
import { showTemperaments } from "../redux/actions";
import F from "../styles/Form.module.css";

export default function Form(props) {
  const breeds = useSelector(state => state.showBreeds);
  const temperaments = useSelector(state => state.showTemperaments);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(showTemperaments());
  }, []);
  return (
    <div>
      <div>
        <h1>Upload your buddy!</h1>
        <p>Let the world know who your best friend is</p>
      </div>
      <form>
        <div className={F.NameAndBreed}>
          <div className={F.NameCont}>
            <label>Name</label>
            <input type="text" id="name" />
          </div>
          <div className={F.BreedCont}>
            <label>BreedGroup</label>
            <select name="" id="breed">
              <option value="DEFAULT" disabled>
                Select an option
              </option>
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
          <input type="number" />
          <label>Max.</label>
          <input type="number" />
          <h4>Average weight</h4>
          <label>Min.</label>
          <input type="number" />
          <label>Max.</label>
          <input type="number" />
          <h4>Average height</h4>
          <label>Min.</label>
          <input type="number" />
          <label>Max.</label>
          <input type="number" />
        </div>

        <div className={F.url}>
          <h4>Upload an image</h4>
          <p>It must be an URL</p>
          <input type="text" />
        </div>
        <label className={F.tempTitle}>Temperament</label>
        <div className={F.tagsArea}>
          <div className={F.tags}>
            {temperaments
              ? temperaments.map(el => {
                  return <Tags key={el.id} name={el.name} id={el.id} />;
                })
              : "no tempers"}
          </div>
        </div>
      </form>
    </div>
  );
}
