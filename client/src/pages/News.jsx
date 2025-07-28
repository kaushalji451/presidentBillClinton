import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"

const backgroundImage =
  "https://images.presidentclinton.com/15c27fae-efc8-4e67-91f8-60f845a7b3b4";

const fadeInVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

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
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(20,28,36,0.85),rgba(20,28,36,0.96)), url(${backgroundImage})`,
        fontFamily: "'EB Garamond', ui-serif, Georgia, serif",
      }}
    >
      <div className="w-full bg-[#091D32]/50 rounded-md shadow-xl pt-[120px] md:pt-[200px] py-10 font-serif text-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
            <h1 className=" text-3xl font-normal mb-10 tracking-wide">
              President Bill Clinton News
            </h1>

            {newsData.length === 0 ? (
              <p className="text-center text-gray-300">No news available.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                {newsData.map((news, idx) => (
                  <motion.div
                    key={idx}
                    className="relative  rounded-lg shadow-lg overflow-hidden flex flex-col transition hover:-translate-y-1 hover:shadow-2xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-800 w-full">
                      <img src={news.image} alt={news.title} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1 flex flex-col p-5">
                      <div className="text-xs text-[#85a9e7] mb-2 tracking-wide italic pb-1">
                        {new Date(news.date).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="text-lg font-semibold mb-2 min-h-[60px] leading-snug">
                        {news.title}
                      </div>
                      <div className="text-gray-200 mb-4 text-[15px] leading-relaxed flex-1">
                        {news.summary}
                      </div>
                      <div className="border-y border-white w-full py-2 ">
                        <Link
                          to="#"
                          className="  text-white font-normal"
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
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
