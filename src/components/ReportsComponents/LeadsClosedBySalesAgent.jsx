import React from "react";
import { Bar } from "react-chartjs-2";
import { useReportContext } from "../../context/ReportContext";

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

const LeadsClosedBySalesAgent = () => {
  const { agent_wise_ClosedLead } = useReportContext();
  const labelsX = Object.keys(agent_wise_ClosedLead);
  const datay = Object.values(agent_wise_ClosedLead);
  const data = {
    labels: labelsX,
    datasets: [
      {
        label: "Lead closed by sales agent",
        data: datay,
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
        text: "Leads closed by sales agent",
        font: { size: 18 },
        padding: { top: 10, bottom: 20 },
      },
    },
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default LeadsClosedBySalesAgent;
