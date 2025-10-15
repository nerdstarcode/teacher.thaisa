"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="contato"
      className="py-16 bg-chapeu text-white text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
      <p className="mb-8 text-lg">
        Quer agendar uma aula ou tirar dúvidas? Me mande uma mensagem!
      </p>
      <a
        href="https://ig.me/m/teacher.thaisa"
        className="bg-white text-chapeu px-6 py-3 rounded-full font-semibold hover:bg-rosaClaro transition"
      >
        Enviar mensagem
      </a>
    </motion.section>
  );
}
