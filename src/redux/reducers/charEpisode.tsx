import {
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
} from "../../types/ReduxTypes";

const initialState = {
  charAndEpisode: [],
};

const charAndEpisodeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CHARACTER_SUCCESS:
      console.log("state", state);
      return {
        ...state,
        charAndEpisode: action.payload,
      };
    default:
      return state;
  }
};

export default charAndEpisodeReducer;
