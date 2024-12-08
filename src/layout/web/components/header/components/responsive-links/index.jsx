import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import Social from "../social";


export default function ResponsiveLinks({ links }) {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null); 

  const toggleMenu = () => setOpen((prevOpen) => !prevOpen);

  const toggleSublinks = (e, linkIndex) => {
    e.stopPropagation(); 
    setActiveLink((prevActiveLink) => (prevActiveLink === linkIndex ? null : linkIndex));
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
              className="fixed top-0 right-0 h-full w-64 bg-[#f5f3f1] text-gray-900 shadow-xl z-20 flex flex-col"
            >
              <button
                onClick={toggleMenu}
                className="text-black text-2xl p-4 absolute top-2 right-2 focus:outline-none"
              >
                ✕
              </button>

              <nav className="mt-16 p-6 space-y-4 flex-1">
                <ul onClick={() => setOpen(false)} className="space-y-4">
                  {links.map((link, index) => (
                    <li key={link.id || link.link} className="group">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={(e) =>
                          link.sublink && link.sublink.length > 0 && toggleSublinks(e, index) // Toggle sublinks
                        }
                      >
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "text-primary font-semibold" : "text-black"
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

                        {link.sublink && link.sublink.length > 0 && (
                          <FaChevronDown
                            className={`transition-transform duration-300 ${
                              activeLink === index ? "transform rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>

                      {link.sublink && link.sublink.length > 0 && activeLink === index && (
                        <ul className="mt-2 pl-4 space-y-2">
                          {link.sublink.map((sublink, subindex) => (
                            <motion.li
                              key={subindex}
                              whileHover={{ x: 5 }}
                              className="text-sm text-black cursor-pointer hover:text-[#bc090b] transition-all duration-150"
                            >
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

              <div className="flex justify-center items-center p-6 w-full bg-[#2C2A22] text-white border-t-2">
                <Social />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
