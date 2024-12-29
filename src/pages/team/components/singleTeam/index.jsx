import { useNavigate } from "react-router-dom";
import Image from "../image";
import Info from "../info";
import { motion } from "framer-motion";

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

const SingleTeam = ({ title, members }) => {
  const navigate = useNavigate();

  const handleMemberClick = (id) => {
    navigate(`/member/${id}`);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="p-10 text-center"
    >
      <h1 className="mb-8 text-4xl font-bold text-gray-800">{title}</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
          <motion.div
            variants={item}
            key={index}
            className="p-5 bg-[#f1f1e9] border border-gray-200 rounded-lg shadow-lg w-72 cursor-pointer"
            onClick={() => handleMemberClick(member.member_id)}
          >
            <div className="flex flex-col items-center">
              <Image member={member} />
              <Info member={member} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SingleTeam;
