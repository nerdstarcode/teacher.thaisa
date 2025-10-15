"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#aulas", label: "Aulas" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#precos", label: "Preços" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <motion.nav
      className="bg-chapeu text-white py-4 px-6 shadow-md sticky top-0 z-50"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Prof. Thaisa</h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-rosaClaro transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile (animação de deslizar para baixo) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-chapeu border-t border-rosaClaro shadow-inner"
          >
            <ul className="flex flex-col items-center gap-5 py-6 text-lg">
              {links.map((link) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block hover:text-rosaClaro transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
