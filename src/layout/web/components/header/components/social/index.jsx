import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex items-center space-x-4 justify-center">
      <a
        href="https://www.instagram.com/psinouss?igsh=M2J3bG95czFhdWVy"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#E4405F] transition duration-200"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.linkedin.com/company/psinous/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#0077B5] transition duration-200"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://open.spotify.com/user/3126njltvzlkng7sbchrx4hc7hei?si=9Xfi6zjqQdiodfD_Ce5FiQ"  
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#1DB954] transition duration-200"  
      >
        <FaSpotify size={24} />
      </a>
    </div>
  );
};

export default Social;
