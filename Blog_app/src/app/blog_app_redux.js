import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./actionFetch";

const initialState = {
  isLogIn: false,
  userInfo: null,
  isLoading: true,
  error: null,
};





export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogIn = false;
      state.userInfo = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLogIn = true;
        state.userInfo = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLogIn = false;
        state.userInfo = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
