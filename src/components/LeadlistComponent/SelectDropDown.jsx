import React from "react";
import Select from "react-select";
const SelectDropDown = ({ label, options, value, onChange, isMultiFlag }) => {
  return (
    <div className="mb-2 flex-fill">
      <label htmlFor={label} className="form-label fw-semibold">
        {label}:
      </label>
      <Select
        inputId={label}
        options={options}
        placeholder={`${label}`}
        classNamePrefix="react-select"
        value={value}
        onChange={onChange}
        menuPlacement="auto"
        isMulti={isMultiFlag}
      />
    </div>
  );
};

export default SelectDropDown;
