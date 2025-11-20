import React from "react";
import Select from "react-select";
import { useSalesContext } from "../context/SalesAgentsContext";
import { useState } from "react";
const LeadForm = ({ defaultdata, onSubmitFunction, buttonName }) => {
  const {
    SalesAgents_List,
    salesAgentDataLoading,
    salesAgentDataLoadingError,
  } = useSalesContext();

  const leadSourceList = [
    { value: "Website", label: "Website" },
    { value: "Referral", label: "Referral" },
    { value: "Cold Call", label: "Cold Call" },
    { value: "Advertisement", label: "Advertisement" },
    { value: "Email", label: "Email" },
    { value: "Other", label: "Other" },
  ];
  const leadStatusList = [
    { value: "New", label: "New" },
    { value: "Contacted", label: "Contacted" },
    { value: "Qualified", label: "Qualified" },
  ];
  const priorityList = [
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
    { value: "High", label: "High" },
  ];

  const sales_agentList = SalesAgents_List.map((agent) => ({
    value: agent._id,
    label: agent.name,
  }));
  const tag_list = [
    { value: "High Value", label: "High Value" },
    { value: "Follow-up", label: "Follow-up" },
  ];
  const [leadFormData, setLeadFormData] = useState(defaultdata);
  React.useEffect(() => {
    setLeadFormData(defaultdata);
  }, [defaultdata]);
  const handleChange = (name, value) => {
    setLeadFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <form
        className="p-3"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitFunction(leadFormData);
        }}
      >
        {/* Lead Name */}
        <div className="mb-3 row align-items-center">
          <label htmlFor="leadName" className="col-sm-2 col-form-label">
            Lead Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="leadName"
              placeholder="Add New Lead"
              required
              name="name"
              value={leadFormData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
        </div>

        {/* Lead Source */}
        <div className="mb-3 row align-items-center">
          <label htmlFor="leadSource" className="col-sm-2 col-form-label">
            Lead Source:
          </label>
          <div className="col-sm-10">
            <Select
              inputId="leadSource"
              options={leadSourceList}
              placeholder="Select a Lead Source"
              classNamePrefix="react-select"
              required
              name="source"
              value={
                leadSourceList.find((l) => l.value === leadFormData.source) ||
                null
              }
              onChange={(selected) => handleChange("source", selected?.value)}
            />
          </div>
        </div>
        {/*  dropdown sales agent*/}
        {salesAgentDataLoading && <p>Sales Agent data loading</p>}
        {salesAgentDataLoadingError && (
          <p>Error while loading sales agent data</p>
        )}
        {sales_agentList.length > 0 && (
          <div className="mb-3 row align-items-center">
            <label htmlFor="salesAgent" className="col-sm-2 col-form-label">
              Sales Agent:
            </label>
            <div className="col-sm-10">
              <Select
                inputId="salesAgent"
                options={sales_agentList}
                placeholder="Select a sales agent"
                classNamePrefix="react-select"
                required
                name="salesAgent"
                value={
                  sales_agentList.find(
                    (o) => o.value === leadFormData.salesAgent
                  ) || null
                }
                onChange={(selected) =>
                  handleChange("salesAgent", selected?.value)
                }
              />
            </div>
          </div>
        )}

        {/* Lead status */}
        <div className="mb-3 row align-items-center">
          <label htmlFor="leadStatus" className="col-sm-2 col-form-label">
            Lead Status:
          </label>
          <div className="col-sm-10">
            <Select
              inputId="leadStatus"
              options={leadStatusList}
              placeholder="Select a Lead status"
              classNamePrefix="react-select"
              required
              name="status"
              value={
                leadStatusList.find((o) => o.value === leadFormData.status) ||
                null
              }
              onChange={(selected) => handleChange("status", selected?.value)}
            />
          </div>
        </div>
        {/* Prority*/}
        <div className="mb-3 row align-items-center">
          <label htmlFor="prority" className="col-sm-2 col-form-label">
            Prority :
          </label>
          <div className="col-sm-10">
            <Select
              inputId="prority"
              options={priorityList}
              placeholder="Select priority"
              classNamePrefix="react-select"
              required
              name="priority"
              value={
                priorityList.find((o) => o.value === leadFormData.priority) ||
                null
              }
              onChange={(selectd) => handleChange("priority", selectd?.value)}
            />
          </div>
        </div>
        {/* time to close */}
        <div className="mb-3 row align-items-center">
          <label htmlFor="time" className="col-sm-2 col-form-label">
            Time to close:
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="time"
              placeholder="select the time to close"
              required
              name="timeToClose"
              value={leadFormData.timeToClose}
              onChange={(e) => handleChange("timeToClose", e.target.value)}
            />
          </div>
        </div>
        {/* tags */}
        <div className="mb-3 row align-items-center">
          <label htmlFor="tags" className="col-sm-2 col-form-label">
            Tags :
          </label>
          <div className="col-sm-10">
            <Select
              isMulti
              inputId="tags"
              options={tag_list}
              placeholder="Select a tag"
              classNamePrefix="react-select"
              required
              name="tags"
              value={tag_list.filter((o) =>
                leadFormData.tags.includes(o.value)
              )}
              onChange={(selected) =>
                handleChange(
                  "tags",
                  selected?.map((item) => item.value)
                )
              }
            />
          </div>
        </div>
        {/* Submit Button */}

        <button
          type="submit"
          className="btn btn-primary d-flex m-auto justify-content-center"
          style={{ width: "40%" }}
        >
          {buttonName}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
