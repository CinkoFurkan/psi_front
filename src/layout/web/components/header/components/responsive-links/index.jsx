import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import Social from "../social";
import TransleteButton from "../translateButton";

export default function ResponsiveLinks({ links }) {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // State to track the active link

  const toggleMenu = () => setOpen((prevOpen) => !prevOpen);

  const toggleSublinks = (e, linkIndex) => {
    e.stopPropagation(); // Prevent click from closing the modal
    setActiveLink((prevActiveLink) =>
      prevActiveLink === linkIndex ? null : linkIndex
    );
  };

  return (
    <>
      <div onClick={toggleMenu} className="text-2xl cursor-pointer text-gray-800">
        <RxHamburgerMenu />
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black z-10"
              onClick={toggleMenu}
            />

            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-64 bg-[#f5f3f1] text-gray-900 shadow-xl z-20"
            >
              <button
                onClick={toggleMenu}
                className="text-gray-800 text-2xl p-4 absolute top-2 right-2 focus:outline-none"
              >
                ✕
              </button>

              <nav className="mt-16 p-6 space-y-4">
                <ul onClick={() => setOpen(false)} className="space-y-4">
                  {links.map((link, index) => (
                    <li key={link.id || link.link} className="group">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={(e) => link.sublink && link.sublink.length > 0 && toggleSublinks(e, index)} // Pass event to prevent modal close
                      >
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "text-primary font-semibold" : "text-gray-700"
                          }
                          to={`/${link.link}`}
                        >
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="transition duration-200 cursor-pointer hover:text-primary"
                          >
                            {link.link}
                          </motion.span>
                        </NavLink>

                        {/* Add a chevron icon for links with sublinks */}
                        {link.sublink && link.sublink.length > 0 && (
                          <FaChevronDown
                            className={`transition-transform duration-300 ${
                              activeLink === index ? "transform rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>

                      {/* Show sublinks if activeLink matches this link's index */}
                      {link.sublink && link.sublink.length > 0 && activeLink === index && (
  <ul className="mt-2 pl-4 space-y-2">
    {link.sublink.map((sublink, subindex) => (
      <motion.li
        key={subindex}
        whileHover={{ x: 5 }}
        className="text-sm text-gray-600 cursor-pointer hover:text-[#bc090b] transition-all duration-150"
      >
        {/* Wrap sublink in NavLink for navigation */}
        <NavLink
          to={`/${sublink}`}
          className="block py-2 px-4"
        >
          {sublink}
        </NavLink>
      </motion.li>
    ))}
  </ul>
)}

                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social and Translate buttons centered at the bottom */}
              {open && (
  <nav className="fixed bottom-0 p-6 border-t-2 bg-[#2c2a22] text-white w-full">
    <div className="flex flex-col items-center justify-center space-y-4 w-full">
      <Social />
      <TransleteButton />
    </div>
  </nav>
)}

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
