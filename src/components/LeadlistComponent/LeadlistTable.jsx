import React from "react";
import { useNavigate } from "react-router";
import { useLeadContext } from "../../context/LeadContext";

const LeadlistTable = () => {
  const { lead_List, leadDataloading, leadLoadingError, clearFilter } =
    useLeadContext();

  const navigate = useNavigate();

  return (
    <div>
      {/* Loading */}
      {leadDataloading && <p>Lead list Data is loading...</p>}

      {/* Error */}
      {leadLoadingError && <p>Error loading lead data</p>}

      {/* No Data */}
      {!leadDataloading && !leadLoadingError && lead_List.length === 0 && (
        <p>There are no lead data</p>
      )}

      {/* Table — only show when data exists */}
      {!leadDataloading && !leadLoadingError && lead_List.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Lead Name</th>
              <th> Status</th>
              <th> Source</th>
              <th> Priority</th>
            </tr>
          </thead>
          <tbody>
            {lead_List.map((lead, index) => (
              <tr
                key={`leadtable-${index}`}
                onClick={() => navigate(`/leads/${lead._id}`)}
              >
                <td>{lead.name}</td>
                <td>{lead.status}</td>
                <td>{lead.source}</td>
                <td style={{ textAlign: "center" }}>{lead.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="d-flex justify-content-end mt-3 gap-1 gap-sm-2">
        <button
          className="btn btn-secondary p-1 p-sm-2"
          onClick={() => clearFilter()}
        >
          Clear Filter
        </button>
        <button
          onClick={() => navigate("/addLead")}
          className="btn btn-primary p-1 p-sm-2"
        >
          Add New Lead
        </button>
      </div>
    </div>
  );
};

export default LeadlistTable;
