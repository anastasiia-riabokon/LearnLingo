import {createAsyncThunk} from "@reduxjs/toolkit";
import {createdUser, loginUser} from "../../../firebase";

export const signUpUser = createAsyncThunk("newUser/signUp", async (credentials, thunkApi) => {
  try {
    const data = await createdUser(credentials);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const signInUser = createAsyncThunk("user/signIn", async (credentials, thunkApi) => {
  try {
    const data = await loginUser(credentials);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
