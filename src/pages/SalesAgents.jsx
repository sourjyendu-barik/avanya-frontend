import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { Link } from "react-router";
import { useSalesContext } from "../context/SalesAgentsContext";
const SalesAgents = () => {
  const {
    SalesAgents_List,
    salesAgentDataLoading,
    salesAgentDataLoadingError,
  } = useSalesContext();
  console.log(SalesAgents_List);
  return (
    <div className="body">
      <Header> Sales Agent Management </Header>
      <div className="page-content">
        <Aside />
        <div className="main-page">
          {salesAgentDataLoading && <p>Sales agent data is loading</p>}
          {salesAgentDataLoadingError && <p>Error while loading sales agent</p>}
          {SalesAgents_List.length > 0 && (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Agent Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {SalesAgents_List.map((agent, index) => (
                    <tr key={`salesAgent-${index}`}>
                      <td>{agent.name}</td>
                      <td>{agent.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-flex justify-content-end mt-3 me-4">
                <Link to={`/addNewAgent`} className="btn btn-primary">
                  Add New Agent
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalesAgents;
