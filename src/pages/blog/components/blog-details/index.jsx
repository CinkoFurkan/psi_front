import {useParams} from "react-router-dom";
import useFetch from "../../../../hooks/get";
import BackgroundImage from "./components/background-image";
import Header from "./components/title";
import Body from "./components/body";
import BlogWriter from "./components/blog-writer";
import LikesViews from "./components/likes-views";
import {motion} from "framer-motion";
import Spinner from "../../../../components/spinner";
import {useCallback, useEffect} from "react";
import {increaceLikesAPI} from "../../../../store/blog/api/api";

export default function BlogDetails() {
    const {id: blogID} = useParams();
    const {data, loading} = useFetch(`blog/${blogID}`); 

    const incremenetLikes = async (id, newLike, newViews) => {
        await increaceLikesAPI(id, newLike, newViews);
    };

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}}
                    className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <BackgroundImage data={data} />
                    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg -mt-60">
                        <div className="p-5 sm:p-10">
                            <Header data={data} />
                            <Body data={data} />

                            <footer className="mt-10 flex justify-between items-center text-gray-700 text-sm border-t pt-4">
                                <BlogWriter data={data} />
                                <LikesViews data={data} incremenetLikes={incremenetLikes} blogID={blogID} />
                            </footer>
                        </div>
                    </div>
                </>
            )}
        </motion.div>
    );
}
