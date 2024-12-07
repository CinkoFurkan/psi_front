import useFetch from "../../hooks/get";
import Image from "./components/image";
import Info from "./components/info";
import Extra from "./components/extra";
import { motion } from "framer-motion";
import { setBlogs } from "../../store/blog/actions/actions";
import { useBlogs } from "../../store/hooks/hooks";
import { useEffect } from "react";

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
    const { data } = useFetch(`blog`);

    useEffect(() => {
        if (data) {
            setBlogs(data);
        }
    }, [data]);

    return data && data.blogs ? (
        <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex flex-col items-center w-full mt-16 min-h-screen px-4 sm:px-8 lg:px-16"
>
    <h1 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
        Bloglar
    </h1>

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
        {data.blogs
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

    ) : null;
};

export default Blog;
