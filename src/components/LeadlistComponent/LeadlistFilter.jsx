import React from "react";
import SelectDropDown from "./SelectDropDown";
// import { useNavigate } from "react-router";
import useSelectList from "../../hooks/useSelectList";
import Select from "react-select";
import { useLeadContext } from "../../context/LeadContext";
const LeadlistFilter = () => {
  // const navigate = useNavigate();
  const { filters, updateFilter } = useLeadContext();
  const {
    salesAgentDataLoading,
    salesAgentDataLoadingError,
    leadSourceList,
    leadStatusList,
    sales_agentList,
    tag_list,
    priorityList,
  } = useSelectList();
  // console.log(filters);
  const sortOptions = [
    { value: true, label: "Low to High" },
    { value: false, label: "High to Low" },
  ];

  return (
    <div>
      <ul className="row g-2">
        <li className="col-12 col-md-6 col-lg-4 col-xl-2">
          {salesAgentDataLoading && <span>Salesagent data is loading</span>}
          {salesAgentDataLoadingError && (
            <span>Error while data is loading</span>
          )}

          {/* onChange={(selected) => handleChange("salesAgent", selected?.value)} */}
          <SelectDropDown
            label={"Sales agent"}
            options={[...sales_agentList, { label: "All", value: "" }]}
            value={
              sales_agentList.find((o) => o.value === filters.salesAgent) ||
              null
            }
            onChange={(selected) => updateFilter("salesAgent", selected?.value)}
          />
        </li>
        <li className="col-12 col-md-6 col-lg-4 col-xl-2">
          <SelectDropDown
            label="Lead Status"
            options={[...leadStatusList, { label: "All", value: "" }]}
            value={
              leadStatusList.find((o) => o.value === filters.status) || null
            }
            onChange={(selected) => updateFilter("status", selected?.value)}
          />
        </li>
        <li className="col-12 col-md-6 col-lg-4 col-xl-2">
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
        <li className="col-12 col-md-6 col-lg-4 col-xl-2">
          <SelectDropDown
            label="Lead Source"
            options={[...leadSourceList, { label: "All", value: "" }]}
            value={
              leadSourceList.find((o) => o.value === filters.source) || null
            }
            onChange={(selected) => updateFilter("source", selected?.value)}
          />
        </li>
        <li className="col-12 col-md-6 col-lg-4 col-xl-2">
          <SelectDropDown
            label="Sort By"
            options={sortOptions}
            value={
              sortOptions.find((o) => o.value === filters.sortByAsc) || null
            }
            onChange={(selected) => updateFilter("sortByAsc", selected?.value)}
          />
        </li>
        <li className="col-12 col-md-6 col-lg-4 col-xl-2">
          <SelectDropDown
            label="Priority"
            options={[...priorityList, { value: "", label: "All" }]}
            value={
              priorityList.find((o) => o.value === filters.priority) || null
            }
            onChange={(selected) => updateFilter("priority", selected?.value)}
          />
        </li>
      </ul>
    </div>
  );
};

export default LeadlistFilter;
