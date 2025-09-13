import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Entry from "../components/BioGraphyEntery";

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Biography = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-stretch justify-start relative "
      style={{
        backgroundImage: `linear-gradient(to right, rgba(20,28,36,0.3), rgba(20,28,36,0.6)), url('https://images.presidentclinton.com/7b39245c-154b-4e0b-94c3-ffe60a3ea7a0')`,
        fontFamily: "'EB Garamond', ui-serif, Georgia, serif",
      }}
    >
      <div className="flex items-start w-full">
        <motion.div
          className="relative text-white px-6 pt-32 md:px-[90px] md:pb-[80px] max-w-6xl w-full"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        > 
          <div className="border-s border-white">
            
          <div className="py-4 ps-6 text-4xl font-semibold">
             <p>Shri Alok Anand Tripathi</p>
          </div>
            <Entry
              year="Mid 80’s — Birth & Family"
              text={`Born on April 11 during the Mahakumbh in the family of Zamindar Pt Shivbalak Tripathi...
Great Grandson of Pt Bhavani Shankar Tripathi...
Grandson of Pt RamaShankar Tripathi (Sahitya Ratna - BHU).
Son of Anandkumar Tripathi (IIT, MBA).`}
            />

            <Entry
              year="2000 — Music Achievement"
              text="Achieved Sangeet & Tabla Visharad."
            />

            <Entry
              year="2011 — Education"
              text="Completed B.Tech from VIT (Vellore Institute of Technology)."
            />

            <Entry
              year="2013 — Vedic Studies"
              text="Received Official Guru Diksha from Shri Ramendra Pandey (Founder-Sthapatyam)..."
            />

            <Entry
              year="2013 — Astrology"
              text="Began Astrological consulting and demonstrated the ability to prepare accurate horoscope..."
            />

            <Entry
              year="2013 — Daiv-Prashna"
              text="Joined Daiv-Prashna and started free astrology consultancy to everyone..."
            />

            <Entry
              year="2015 — Higher Studies"
              text="Completed MBA from London."
            />

            <Entry
              year="~2016 — Professional Journey"
              text={`Founded Invent-Tree (Political consultancy firm).
Joined True Elements (Marico then Sanjiv Goenka Group) as HOD - Sales & Marketing.`}
            />

            <Entry
              year="2017 — Guru Diksha"
              text="Received Guru Diksha under Shri Neelkanth Shastry and started professional astrology consultancy."
            />

            <Entry
              year="2019 — Leadership & Entrepreneurship"
              text={`Upon passing away of his Guru, appointed Custodian of Daiv-Prashna.
Co-founded Golden Ghaf Clothing Company on April 15.
Married Shriya Raghuvanshi in Dec’19.`}
            />

            <Entry
              year="~2025 onwards — Social Service"
              text="Formation of Anandvan Trust and appointment as president of the trust."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Biography;
