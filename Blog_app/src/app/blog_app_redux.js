import { createSlice } from "@reduxjs/toolkit";
import { fetchUser ,all_user} from "./actionFetch";

const initialState = {
  isLogIn: false,
  userInfo: null,
  all_users:[],
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

      //for all user collection 
      builder
      .addCase(all_user.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(all_user.fulfilled, (state, action) => {
        state.isLoading = false;
        state.all_users = action.payload;
      })
      .addCase(all_user.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
