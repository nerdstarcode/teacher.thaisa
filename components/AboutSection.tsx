"use client";
import { motion } from "framer-motion";
import teacher from "@/public/teacher.jpg"
import Image from "next/image";
export default function AboutSection() {
  return (
    <motion.section
      id="sobre"
      className="py-16 text-center bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-folha mb-6">Sobre a Professora</h2>
      <p className="max-w-2xl mx-auto text-gray-700 text-lg">
        Sou Thaisa, professora de inglês há mais de 3 anos, apaixonada por ensinar com alegria e criatividade.
        Meu foco é ajudar meus alunos a aprenderem com leveza e confiança, desenvolvendo o amor pelo idioma.
      </p>
      <motion.div
        className="mx-auto mt-8 w-40 h-40 rounded-full object-cover shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={teacher}
          alt="Professora Thaisa"

        />
      </motion.div>
    </motion.section>
  );
}
