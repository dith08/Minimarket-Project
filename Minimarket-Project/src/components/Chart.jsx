import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const listBulan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Chart = () => {
  const [chartData, setChartData] = useState(null);
  const [bulanIndex, setBulanIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        let data = response.data.slice(0, 31);
        
        if (isMobile) {
          data = data.slice(0, 8);
        }

        const labels = data.map((post) => post.id);
        const values = data.map((post) => post.title.length);
        const bodyLength = data.map((post) => post.body.length);

        setChartData({
          labels,
          datasets: [
            {
              label: "SPM Daren",
              data: values,
              borderColor: "#277ffe",
              backgroundColor: "rgba(39, 127, 254, 0.2)",
              fill: true,
              tension: 0.4,
              pointStyle: "circle",
              pointRadius: 3,
              pointBackgroundColor: "#277ffe",
            },
            {
              label: "SPM Bendan Pete",
              data: bodyLength,
              borderColor: "#04d57d",
              backgroundColor: "rgba(4, 213, 125, 0.2)",
              fill: true,
              tension: 0.4,
              pointStyle: "circle",
              pointRadius: 3,
              pointBackgroundColor: "#04d57d",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isMobile]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { padding: 15 },
      },
      y: {
        grid: { display: true },
        border: { display: false },
        ticks: { padding: 15 },
      },
    },
  };

  const Previous = () => {
    setBulanIndex((Index) => (Index > 0 ? Index - 1 : listBulan.length - 1));
  };

  const Next = () => {
    setBulanIndex((Index) => (Index < listBulan.length - 1 ? Index + 1 : 0));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-[23rem] md:w-full">
      <div className="flex items-center mb-4 justify-between">
        <h2 className="text-blue-600 font-semibold text-lg flex items-center">
          Kehadiran <span className="text-slate-300 text-sm ml-1">/Bulan</span>
        </h2>
        <div className="flex items-center justify-center">
          <button onClick={Previous} className="px-3 py-1 text-xl">
            <SlArrowLeft size={20} />
          </button>
          <h2 className="text-blue-600 font-semibold text-lg">{listBulan[bulanIndex]}</h2>
          <button onClick={Next} className="px-3 py-1 text-xl">
            <SlArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="h-[300px] w-full">
        {chartData ? <Line data={chartData} options={options} /> : <p>Loading chart...</p>}
      </div>
    </div>
  );
};

export default Chart;