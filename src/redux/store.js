import {configureStore} from "@reduxjs/toolkit";
import {teacherReducer} from "./teachers/slice";
import {authReducer} from "./auth/slice";

export const store = configureStore({
  reducer: {
    teachers: teacherReducer,
    auth: authReducer,
  },
});
