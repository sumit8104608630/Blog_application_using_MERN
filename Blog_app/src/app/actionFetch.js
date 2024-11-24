// src/app/actionFetch.js
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  'authentication/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const userResponse = await fetch("http://localhost:9000/user/author", {
        method: 'GET',
        credentials: 'include'
      });

      const userData = await userResponse.json();

      if (userData.user) {
        return userData.user;  // Return user info to be used in the reducer
      } else {
        return rejectWithValue("No user data found");  // Handle cases where userData.user is not present
      }
    } catch (error) { 
      return rejectWithValue(error.message);  // Handle errors
    }
  }
);

