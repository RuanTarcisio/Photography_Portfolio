"use client";

import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Início", path: "/", icon: "🏠" },
  { name: "Sobre", path: "/sobre", icon: "👤" },
  { name: "Portfólio", path: "/portfolio", icon: "📸" },
  { name: "Contato", path: "/contato", icon: "📞" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  // Bloqueia scroll quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Fecha menu ao pressionar ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav aria-label="Navegação Mobile" className="lg:hidden">
      {/* Botão abrir menu */}
      <button
        aria-label="Abrir menu de navegação"
        aria-expanded={open}
        className="p-2 cursor-pointer transition-all duration-300 text-3xl text-orange-500 hover:text-orange-600 hover:bg-orange-50 rounded-full"
        onClick={() => setOpen(true)}
      >
        <CgMenuRight className="drop-shadow-md" />
      </button>

      {/* Overlay + menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay escuro */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Menu lateral */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bg-gradient-to-b from-white to-gray-50 shadow-2xl w-80 h-screen z-50 flex flex-col"
            >
              {/* Cabeçalho do menu */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    F
                  </div>
                  <span className="text-xl font-bold text-gray-800">Fotografia</span>
                </div>

                {/* Botão fechar */}
                <button
                  aria-label="Fechar menu"
                  className="p-2 cursor-pointer text-2xl text-gray-500 hover:text-orange-500 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <IoMdClose />
                </button>
              </div>

              {/* Lista de links */}
              <ul className="flex flex-col gap-2 p-6 flex-1">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`flex items-center gap-4 p-4 rounded-xl text-lg font-medium transition-all ${activePath === link.path
                          ? "bg-orange-500 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                        }`}
                      onClick={() => {
                        setOpen(false);
                        setActivePath(link.path);
                      }}
                    >
                      <span className="text-xl">{link.icon}</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Rodapé do menu */}
              <div className="p-6 border-t border-gray-200">
                <div className="text-center text-gray-500 text-sm mb-4">
                  Segue a gente nas redes!
                </div>
                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    📱
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    💻
                  </a>
                  <a
                    href="#"
                    aria-label="WhatsApp"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    📞
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
