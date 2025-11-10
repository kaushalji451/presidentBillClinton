import React from 'react'
import {Link} from 'react-router-dom'
const Slide2 = () => {
  return (
    <div
      className="min-h-screen w-full  flex justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dpbpu5b0v/image/upload/v1762778927/IMG_9382_2_1_rgzpnw.jpg)`,
        fontFamily: "'EB Garamond', ui-serif, Georgia, serif",
      }}
    >
      {/* Overlay: cool, dark blue shade for consistency */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#091D32]/80 z-0  pointer-events-none" />
      {/* Main Biography Content */}
      <div className="relative z-10 w-full max-w-7xl flex justify-end px-6 py-12 bg-transparent">
        {/* Right: Biography Text */}
        <div className="w-full md:w-1/2 flex flex-col   justify-center md:pl-16">
          <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-white font-serif">
            Biography
          </h1>
          <div className=" font-serif text-white">
            <h2 className="text-lg md:text-xl font-medium mb-4">
              Alok A Tripathi: Senior Astrologer, Social Worker, Businessman
            </h2>
            <p className="mb-2 text-[17px] leading-relaxed text-gray-100">
              Shri Alok Anand Tripathi, a renowned senior astrologer, social worker, and businessman,
              was born during the Mahakumbh in the mid-80s into a distinguished family of scholars and
              spiritual leaders of Varanasi. Rooted in tradition yet guided by modern education, he
              achieved excellence in music, earning Sangeet & Tabla Visharad, and later completed
              B.Tech from VIT and an MBA from London. In 2013, he received Guru Diksha and dedicated
              himself to Vedic studies, astrology, and the service of society—offering guidance to
              countless individuals, including prominent personalities across India and abroad. As the
              Custodian of Daiv-Prashna and founder of multiple ventures, including Invent-Tree and
              Golden Ghaf, he has balanced spirituality with entrepreneurship. With the formation of
              Anandvan Trust, he continues to lead as a beacon of wisdom, service, and inspiration
              for future generations.
            </p>

            <Link
              to="/biography"
              className="underline underline-offset-2 text-blue-300 hover:text-blue-200 transition mt-4 inline-block"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide2
