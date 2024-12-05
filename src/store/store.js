import {configureStore} from "@reduxjs/toolkit";
import blog from "./blog/slice/slice"
import loading from "./loading/slice/slice";
import cookie from "./cookie/slice/slice"

const store = configureStore({
    reducer: {
        blog,
        loading,
        cookie
    }
})

export default store