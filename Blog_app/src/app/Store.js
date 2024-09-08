import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./blog_app_redux"; // Adjust the path accordingly

const store = configureStore({
    reducer: {
        authenticate: authenticationReducer
    }
});

export default store;
 