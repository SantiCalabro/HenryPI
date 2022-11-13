import axios from "axios";
export const showDogs = () => dispatch => {
  return fetch("http://localhost:3001/dogs")
    .then(res => res.json())
    .then(res => {
      dispatch({ type: "SHOW_DOGS", payload: res });
    });
};
export const showDetail = id => dispatch => {
  return fetch(`http://localhost:3001/dogs/${id}`)
    .then(res => res.json())
    .then(res => {
      dispatch({ type: "SHOW_DETAIL", payload: res });
    });
};
export const showTemperaments = () => dispatch => {
  return fetch("http://localhost:3001/temperaments")
    .then(res => res.json())
    .then(res => {
      dispatch({ type: "SHOW_TEMPS", payload: res });
    });
};

export const showBreeds = () => dispatch => {
  return fetch("http://localhost:3001/breeds")
    .then(res => res.json())
    .then(res => {
      dispatch({ type: "SHOW_BREEDS", payload: res });
    });
};

export const getCreated = () => dispatch => {
  return fetch("http://localhost:3001/dogs/created")
    .then(res => res.json())
    .then(res => {
      dispatch({ type: "GET_CREATED", payload: res });
    });
};

export const postDog = payload => async dispatch => {
  try {
    const res = await axios.post("http://localhost:3001/dogs", payload);
    return dispatch({ type: "POST_DOG", payload: res.data });
  } catch {
    return console.log(payload);
  }
};

export const getFiltered = payload => {
  return { type: "GET_FILTERED", payload };
};

export const clearDetail = () => {
  return { type: "CLEAR_DETAIL" };
};

export const clearFilter = () => {
  return { type: "CLEAR_FILTER" };
};
