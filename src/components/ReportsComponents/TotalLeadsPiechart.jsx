import React from "react";
import { useReportContext } from "../../context/ReportContext";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const TotalLeadsPiechart = () => {
  const { total_closed_leads, leadsIn_pipeline } = useReportContext();
  //   console.log(total_closed_leads, total_pipelineData_lead);
  const xValues = ["Leads Closed", "Leads in Pipeline"];
  const yValues = [total_closed_leads, leadsIn_pipeline];
  const barColors = ["#b91d47", "#00aba9"];

  const data = {
    labels: xValues,
    datasets: [
      {
        label: "Leads Report",
        data: yValues,
        backgroundColor: barColors,
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "Total Leads Data",
        font: { size: 18 },
        padding: { top: 10, bottom: 20 },
      },
    },
  };

  return (
    <div>
      <Pie
        data={data}
        options={options}
        style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
      />
    </div>
  );
};

export default TotalLeadsPiechart;
