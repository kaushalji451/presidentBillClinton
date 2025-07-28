import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import events from '../components/eventData';

const backgroundImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSh5LQO4Wk2a2FGNRpeNSlEDCUCld4Xw9GEQ&s";

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Timeline() {

  useEffect(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
    }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-2 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(20,28,36,0.80),rgba(20,28,36,0.96)), url(${backgroundImage})`,
        fontFamily: "'EB Garamond', ui-serif, Georgia, serif",
      }}
    >
      <div className="w-full bg-[#091D32]/50 rounded-md pt-[150px] shadow-xl py-[70px] font-serif text-white relative">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <h1 className="text-center text-3xl md:text-4xl mb-8 font-bold font-serif">
              Timeline
            </h1>
            <ul className="space-y-8">
              {events.map((event, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex flex-col items-center mr-6">
                    <span className="w-4 h-4 rounded-full bg-blue-400 block mb-1 shadow"></span>
                    {i < events.length - 1 && (
                      <span className="w-1 bg-blue-300 opacity-40 flex-1" style={{ minHeight: '40px' }}></span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-serif mb-1">
                      {event.year}
                    </h3>
                    <p className="text-md font-serif text-gray-200">
                      {event.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
