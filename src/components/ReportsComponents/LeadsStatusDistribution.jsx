import React from "react";
import { Bar } from "react-chartjs-2";

import { useLeadContext } from "../../context/LeadContext";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);
const LeadsStatusDistribution = () => {
  const { leadStatusDistribution } = useLeadContext();
  const xValues = Object.keys(leadStatusDistribution);
  const yValues = Object.values(leadStatusDistribution);

  const data = {
    labels: xValues,
    datasets: [
      {
        label: "Leads status distribution",
        data: yValues,
        backgroundColor: "#36A2EB",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Leads Status Distribution",
        font: { size: 18 },
        padding: { top: 10, bottom: 20 },
      },
    },
    scales: {
      y: {
        ticks: {
          precision: 0, // ⬅ No decimals ever
          stepSize: 1,
        },
      },
    },
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default LeadsStatusDistribution;
