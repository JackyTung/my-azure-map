import { combineReducers } from "redux";

import profile from "@/redux/profile/slice";

const rootReducer = combineReducers({
  profile,
});

export default rootReducer;
