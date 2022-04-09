import { combineEpics } from "redux-observable";

import profileEpic from "@/redux/profile/epic";
import mapEpic from "@/redux/map/epic";
const rootEpic = combineEpics(profileEpic, mapEpic);

export default rootEpic;
