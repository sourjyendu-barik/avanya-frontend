import React from "react";
import LeadForm from "./LeadForm";
import axios from "axios";
import { useLeadContext } from "../context/LeadContext";
const UpdateLeadModal = ({ defaultdata }) => {
  if (!defaultdata) {
    return null; // do not render modal until data arrives
  }
  const { refetchLeads } = useLeadContext();
  const updateLead = async (leadFormData) => {
    try {
      const updated_formdata = await axios.post(
        `https://avanya-backend.vercel.app/updateLeadData/${defaultdata._id}`,

        leadFormData
      );
      console.log(updated_formdata);
      alert("Updated Lead data successfully");
      // refetchLeads();
    } catch (error) {
      console.log("Error while updating lead data");
      alert("Error while updating lead data");
    }
  };

  return (
    <div
      className="modal fade"
      id="addLeadModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Lead Details</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <LeadForm
              defaultdata={defaultdata}
              buttonName="Save Lead Data"
              onSubmitFunction={updateLead}
            />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateLeadModal;
