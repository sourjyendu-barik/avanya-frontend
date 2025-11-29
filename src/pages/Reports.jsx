import React from "react";
import Header from "../components/Header";
import NavAside from "../components/AppComponent/NavAside";
import TotalLeadsPiechart from "../components/ReportsComponents/TotalLeadsPiechart";
import LeadsClosedBySalesAgent from "../components/ReportsComponents/LeadsClosedBySalesAgent";
import LeadsStatusDistribution from "../components/ReportsComponents/LeadsStatusDistribution";
import useRefresh from "../hooks/useRefresh";
const Reports = () => {
  useRefresh();
  return (
    <div className="body">
      <Header> Avanya Crm Reports</Header>
      <div className="page-content">
        <NavAside />
        <main className="main-page">
          <h2>Report overview</h2>
          <TotalLeadsPiechart />
          <LeadsClosedBySalesAgent />
          <LeadsStatusDistribution />
        </main>
      </div>
    </div>
  );
};

export default Reports;
