import commonRoot from "./commonReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  common: commonRoot,
});

export default appReducer;
