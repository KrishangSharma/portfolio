// Package Imports
import { Link } from "react-router-dom";
import {
  Mail,
  GitHub,
  LinkedIn,
  Instagram,
  SchoolOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material/";

const Footer = () => {
  return (
    <div className="w-100 border-t border-background-200 pb-28 sm:pb-0 ">
      <footer className="w-full py-5 px-2 bg-elevation flex flex-col gap-10 items-start md:w-full md:flex-row md:justify-evenly md:items-center lg:w-5/6 lg:mx-auto lg:px-0 lg:flex-row lg:justify-between">
        {/* Personal Info */}
        <aside className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Krishang Sharma</h2>
          <p className="text-sm">
            <WorkOutlineOutlined fontSize="small" className="text-accent-500" />{" "}
            Full Stack Developer
          </p>
          <p className="text-sm">
            <LocationOnOutlined fontSize="small" className="text-accent-500" />{" "}
            Delhi, India
          </p>
          <p className="text-sm">
            <SchoolOutlined fontSize="small" className="text-accent-500" /> IPU,
            Delhi
          </p>
        </aside>
        {/* Contact Links */}
        <aside className="flex flex-col gap-10 items-start lg:flex-row">
          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Socials</h3>
            <a
              href="https://github.com/KrishangSharma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              <GitHub className="text-accent-500" />{" "}
              <span className="underline">Github/KrishangSharma</span>
            </a>

            <a
              href="https://instagram.com/krishang.sharmaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              <Instagram className="text-accent-500" />{" "}
              <span className="underline">Instagram/krishang.sharmaa</span>
            </a>
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Contact Me</h3>
            <Link to="/contact" className="hover:text-accent">
              <Mail className="text-accent-500" />{" "}
              <span className="underline">Write to Me</span>
            </Link>
            <a
              href="https://linkedin.com/in/krishangsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              <LinkedIn className="text-accent-500" />{" "}
              <span className="underline">Connect with Me</span>
            </a>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
