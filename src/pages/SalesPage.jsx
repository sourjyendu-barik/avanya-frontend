import React from "react";
import { useSalesContext } from "../context/SalesAgentsContext";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { useLeadContext } from "../context/LeadContext";
import LeadlistTable from "../components/LeadlistComponent/LeadlistTable";
import useSelectList from "../hooks/useSelectList";
import SelectDropDown from "../components/LeadlistComponent/SelectDropDown";
const SalesPage = () => {
  const { filters, updateFilter, clearFilter } = useLeadContext();
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
              options={sales_agentList}
              value={
                sales_agentList.find((o) => o.value === filters.salesAgent) ||
                null
              }
              onChange={(selected) =>
                updateFilter("salesAgent", selected?.value)
              }
            />
          </div>
          <LeadlistTable />

          <div className="quick-filters">
            <ul>
              <li>
                <SelectDropDown
                  label="Lead Status"
                  options={leadStatusList}
                  value={
                    leadStatusList.find((o) => o.value === filters.status) ||
                    null
                  }
                  onChange={(selected) =>
                    updateFilter("status", selected?.value)
                  }
                />
              </li>
              <li>
                <SelectDropDown
                  label="Priority"
                  options={priorityList}
                  value={
                    priorityList.find((o) => o.value === filters.priority) ||
                    null
                  }
                  onChange={(selected) =>
                    updateFilter("priority", selected?.value)
                  }
                />
              </li>
              <li>
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
              <li>
                <button
                  className="btn btn-secondary"
                  style={{ position: "relative", top: "1.8rem" }}
                  onClick={() => clearFilter()}
                >
                  Clear Filter
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
