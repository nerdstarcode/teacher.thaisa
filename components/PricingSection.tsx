"use client";
import { motion } from "framer-motion";

export default function PricingSection() {
  const plans = [
    { title: "Plano Básico", price: "R$80 / aula", desc: "Aulas avulsas e personalizadas." },
    { title: "Plano Mensal", price: "R$280 / mês", desc: "4 aulas por mês com acompanhamento." },
    { title: "Plano Intensivo", price: "R$480 / mês", desc: "8 aulas mensais com foco em fluência." },
  ];

  return (
    <motion.section
      id="precos"
      className="py-16 bg-verdeClaro/40 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-folha mb-8">Planos e Preços</h2>
      <div className="grid md:grid-cols-3 gap-6 container mx-auto px-4">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-chapeu">{p.title}</h3>
            <p className="text-2xl font-bold mt-4">{p.price}</p>
            <p className="text-gray-600 mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
