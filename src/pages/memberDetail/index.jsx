import { useParams } from "react-router-dom";
import useFetch from "../../hooks/get";
import Image from "./components/image";
import UserInfo from "./components/user-info";
import Biograhpy from "./components/biograhpy";
import Contact from "./components/contact";
import { motion } from "framer-motion";
import Spinner from "../../components/spinner";

const MemberDetail = () => {
    const { id } = useParams();
    const { data, loading} = useFetch(`member/${id}`);
    const {
        first_name,
        last_name,
        team,
        title_member,
        university,
        bio,
        linked_in,
        email,
        image,
    } = data?.member || {};

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen p-8">
            {loading ? (
                <Spinner/>
            ) : data?.member ? (
                <div className="p-8 bg-[#F1F1E9] shadow-lg rounded-lg mt-24">
                    <div className="flex flex-col lg:flex-row justify-between gap-8">
                        <div className="w-full lg:w-1/3">
                            <Image image={image} />
                            <UserInfo
                                first_name={first_name}
                                last_name={last_name}
                                team={team}
                                title_member={title_member}
                                university={university}
                            />
                        </div>
                        <div className="w-full lg:w-2/3">
                            <Biograhpy bio={bio} />
                            <Contact email={email} linked_in={linked_in} />
                        </div>
                    </div>
                </div>
            ) : (
                // Veri Yok Durumu
                <div className="flex justify-center items-center min-h-screen">
                    <p className="text-xl font-semibold text-gray-700">
                        Üzgünüz, üye bilgisi bulunamadı.
                    </p>
                </div>
            )}
        </motion.div>
    );
};

export default MemberDetail;
