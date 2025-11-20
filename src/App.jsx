import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AppComponentCards from "./components/AppComponent/AppComponentCards";
import NavAside from "./components/AppComponent/NavAside";
import { Link } from "react-router";
function App() {
  return (
    <div className="body">
      <Header> Anvaya CRM Dashboard </Header>
      <div className="page-content">
        <NavAside />
        <main className="main-page">
          <AppComponentCards />
          <div className="lead-status">
            <h3>Staus:</h3>
            <ul>
              <li>New : 5 leads</li>
              <li>Contacted : 3 leads</li>
              <li>Qualified : 2 leads</li>
            </ul>
          </div>
          <div className="quick-filters">
            <ul>
              <li>
                <button className="btn btn-secondary flex-fill">New</button>
              </li>
              <li>
                <button className="btn btn-secondary flex-fill">
                  Contacted
                </button>
              </li>
              <li>
                <button className="btn btn-secondary flex-fill">
                  Qualified
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
