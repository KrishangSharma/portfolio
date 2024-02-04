// Packages Import
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-100 h-22 p-5 bg-elevation text-white flex items-center justify-between md:h-20">
      <div className="flex flex-col items-center justify-center w-full gap-1 md:flex-row md:w-auto ">
        {/* Logo */}
        <h2 className="text-2xl font-semibold">
          <NavLink to="/">
            <span className="text-primary">Krishang </span>Sharma
          </NavLink>
        </h2>

        {/* Divider */}
        <hr className="hidden divider mx-5 bg-white md:block " />

        {/* Nav Links */}
        <div className="flex items-center gap-10 text-s ">
          <NavLink
            to="/projects"
            className="hover:text-accent transition duration-200 ease-in-out"
          >
            {" "}
            Projects{" "}
          </NavLink>
        </div>
      </div>
      {/* Mail Butotn */}
      <div>
        <a
          href="https://forms.gle/LAxyAA9J7MDfboA28"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-primary border border-transparent rounded-md text-white px-5 py-2 hidden md:block"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
