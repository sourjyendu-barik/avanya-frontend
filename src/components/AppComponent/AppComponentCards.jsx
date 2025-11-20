import React from "react";
import { Link } from "react-router";
import { useLeadContext } from "../../context/LeadContext";

const AppComponentCards = () => {
  const { lead_List, leadDataloading, leadLoadingError } = useLeadContext();

  // Calculate counts safely (lead_List is always [])
  const new_lead = lead_List.filter((l) => l.status === "New").length;
  const contacted_lead = lead_List.filter(
    (l) => l.status === "Contacted"
  ).length;
  const qualified_lead = lead_List.filter(
    (l) => l.status === "Qualified"
  ).length;

  return (
    <div className="leads">
      {/* Loading state */}
      {leadDataloading && <p>Loading lead data...</p>}

      {/* Error state */}
      {leadLoadingError && <p>Error loading leads.</p>}

      {/* Empty state */}
      {!leadDataloading && lead_List.length === 0 && <p>No leads available.</p>}

      {/* Cards */}
      {!leadDataloading && lead_List.length > 0 && (
        <>
          <div className="row g-3">
            {lead_List.map((info, index) => (
              <div
                className="col-md-4"
                key={`lead-${index}`}
                style={{ cursor: "pointer" }}
              >
                <Link to={`/leads/${info._id}`} className="link">
                  <div className="card">
                    <div className="card-body">
                      <h5>{info.name}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AppComponentCards;
