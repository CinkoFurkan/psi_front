import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="flex items-center space-x-4 justify-center">
      <a
        href="https://www.instagram.com/psinouss?igsh=M2J3bG95czFhdWVy"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#bc090b] transition duration-200"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.linkedin.com/company/psinous/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#0b65c2] transition duration-200"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default Social;
