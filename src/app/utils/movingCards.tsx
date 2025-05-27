import React from "react";

type StockCardProps = {
  ticker: string;
  open: number;
  close: number;
  vol: number;
  changePercent: number;
};

export const PositiveStockCard = ({ ticker, open, close, vol, changePercent }: StockCardProps) => (
  <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 min-w-[250px]">
    <div>
      <p className="text-sm text-gray-500 dark:text-white">{ticker}</p>
      <p className="text-2xl font-medium text-gray-900 dark:text-white">${close.toFixed(2)}</p>
      <p className="text-xs text-gray-400 dark:text-white">Open: ${open.toFixed(2)}</p>
      <p className="text-xs text-gray-400 dark:text-white">Vol: {vol.toLocaleString()}</p>
    </div>
    <div className="inline-flex gap-2 rounded-sm bg-green-100 p-1 text-green-600 dark:bg-green-700 dark:text-green-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
      <span className="text-xs font-medium">{changePercent.toFixed(2)}%</span>
    </div>
  </article>
);

export const NegativeStockCard = ({ ticker, open, close, vol, changePercent }: StockCardProps) => (
  <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 min-w-[250px]">
    <div>
      <p className="text-sm text-gray-500 dark:text-white">{ticker}</p>
      <p className="text-2xl font-medium text-gray-900 dark:text-white">${close.toFixed(2)}</p>
      <p className="text-xs text-gray-400 dark:text-white">Open: ${open.toFixed(2)}</p>
      <p className="text-xs text-gray-400 dark:text-white">Vol: {vol.toLocaleString()}</p>
    </div>
    <div className="inline-flex gap-2 rounded-sm bg-red-100 p-1 text-red-600 dark:bg-red-700 dark:text-red-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
      <span className="text-xs font-medium">{Math.abs(changePercent).toFixed(2)}%</span>
    </div>
  </article>
);