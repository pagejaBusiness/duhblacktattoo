"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#0B0B0F" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Artist Photo */}
          <div className="relative">
            <div className="aspect-[4/5] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <img
                  src="https://res.cloudinary.com/pageja/image/upload/v1758673879/sobre_zseirt.jpg"
                  alt="Eduardo Souza"
                />
              </motion.div>
            </div>
            <div
              className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2"
              style={{ borderColor: "#7C3AED" }}
            ></div>
            <div
              className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2"
              style={{ borderColor: "#7C3AED" }}
            ></div>
          </div>

          {/* Artist Bio Content */}
          <div className="space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <div
                  className="hidden sm:block w-12 h-px"
                  style={{ backgroundColor: "#7C3AED" }}
                ></div>
                <span
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ color: "#7C3AED" }}
                >
                  Olá, me chamo
                </span>
                <div
                  className="w-full sm:w-12 h-px"
                  style={{ backgroundColor: "#7C3AED" }}
                ></div>
              </div>
              <h2
                className="text-5xl font-bold tracking-tight"
                style={{ color: "#F9FAFB" }}
              >
                Eduardo Souza
              </h2>
            </motion.div>

            {/* Texts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <p
                className="text-xl leading-relaxed"
                style={{ color: "#9CA3AF" }}
              >
                Crio artes personalizadas de acordo com a ideia de cada cliente,
                transformando histórias e sentimentos em tatuagens únicas.
                Ofereço também produtos especiais para o cuidado pós-tattoo e um
                atendimento totalmente personalizado, garantindo qualidade e
                atenção em cada detalhe.
              </p>

              <p
                className="text-lg leading-relaxed"
                style={{ color: "#6B7280" }}
              >
                Artista premiado, com estilo autêntico e olhar criativo,
                entregando tatuagens únicas e cheias de personalidade.
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-6"
            >
              <a
                href="#gallery"
                className="group relative px-10 py-4 font-bold tracking-wide uppercase transition-all duration-300 border-2"
                style={{
                  backgroundColor: "transparent",
                  color: "#7C3AED",
                  borderColor: "#7C3AED",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#7C3AED";
                  e.target.style.color = "#F9FAFB";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#7C3AED";
                }}
              >
                Veja meus trabalhos
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
