import useFetch from '../../../../hooks/get';
import SingleTeam from "./components/single-team";
import { motion } from "framer-motion";
import Spinner from "../../../../components/spinner";

const Cards = () => {
    const { data: teamData, loading } = useFetch('team');

    if (loading) {
        return (
            <Spinner/>
        );
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <SingleTeam teamData={teamData} />
        </motion.div>
    );
};

export default Cards;
