import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTeachers} from "../../../firebase";

export const getAllTeachers = createAsyncThunk("teachers/getAllTeachers", async (_, thunkApi) => {
  try {
    const data = await getTeachers();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
