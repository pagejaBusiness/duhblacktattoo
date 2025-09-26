"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// Animation variants matching the contact component style
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Reviews() {
  // basta preencher com os prints que tiver
  const screenshots = [
    {
      url: "https://res.cloudinary.com/pageja/image/upload/v1758847134/review02_xtowq1.jpg",
    },
    {
      url: "https://res.cloudinary.com/pageja/image/upload/v1758847134/review_01_veorsv.jpg",
    },
    {
      url: "https://res.cloudinary.com/pageja/image/upload/v1758847134/review03_ytjwdm.jpg",
    },
    {
      url: "https://res.cloudinary.com/pageja/image/upload/v1758906683/WhatsApp_Image_2025-09-26_at_09.08.34_ch0x2m.jpg",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-dark text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Title Section */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-5xl font-bold mb-4 text-purple-light font-cloister">
            Avaliações dos Clientes
          </h1>
          <p className="text-lg text-gray">
            Veja o que nossos clientes dizem sobre nosso trabalho
          </p>
        </motion.div>

        {/* WhatsApp Screenshots Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 "
          variants={containerVariants}
        >
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              className="p-6 bg-dark-lighter rounded-lg border border-gray-dark relative min-h-[300px] flex flex-col items-center justify-center"
              variants={itemVariants}
            >
              {screenshot.url ? (
                <img
                  src={screenshot.url}
                  alt={`WhatsApp Screenshot ${index + 1}`}
                  className="rounded-lg max-h-[350px] object-contain"
                />
              ) : (
                <>
                  <FaWhatsapp className="text-purple text-4xl mb-4 opacity-50" />
                  <div className="text-center">
                    <p className="text-gray text-sm mb-2">
                      WhatsApp Screenshot
                    </p>
                    <p className="text-gray-dark text-xs">
                      Adicione sua captura de tela aqui
                    </p>
                  </div>
                  <div className="absolute inset-4 border-2 border-dashed border-gray-dark rounded-lg opacity-30"></div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
