"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Background from "../utils/background";
import MarketTrends from "./components/marketTrends";
import Search from "./components/search";
import DataContainer from "./components/dataContainer";
import Footer from "../components/footer";

export default function Stocks() {
  const date = new Date().toLocaleDateString()
  const [ticker, setTicker] = useState("")
  const [range, setRange] = useState("30")

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <Background/>

      <div id="mainContent" className="flex flex-col items-center flex-grow pt-22 px-6 gap-6 h-full">

        <div id="nav" className="fixed top-0 w-full z-50">
          <Navbar/>
        </div>

        <div id="date">
          <h1 className="font-bold text-white mt-10">Stock Data For: {date}</h1>
        </div>

        <div id="marketTrends" className="w-8/9 h-[80px] text-center mt-5 mb-30">
          <MarketTrends/>
        </div>

        <div>
          <h1 className="font-bold text-white text-center">Note: Due To The Limitations Of The API Being Used Only
            Two Searches Per Minute Are Supported
          </h1>
        </div>

        <div id="search" className="w-4/9 mb-10 h-[50px] text-center">
          <Search onSearch={setTicker} range={range} setRange={setRange}/>
        </div>

        <div>
          <h1 className="font-bold text-white text-center">Data Will Appear Below:</h1>
        </div>

        <div id="dataContainer" className="w-full h-[400px] text-center mb-10">
          <DataContainer symbol={ticker} range={range} />
        </div>

      </div>

      <div id="footer" className="flex justify-center text-white text-center font-bold pb-10">
        <Footer/>
      </div>

    </main>
  );
}