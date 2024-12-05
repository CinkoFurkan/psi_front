import useFetch from '../../../../hooks/get';
import SingleTeam from "./components/single-team";
import { motion } from "framer-motion";

const Cards = () => {
    const { data: teamData } = useFetch('team');

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <SingleTeam teamData={teamData} />
        </motion.div>
    );
};

export default Cards;
