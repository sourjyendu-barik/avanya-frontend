import React from "react";
import { useNavigate } from "react-router";
import { useLeadContext } from "../../context/LeadContext";

const LeadlistTable = () => {
  const { lead_List, leadDataloading, leadLoadingError } = useLeadContext();
  const navigate = useNavigate();

  return (
    <>
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
              <th>Lead Status</th>
              <th>Lead Source</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default LeadlistTable;
