// Packages Import
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-100 h-20 p-5 bg-elevation text-white flex items-center justify-between">
      {/* Logo */}
      <h2 className="w-auto md:w-56 text-2xl font-semibold">
        <NavLink to="/">
          <span className="text-primary">Krishang </span>Sharma
        </NavLink>
      </h2>

      {/* Nav Links */}
      <div
        className={`w-full flex items-center justify-evenly md:w-[calc(100%-14rem)] md:justify-center gap-1 nav-links${
          open ? "-active" : " "
        }`}
      >
        {/* Divider */}
        <hr className="hidden divider mx-5 bg-white md:block" />

        {/* Nav Links */}
        <NavLink
          to="/projects"
          className="hover:text-accent md:inline transition duration-200 ease-in-out"
        >
          {" "}
          Projects{" "}
        </NavLink>

        {/* Mail Button */}
        <a
          href="https://forms.gle/LAxyAA9J7MDfboA28"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-primary border border-transparent rounded-md text-white px-5 py-2 md:ml-auto md:block"
        >
          Contact Me
        </a>
      </div>

      {/* Menu Icon */}
      <div
        className="md:hidden w-6 h-6 cursor-pointer flex items-center justify-center"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <Close sx={{ fontSize: "26px" }} />
        ) : (
          <Menu sx={{ fontSize: "26px" }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
