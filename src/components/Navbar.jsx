// Packages Import
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Phone, Close, Layers } from "@mui/icons-material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  // Array of Links
  const Links = [
    { title: "Home", dest: "/", icon: <Home /> },
    { title: "Projects", dest: "/projects", icon: <Layers /> },
    { title: "Contact", dest: "/contact", icon: <Phone /> },
  ];

  const handleClick = (dest) => {
    setActiveLink(dest);
    setOpen(!open);
  };

  return (
    <nav className="w-full h-28 px-5 flex items-center justify-between fixed bottom-0 right-0 rounded-md bg-background-800/10 backdrop-blur-md z-10 sm:top-0 sm:left-0 sm:px-14 md:w-5/6 sm:mx-auto md:my-5 sm:h-20 ">
      <div>
        <span className="text-2xl font-semibold">Krishang Sharma</span>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center gap-5 lg:h-1/3">
          <div className="inline sm:hidden">
            <Close
              onClick={() => setOpen(!open)}
              className={`nav-btn${open ? " active" : " close"}`}
            />
          </div>
          <div
            className={`flex flex-col gap-8 absolute right-12 bottom-16 py-4 pl-4 pr-10 rounded-md bg-background-800/30 backdrop-blur-md sm:bg-transparent sm:p-0 sm:flex-row sm:relative sm:right-0 sm:top-0 sm:rounded-none z-10 ${
              open ? "active" : "list"
            }`}
          >
            {Links.map((link, index) => (
              <Link
                to={link.dest}
                key={index}
                className={`link text-text-200 transition-colors duration-300 ease-in-out lg:flex lg:items-center lg:gap-2 hover:text-accent-400 ${
                  activeLink === link.dest ? "active-link" : ""
                }`}
                onClick={() => handleClick(link.dest)}
              >
                <span className="hidden lg:inline">{link.icon}</span>
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
