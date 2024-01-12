// Package Imports
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
    <div className="mt-auto w-100 bg-elevation  ">
      <footer className="w-5/6 mx-auto py-5  bg-elevation flex gap-10 items-center justify-between">
        {/* Personal Info */}
        <aside className="flex flex-col gap-3">
          <h2>Krishang Sharma</h2>
          <p className="text-sm">
            <WorkOutlineOutlined fontSize="small" /> Full Stack Developer
          </p>
          <p className="text-sm">
            <LocationOnOutlined fontSize="small" /> Delhi, India
          </p>
          <p className="text-sm">
            <SchoolOutlined fontSize="small" /> IPU, Delhi
          </p>
        </aside>
        {/* Contact Links */}
        <aside className="flex gap-20 items-start ">
          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3>Socials</h3>
            <a
              href="https://github.com/KrishangSharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              <GitHub className="text-accent" /> Github/KrishangSharma
            </a>

            <a
              href="https://instagram.com/krishang.sharmaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              <Instagram className="text-accent" /> Instagram/krishang.sharmaa
            </a>
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3>Contact Me</h3>
            <a href="mailto:krishang.sharma.17704@gmail.com">
              <Mail className="text-accent" /> Mail Me
            </a>
            <a
              href="https://linkedin.com/in/krishangsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              <LinkedIn className="text-accent" /> Connect with me
            </a>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
