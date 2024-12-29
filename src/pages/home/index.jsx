import About from "./components/about";
import Announcement from "./components/announcement";
import Events from "./components/events";
import Subscription from "./components/subscribe";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

const Home = () => {

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
            <About/>
            <Announcement/>
            <Events/>
          <Subscription />
        </motion.div>
    );
};

export default Home;
