import React from "react";
import { ChartBarTwo } from "../utils/icons";

const Stocks = () => {
    return(
        <div className="flex gap-8 justify-center h-max py-10 flex-row">
            <div className="transform rounded-xl h-28 w-32 sm:h-40 sm:w-48 shadow-xl transition duration-300 hover:scale-115 cursor-pointer">
            <div className="flex h-full justify-center items-center">
                <ChartBarTwo className="w-15 h-15" />
                <span className="font-bold text-white">Live Stock Prices, Charts, & Trends</span>
                <ChartBarTwo className="w-15 h-15" />
            </div>
            </div>
        </div>

    )
}

export default Stocks