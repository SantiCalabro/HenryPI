const initialState = {
  showDogs: [],
  filteredDogs: [],
  dogDetail: {},
  showTemperaments: [],
  showBreeds: [],
  created: [],
  error: {},
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
        dogDetail: action.payload,
      };
    case "SHOW_BREEDS":
      return {
        ...state,
        showBreeds: action.payload,
      };
    case "SHOW_TEMPS":
      return {
        ...state,
        showTemperaments: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: "error",
      };
    case "GET_FILTERED":
      return {
        ...state,
        filteredDogs: action.payload,
      };

    case "GET_CREATED":
      return {
        ...state,
        created: action.payload,
      };

    case "CREATE_DOG":
      return {
        ...state,
        showDogs: [...state.showDogs, ...action.payload],
      };

    case "CLEAR_DOGS":
      return {
        ...state,
        showDogs: [],
      };
    case "CLEAR_DETAIL":
      return {
        ...state,
        dogDetail: [],
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        filteredDogs: [],
      };
    default:
      return state;
  }
}

export default rootReducer;
