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
import ReportContextProvider from "./context/ReportContext.jsx";
import { LeadContextProvider } from "./context/LeadContext.jsx";
import Reports from "./pages/Reports.jsx";
import SalesPage from "./pages/SalesPage.jsx";
import { ToastContainer } from "react-toastify";
import Settings from "./pages/Settings.jsx";
const route = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/leads/:lead_id", element: <LeadManagement /> },
  { path: "/leads", element: <Leadlist /> },
  { path: "/addLead", element: <AddLead /> },
  { path: "/salesAgents", element: <SalesAgents /> },
  { path: "/addNewAgent", element: <AddSalesAgent /> },
  { path: "/reports", element: <Reports /> },
  { path: "/sales", element: <SalesPage /> },
  { path: "/settings", element: <Settings /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LeadContextProvider>
      <SalesAgentsContextProvider>
        <ReportContextProvider>
          <RouterProvider router={route} />
          <ToastContainer position="top-center" autoClose={2000} />
        </ReportContextProvider>
      </SalesAgentsContextProvider>
    </LeadContextProvider>
  </StrictMode>
);
