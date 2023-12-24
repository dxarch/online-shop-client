import { createSlice } from "@reduxjs/toolkit";

import { fetchLogin, fetchRegister } from "./auth.actions";

type InitialStateDto = {
  token: string;
  errors: {
    token: string | null;
  };
  pending: {
    token: boolean;
  };
};

const initialState = {
  token: "",
  errors: {
    token: null,
  },
  pending: {
    token: false,
  },
} as InitialStateDto;

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
    },
    clearErrors: (state) => {
      state.errors.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.pending.token = false;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.pending.token = true;
        state.token = action.payload;
      })
      .addCase(
        fetchLogin.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.token = false;
          state.token = "";
          state.errors.token = action.payload;
        }
      );

    builder
      .addCase(fetchRegister.pending, (state) => {
        state.pending.token = false;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.pending.token = true;
        state.token = action.payload;
      })
      .addCase(
        fetchRegister.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.token = false;
          state.token = "";
          state.errors.token = action.payload;
        }
      )
      .addDefaultCase(() => {});
  },
});
const { actions, reducer } = authSlice;
export default reducer;
export const { logout, clearErrors } = authSlice.actions;
export { fetchLogin };
