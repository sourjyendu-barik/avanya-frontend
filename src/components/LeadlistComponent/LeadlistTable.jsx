import React from "react";
import leads from "../../lead.json";
import { useNavigate } from "react-router";
import { useLeadContext } from "../../context/LeadContext";
const LeadlistTable = () => {
  const { lead_List, leadDataloading, leadLoadingError } = useLeadContext();
  const navigate = useNavigate();
  return (
    <table>
      <thead>
        <tr>
          <th>Lead Name</th>
          <th>Lead Status</th>
          <th>Lead Source</th>
        </tr>
      </thead>
      <tbody>
        {lead_List?.map((lead, index) => (
          <tr
            key={`leadtable-${index}`}
            onClick={() => navigate(`/leads/${lead.leadName}`)}
          >
            <td>{lead.name}</td>
            <td>{lead.status}</td>
            <td>{lead.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadlistTable;
