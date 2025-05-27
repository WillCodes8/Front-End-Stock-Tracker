import React from "react";
import { useState, useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Line } from "react-chartjs-2";

const backgroundColorPlugin = {
  id: "custom_canvas_background_color",
  beforeDraw: (chart: any) => {
    const ctx = chart.canvas.getContext("2d");
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "#000000"; // <-- Set this to your desired background color
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler, backgroundColorPlugin);

type Props = {
  symbol: string
  range: string
};

export const GetChartData = ({symbol, range = "30"}: Props) => {

  const [dates, setDates] = useState<string[]>([])
  const [prices, setPrices] = useState<number[]>([])
  const [lineColor, setLineColor] = useState("rgb(13, 231, 82)");
  const [fillColor, setFillColor] = useState("rgba(13, 231, 82, 0.2)")

  useEffect(() => {

    const fetchData = async () => {
      const API_KEY = "tfteb8ZAaFjj2YUWyogY98QjBJxEUw32"

      const multiplier = 1
      const timespan = "day"

      let numDays = parseInt(range)

      let to = new Date()
      let from = new Date(to.getTime() - numDays * 86400000);

      let formatTo = to.toISOString().split("T")[0]
      let formatFrom = from.toISOString().split("T")[0]

      const Url = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/${multiplier}/${timespan}/${formatFrom}/${formatTo}?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`
      
      try {
        const response = await fetch(Url);

        console.log("Fetching:", Url);

        const data = await response.json();

        console.log("API Response:", data);

        console.log(data)
        console.log("Current range prop:", range);
        console.log("From:", formatFrom);
        console.log("To:", formatTo);

        if (!data || data.resultsCount === 0 || !Array.isArray(data.results)) {
          throw new Error(`Invalid symbol "${symbol}" or no data available for the selected range.`);
        }

        if (data && data.results && Array.isArray(data.results) && data.results.length > 0) {
          const newLabels = data.results.map((entry: any) =>
          new Date(entry.t).toLocaleDateString()
        );
          const newPrices = data.results.map((entry: any) => entry.c);

          if(newPrices.length > 0){
            const startPrice = newPrices[0];
            const endPrice = newPrices[newPrices.length - 1];

            const greenBorder = "rgb(13, 231, 82)";
            const redBorder = "rgb(255, 99, 132)";

            const greenFill = "rgba(13, 231, 82, 0.2)";
            const redFill = "rgba(255, 99, 132, 0.2)";

            const color = endPrice >= startPrice ? greenBorder : redBorder;
            const fill = endPrice >= startPrice ? greenFill : redFill;

            setLineColor(color);
            setFillColor(fill);
          }

          setDates(newLabels);
          setPrices(newPrices);
        } else {
          setDates([]);
          setPrices([]);
        }
      } catch (err: any) {
        console.error("Error fetching chart data", err);
        setDates([]);
        setPrices([]);
        alert(err.message);
      }
    };

    fetchData();

  }, [symbol, range])

  // X - axis lable
  const labels = dates;

  const data = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        label: `Stock Data For ${symbol}`,
        data: prices,
        fill: true,
        borderColor: lineColor,
        backgroundColor: fillColor,
        tension: 0.1
      },
      // insert similar in dataset object for making multi line chart
    ],
  };

  // To make configuration
  const options = {
  scales: {
    y: {
      title: {
        display: true,
        text: "Y-axis Label",
        color: "#ffffff"
      },
      ticks: {
        color: "#ffffff"
      },
      display: true,
      min: 10,
    },
    x: {
      title: {
        display: true,
        text: "x-axis Label",
        color: "#ffffff"
      },
      ticks: {
        color: "#ffffff"
      },
      display: true,
    }
  },
  plugins: {
    legend: {
      labels: {
        color: "#ffffff"
      }
    },
    tooltip: {
      titleColor: "#ffffff",
      bodyColor: "#ffffff",
      backgroundColor: "#333333"
    }
  }
};

  return (
    <div style={{ margin: "0 auto" }}>
      <Line data={data} options={options} />
    </div>
  );

}


export default GetChartData;