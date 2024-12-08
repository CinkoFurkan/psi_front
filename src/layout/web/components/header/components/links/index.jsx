import { Link, NavLink } from "react-router-dom";
import useMedia from "../../../../../../hooks/use-media";
import ResponsiveLinks from "../responsive-links";

const Links = ({ links }) => {
  const isSmallerThanLg = useMedia(1024);

  if (isSmallerThanLg) {
    return <ResponsiveLinks links={links} />;
  }

  return links && links.length > 0 ? (
    <nav>
      <ul className="flex space-x-8">
        {links.map((link) => (
          <li className="relative group" key={link.id || link.link}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "relative text-primary" : "relative"
              }
              to={`/${link.link}`}
            >
              <span className="transition duration-150 cursor-pointer hover:text-primary">
                {link.link}
              </span>
            </NavLink>
            {link.sublink && link.sublink.length > 0 && (
              <ul
                className="absolute left-0 hidden w-48 bg-background rounded-xl shadow-xl group-hover:block transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 z-20"
              >
                {link.sublink.map((sublink, subindex) => (
                  <Link key={subindex} to={`/${sublink}`}>
                    <li className="px-4 py-2 text-black hover:text-[#bc090b] hover:bg-[#e8e4d8] cursor-pointer rounded transition-colors duration-150">
                      {sublink}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
};

export default Links;
