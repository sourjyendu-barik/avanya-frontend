import React from "react";
import SelectDropDown from "./SelectDropDown";
import { useNavigate } from "react-router";
import useSelectList from "../../hooks/useSelectList";
import Select from "react-select";
import { useLeadContext } from "../../context/LeadContext";
const LeadlistFilter = () => {
  const navigate = useNavigate();
  const { filters, updateFilter, clearFilter } = useLeadContext();
  const {
    salesAgentDataLoading,
    salesAgentDataLoadingError,
    leadSourceList,
    leadStatusList,
    priorityList,
    sales_agentList,
    tag_list,
  } = useSelectList();
  // console.log(filters);
  const sortOptions = [
    { value: true, label: "Low to High" },
    { value: false, label: "High to Low" },
  ];

  return (
    <div className="quick-filters">
      {/* salesAgent: "",
    status: "",
    tags: [],
    source: "",
    sortByAsc: true, */}
      <ul>
        <li>
          {salesAgentDataLoading && <span>Salesagent data is loading</span>}
          {salesAgentDataLoadingError && (
            <span>Error while data is loading</span>
          )}

          {/* onChange={(selected) => handleChange("salesAgent", selected?.value)} */}
          <SelectDropDown
            label={"Sales agent"}
            options={sales_agentList}
            value={
              sales_agentList.find((o) => o.value === filters.salesAgent) ||
              null
            }
            onChange={(selected) => updateFilter("salesAgent", selected?.value)}
          />
        </li>
        <li>
          <SelectDropDown
            label="Lead Status"
            options={leadStatusList}
            value={
              leadStatusList.find((o) => o.value === filters.status) || null
            }
            onChange={(selected) => updateFilter("status", selected?.value)}
          />
        </li>
        <li>
          <div className="mb-2 flex-fill">
            <label htmlFor={"tag"} className="form-label fw-semibold">
              Tags:
            </label>
            <Select
              inputId={"tag"}
              options={tag_list}
              placeholder={`Add tags`}
              classNamePrefix="react-select"
              value={tag_list.filter((o) => filters.tags.includes(o.value))}
              onChange={(selected) =>
                updateFilter(
                  "tags",
                  selected?.map((opt) => opt.value)
                )
              }
              menuPlacement="top"
              isMulti
            />
          </div>
        </li>
        <li>
          <SelectDropDown
            label="Lead Source"
            options={leadSourceList}
            value={
              leadSourceList.find((o) => o.value === filters.source) || null
            }
            onChange={(selected) => updateFilter("source", selected?.value)}
          />
        </li>
        <li>
          <SelectDropDown
            label="Sort By"
            options={sortOptions}
            value={
              sortOptions.find((o) => o.value === filters.sortByAsc) || null
            }
            onChange={(selected) => updateFilter("sortByAsc", selected?.value)}
          />
        </li>
        <li>
          <button
            className="btn btn-secondary"
            style={{ position: "relative", top: "1.8rem" }}
            onClick={() => navigate("/addLead")}
          >
            Add New Lead
          </button>
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
  );
};

export default LeadlistFilter;
