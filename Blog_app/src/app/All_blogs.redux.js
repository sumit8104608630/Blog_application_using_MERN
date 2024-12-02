import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBlogs,
  user_fetchBlogs,
  updateBlogs,
  deleteBlogs
} from "./actionFetch.js"



//let's create redux for  blog handling for all pages

const blog_initialState={
    all_blog:[],//all blogs
    user_blog:[],//all blogs of specific user
    categories:[],
    authors:[],
    isLoading:true,
    error:null
  };

export const blog_manipulations_slice=createSlice({
    name:"blogManipulation",
    initialState:blog_initialState,
    reducers:{
      addBlog: (state, action) => {
        state.blogs.push(action.payload); // Adds a new blog to the blogs array
      },
      
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchBlogs.pending,(state)=>{
            state.isLoading=true,
            state.error=null
        })
        .addCase(fetchBlogs.fulfilled,(state,action)=>{
            state.isLoading=false
            state.all_blog= action.payload.all_blogs;
        })
        .addCase(fetchBlogs.rejected, (state, action) => {
            state.isLoading = false; // set loading to false if there's an error
            state.error = action.payload; // store the error message
          });

          //fetch for particular user
          builder
          .addCase(user_fetchBlogs.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(user_fetchBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user_blog = action.payload;
          })
          .addCase(user_fetchBlogs.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });
        // for updating
        builder
        .addCase(updateBlogs.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(updateBlogs.fulfilled, (state, action) => {
          state.isLoading=false;
          const index=state.blogs.findIndex((blog)=>blog._id===action.payload._id);
          if(index!=-1){
            state.blogs[index]=action.payload;
          } 
        })
        .addCase(updateBlogs.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
        
        // for deleting 
        builder
        .addCase(deleteBlogs.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(deleteBlogs.fulfilled, (state, action) => {
          state.isLoading=false;
          state.blogs=state.blogs.filter((blog)=>blog._id!==action.payload);

        })
        .addCase(deleteBlogs.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
    
})


export default blog_manipulations_slice.reducer