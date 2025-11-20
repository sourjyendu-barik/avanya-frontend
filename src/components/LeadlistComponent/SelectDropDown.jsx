import React from "react";

const SelectDropDown = ({ label, options }) => {
  return (
    <div className="mb-2 flex-fill">
      <label htmlFor={label} className="form-label fw-semibold">
        {label}:
      </label>
      <select className="form-select" id={label} name={label}>
        <option value="all">All</option>
        {options.map((option, index) => (
          <option value={option} key={`option-${index}`}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropDown;
