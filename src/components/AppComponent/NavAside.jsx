import React from "react";
import { NavLink } from "react-router";
const NavAside = () => {
  return (
    <aside>
      <div>
        <nav>
          <ul>
            <li className="nav-item mb-2">
              <NavLink
                to="/leads"
                style={{ textDecoration: "none", color: "white" }}
              >
                Leads
              </NavLink>
            </li>
            <li className="nav-item mb-2 text-white">Sales</li>
            <li className="nav-item mb-2 text-white">
              <NavLink
                to="/salesAgents"
                style={{ textDecoration: "none", color: "white" }}
              >
                Agents
              </NavLink>
            </li>
            <li className="nav-item mb-2 text-white">
              <NavLink
                to="/reports"
                style={{ textDecoration: "none", color: "white" }}
              >
                Reports
              </NavLink>
            </li>
            <li className="nav-item mb-2 text-white">Setting</li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default NavAside;
