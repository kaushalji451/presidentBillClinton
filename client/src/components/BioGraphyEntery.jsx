import React from "react";

const Entry = ({ year, text, images }) => {
  const defaultImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s";

  // Use images prop or default fallback (2 images)
  const imgArray = images && images.length > 0 ? images : [defaultImg, defaultImg];

  return (
    <div className="mb-7 flex flex-col md:flex-row md:justify-between gap-6">
      {/* Left Side - Text */}
      <div className="md:w-1/2">
        <h3 className="italic text-base md:text-lg pb-5 ps-3 md:ps-6 border-b border-white flex items-center gap-3">
          {year}
        </h3>
        <p className="text-md leading-relaxed pt-5 ps-3 md:ps-5">{text}</p>
      </div>

      {/* Right Side - Images */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        {imgArray.length === 4 ? (
          // 4 images → 2x2 grid
          <div className="grid ps-4 grid-cols-2 gap-4 w-full max-w-md">
            {imgArray.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`timeline-${i}`}
                className="w-full h-auto max-h-40 rounded-xl object-cover"
              />
            ))}
          </div>
        ) : (
          // 2 images → flex row
          <div className="flex gap-4 ps-4 justify-center md:justify-end w-full max-w-md">
            {imgArray.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`timeline-${i}`}
                className="w-1/2 sm:w-1/3 md:w-1/2 h-auto max-h-40 rounded-xl object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Entry;
