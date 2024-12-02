import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./blog_app_redux";
import blog_reducer from "./All_blogs.redux" // Adjust the path accordingly
import like_reducer from "./all_like"

const store = configureStore({
    reducer: {
        authenticate: authenticationReducer,
        blogs:blog_reducer,
        like:like_reducer
    }
});

export default store;
 