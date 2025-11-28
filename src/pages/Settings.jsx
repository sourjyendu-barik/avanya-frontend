import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { useLeadContext } from "../context/LeadContext";
import { useSalesContext } from "../context/SalesAgentsContext";
const Settings = () => {
  const {
    lead_List,
    deleteLead,
    delete_data: delete_leadData,
    deleting_leadData,
    deleting_leadData_error,
  } = useLeadContext();
  const {
    SalesAgents_List,
    deleteAgent,
    deletingAgentData,
    deleting_SalesAgentData,
    deleting_SalesAgentData_error,
  } = useSalesContext();
  console.log(lead_List);
  return (
    <div className="body">
      <Header>Lead List</Header>
      <div className="page-content">
        <Aside />
        <div className="main-page">
          {/* lead list  */}
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              {lead_List.map((l) => (
                <tr key={l._id}>
                  <td>{l.name}</td>
                  <td>{l.status}</td>
                  <td>
                    <span onClick={() => deleteLead(l._id)}>🗑️</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* salesAgent list */}
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Sales Agent</th>
                <th>Action</th>
              </tr>
              {SalesAgents_List.map((l) => (
                <tr key={l._id}>
                  <td>{l.name}</td>
                  <td>{l.email}</td>
                  <td>
                    <span onClick={() => deleteAgent(l._id)}>🗑️</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Settings;
