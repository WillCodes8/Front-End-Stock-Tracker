"use client";

import React from "react";
import { useEffect, useState } from "react";
import { getStockData } from "../utils/stockLogic"
import { PositiveStockCard, NegativeStockCard } from "@/app/utils/movingCards";

type StockInfo = {
  ticker: string;
  open: number,
  close: number,
  vol: number;
  change: number;
};

const MarketTrends = () => {

    const [data, setData] = useState<StockInfo[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const tickerSymbols = ["NVDA", "VTI"];
        //

        tickerSymbols.forEach(ticker => {
        getStockData(ticker)
            .then(data => {
                console.log(data)
                const info = [
                    {ticker: data.results[0].T,
                     open: data.results[0].o,
                     close: data.results[0].c,
                     vol: data.results[0].v,
                     change: data.results[0].c - data.results[0].o
                    }
                ]
                setData(prev => [...prev, ...info]);
            })
            .catch(error => {
                console.error(error);
                setError(error?.message || "An unexpected error occurred.");
            });
        });
    }, []);

    if (error) {
    return (
        <div className="mt-10 text-center text-red-500 font-semibold">
            Error: {error}
        </div>
    );
}

    return(
        <div className="overflow-hidden flex">
            <ul className="flex gap-4 justify-center text-white py-4 animate-scroll">
               {[...data, ...data].map((stock, index) => {
                const changePercent = ((stock.close - stock.open) / stock.open) * 100;

                    return (
                        <li key={`${stock.ticker}-${index}`}>
                            {stock.change > 0 ? (
                                <PositiveStockCard
                                ticker={stock.ticker}
                                open={stock.open}
                                close={stock.close}
                                vol={stock.vol}
                                changePercent={changePercent}
                                />
                            ) : (
                                <NegativeStockCard
                                ticker={stock.ticker}
                                open={stock.open}
                                close={stock.close}
                                vol={stock.vol}
                                changePercent={changePercent}
                                />
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default MarketTrends;