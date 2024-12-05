import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Links = () => {
  return (
    <div className="flex flex-col items-center space-y-3 md:space-y-4 md:flex-col md:space-x-0 md:items-center">
      <a 
        href="mailto:info@yourdomain.com" 
        className="text-sm hover:text-gray-400 md:order-first"
      >
        PsinNous@yourdomain.com
      </a>
      
      <div className="flex space-x-4 md:mt-3">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 hover:text-gray-400" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 hover:text-gray-400" />
        </a>
      </div>
    </div>
  );
};

export default Links;
