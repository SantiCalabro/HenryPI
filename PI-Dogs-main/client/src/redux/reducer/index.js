const initialState = {
  showDogs: [],
  filteredDogs: [],
  dogDetail: {},
  showTemperaments: [],
  showBreeds: [],
  created: [],
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
    case "POST_DOGS":
      return {
        ...state,
        created: action.payload,
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
    default:
      return state;
  }
}

export default rootReducer;
