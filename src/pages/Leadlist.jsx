import React from "react";
import Header from "../components/Header";
import LeadlistTable from "../components/LeadlistComponent/LeadlistTable";
import Aside from "../components/Aside";
import LeadlistFilter from "../components/LeadlistComponent/LeadlistFilter";
import "../components/LeadlistComponent/leadList.css";
const Leadlist = () => {
  return (
    <div className="body">
      <Header>Lead List</Header>
      <div className="page-content">
        <Aside />
        <div className="main-page">
          <LeadlistTable />
          <LeadlistFilter />
        </div>
      </div>
    </div>
  );
};

export default Leadlist;
