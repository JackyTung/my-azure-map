import { createSlice, createAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { API_STATUS } from "@/constants/api";

const hydrate = createAction(HYDRATE);

const initialState = {
  status: API_STATUS.INITIAL,
  error: null,
};

const slice = createSlice({
  name: "map",
  initialState,
  reducers: {
    searchAddressRequest: (state, action) => {
      state.status = API_STATUS.LOADING;
    },
    searchAddressSuccess: (state, action) => {
      state.status = API_STATUS.SUCCESS;
      console.log("searchAddressSuccess", action.payload);
    },
    searchAddressRejected: (state, action) => {
      state.status = API_STATUS.ERROR;
    },
    searchAddressCancelled: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => ({
      ...state,
      ...action.payload.map,
    }));
  },
});

export const {
  searchAddressRequest,
  searchAddressSuccess,
  searchAddressRejected,
  searchAddressCancelled,
} = slice.actions;

export default slice.reducer;
