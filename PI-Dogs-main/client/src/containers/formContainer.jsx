import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form";
import { showBreeds, showTemperaments } from "../redux/actions";

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
      <Form />
    </div>
  );
}
