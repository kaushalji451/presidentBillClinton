import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const backgroundImage =
  "https://images.presidentclinton.com/a86db80a-3984-4966-b29e-9f9c8fe3b722"; // Swap with your image if desired

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(form)
    });

    // Optional: handle the response
    if (data.ok) {
      // success logic
      alert("We will contact you soon.");
      navigate("/");

    } else {
      // error logic
      alert("some error occured.");
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-2  bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(20,28,36,0.80),rgba(20,28,36,0.96)), url(${backgroundImage})`,
        fontFamily: "'EB Garamond', ui-serif, Georgia, serif",
      }}
    >
      {/* max-w-2xl w-full mx-auto */}
      <div className="w-full  bg-[#091D32]/50 pt-[200px] rounded-md shadow-xl   font-serif text-white relative">
        <div className='max-w-5xl mx-auto '>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <h1 className="text-center text-2xl md:text-3xl  mb-4">
              Contact Us
            </h1>
            <p className="text-center mb-4 text-[16px] leading-relaxed text-gray-100">
              Welcome to President Clinton's official website.
              <br /><br />
              This is more than a place to learn about one man’s journey; it’s a testament to the boundless potential of people uniting for good. President Clinton has devoted his life to empowering individuals, strengthening communities, and lighting the path toward a future where everyone can thrive. We celebrate that spirit of optimism and collective action—a belief that, together, we can break down barriers, expand opportunity, and achieve the extraordinary.
              <br /><br />
              Whether you’re here to learn, connect, or be part of the mission, we invite you to join this shared vision. We’d love to keep in touch. Fill out the form below and thank you for believing in a better, brighter world for all.
              <br /><br />
              Stay in touch by filling out the form below:
            </p>
            <form
              className="space-y-8 my-[120px] max-w-md mx-auto"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-md font-serif mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border-b border-gray-300 bg-transparent text-white placeholder-gray-300 px-0 py-2 focus:outline-none focus:border-blue-500 font-serif text-md"
                  placeholder=""
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={{ fontFamily: "'EB Garamond', ui-serif, Georgia, serif" }}
                />
              </div>
              <div>
                <label className="block text-md font-serif mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border-b border-gray-300 bg-transparent text-white placeholder-gray-300 px-0 py-2 focus:outline-none focus:border-blue-500 font-serif text-md"
                  placeholder=""
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{ fontFamily: "'EB Garamond', ui-serif, Georgia, serif" }}
                />
              </div>
              <div>
                <label className="block text-md font-serif mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full border-b border-gray-300 bg-transparent text-white placeholder-gray-300 px-0 py-2 focus:outline-none focus:border-blue-500 font-serif text-md"
                  placeholder=""
                  value={form.phone}
                  onChange={handleChange}
                  required
                  style={{ fontFamily: "'EB Garamond', ui-serif, Georgia, serif" }}
                />
              </div>
              <div>
                <label className="block text-md font-serif mb-2" htmlFor="message">
                  Enter Your Message...
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full border-b border-gray-300 bg-transparent text-white placeholder-gray-300 px-0 py-2 min-h-[80px] focus:outline-none focus:border-blue-500 font-serif text-md"
                  placeholder=""
                  value={form.message}
                  onChange={handleChange}
                  required
                  style={{ fontFamily: "'EB Garamond', ui-serif, Georgia, serif" }}
                />
              </div>
              <div className="flex flex-col items-center mt-6">
                {success && (
                  <div className="mb-4 text-green-500 font-semibold">
                    Success
                  </div>
                )}
                <button
                  type="submit"
                  className="text-center px-8 py-2 border-b border-gray-300 font-serif text-md bg-transparent  transition "
                  style={{ fontFamily: "'EB Garamond', ui-serif, Georgia, serif" }}
                >
                  Submit
                </button>
              </div>
            </form>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
