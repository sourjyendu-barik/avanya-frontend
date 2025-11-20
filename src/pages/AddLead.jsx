import React, { useState } from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Select from "react-select";
import axios from "axios";
import LeadForm from "../components/LeadForm";
const AddLead = () => {
  const defaultFormData = {
    name: "",
    source: "",
    salesAgent: "",
    status: "",
    tags: [], // array of strings
    timeToClose: 0,
    priority: "",
  };
  const handleForm = async (leadFormData) => {
    try {
      const saved_formdata = await axios.post(
        "https://avanya-backend.vercel.app/addNewLead",
        leadFormData
      );
      console.log(saved_formdata);
      alert("Added Lead data successfully");
    } catch (error) {
      console.log("Error while adding form data");
      alert("Error while adding lead data");
    }
    form.clear();
  };
  return (
    <div className="body">
      <Header>Add New Lead</Header>

      <div className="page-content">
        <Aside />

        <div className="main-page  col-12 col-md-12 col-lg-8">
          <LeadForm
            defaultdata={defaultFormData}
            buttonName="Save Lead Data"
            onSubmitFunction={handleForm}
          />
        </div>
      </div>
    </div>
  );
};

export default AddLead;
