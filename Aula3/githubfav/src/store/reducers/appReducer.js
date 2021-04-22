import commonRoot from "./commonReducer";
import { combineReducers } from "redux";

const postmatchAppReducer = combineReducers({
  common: commonRoot,
});

export default postmatchAppReducer;
