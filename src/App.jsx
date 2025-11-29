import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Header from "./components/Header";
import AppComponentCards from "./components/AppComponent/AppComponentCards";
import NavAside from "./components/AppComponent/NavAside";
import { Link } from "react-router";
import { useLeadContext } from "./context/LeadContext";
import SelectDropDown from "./components/LeadlistComponent/SelectDropDown";
import useSelectList from "./hooks/useSelectList";
// import { useEffect } from "react";
// import { useLocation } from "react-router";
import useRefresh from "./hooks/useRefresh";
function App() {
  const { lead_List, leadDataloading, updateFilter, clearFilter, filters } =
    useLeadContext();
  const { leadStatusList } = useSelectList();
  // const location = useLocation();
  // useEffect(() => {
  //   clearFilter();
  // }, [location.pathname]);
  useRefresh();
  const new_lead = lead_List.filter((l) => l.status === "New").length;
  const contacted_lead = lead_List.filter(
    (l) => l.status === "Contacted"
  ).length;
  const qualified_lead = lead_List.filter(
    (l) => l.status === "Qualified"
  ).length;
  const proposal_Sent_lead = lead_List.filter(
    (l) => l.status === "Proposal Sent"
  ).length;
  const closed_lead = lead_List.filter((l) => l.status === "Closed").length;
  return (
    <div className="body">
      <Header> Anvaya CRM Dashboard </Header>
      <div className="page-content">
        <NavAside />
        <main className="main-page">
          <AppComponentCards />
          <div className="lead-status mt-4">
            <h3>Status:</h3>
            <ul>
              <li>
                New:
                {leadDataloading ? (
                  <span> loading...</span>
                ) : (
                  ` ${new_lead} leads`
                )}
              </li>

              <li>
                Contacted:
                {leadDataloading ? (
                  <span> loading...</span>
                ) : (
                  ` ${contacted_lead} leads`
                )}
              </li>

              <li>
                Qualified:
                {leadDataloading ? (
                  <span> loading...</span>
                ) : (
                  ` ${qualified_lead} leads`
                )}
              </li>
              <li>
                Proposal Sent:
                {leadDataloading ? (
                  <span> loading...</span>
                ) : (
                  ` ${proposal_Sent_lead} leads`
                )}
              </li>
              <li>
                Closed:
                {leadDataloading ? (
                  <span> loading...</span>
                ) : (
                  ` ${closed_lead} leads`
                )}
              </li>
            </ul>
          </div>
          <div className="row g-3 d-flex justify-content-between align-items-end">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <SelectDropDown
                label="Lead Status"
                options={[...leadStatusList, { label: "All", value: "" }]}
                value={
                  leadStatusList.find((o) => o.value === filters.status) || null
                }
                onChange={(selected) => updateFilter("status", selected?.value)}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-end">
              <Link to="/addLead" className="btn btn-secondary w-100">
                Add New Lead
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
