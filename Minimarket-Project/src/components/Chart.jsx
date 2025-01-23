import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Chart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = response.data;

        // Proses data untuk chart
        const labels = data.slice(0, 10).map((post) => `Post ${post.id}`); // Ambil 10 data pertama
        const values = data.slice(0, 10).map((post) => post.title.length); // Panjang title

        setChartData({
          labels,
          datasets: [
            {
              label: 'Title Length',
              data: values,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.4,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'API Data Line Chart',
      },
    },
  };
  
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Line Chart from API</h2>
      {chartData ? <Line data={chartData} options={options} /> : <p>Loading chart...</p>}
    </div>  
  );
  };
  
  export default Chart;
  