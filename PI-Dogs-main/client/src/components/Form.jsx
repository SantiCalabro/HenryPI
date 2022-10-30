import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Tags from "./Tags";
import { showTemperaments } from "../redux/actions";

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
        <div>
          <label>Name</label>
          <input type="text" id="name" />
        </div>
        <div>
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
        <div>
          <label>Temperament</label>
          {temperaments
            ? temperaments.map(el => {
                return <Tags key={el.id} name={el.name} id={el.id} />;
              })
            : "no tempers"}
        </div>
        <div>
          <h4>Years of life</h4>
          <label>Min.</label>
          <input type="number" />
          <label>Max.</label>
          <input type="number" />
        </div>
        <div>
          <h4>Average weight</h4>
          <label>Min.</label>
          <input type="number" />
          <label>Max.</label>
          <input type="number" />
        </div>
        <div>
          <h4>Average height</h4>
          <label>Min.</label>
          <input type="number" />
          <label>Max.</label>
          <input type="number" />
        </div>
        <div>
          <h4>Upload an image</h4>
          <p>It must be an URL</p>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}
