import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { useLeadContext } from "../context/LeadContext";
import LeadlistTable from "../components/LeadlistComponent/LeadlistTable";
import useSelectList from "../hooks/useSelectList";
import SelectDropDown from "../components/LeadlistComponent/SelectDropDown";
// import { useLocation } from "react-router";
// import { useEffect } from "react";
import useRefresh from "../hooks/useRefresh";
const SalesPage = () => {
  useRefresh();
  const { filters, updateFilter } = useLeadContext();
  // const location = useLocation();
  // useEffect(() => {
  //   clearFilter();
  // }, [location.pathname]);
  const {
    salesAgentDataLoading,
    salesAgentDataLoadingError,
    leadStatusList,
    priorityList,
    sales_agentList,
  } = useSelectList();
  const sortOptions = [
    { value: true, label: "Low to High" },
    { value: false, label: "High to Low" },
  ];
  return (
    <div className="body">
      <Header> Leads by Sales Agent</Header>
      <div className="page-content">
        <Aside />

        <div className="main-page">
          <div>
            <h2>Lead List by Agent</h2>
            {salesAgentDataLoading && <span>Salesagent data is loading</span>}
            {salesAgentDataLoadingError && (
              <span>Error while data is loading</span>
            )}

            <SelectDropDown
              label={"Leads List By Sales Agent"}
              options={[...sales_agentList, { label: "All", value: "" }]}
              value={
                sales_agentList.find((o) => o.value === filters.salesAgent) ||
                null
              }
              onChange={(selected) =>
                updateFilter("salesAgent", selected?.value)
              }
            />
            <LeadlistTable />
          </div>

          <div>
            <ul className="row g-2">
              <li className="col-12 col-md-6 col-lg-4 col-xl-4">
                <SelectDropDown
                  label="Lead Status"
                  options={[...leadStatusList, { label: "All", value: "" }]}
                  value={
                    leadStatusList.find((o) => o.value === filters.status) ||
                    null
                  }
                  onChange={(selected) =>
                    updateFilter("status", selected?.value)
                  }
                />
              </li>
              <li className="col-12 col-md-6 col-lg-4 col-xl-4">
                <SelectDropDown
                  label="Priority"
                  options={[...priorityList, { label: "All", value: "" }]}
                  value={
                    priorityList.find((o) => o.value === filters.priority) ||
                    null
                  }
                  onChange={(selected) =>
                    updateFilter("priority", selected?.value)
                  }
                />
              </li>
              <li className="col-12 col-md-6 col-lg-4 col-xl-4">
                <SelectDropDown
                  label="Sort By"
                  options={sortOptions}
                  value={
                    sortOptions.find((o) => o.value === filters.sortByAsc) ||
                    null
                  }
                  onChange={(selected) =>
                    updateFilter("sortByAsc", selected?.value)
                  }
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
