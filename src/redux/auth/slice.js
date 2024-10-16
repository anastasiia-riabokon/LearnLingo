import {createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {currentUser, logoutUser, signInUser, signUpUser} from "./operations";

const initialState = {
  user: null,
  isLoading: false,
  errorMS: null,
  token: null,
  isLoggedIn: false,
  isCurrent: false,
};

const sliceAuth = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      })
      .addMatcher(isPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(isFulfilled, (state) => {
        state.isLoading = false;
      })
      .addMatcher(isRejected, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = sliceAuth.reducer;
