export const showDogs = () => dispatch => {
  return fetch("https://api.thedogapi.com/v1/breeds")
    .then(res => res.json())
    .then(res => {
      dispatch({ type: "SHOW_DOGS", payload: res });
    });
};
