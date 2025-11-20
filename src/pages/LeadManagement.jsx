import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router";
import leads from "../lead.json";
import { Link } from "react-router";
import Aside from "../components/Aside";
const LeadManagement = () => {
  const { lead_Name } = useParams();
  const current_lead = leads.find((info) => info.leadName === lead_Name);
  console.log(current_lead);
  return (
    <div className="body">
      <Header>{current_lead.leadName}</Header>
      <div className="page-content">
        <Aside />
        <div className="main-page">
          <div className="lead-details">
            <h2>Details of Lead</h2>
            <ul class="list-group w-100">
              <li class="list-group-item bg-secondary text-white">
                Lead Name: {current_lead.leadName}
              </li>
              <li class="list-group-item">
                Sales agent: {current_lead.assignedSalesAgent}
              </li>
              <li class="list-group-item">
                Lead Source: {current_lead.leadSource}
              </li>
              <li class="list-group-item">
                Lead Status: {current_lead.leadStatus}
              </li>
              <li class="list-group-item">Priority: {current_lead.priority}</li>
              <li class="list-group-item">
                Time to close: {current_lead.timeToClose}
              </li>
            </ul>
            <button
              className="btn btn-primary fs-5"
              style={{ alignSelf: "flex-end" }}
            >
              Edit lead Details
            </button>
          </div>
          <div className="comment-section">
            <h2>Comments</h2>
            <div className="card p-1">
              <h5>John Doe , 12/12/2023</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum aperiam quis doloribus repudiandae nostrum cum similique
                dignissimos quidem iste at.
              </p>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label fw-bold">
                  Add a New Comment
                </label>
                <textarea
                  id="comment"
                  className="form-control"
                  rows="4"
                  placeholder="Write your comment here..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary fs-5">
                Add New Comment
              </button>
            </form>
          </div>
          <div className="comments"></div>
        </div>
      </div>
    </div>
  );
};

export default LeadManagement;
