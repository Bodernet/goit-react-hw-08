import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import {
  setToken,
  clearToken,
  requestGetCurrentUser,
  requestLogOut,
  requestSignIn,
  requestSignUp,
} from "../../services/api";

export const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignUp(formData);
      console.log(data);
      return data;
    } catch (err) {
      console.log("Not valid email or password");
      toast.error("This email address is already in use!");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignIn(formData);
      return data;
    } catch (err) {
      toast.error("You are not registered.");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiLogoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await requestLogOut();
      clearToken();
      return;
    } catch (err) {
      toast.error("Oooops... Try again later!.");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setToken(token);
    try {
      const data = await requestGetCurrentUser();
      return data;
    } catch (err) {
      toast.error("Oooops... Try again later!");
      return thunkAPI.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);
