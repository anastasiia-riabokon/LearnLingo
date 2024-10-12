import {createSlice} from "@reduxjs/toolkit";
import {getAllTeachers} from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  errorMS: null,
};

const sliceTeachers = createSlice({
  name: "teachers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllTeachers.pending, (state) => {
        state.isLoading = true;
        state.errorMS = null;
      })
      .addCase(getAllTeachers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.errorMS = null;
      })
      .addCase(getAllTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMS = action.payload;
      });
  },
});

export const teacherReducer = sliceTeachers.reducer;
