"use client";

import { FaWhatsapp, FaInstagram, FaClock, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";

// Variantes de animação estilo "tijolos"
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

export default function Contact() {
  return (
    <motion.div
      className="min-h-screen bg-dark text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }} // agora anima toda vez que rolar até o componente
    >
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Título */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-5xl font-bold mb-4 text-purple-light font-cloister">
            Vamos agendar um horário?
          </h1>
          <p className="text-lg text-gray">
            Sua próximo tattoo começa com um clique
          </p>
        </motion.div>

        {/* Blocos de contato */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
        >
          {/* Direct Contact */}
          <motion.div
            className="p-6 bg-dark-lighter rounded-lg border border-gray-dark"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6 text-white-pure">
              Contatos
            </h2>

            <div className="space-y-4">
              <a
                className="w-full bg-green-600 hover:bg-green-700 text-white-pure py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors"
                href="https://api.whatsapp.com/send?phone=6181525283"
                target="_blank"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>

              <a
                className="w-full border border-purple text-purple hover:bg-purple hover:text-white-pure py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors bg-transparent"
                href="https://www.instagram.com/duh_black_tattoo/"
                target="_blank"
              >
                <FaInstagram className="text-xl" />
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Studio info */}
          <motion.div
            className="p-8 bg-dark-lighter rounded-lg border border-gray-dark flex flex-col justify-center items-start"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6 text-white-pure">
              Informações do Estúdio
            </h2>

            <div className="flex items-center gap-4">
              <FaClock className="text-purple text-3xl" />
              <div>
                <h3 className="font-semibold text-white text-lg mb-2">
                  Horário de Funcionamento
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  {/* Seg-Sex: 12:00 - 20:00 */}
                  <br />
                  {/* Sáb: 10:00 - 18:00 */}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Localização - Google Maps */}
        <motion.div className="mt-16" variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6 text-center text-white-pure">
            Localização
          </h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden border border-gray-dark">
            <iframe
              src="https://maps.google.com/maps?q=-15.7325191,-48.2840538&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
