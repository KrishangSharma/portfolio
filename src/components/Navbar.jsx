// Components Import
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-100 h-22 p-5 bg-elevation text-white flex items-center justify-between md:h-20">
      <div className="flex flex-col items-center justify-center w-full gap-1 md:flex-row md:w-auto ">
        {/* Logo */}
        <h2>
          <Link to="/">
            <span className="text-primary">Krishang </span>Sharma
          </Link>
        </h2>

        {/* Divider */}
        <hr className="hidden divider mx-5 bg-white md:block " />

        {/* Nav Links */}
        <div className="flex items-center gap-10 text-s ">
          <Link
            to="/projects"
            className="hover:text-accent transition duration-200 easin-in-out"
          >
            {" "}
            Projects{" "}
          </Link>
          <Link
            to="/blog"
            className=" hover:text-accent transition duration-200 easin-in-out"
          >
            {" "}
            Blog{" "}
          </Link>
        </div>
      </div>
      {/* Mail Butotn */}
      <div>
        <Link
          to="mailto:https://krishang.sharma.17704@gmail.com"
          className="bg-primary border border-transparent rounded-md text-white px-5 py-2 hidden md:block"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
