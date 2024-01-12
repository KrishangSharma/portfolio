// Components Import
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-100 h-20 p-5 bg-elevation text-white flex items-center justify-between">
      <div className="flex items-center">
        {/* Logo */}
        <h2>
          <Link to="/">
            <span className="text-primary">Krishang </span>Sharma
          </Link>
        </h2>

        {/* Divider */}
        <hr className="divider mx-5 bg-white" />

        {/* Nav Links */}
        <div className="flex items-center gap-10">
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
          className="bg-primary border border-transparent rounded-md text-white px-5 py-2"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
