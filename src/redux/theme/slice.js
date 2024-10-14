import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  theme: "",
  colorTheme: "green",
};

const sliceTheme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setColorTheme: (state, action) => {
      state.colorTheme = action.payload;
    },
  },
});

export const {setTheme, setColorTheme} = sliceTheme.actions;
export const themeReducer = sliceTheme.reducer;
