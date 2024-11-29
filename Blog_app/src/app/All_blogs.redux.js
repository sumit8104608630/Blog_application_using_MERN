import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBlogs,
  fetchBlog,
  fetchCategories,
  fetchUserBlogs,
  fetchAuthors,
} from "./actionFetch.js"



//let's create redux for  blog handling for all pages

const blog_initialState={
    blogs:[],//all blogs
    user_blog:[],//all blogs of specific user
    authors:[],//all user or you can say all authors 
    business:[],// all post related to business
    agriculture:[],// all post related to agriculture
    education:[],// all post related to education
    art:[],// all post related to art
    weather:[],// all post related to weather
    nature:[],// all post related to nature
    friend:[],// all post related to art
    isLoading:true,
    error:null
  };

export const blog_manipulations_slice=createSlice({
    name:"blogManipulation",
    initialState:blog_initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchBlogs.pending,(state)=>{
            state.isLoading=true,
            state.error=null
        })
        .addCase(fetchBlog.fulfilled,(state,action)=>{
            state.isLoading=false
            state.blogs=action.payload
        })
        .addCase(fetchBlogs.rejected, (state, action) => {
            state.isLoading = false; // set loading to false if there's an error
            state.error = action.payload; // store the error message
          });

          //fetch for particular user
          builder
          .addCase(fetchUserBlogs.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(fetchUserBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user_blog = action.payload;
          })
          .addCase(fetchUserBlogs.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });

        // fetch for particular categories
        builder
        .addCase(fetchCategories.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
          state.isLoading = false;
          state.business = action.payload.business;
          state.agriculture = action.payload.agriculture;
          state.education = action.payload.education;
          state.art = action.payload.art;
          state.weather = action.payload.weather;
          state.nature = action.payload.nature;
          state.friend = action.payload.friend;
        })
        .addCase(fetchCategories.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
         
        // fetch for all author user
        builder
        .addCase(fetchAuthors.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchAuthors.fulfilled, (state, action) => {
          state.isLoading = false;
          state.authors = action.payload;
        })
        .addCase(fetchAuthors.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
    
})


export default blog_manipulations_slice.reducer