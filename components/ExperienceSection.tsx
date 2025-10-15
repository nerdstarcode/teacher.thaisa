"use client";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function ExperienceSection() {
  const jobs = [
    { school: "Cultura Inglesa", years: "2014 - 2018", role: "Professora de Inglês" },
    { school: "Wizard Idiomas", years: "2018 - 2021", role: "Instrutora de Conversação" },
    { school: "Autônoma", years: "2021 - atualmente", role: "Professora particular online" },
  ];

  return (
    <section className="container mx-auto px-4">
      <motion.h2
        className="text-3xl font-semibold mb-8 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Histórico Profissional
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-3">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-600">{job.school}</h3>
            <p className="text-gray-500">{job.years}</p>
            <p className="mt-2 text-gray-700">{job.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
