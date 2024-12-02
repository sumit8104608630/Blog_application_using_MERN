import { createSlice } from "@reduxjs/toolkit";
import {fetch_like} from "./actionFetch.js"

const initalState={
isLoading:true,
all_like:[],
error:null,
}


export const like_slice=createSlice({
    name:"like",
    initialState:initalState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetch_like.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(fetch_like.fulfilled,(state,action)=>{
            state.isLoading=false
            state.all_like=action.payload
        })
        .addCase(fetch_like.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        })
        
    }
})


export default like_slice.reducer;