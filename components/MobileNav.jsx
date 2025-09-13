"use client";

import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Contato", path: "/contato" },
  { name: "Portfolio", path: "/portfolio" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Mobile Navigation">
      {/* botão abrir menu */}
      <div
        className="cursor-pointer transition-transform duration-300 text-4xl text-orange-400 hover:scale-110 hover:text-orange-500 active:scale-90"
        onClick={() => setOpen(true)}
      >
        <CgMenuRight className="drop-shadow-md" />
      </div>

      {/* overlay + menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* overlay escuro */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)} // fecha ao clicar fora
            />

            {/* menu lateral */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 bg-white shadow-2xl w-full max-w-xs h-screen z-20 p-6"
            >
              {/* botão fechar */}
              <div
                className="text-4xl cursor-pointer text-primary mb-6"
                onClick={() => setOpen(false)}
              >
                <IoMdClose />
              </div>

              {/* lista de links */}
              <ul className="text-primary flex flex-col gap-4 text-lg pt-[120px] font-semibold">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="hover:text-accent transition-colors"
                      onClick={() => setOpen(false)} 
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
