import {configureStore} from "@reduxjs/toolkit";
import blog from "./blog/slice/slice"
import cookie from "./cookie/slice/slice"

const store = configureStore({
    reducer: {
        blog,
        cookie
    }
})

export default store