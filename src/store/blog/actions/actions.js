import store from "../../store";
import {_setBlogs, _setLike, _setViews} from "../slice/slice";


export const setViews = views => store.dispatch(_setViews(views))
export const setLikes = id => store.dispatch(_setLike(id))
export const setBlogs = blogs => store.dispatch(_setBlogs(blogs))