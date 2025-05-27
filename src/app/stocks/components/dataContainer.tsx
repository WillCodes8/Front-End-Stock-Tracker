"use client";

import React from "react";
import { useEffect, useState } from "react";
import { getStockData } from "../utils/stockLogic";
import { GetChartData } from "../utils/charts";

type Props = {
  symbol: string;
  range: string
};

const DataContainer = ({ symbol, range }: Props) => {
    
    type stockData = {
        ticker: string,
        open: number,
        close: number,
        volume: number,
        percentChange: number,
        lowest: number,
        volWeight: number
    }

    const [data, setData] = useState<stockData | null>(null)
    const [error, setError] = useState(null)

    useEffect(() => {

        if(!symbol){
            return
        }

        getStockData(symbol)
        .then(res => {

            console.log("Received symbol:", symbol);
            console.log(res)

            if(res.results && res.results.length > 0){
                const result = res.results[0]

                const info = {
                    ticker: result.T,
                    open: result.o,
                    close: result.c,
                    volume: result.v,
                    percentChange: ((result.c - result.o) / result.o) * 100,
                    lowest: result.l,
                    volWeight: result.vw
                }

                setData(info)
                
            }
    
        })

        .catch(error => {
            console.error(error);
            setError(error.message);
        });

    }, [symbol])

    if (!symbol) {
        return null; // or return a placeholder like <p>Enter a ticker to view data</p>
    }
    
    return(
        <div className="flex flex-grow mt-10 pb-12 px-6 gap-6">
            <div id="tickerChart" className="w-1/2 text-center">
                <h1 className="text-white font-bold text-4xl mb-10">{data?.ticker}</h1>
                <GetChartData symbol={symbol} range={range} />
            </div>
            <div id="otherData" className="w-1/2 -mt-8 h-[500px] flex flex-col justify-center gap-10">
                <h1 className="text-center font-bold text-white">Opening Price: {data?.open}</h1>
                <h1 className="text-center font-bold text-white">Closing Price: {data?.close}</h1>
                <h1 className="text-center font-bold text-white">Lowest Price Today: {data?.lowest}</h1>
                <h1 className="text-center font-bold text-white">Stock Volume: {data?.volume.toLocaleString()}</h1>
                <h1 className="text-center font-bold text-white">
                    Overall Price Change:{" "}
                    {data?.percentChange !== undefined && (
                        <span className={data.percentChange > 0 ? "text-green-500" : "text-red-500"}>
                        {data.percentChange.toFixed(2)}%
                        </span>
                    )}
                </h1>
                <h1 className="text-center font-bold text-white">Volume Weight Per Price: {data?.volWeight}</h1>
            </div>
        </div>
    )
}

export default DataContainer