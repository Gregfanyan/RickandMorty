import { combineReducers } from "redux";
import charReducer from "./reducers/charReducer";

const rootReducer = combineReducers({
  data: charReducer,
});

export default rootReducer;
