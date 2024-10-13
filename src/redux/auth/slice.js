import {createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {signInUser, signUpUser} from "./operations";

const initialState = {
  user: null,
  isLoading: false,
  errorMS: null,
  token: null,
  isLoggedIn: false,
};

const sliceAuth = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(isPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(isFulfilled, (state) => {
        state.isLoading = false;
      })
      .addMatcher(isRejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const authReducer = sliceAuth.reducer;
