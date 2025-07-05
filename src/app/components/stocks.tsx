import React from "react";
import { ChartBarTwo } from "../utils/icons";

const Stocks = () => {
  return (
    <div className="flex gap-8 justify-center h-max py-10 flex-row">
      <div className="transform rounded-xl h-40 w-48 sm:h-64 sm:w-72 bg-teal-700 shadow-xl transition duration-300 hover:scale-125">
        <div className="flex h-full justify-center items-center text-center px-4">
          <span className="font-bold text-white text-lg">
            Track Your Stocks Live! <br /><br />
            <p className="text-xs">
              Stay updated on price trends and explore stock data visualizations in real-time. Click to view your dashboard.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stocks;