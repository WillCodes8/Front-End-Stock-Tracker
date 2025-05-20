import React from "react";
import "../utils/background.css"

const Background = () => {
    return(
        <div className="background">
            <div className="area w-full h-screen absolute bg-gradient-to-l from-[#8f94fb] to-[#4e54c8] -z-10">
            <ul className="circles relative w-full h-full overflow-hidden">
                <li className="circle circle1"></li>
                <li className="circle circle2"></li>
                <li className="circle circle3"></li>
                <li className="circle circle4"></li>
                <li className="circle circle5"></li>
                <li className="circle circle6"></li>
                <li className="circle circle7"></li>
                <li className="circle circle8"></li>
                <li className="circle circle9"></li>
                <li className="circle circle10"></li>
            </ul>
            </div>
        </div>
    )
}

export default Background