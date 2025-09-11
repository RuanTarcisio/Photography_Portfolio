import React from "react";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/about" },
  { name: "Contato", path: "/contact" },
  { name: "Portfolio", path: "/portfolio" },
];

const Header = () => {
  return (
    <header
      role="banner"
      className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center"
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl lg:text-4xl font-bold text-gray-800 hover:text-gray-600 transition max-w-[200px] pr-4"
        >
          <Image
            src="/img/header/logo.svg"
            alt="Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Nav - Desktop */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex text-deep-gray gap-x-12 font-semibold"
        >
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className="hover:text-primary transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Socials - Desktop */}
      <div className="">
        <Socials />
      </div>

      {/* Mobile Nav */}
      <div className="flex lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
