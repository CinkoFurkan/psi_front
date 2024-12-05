import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import Button from "../../../../components/button";
import {increaseViewsAPI} from "../../../../store/blog/api/api";

const Extra = ({ blog }) => {
    const [cookies, setCookie] = useCookies(['viewedBlogs']);

    const handleView = () => {
        const viewedBlogs = cookies.viewedBlogs || [];
        const isViewed = viewedBlogs.includes(blog.blog_id);

        const updatedViewedBlogs = [...viewedBlogs, blog.blog_id];
        setCookie('viewedBlogs', updatedViewedBlogs, { path: '/', maxAge: 3600 * 24 * 7 });

        increaseViewsAPI(blog.blog_id, blog.likes_count, blog.views_count + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 flip-card-back">
            <p className="text-sm">{blog.short_text}</p>
            <Button
                as={Link}
                to={`/blog/${blog.blog_id}`}
                variant="primary"
                size="normal"
                onClick={handleView}
            >
                Daha Fazla
            </Button>
        </div>
    );
};

export default Extra;
