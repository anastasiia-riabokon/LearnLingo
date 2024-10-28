import {createAsyncThunk} from "@reduxjs/toolkit";
import {filterTeachers} from "../../../firebase";

export const getFilterTeachers = createAsyncThunk(
  "teachers/filter",
  async (credential, thunkApi) => {
    const {page, limit, filter} = credential;
    try {
      const data = await filterTeachers(page, limit, filter);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
