const initialState = {
  showDogs: [],
  filteredDogs: [],
  dogDetail: {},
  showTemperaments: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_DOGS":
      return {
        ...state,
        showDogs: action.payload,
      };
    case "SHOW_DETAIL":
      return {
        ...state,
        showDogs: action.payload,
      };
    case "SHOW_TEMPS":
      return {
        ...state,
        showTemperaments: action.payload,
      };

    case "GET_FILTERED":
      return {
        ...state,
        filteredDogs: action.payload,
      };

    case "CREATE_DOG":
      return {
        ...state,
        showDogs: [...state.showDogs, ...action.payload],
      };

    case "CLEAR_DOGS":
      return {
        ...state,
        showDogs: {},
      };
    default:
      return state;
  }
}

export default rootReducer;
