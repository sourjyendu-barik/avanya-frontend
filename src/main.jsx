import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LeadManagement from "./pages/LeadManagement.jsx";
import Leadlist from "./pages/Leadlist.jsx";
import AddLead from "./pages/AddLead.jsx";
import SalesAgents from "./pages/SalesAgents.jsx";
import AddSalesAgent from "./pages/AddSalesAgent.jsx";
import SalesAgentsContextProvider from "./context/SalesAgentsContext.jsx";
import { LeadContextProvider } from "./context/LeadContext.jsx";
const route = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/leads/:lead_id", element: <LeadManagement /> },
  { path: "/leads", element: <Leadlist /> },
  { path: "/addLead", element: <AddLead /> },
  { path: "/salesAgents", element: <SalesAgents /> },
  { path: "/addNewAgent", element: <AddSalesAgent /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LeadContextProvider>
      <SalesAgentsContextProvider>
        <RouterProvider router={route} />
      </SalesAgentsContextProvider>
    </LeadContextProvider>
  </StrictMode>
);
