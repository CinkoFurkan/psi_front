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
  const [blogSearchTerm, setBlogSearchTerm] = useState("");
  const [selectedWriter, setSelectedWriter] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    if (data && data.blogs) {
      setBlogs(data);
      setFilteredBlogs(data.blogs);

      const uniqueWriters = Array.from(
        new Set(data.blogs.map((blog) => `${blog.writer_f} ${blog.writer_l}`))
      );

      // Sort writers alphabetically
      const sortedWriters = uniqueWriters.sort((a, b) => a.localeCompare(b));

      setWriters(sortedWriters);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.blogs) {
      const filtered = data.blogs.filter((blog) => {
        const matchesBlogTitle = blog.title
          .toLowerCase()
          .includes(blogSearchTerm.toLowerCase());
        const matchesWriter =
          selectedWriter === "" ||
          `${blog.writer_f} ${blog.writer_l}` === selectedWriter;
        return matchesBlogTitle && matchesWriter;
      });
      setFilteredBlogs(filtered);
    }
  }, [blogSearchTerm, selectedWriter, data]);

  if (loading) {
    return <Spinner />;
  }

  if (!data || !data.blogs) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold text-gray-700">
          Veriler alınamadı.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center w-full mt-16 min-h-screen px-4 sm:px-8 lg:px-16"
    >
      {/* Search Section */}
      <div className="flex flex-col gap-4 mb-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* Blog Search Bar */}
        <input
          type="text"
          placeholder="Blog başlığı ile arayın..."
          value={blogSearchTerm}
          onChange={(e) => setBlogSearchTerm(e.target.value)}
          className="w-full p-3 text-sm border rounded-lg shadow-md focus:ring-2 focus:ring-primary focus:outline-none"
        />

        {/* Writer Selection Dropdown */}
        <div className="relative w-full">
          <select
            value={selectedWriter}
            onChange={(e) => setSelectedWriter(e.target.value)}
            className="w-full p-2 text-xs sm:text-sm border rounded-lg shadow-md focus:ring-2 focus:ring-primary focus:outline-none bg-white appearance-none pr-10"
          >
            <option value="">Tüm Yazarlar</option>
            {writers.map((writer, index) => (
              <option key={index} value={writer}>
                {writer}
              </option>
            ))}
          </select>

          {/* Custom Dropdown Arrow */}
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Filtered Blogs */}
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
            <motion.div variants={item} key={index} className="flip-card">
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
  );
};

export default Blog;
