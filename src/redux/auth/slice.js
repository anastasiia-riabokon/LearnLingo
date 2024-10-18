import {createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {currentUser, signInUser, signOutUser, signUpUser} from "./operations";

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
      .addCase(signOutUser.fulfilled, () => {
        return initialState;
      })
      .addMatcher(isPending, (state) => {
        state.isLoading = true;
        state.errorMS = null;
      })
      .addMatcher(isFulfilled, (state) => {
        state.isLoading = false;
        state.errorMS = null;
      })
      .addMatcher(isRejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.errorMS = action.payload;
      });
  },
});

export const authReducer = sliceAuth.reducer;
