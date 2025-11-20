import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useSalesContext } from "../context/SalesAgentsContext";

const AddSalesAgent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFotmData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://avanya-backend.vercel.app/addSalesAgent",
        formData
      );
      console.log("Data added successfully", response.data);
      alert("added data successfully");
      setFormData({
        name: "",
        email: "",
      });
    } catch (error) {
      console.log(error);
      alert("error while adding salesman data");
    }
  };
  return (
    <div className="body">
      <Header>| Add New Sales Agent |</Header>
      <div className="page-content">
        <div className="main-page">
          <form onSubmit={handleFotmData} className="p-3">
            <div className="mb-3 row align-items-center">
              <label htmlFor="agentName" className="col-sm-2 col-form-label">
                Agent Name:
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="agentName"
                  placeholder="Add New sales agent"
                  name="name"
                  value={formData.name}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row align-items-center">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email Address:
              </label>
              <div className="col-sm-6">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email address"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Create New Agent
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSalesAgent;
