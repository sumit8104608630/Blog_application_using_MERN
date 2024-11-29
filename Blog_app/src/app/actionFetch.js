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



export const all_user = createAsyncThunk(
  'authentication/fetchAllUsers',  // Action type name
  async (_, { rejectWithValue }) => {
    try {
      const userResponse = await fetch("http://localhost:9000/user/all_user_", {
        method: 'GET',
        credentials: 'include'
      });

      const userData = await userResponse.json();
//all users
      if (userData) {
        return userData;  // Return user info to be used in the reducer
      } else {
        return rejectWithValue("No user data found");  // Handle cases where userData.user is not present
      }
    } catch (error) { 
      return rejectWithValue(error.message);  // Handle errors
    }
  }
);


//for all users blogs
export const fetchBlogs=createAsyncThunk(
  async(_,{rejectWithValue})=>{
    try{

      const all_blogs=await fetch("http://localhost:9000/blog/user_blogs",{
        method:"GET",
        credentials: 'include'
      })

      const response=await all_blogs.json();
      if(response){
        console.log(response)
        return response;
      }else{
        return rejectWithValue("No blogs data found");
      }
    }
    catch(error){
      return rejectWithValue(error.message);
    }
  }
);

//for particular category blogs
export const fetchCategories =createAsyncThunk(
  async(_,{rejectWithValue})=>{
    try{

      const all_blogs=await fetch("http://localhost:9000/blog/user_blogs",{
        method:"GET",
        credentials: 'include'
      })

      const response=await all_blogs.json();
      if(response){
        return response;
      }else{
        return rejectWithValue("No blogs data found");
      }
    }
    catch(error){
      return rejectWithValue(error.message);
    }
  }
);