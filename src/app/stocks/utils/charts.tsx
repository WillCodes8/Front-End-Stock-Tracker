import React from "react";
import type { Chart } from "chart.js"; 
import { useState, useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

type PolygonResult = {
  t: number; 
  c: number; 
  o: number; 
  h: number; 
  l: number; 
  v: number; 
};

const backgroundColorPlugin = {
  id: "custom_canvas_background_color",
  beforeDraw: (chart: Chart) => {
    const ctx = chart.canvas.getContext("2d");
    if (!ctx) return;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler, backgroundColorPlugin);

type Props = {
  symbol: string;
  range: string;
};

export const GetChartData = ({ symbol, range = "30" }: Props) => {
  const [dates, setDates] = useState<string[]>([]);
  const [prices, setPrices] = useState<number[]>([]);
  const [lineColor, setLineColor] = useState("rgb(13, 231, 82)");
  const [fillColor, setFillColor] = useState("rgba(13, 231, 82, 0.2)");

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = "tfteb8ZAaFjj2YUWyogY98QjBJxEUw32";

      const multiplier = 1;
      const timespan = "day";
      const numDays = parseInt(range);

      const to = new Date();
      const from = new Date(to.getTime() - numDays * 86400000);

      const formatTo = to.toISOString().split("T")[0];
      const formatFrom = from.toISOString().split("T")[0];

      const Url = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/${multiplier}/${timespan}/${formatFrom}/${formatTo}?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`;

      try {
        const response = await fetch(Url);
        
         if (!response.ok) {
          throw new Error(`Polygon API error: ${response.status} ${response.statusText}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Polygon response is not valid JSON");
        }

        const data = await response.json();

        if (!data || !Array.isArray(data.results) || data.results.length === 0) {
          console.warn(`No chart data found for symbol: ${symbol}`);
          setDates([]);
          setPrices([]);
          return;
        }

        const newLabels = data.results.map((entry) => new Date(entry.t).toLocaleDateString());
        const newPrices = data.results.map((entry) => entry.c);

        if (newPrices.length > 0) {
          const startPrice = newPrices[0];
          const endPrice = newPrices[newPrices.length - 1];

          const greenBorder = "rgb(13, 231, 82)";
          const redBorder = "rgb(255, 99, 132)";

          const greenFill = "rgba(13, 231, 82, 0.2)";
          const redFill = "rgba(255, 99, 132, 0.2)";

          setLineColor(endPrice >= startPrice ? greenBorder : redBorder);
          setFillColor(endPrice >= startPrice ? greenFill : redFill);
        }

        setDates(newLabels);
        setPrices(newPrices);
      } catch (err) {
        console.error("Error fetching chart data", err);
        setDates([]);
        setPrices([]);
        const message = err instanceof Error ? err.message : "An unexpected error occurred.";
        alert(message);
      }
    };

    fetchData();
  }, [symbol, range]);

  const data = {
    labels: dates,
    datasets: [
      {
        label: `Stock Data For ${symbol}`,
        data: prices,
        fill: true,
        borderColor: lineColor,
        backgroundColor: fillColor,
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Y-axis Label",
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
        },
        display: true,
        min: 10,
      },
      x: {
        title: {
          display: true,
          text: "x-axis Label",
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
        },
        display: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
      tooltip: {
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        backgroundColor: "#333333",
      },
    },
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default GetChartData;