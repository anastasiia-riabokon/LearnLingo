import {configureStore} from "@reduxjs/toolkit";
import {teacherReducer} from "./teachers/slice";

export const store = configureStore({
  reducer: {
    teachers: teacherReducer,
  },
});
