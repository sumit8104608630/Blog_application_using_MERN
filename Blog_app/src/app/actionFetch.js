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

// always remember without action unique action it will not work
//for all users blogs
export const user_fetchBlogs=createAsyncThunk(
  'blog_/user_fetchBlogs',  // Action type name
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


// all blogs of all user
 export const fetchBlogs = createAsyncThunk(
  'blog_/fetchBlogs',  // Action type name
  async (_, { rejectWithValue }) => {
    try {
      const all_blogs = await fetch("http://localhost:9000/blog/all_blog", {
        method: "GET",
        credentials: 'include'
      });

      const response = await all_blogs.json();
      if (response) {
        return response; // Ensure the response is the expected structure (check console log of the response)
      } else {
        return rejectWithValue("No blogs data found");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


//updated blogs
export const updateBlogs = createAsyncThunk(
  'blogs/updateBlog', // Action type
  async (post_id, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:9000/blog/update/${post_id}`, {
        method: 'PUT', // Correct method for updating a blog
        credentials: 'include', // Assuming cookies are needed for auth
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        return data; // Successfully updated blog, return the updated data
      } else {
        return rejectWithValue(data.message || 'Failed to update the blog'); // Pass the error message if not successful
      }
    } catch (error) {
      return rejectWithValue(error.message); // Handle network errors
    }
  }
);

// for deleting specific blog of user
export const deleteBlogs = createAsyncThunk(
  'blogs/deleteBlog', // Action type for deleting a blog
  async (post_id, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:9000/blog/delete/${post_id}`, {
        method: 'DELETE', // Correct method for deleting a blog
        credentials: 'include', // Assuming cookies are needed for auth
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return post_id // Successfully deleted blog, return the response (no need to wrap in json() here)
      } else {
        const errorResponse = await response.json(); // Parse the error response
        return rejectWithValue(errorResponse || 'Failed to delete the blog'); // Pass the error message
      }
    } catch (error) {
      return rejectWithValue(error.message); // Handle network errors
    }
  }
);


export const fetch_like=createAsyncThunk(
  'like/all_like',  // Action type name
  async(_,{rejectWithValue})=>{
    try{

      const all_blogs=await fetch("http://localhost:9000/blog_like/all_like",{
        method:"GET",
        credentials: 'include'
      })

      const response=await all_blogs.json();
      if(response){
        return response;
      }else{
        return rejectWithValue("no like");
      }
    }
    catch(error){
      return rejectWithValue(error.message);
    }
  }
);
