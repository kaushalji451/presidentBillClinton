import React from 'react'

const Entry = ({ year, text }) => {

    const defaultImg =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s";


    return (
        <div className="mb-7 flex flex-col md:flex-row md:justify-between gap-6">
            {/* Text */}
            <div className="md:w-1/2">
                <h3 className="italic text-base md:text-lg pb-5 ps-3 md:ps-6 border-b border-white flex items-center gap-3">
                    {year}
                </h3>
                <p className="text-md leading-relaxed pt-5 ps-3 md:ps-5">{text}</p>
            </div>
            {/* Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
                <img
                    src={defaultImg}
                    alt=""
                    className="w-1/2 max-sm:w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-xl object-cover"
                />
            </div>
        </div>
    )
}


export default Entry
