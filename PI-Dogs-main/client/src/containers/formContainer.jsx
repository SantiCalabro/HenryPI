import React from "react";
import { useDispatch } from "react-redux";
import Form from "../components/Form";
import { showBreeds, showTemperaments } from "../redux/actions";
import FM from "../styles/formContainer.module.css";

export default function FormContainer() {
  const dispatch = useDispatch();
  //   const breeds = useSelector(state => state.showBreeds);

  React.useEffect(() => {
    dispatch(showBreeds());
  }, []);
  React.useEffect(() => {
    dispatch(showTemperaments());
  }, []);
  return (
    <div>
      <div className={FM.formContainer}>
        <Form />
      </div>
    </div>
  );
}
