import React from "react";
import SelectDropDown from "./SelectDropDown";
import { useNavigate } from "react-router";
const LeadlistFilter = () => {
  const naviagate = useNavigate();
  return (
    <div className="quick-filters">
      <ul>
        <li>
          <SelectDropDown label="Sales Agent" options={[1, 2, 3, 4]} />
        </li>
        <li>
          <SelectDropDown label="Lead Status" options={[1, 2, 3, 4]} />
        </li>
        <li>
          <SelectDropDown label="Tags" options={[1, 2, 3, 4]} />
        </li>
        <li>
          <SelectDropDown label="Lead Source" options={[1, 2, 3, 4]} />
        </li>
        <li>
          <SelectDropDown label="Sort By" options={[1, 2, 3, 4]} />
        </li>
        <li>
          <button
            className="btn btn-secondary"
            style={{ position: "relative", top: "1.8rem" }}
            onClick={() => naviagate("/addLead")}
          >
            Add New Lead
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LeadlistFilter;
