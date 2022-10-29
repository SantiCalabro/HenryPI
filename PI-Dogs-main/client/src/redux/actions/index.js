export const showDogs = () => dispatch => {
  return fetch("http://localhost:3001/dogs")
    .then(res => res.json())
    .then(res => {
      dispatch({ type: "SHOW_DOGS", payload: res });
    });
};
export const showTemperaments = () => dispatch => {
  return fetch("http://localhost:3001/temperaments")
    .then(res => res.json())
    .then(res => {
      dispatch({ type: "SHOW_TEMPS", payload: res });
    });
};

export const showDetail = id => dispatch => {
  return fetch(`http://localhost:3001/dogs/${id}`)
    .then(res => res.json())
    .then(res => {
      dispatch({ type: "SHOW_DETAIL", payload: res });
    });
};

export const getFiltered = payload => {
  return { type: "GET_FILTERED", payload };
};
