import React from "react";

const About = () => {
    return(

        <div className="flex gap-8 justify-center h-max py-10 flex-row">
            <div className="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 shadow-xl transition duration-300 hover:scale-125 cursor-pointer">
            <div className="flex h-full justify-center items-center">
                <span className="font-bold text-white text-lg">
                    Welcome to my Stock & Crypto Tracker! <br /><br />
                    <p className="text-xs">Here you'll be able to follow stocks, stay on top of market trends, and more.
                    This project utilizes Next.js, Tailwind.css, and multiple APIs to bring stock data
                    together, and allows me to practice UI/UX design.</p>
                </span>
            </div>
        </div>
        </div>

    )
}

export default About