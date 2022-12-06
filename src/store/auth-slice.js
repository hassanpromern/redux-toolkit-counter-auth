import { createSlice } from "@reduxjs/toolkit";

const authIntialState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: authIntialState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
