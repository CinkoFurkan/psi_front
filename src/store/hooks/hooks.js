import {useSelector} from "react-redux";

export const useBlogs = () => useSelector((state) => state.blog.blogs)
export const useLoading = () => useSelector((state) => state.loading.loadingCount)
export const useCookie = () => useSelector((state) => state.cookie.cookies)