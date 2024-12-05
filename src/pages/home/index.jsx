import About from "./components/about";
import Announcement from "./components/announcement";
import Events from "./components/events";
import Subscription from "./components/subscribe";
import {useLoading} from "../../store/hooks/hooks";
import {motion} from "framer-motion";

const Home = () => {

    const loading = useLoading()

    return (
        <motion.div initial={{opacity : 0}} animate={{opacity : 1}}>
            <About/>
            <Announcement/>
            <Events/>
            {!loading && <Subscription/>}
        </motion.div>
    );
};

export default Home;
