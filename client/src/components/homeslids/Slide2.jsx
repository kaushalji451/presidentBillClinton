import React from 'react'

const Slide2 = () => {
  return (
   <div
        className="min-h-screen w-full  flex justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url(https://images.presidentclinton.com/4ad8d2fb-29a8-425c-8eaa-519af6d4dd75)`,
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
                William Jefferson Clinton: A Life of Service and Global Impact
              </h2>
              <p className="mb-2 text-[17px] leading-relaxed text-gray-100">
                William Jefferson Clinton, the 42nd President of the United States, has spent a lifetime in public service and remains a dynamic force for global progress, democracy, and human rights. Born on August 19, 1946, in Hope, Arkansas, his upbringing in a small town instilled in him values of community, resilience, and a commitment to lifting others—a foundation that would guide his career in politics and his later work on the global stage.
              </p>
              <a
                href="#"
                className="underline underline-offset-2 text-blue-300 hover:text-blue-200 transition mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Slide2
