import { combineEpics } from "redux-observable";

import profileEpic from "@/redux/profile/epic";
const rootEpic = combineEpics(profileEpic);

export default rootEpic;
