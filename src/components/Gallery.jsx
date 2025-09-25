import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Gallery() {
  const images = [
    {
      url: "https://res.cloudinary.com/pageja/image/upload/v1758758316/SaveInsta.to_524229894_18111631429519152_4313735534642016032_n_xqvgua.jpg",
    },
    {
      url: "https://res.cloudinary.com/pageja/image/upload/v1758758314/SaveInsta.to_546599953_18116156110519152_1925164796396659928_n_lilfws.jpg",
    },
    {
      url: "https://res.cloudinary.com/pageja/image/upload/v1758758314/SaveInsta.to_532583105_18113738701519152_1862243289314518390_n_hukzhi.jpg",
    },
    {
      url: "https://res.cloudinary.com/pageja/image/upload/v1758758313/SaveInsta.to_548526889_18116440957519152_3890624016895868501_n_y6o9fk.jpg",
    },
    {
      url: "https://res.cloudinary.com/pageja/image/upload/v1758758313/SaveInsta.to_549498778_18116440945519152_7306188915033559781_n_cfcdpc.jpg",
    },
    {
      url: "https://res.cloudinary.com/pageja/image/upload/v1758758312/SaveInsta.to_546655908_18116156029519152_2426315752154844670_n_ve9fvh.jpg",
    },
    {
      url: "https://res.cloudinary.com/pageja/image/upload/v1758758312/SaveInsta.to_531198881_18113175244519152_6291751785058308076_n_nasxl4.jpg",
    },
    {
      url: "https://res.cloudinary.com/pageja/image/upload/v1758758312/SaveInsta.to_546477893_18116156386519152_8558047758282253257_n_ku2v5o.jpg",
    },
    {
      url: "https://res.cloudinary.com/pageja/image/upload/v1758758312/SaveInsta.to_533315335_18113764414519152_2711574202646960883_n_ku0jap.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="gallery"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* bequgroud */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/pageja/image/upload/v1758760777/ChatGPT_Image_Sep_24_2025_09_21_27_PM_ub7p6q.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          transform: "scale(1.1)",
        }}
      ></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 left-0 w-full flex items-center gap-4 justify-center flex-wrap z-20 px-4"
      >
        <div
          className="hidden sm:block w-12 h-px"
          style={{ backgroundColor: "#7C3AED" }}
        ></div>

        <span
          className="text-sm font-bold tracking-widest uppercase"
          style={{ color: "#7C3AED" }}
        >
          GALERIA
        </span>

        <div
          className="w-full sm:w-12 h-px"
          style={{ backgroundColor: "#7C3AED" }}
        ></div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center px-4 mt-20 sm:mt-24">
        <div className="relative w-full flex items-center justify-center">
          {/* Botaun1 */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 z-10 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full"
          >
            <FaChevronLeft size={20} className="sm:size-24" />
          </button>

          <div className="relative w-full flex items-center justify-center">
            {images.map((img, index) => {
              let position = index - current;

              if (position < -1) position = images.length - current + index;
              if (position > 1) position = index - current - images.length;

              return (
                <motion.img
                  key={index}
                  src={img.url}
                  alt={`slide-${index}`}
                  initial={{ opacity: 0, x: direction === 1 ? 200 : -200 }}
                  animate={{
                    x: position * (window.innerWidth < 640 ? 200 : 350),
                    scale: position === 0 ? 1 : 0.7,
                    opacity: Math.abs(position) > 1 ? 0 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute rounded-xl shadow-2xl w-[220px] h-[340px] sm:w-[400px] sm:h-[600px] object-cover"
                />
              );
            })}
          </div>

          {/* Bataoun 2 */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 z-10 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full"
          >
            <FaChevronRight size={20} className="sm:size-24" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
