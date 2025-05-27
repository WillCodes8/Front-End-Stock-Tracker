"use client";

import React from "react";
import { useState } from "react";

type Props = {
    onSearch: (ticker: string) => void
    range: string
    setRange: (value: string) => void
};

const Search = ({ onSearch, range, setRange }: Props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input.trim().toUpperCase()); 
};


    return(
        <div>
            <div className="flex flex-col justify-center">
            <div className="relative w-full sm:max-w-2xl sm:mx-auto">
                <div className="overflow-hidden z-0 rounded-full relative p-3">
                <form role="form" onSubmit={handleSubmit} className="relative flex z-50 bg-white rounded-full">
                    <input id="stockInput" onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter Your Ticker Symbol Here..." className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"></input>
                    <select id="timespan" value={range} onChange={(e) => setRange(e.target.value)} className="rounded-full px-6 py-4 text-gray-700 bg-white border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ml-2">
                        <option value="30 Days">30 days</option>
                        <option value="60 Days">60 days</option>
                        <option value="90 Days">90 days</option>
                    </select>
                    <button className="bg-indigo-800 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">Search</button>
                </form>
                <div className="glow glow-1 bg-blue-700 z-10 absolute"></div>
                <div className="glow glow-2 bg-blue-600 z-20 absolute"></div>
                <div className="glow glow-3 bg-blue-600 z-30 absolute"></div>
                <div className="glow glow-4 bg-blue-700 z-40 absolute"></div>
                </div>
            </div>
            </div>
        </div>
    )
}


export default Search