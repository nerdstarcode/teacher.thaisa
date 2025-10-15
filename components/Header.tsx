"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#sobre", label: "Sobre" },
    { href: "#historico", label: "Histórico" },
    { href: "#aulas", label: "Aulas" },
    { href: "#comentarios", label: "Comentários" },
    { href: "#precos", label: "Preços" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Prof. Thaisa</h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botão Hambúrguer (Mobile) */}
        <button
          className="md:hidden text-blue-600 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-lg text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
