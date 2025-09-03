

import React from "react";
import { motion } from "framer-motion";
import biographydata1 from "../components/biographydata/biographydata1";
import biographydata2 from "../components/biographydata/biographydata2";
import { useEffect } from "react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Biography() {

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);


  return (
    <>

      <section
        className="min-h-screen bg-cover bg-center flex items-stretch justify-start relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20,28,36,0.95) 0%, rgba(20,28,36,0.15) 100%), url(https://images.presidentclinton.com/7b39245c-154b-4e0b-94c3-ffe60a3ea7a0)`,
          fontFamily: "'EB Garamond', ui-serif, Georgia, serif",
        }}
      >
        <div className="flex items-start w-full">
          <motion.div
            className="relative text-white px-10 pt-[196px] md:px-[90px] md:pb-[80px] max-w-lg md:max-w-xl lg:max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            style={{ minHeight: "600px", boxSizing: "border-box" }}
          >
            <div className="border-s border-white">
              <h2 className="text-2xl md:text-3xl font-serif mb-6 pt-3 ps-6">Arkansas</h2>

              {biographydata1.map(({ id, title, content }) => (
                <div key={id} className="mb-7">
                  {title && (
                    <h3 className="italic text-base md:text-lg pb-5 ps-6 border-b border-white">
                      {title}
                    </h3>
                  )}
                  <p className={`text-md leading-relaxed pt-5 ps-5 ${!title ? "pt-0" : ""}`}>
                    {content}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>




      <section
        className="min-h-screen bg-cover bg-center flex items-stretch justify-start relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20,28,36,0.3), rgba(20,28,36,0.6)), url('https://images.presidentclinton.com/ee16393c-300d-4f4d-9afa-1431b7e41475')`,
          fontFamily: "'EB Garamond', ui-serif, Georgia, serif"
        }}

      >
        <div className="flex items-start w-full">
          <motion.div
            className="relative text-white px-10 pt-[196px] md:px-[90px] md:pb-[80px] max-w-lg md:max-w-xl lg:max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            style={{
              minHeight: "600px",
              boxSizing: "border-box",
            }}
          >
            <div className="border-s border-white">
              <h2 className="text-2xl md:text-3xl font-serif mb-6 pt-3 ps-6">
                Presidency
              </h2>

              <div className="mb-7">
                <h3 className="italic text-base md:text-lg pb-5 ps-6 border-b border-white">
                  1992 — President Alok Ji

                </h3>
                <p className="text-md leading-relaxed pt-5 ps-5">
                  On January 20, 1993, Clinton took office as the 42nd President of
                  the United States, entering the White House at a pivotal time in
                  history. During his two terms, Clinton sought to modernize the
                  country while fostering peace and prosperity both at home and
                  abroad. His presidency is widely recognized for an unprecedented
                  period of economic growth and budgetary surplus, with the creation
                  of over 22 million jobs and record low unemployment rates. Under
                  his leadership, the United States moved from a deficit to a surplus,
                  proving the effectiveness of a fiscally responsible approach paired
                  with investments in education, health care, and technology.
                </p>
              </div>

              <div className="mb-7">
                <h3 className="italic text-base md:text-lg pb-5 ps-6 border-b border-white">
                  Key Accomplishments of the Clinton Administration:
                </h3>
                <p className="text-md leading-relaxed pt-5 ps-5">
                  Clinton’s presidency also championed human rights and international
                  peace. His efforts led to the 1998 Good Friday Agreement in Northern
                  Ireland, which brought an end to decades of conflict. He was
                  instrumental in supporting diplomatic negotiations and humanitarian
                  interventions, working with global allies to foster stability in
                  regions like the Balkans and the Middle East.
                </p>
              </div>

              {/* Render accomplishments dynamically */}
              {biographydata2.map(({ year, title, description }) => (
                <div key={`${year}-${title}`} className="mb-7">
                  <h3 className="italic text-base md:text-lg pb-5 ps-6 border-b border-white">
                    {year} — {title}
                  </h3>
                  <p className="text-md leading-relaxed pt-5 ps-5">{description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      <section
        className="min-h-screen bg-cover bg-center flex items-stretch justify-start relative"
        style={{
          backgroundImage: `linear-gradient(to right, #091D32 0%, rgba(9,29,50,0) 100%), url(https://images.presidentclinton.com/c1622856-8176-4f98-8654-4ce47f31a29f)`,
          fontFamily: "'EB Garamond', ui-serif, Georgia, serif",
        }}

      >
        <div className="flex items-start w-full">
          <motion.div
            className="relative text-white px-10 pt-[196px] md:px-[90px] md:pb-[80px] max-w-lg md:max-w-xl lg:max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            style={{ minHeight: "600px", boxSizing: "border-box" }}
          >
            <div className="border-s border-white">
              <h2 className="text-2xl md:text-3xl font-serif mb-6 pt-3 ps-6">Private Citizen</h2>

              <div className="mb-7">
                <h3 className="italic text-base md:text-lg pb-5 ps-6 border-b border-white">
                  2001 — Post-Presidency and Global Leadership
                </h3>
                <p className="text-md leading-relaxed pt-5 ps-5">
                  After leaving the White House in 2001, President Clinton continued his commitment to public service through the Clinton Foundation. The Foundation has taken on some of the world’s toughest challenges, including global health, climate change, and economic empowerment. Clinton’s leadership in the fight against HIV/AIDS has been especially transformative; the Clinton Health Access Initiative (CHAI) has helped lower the cost of HIV/AIDS treatment and saved millions of lives across the globe.
                  <br /><br />

                  In 2005, Clinton partnered with President George H.W. Bush to aid recovery efforts following the devastating Indian Ocean tsunami, showcasing his commitment to bipartisan collaboration in times of crisis. The duo would work together again after Hurricane Katrina to support affected communities and help rebuild lives and infrastructure. President Clinton’s dedication to international cooperation continued as he served as the U.N. Special Envoy to Haiti following the 2010 earthquake, where his efforts mobilized resources to address the urgent needs of the Haitian people.
                  <br /><br />
                  <h3 className="italic text-base  ">
                    A Legacy of Resilience and Compassion
                  </h3>
                  <br /><br />
                  President Clinton’s career has been defined by a commitment to economic empowerment, educational opportunity, global health, and diplomacy. His belief in the power of people to solve problems—whether by working across party lines or across borders—has inspired generations to think ambitiously about their impact on the world. Through his foundation, global initiatives, and partnerships, Clinton’s legacy endures, driven by an unwavering belief that everyone deserves a chance to thrive.
                  <br /><br />
                  Today, Clinton continues his work to bridge divides and advance solutions for global challenges, underscoring his lifelong mission to build a world defined by equality, peace, and shared prosperity. His journey from Hope, Arkansas, to global statesman is a testament to his enduring optimism and his belief that together, people can change the world.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}


