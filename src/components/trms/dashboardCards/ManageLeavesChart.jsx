
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ManageLeavesChart() {
  // Data for the chart (you can modify this based on your data)
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // months
    datasets: [
      {
        label: 'Leaves Taken',
        data: [3, 2, 1, 5, 6, 2, 4], // number of leaves taken per month
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Leaves Taken by Month',
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default ManageLeavesChart;
