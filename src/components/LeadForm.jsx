import React from "react";
import Select from "react-select";
import { useState } from "react";
import useSelectList from "../hooks/useSelectList";
const LeadForm = ({ defaultdata, onSubmitFunction, buttonName }) => {
  const {
    salesAgentDataLoading,
    salesAgentDataLoadingError,
    leadSourceList,
    leadStatusList,
    priorityList,
    sales_agentList,
    tag_list,
  } = useSelectList();

  const [leadFormData, setLeadFormData] = useState(defaultdata);

  const handleChange = (name, value) => {
    setLeadFormData((prev) => {
      if (name === "status" && value === "Closed") {
        return {
          ...prev,
          status: value,
          timeToClose: 0,
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <form
        className="p-3"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitFunction(leadFormData);
          setLeadFormData(defaultdata);
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
          data-bs-dismiss="modal"
        >
          {buttonName}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
