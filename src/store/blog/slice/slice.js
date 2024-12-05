import {createSlice} from "@reduxjs/toolkit";

const blog = createSlice({
    name: "blog",
    initialState: {
        blogs: []
    },
    reducers: {
        _setBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        _setViews: (state, action) => {
            const { id, views } = action.payload;
            const blogViews = state.blogs.find((blog) => blog.blog_id === id);
            if (blogViews) {
                blogViews.views_count = views;
            }
        },
        _setLike: (state, action) => {
            const blogLikes = state.blogs?.find((blog) => blog.blog_id === action.payload);
            if (blogLikes) {
                blogLikes.likes_count += 1;
            }
        }
    }
});


export const {_setViews, _setLike, _setBlogs} = blog.actions
export default blog.reducer