"use client";

// Package Imports
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { ThemeContext } from "@/lib/themeContext";

// Custom Imports
import { NavLink } from "../types";
import LogoDark from "../public/logo-dark.png";
import LogoLight from "../public/logo-light.png";
import ThemeSwitcher from "./themeSwitcher";
import { Menu } from "lucide-react";

const navLinks: NavLink[] = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="w-full py-2 flex items-center justify-center">
        <nav className="container hidden w-full h-20 mx-auto lg:flex items-center px-4">
          <div>
            <Image
              src={theme === "light" ? LogoLight : LogoDark}
              alt="Krishang Sharma"
              width={50}
              height={50}
            />
          </div>
          {/* Nav Links */}
          <ol className="flex items-center gap-20 ml-auto mr-10">
            {navLinks.map((link) => (
              <li
                key={link.to}
                className="list-decimal text-acc-500 dark:text-acc-300 font-mono "
              >
                <Link
                  href={link.to}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400 font-inter -ml-1 transition-colors duration-100 ease-in-out"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ol>
          <ThemeSwitcher />
        </nav>
      </div>
      {/* Mobile Nav */}
      <div className="w-full py-1 flex items-center justify-center relative lg:hidden">
        <nav className="container w-full h-20 mx-auto flex items-center justify-between px-4 border-b">
          <div>
            <Image
              src={theme === "light" ? LogoLight : LogoDark}
              alt="Krishang Sharma"
              width={50}
              height={50}
            />
          </div>
          <Menu />

          <div className="absolute top-24 right-0">
            <ol>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link href={link.to}>{link.name}</Link>
                </li>
              ))}
            </ol>
          </div>

          {/* <ThemeSwitcher /> */}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
