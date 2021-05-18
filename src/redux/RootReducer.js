import { combineReducers } from "redux";
import charReducer from "./reducers/charEpisode";

const rootReducer = combineReducers({
  data: charReducer,
});

export default rootReducer;
