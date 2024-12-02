import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./blog_app_redux";
import blog_reducer from "./All_blogs.redux" // Adjust the path accordingly


const store = configureStore({
    reducer: {
        authenticate: authenticationReducer,
        blogs:blog_reducer,
    }
});

export default store;
 