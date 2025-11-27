import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Header from "./components/Header";
import AppComponentCards from "./components/AppComponent/AppComponentCards";
import NavAside from "./components/AppComponent/NavAside";
import { Link } from "react-router";
import { useLeadContext } from "./context/LeadContext";
function App() {
  const { lead_List, leadDataloading, updateFilter, clearFilter } =
    useLeadContext();

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
          <div className="quick-filters">
            <ul>
              <li>
                <button
                  onClick={() => clearFilter()}
                  className="btn btn-secondary flex-fill"
                >
                  Clear Filter
                </button>
              </li>
              <li>
                <button
                  onClick={() => updateFilter("status", "Contacted")}
                  className="btn btn-secondary flex-fill"
                >
                  Contacted
                </button>
              </li>
              <li>
                <button
                  onClick={() => updateFilter("status", "Qualified")}
                  className="btn btn-secondary flex-fill"
                >
                  Qualified
                </button>
              </li>
              <li>
                <button
                  onClick={() => updateFilter("status", "New")}
                  className="btn btn-secondary flex-fill"
                >
                  New
                </button>
              </li>
              <li>
                <button
                  onClick={() => updateFilter("status", "Closed")}
                  className="btn btn-secondary flex-fill"
                >
                  Closed
                </button>
              </li>
              <li>
                <button
                  onClick={() => updateFilter("status", "Proposal Sent")}
                  className="btn btn-secondary flex-fill"
                >
                  Proposal Sent
                </button>
              </li>
              <li>
                <Link to="/addLead" className="btn btn-secondary flex-fill">
                  Add New Lead
                </Link>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
