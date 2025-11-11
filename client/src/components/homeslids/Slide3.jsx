import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import Bannder from '/assests/Banner-Alok-Anand.png'

const fadeInVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};   


// We'll use only the first image as the background:
const bgImage = "https://images.presidentclinton.com/a86db80a-3984-4966-b29e-9f9c8fe3b722";

const Slide3 = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const displayedItems = newsData ? newsData.slice(0, 3) : [];

  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/news`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setNewsData(data);
    } catch (err) {
      setError(err.message || "Failed to fetch news");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        className="flex items-center justify-center min-h-screen text-white font-serif"
        style={{ fontFamily: "'EB Garamond', ui-serif, Georgia, serif" }}
      >
        Loading news...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="flex items-center justify-center min-h-screen text-red-400 font-serif"
        style={{ fontFamily: "'EB Garamond', ui-serif, Georgia, serif" }}
      >
        Error: {error}
      </div>
    );
  }

  return (
    <section
      className="relative  flex items-center justify-center bg-no-repeat bg-contain bg-center"
      style={{
        backgroundImage: `url(${Bannder})`,
        fontFamily: "'EB Garamond', ui-serif, Georgia, serif",
      }}
    >
      {/* Dark blur overlay for background */}
      <div className="absolute inset-0 bg-[#091D32]/80  z-0" />

      {/* Foreground content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 md:px-4  md:py-20">
        {/* Section Title */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="py-6 md:py-8 text-2xl md:text-3xl text-white">Latest News</h1>
            <div className="py-2 md:py-8 flex items-center text-white">
              <Link to="/news" className="pb-1 border-b border-white">
                See All News Stories
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-8 justify-center md:justify-between">
            {displayedItems.map((news, idx) => (
              <motion.div
                key={idx}
                className="w-full sm:w-[48%] lg:w-[30%] xl:w-[23%] bg-[#091D32] text-white shadow-lg overflow-hidden flex flex-col transition hover:-translate-y-1 hover:shadow-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
              >
                {/* Image */}
                <div className="aspect-[5/3] overflow-hidden bg-gray-800 w-full">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Date & Title */}
                  <div>
                    <div className="text-xs mb-2 tracking-wide italic pb-1">
                      {new Date(news.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>

                    <div className="text-base md:text-lg font-semibold mb-4 min-h-[60px] leading-snug">
                      {news.title}
                    </div>
                  </div>

                  {/* Read More - pushed to bottom */}
                  <div className="border-t border-b flex items-center border-white w-full py-2 ps-2 mt-auto">
                    <Link
                      to="#"
                      className="text-white font-normal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Slide3;
