import $api from "../../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {LoginInterface} from "../types/login.interface";
import {RegisterInterface} from "../types/register.interface";

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (data: LoginInterface, { rejectWithValue }) => {
    try {
      const response = await $api.post(`/auth/login`, data);
      return response.data.token;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message as string);
    }
  }
);

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (data: RegisterInterface, { rejectWithValue }) => {
    try {
      const response = await $api.post(`/auth/register`, data);
      return response.data.token;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message as string);
    }
  }
);
