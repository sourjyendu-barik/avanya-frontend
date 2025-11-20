import React from "react";
import { Link } from "react-router";
import leads from "../../lead.json";
const AppComponentCards = () => {
  return (
    <div className="leads">
      <div className="row g-3">
        {leads.map((info, index) => {
          return (
            <div
              className="col-md-4"
              key={`lead-${index}`}
              style={{ cursor: "pointer" }}
            >
              <Link to={`/leads/${info.leadName}`} className="link">
                <div className="card">
                  <div className="card-body">
                    <h5>{info.leadName}</h5>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppComponentCards;
