import {AiFillLike} from "react-icons/ai";
import {FaEye} from "react-icons/fa";
import {useState, useEffect} from "react";
import {useCookies} from "react-cookie";
import toast from "react-hot-toast";

export default function LikesViews({data, incremenetLikes, blogID}) {

    const [cookies, setCookie] = useCookies(['likedBlogs']);
    const [likes, setLikes] = useState(data.blogs?.likes_count || 0);
    const [views, setViews] = useState(data.blogs?.views_count || 0);

    useEffect(() => {
        setLikes(data.blogs?.likes_count || 0);
        setViews(data.blogs?.views_count || 0);
    }, [data]);

    const handleLike = () => {
        const likedBlogs = cookies.likedBlogs || [];
        const isLiked = likedBlogs.includes(blogID);

        let newLikes;

        if (isLiked) {
            newLikes = likes - 1;
            setLikes(newLikes);
            const updatedLikedBlogs = likedBlogs.filter(id => id !== blogID);
            setCookie('likedBlogs', updatedLikedBlogs, {path: '/', maxAge: 3600 * 24 * 7});
            toast.success("Beğeni geri alındı.");
        } else {
            newLikes = likes + 1;
            setLikes(newLikes);
            const updatedLikedBlogs = [...likedBlogs, blogID];
            setCookie('likedBlogs', updatedLikedBlogs, {path: '/', maxAge: 3600 * 24 * 7});
            toast.success("Blog beğenildi.");
        }

        incremenetLikes(blogID, newLikes, views);
    };

    return (
        <div className="flex space-x-6">
            <span onClick={handleLike} className="flex items-center cursor-pointer transition-colors duration-300">
                <AiFillLike
                    className={`text-lg mr-1 ${cookies.likedBlogs?.includes(blogID) ? "text-blue-700" : "text-gray-600"}`}/>
                <span className="font-semibold">{likes}</span>
            </span>
            <span className="flex items-center text-gray-600">
                <FaEye className="w-5 h-5 mr-1"/>
                <span className="font-semibold">{views}</span>
            </span>
        </div>
    );
}
