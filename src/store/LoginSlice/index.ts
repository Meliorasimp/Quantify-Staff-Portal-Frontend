import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";
import { type LoginType } from "../../types/login";

const initialLoginState: LoginType = {
  loginemail: "",
  loginpassword: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    setLoginEmail(state, action: PayloadAction<string>) {
      state.loginemail = action.payload;
    },
    setLoginPassword(state, action: PayloadAction<string>) {
      state.loginpassword = action.payload;
    },
    clearLoginState(state) {
      state.loginemail = "";
      state.loginpassword = "";
    },
  },
});

export const { setLoginEmail, setLoginPassword, clearLoginState } =
  loginSlice.actions;
export const loginReducer = loginSlice.reducer;
