import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router";
import leads from "../lead.json";
import { Link } from "react-router";
import Aside from "../components/Aside";
import useAxios from "../hooks/useAxios";
const LeadManagement = () => {
  const { lead_id } = useParams();
  const current_lead_data = useAxios(
    `https://avanya-backend.vercel.app/getLeadData/${lead_id}`
  );
  const { data, loading, error } = current_lead_data;
  const current_lead = data?.data;
  return (
    <div className="body">
      <Header>Lead Management</Header>
      <div className="page-content">
        <Aside />
        <div className="main-page">
          {loading && <p>Lead Data is loading</p>}
          {error && <p>Error while loading lead data</p>}
          {current_lead && (
            <div className="lead-details">
              <h2>Details of Lead</h2>
              <ul class="list-group w-100">
                <li class="list-group-item bg-secondary text-white">
                  Lead Name: {current_lead.name}
                </li>
                <li class="list-group-item">
                  Sales agent: {current_lead.salesAgent?.name}
                </li>
                <li class="list-group-item">
                  Lead Source: {current_lead.source}
                </li>
                <li class="list-group-item">
                  Lead Status: {current_lead.status}
                </li>
                <li class="list-group-item">
                  Priority: {current_lead.priority}
                </li>
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
          )}

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
