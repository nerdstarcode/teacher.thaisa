"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
};

export default function LessonsSection() {
  const lessons = [
    { title: "Conversação", desc: "Prática intensiva com foco em pronúncia e fluência." },
    { title: "Vocabulário", desc: "Amplie seu vocabulário com temas do dia a dia e negócios." },
    { title: "Preparação para exames", desc: "Aulas específicas para TOEFL, IELTS e Cambridge." },
  ];

  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <motion.h2
        className="text-3xl font-semibold mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Como são as Aulas
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {lessons.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow cursor-pointer"
            variants={cardVariants as any} 
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-semibold text-chapeu mb-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.2, duration: 0.5, type: "spring", stiffness: 120 }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
            >
              {item.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
