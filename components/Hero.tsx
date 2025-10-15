"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import qrCode from "@/public/teacher.thaisa_qr.png"
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  },
};

const textVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

export default function Hero() {
  return (
    <motion.section
      className="bg-creme py-24 text-center min-h-fit h-[70vh]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-5xl font-bold text-chapeu mb-4"
        variants={textVariants}
        viewport={{ once: true }}
      >
        Aprenda Inglês com Diversão!
      </motion.h1>

      <motion.p
        className="text-lg text-marrom max-w-2xl mx-auto mb-8"
        variants={textVariants}
        viewport={{ once: true }}
      >
        Aulas criativas, leves e eficazes com a Professora Thaisa — especializadas em crianças e adolescentes!
      </motion.p>

      <motion.a
        whileHover={{ scale: 1.1, backgroundColor: "#B81E2B" }}
        whileTap={{ scale: 0.95 }}
        className="bg-chapeu text-white px-8 py-3 rounded-full font-semibold shadow-md"
        transition={{ type: "spring", stiffness: 300 }}
        href="https://ig.me/m/teacher.thaisa"
        target="_blank"
      >
        Agendar Aula
      </motion.a>
      <motion.div
        className="mx-auto mt-8 w-40 h-40 object-cover shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={qrCode}
          alt="qr code to instagram Thaisa"

        />
      </motion.div>
    </motion.section>
  );
}
