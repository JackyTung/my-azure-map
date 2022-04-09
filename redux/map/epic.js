import { combineEpics, ofType } from "redux-observable";

import { of, from } from "rxjs";
import { catchError, map, mergeMap, takeUntil } from "rxjs/operators";

import {
  searchAddressRequest,
  searchAddressSuccess,
  searchAddressRejected,
  searchAddressCancelled,
} from "./slice";

import { searchAddress } from "@/apis/map";

const searchAddressEpic = (action$) =>
  action$.pipe(
    ofType(searchAddressRequest.type),
    mergeMap((action) => {
      const { query } = action.payload;
      return from(searchAddress({ query })).pipe(
        map((response) => {
          return searchAddressSuccess(response);
        }),
        takeUntil(action$.pipe(ofType(searchAddressRejected.type))),
        catchError((error) => of(searchAddressCancelled(error)))
      );
    })
  );

const epics = combineEpics(searchAddressEpic);

export default epics;
