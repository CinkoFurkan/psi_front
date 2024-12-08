import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

const Links = () => {
  return (
    <div className="flex flex-col items-center space-y-3 md:space-y-4 md:flex-col md:space-x-0 md:items-center">
      <a
        href="mailto:psinousogrencitoplulugu@gmail.com"
        className="text-sm text-white hover:text-white font-semibold transition-all duration-300 hover:underline hover:text-shadow-lg md:order-first"
      >
        psinousogrencitoplulugu@gmail.com
      </a>

      <div className="flex space-x-4 md:mt-6">
        <a
          href="https://www.instagram.com/psinouss?igsh=M2J3bG95czFhdWVy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E4405F] transition duration-200"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://www.linkedin.com/company/psinous/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0077B5] transition duration-200"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://open.spotify.com/user/3126njltvzlkng7sbchrx4hc7hei?si=9Xfi6zjqQdiodfD_Ce5FiQ"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#1DB954] transition duration-200"
        >
          <FaSpotify size={22} />
        </a>
      </div>
    </div>
  );
};

export default Links;
