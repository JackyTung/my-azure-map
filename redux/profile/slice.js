import { createSlice, createAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const hydrate = createAction(HYDRATE);

const initialState = { name: "", email: "" };

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    fetchProfile: (state, action) => {},
    fetchProfileSuccess: (state, action) => {
      const { name, email } = action.payload;
      state.name = name || "";
      state.email = email || "";
    },
    fetchProfileRejected: (state, action) => {
      return state;
    },
    fetchProfileCancelled: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => ({
      ...state,
      ...action.payload.profile,
    }));
  },
});

export const {
  fetchProfile,
  fetchProfileSuccess,
  fetchProfileRejected,
  fetchProfileCancelled,
} = slice.actions;

export default slice.reducer;
