"use client";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    { name: "Laura", text: "As aulas são incríveis! Aprendo brincando e melhorei muito meu inglês!" },
    { name: "Pedro", text: "A professora Thaisa é muito paciente e divertida. Eu adoro nossas aulas!" },
    { name: "Marina", text: "Meu filho ama as aulas! A evolução foi enorme em pouco tempo." },
  ];

  return (
    <motion.section
      id="depoimentos"
      className="py-16 bg-rosaClaro/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center text-chapeu mb-8">Depoimentos</h2>
      <div className="grid md:grid-cols-3 gap-6 container mx-auto px-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 mb-4 italic">“{t.text}”</p>
            <h4 className="font-semibold text-chapeu">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
