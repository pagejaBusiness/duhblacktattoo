import { motion } from "framer-motion";

function Herosection() {
  return (
    <section id="home">
      <div
        className="relative flex h-screen w-full items-center justify-start bg-cover bg-center px-6 md:px-16 lg:px-24"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/pageja/image/upload/v1758590162/ChatGPT_Image_Sep_22_2025_10_14_00_PM_bcdvvp.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        <div className="absolute inset-0 z-10 opacity-30">
          <div
            className="w-full h-full bg-dark-lighter"
            style={{
              clipPath: "polygon(0 0, 60% 0, 30% 120%, 0% 100%)",
            }}
          ></div>
        </div>

        <motion.div
          className="relative z-20 text-white max-w-lg md:max-w-2xl space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="font-bold uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-cloister leading-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            ARTE, EXPRESSÃO
            <span className="block text-purple-dark">E IDENTIDADE</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            Transformando sua pele em uma tela única, com técnica, criatividade
            e dedicação para eternizar momentos e sentimentos.
          </motion.p>

          <motion.a
            className="mt-6 inline-block cursor-pointer rounded border-2 border-white px-6 py-2 md:px-8 md:py-3 font-semibold uppercase text-sm md:text-base tracking-wide transition-colors duration-300 hover:bg-purple-light hover:text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            Agende seu horário
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Herosection;
