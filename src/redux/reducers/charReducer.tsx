import { FETCH_CHARACTER_SUCCESS } from "../index";

const initialState = {
  charAndEpisode: [],
};

const charReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        charAndEpisode: action.payload,
      };
    default:
      return state;
  }
};

export default charReducer;
