import { combineReducers } from "redux";
import launchesReducer from "./launchesReducer";

const rootReducer = combineReducers({
  objLaunches: launchesReducer,
});

export default rootReducer;
