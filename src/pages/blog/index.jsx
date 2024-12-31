import { useState, useEffect } from "react";
import useFetch from "../../hooks/get";
import Image from "./components/image";
import Info from "./components/info";
import Extra from "./components/extra";
import { motion } from "framer-motion";
import { setBlogs } from "../../store/blog/actions/actions";
import { useBlogs } from "../../store/hooks/hooks";
import Spinner from "../../components/spinner";

const container = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};
const item = {
    hidden: {
        opacity: 0,
        translateY: 20,
    },
    visible: {
        opacity: 1,
        translateY: 0,
    },
};

const Blog = () => {
    const blogs = useBlogs();
    const { data, loading } = useFetch(`blog`);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    useEffect(() => {
        if (data) {
            setBlogs(data);
            setFilteredBlogs(data.blogs || []); // Initialize filtered blogs
        }
    }, [data]);

    useEffect(() => {
        if (data && data.blogs) {
            const filtered = data.blogs.filter((blog) =>
                blog.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredBlogs(filtered);
        }
    }, [searchTerm, data]);

    if (loading) {
        return <Spinner />;
    }

    return data && data.blogs ? (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center w-full mt-16 min-h-screen px-4 sm:px-8 lg:px-16"
        >
            
            <div className="mb-8 w-full max-w-2xl">
                <input
                    type="text"
                    placeholder="Blog ismi ile aratın..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="grid
                           grid-cols-1
                           sm:grid-cols-2
                           md:grid-cols-2
                           lg:grid-cols-3
                           xl:grid-cols-4
                           gap-4 sm:gap-6 md:gap-8 lg:gap-10
                           w-full
                           place-items-center
                           mb-16"
            >
                {filteredBlogs
                    .slice()
                    .reverse()
                    .map((blog, index) => (
                        <motion.div
                            variants={item}
                            key={index}
                            className="flip-card"
                        >
                            <div className="flip-card-inner">
                                <div className="flex flex-col items-center justify-between p-4 bg-[#e8e4d8] border rounded-lg shadow-md flip-card-front">
                                    <Image blog={blog} />
                                    <Info blog={blog} />
                                </div>
                                <Extra blog={blog} data={data} />
                            </div>
                        </motion.div>
                    ))}
            </motion.div>
        </motion.div>
    ) : (
        <div className="flex justify-center items-center min-h-screen">
            <p className="text-xl font-semibold text-gray-700">Veriler alınamadı.</p>
        </div>
    );
};

export default Blog;
