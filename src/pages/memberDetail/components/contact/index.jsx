import {FaLinkedin} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Contact({linked_in , email}) {
    return (
        <div className="flex justify-center space-x-6">
            {linked_in && (
                <a
                    href={linked_in}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white transition duration-300 transform bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-110"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="w-10 h-10"/>
                </a>
            )}
            {email && (
                <a
                    href={`mailto:${email}`}
                    className="p-2 text-white transition duration-300 transform bg-gray-700 rounded-full hover:bg-gray-800 hover:scale-110"
                    aria-label="Email"
                >
                    <IoMail className="w-10 h-10"/>
                </a>
            )}
        </div>
    )
}