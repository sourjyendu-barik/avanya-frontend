import React, { useEffect } from "react";
import { useContext, createContext, useState } from "react";
import useAxios from "../hooks/useAxios";
const LeadContext = createContext();
export const useLeadContext = () => useContext(LeadContext);
const LeadContextProvider = ({ children }) => {
  const {
    data,
    loading: leadDataloading,
    error: leadLoadingError,
  } = useAxios("https://avanya-backend.vercel.app/getAllLeads");
  // https://avanya-backend.vercel.app/addNewLead
  const [lead_List, setLead_List] = useState([]);
  useEffect(() => {
    if (Array.isArray(data?.data) && data.data) {
      setLead_List(data.data);
    }
  }, [data]);
  const value = { lead_List, setLead_List, leadDataloading, leadLoadingError };
  return <LeadContext.Provider value={value}>{children}</LeadContext.Provider>;
};

export default LeadContextProvider;
