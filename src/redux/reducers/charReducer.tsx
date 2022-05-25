import { FETCH_CHARACTER_SUCCESS } from "../index";

const initialState = {
  charAndEpisode: [],
};

const charReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CHARACTER_SUCCESS:
      console.log("state1 :>> ", action);
      return {
        ...state,
        charAndEpisode: action.payload,
      };
    default:
      console.log("state2 :>> ", action);
      return state;
  }
};

export default charReducer;
