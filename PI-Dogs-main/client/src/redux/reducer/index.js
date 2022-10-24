const initialState = {
  loadedDogs: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_DOGS":
      return {
        ...state,
        loadedDogs: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
