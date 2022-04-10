import { combineReducers } from "redux";

import profile from "@/redux/profile/slice";
import map from "@/redux/map/slice";

const rootReducer = combineReducers({
  profile,
  map,
});

export default rootReducer;
