import React from "react";
import { motion } from "framer-motion";
import galleryData from "../components/galleryData";
import { useEffect } from "react";
const backgroundImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOpFdymNNK6S-MUpKazc72I9J3ixMT6zxeg&s";

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: {
    scale: 1.04,
    boxShadow: "0 8px 32px rgba(40,90,160,0.15)",
    y: -8,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};


export default function Gallery() {

  useEffect(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
    }, []);

  return (
    <section
      className="min-h-screen flex flex-col  bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(18,22,34,0.90),rgba(20,28,36,0.96)), url(${backgroundImage})`,
        fontFamily: "'EB Garamond', ui-serif, Georgia, serif",
      }}
    >
     <div className=" bg-[#091D32]/20 pt-[120px] rounded-xl shadow-2xl">
       <main className="w-full max-w-7xl mx-auto py-14 text-white font-serif">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-3xl md:text-4xl text-center mb-12 font-bold tracking-widest"
        >
          Gallery
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {galleryData.map(({ id, title, caption, image, link }) => (
            <motion.div
              key={id}
              className="relative rounded-2xl overflow-hidden bg-[#13213a]/80 border border-[#436baa]/20 shadow-xl flex flex-col group transition duration-200"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-900">
                <img
                  src={image}
                  alt={title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  draggable="false"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-xl font-semibold mb-1 leading-tight group-hover:text-[#bcd6fa] transition">{title}</h2>
                <p className="text-gray-300 flex-1 mb-4 text-sm leading-relaxed">{caption}</p>
                {link && (
                  <a
                    href={link}
                    className="self-start inline-block py-1 px-2 mt-auto text-[15px] text-blue-200 hover:text-white border border-blue-200 hover:bg-blue-300/20 rounded transition underline underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
     </div>
    </section>
  );
}
