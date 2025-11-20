import React, { useEffect } from "react";
import { useContext, createContext, useState } from "react";
import useAxios from "../hooks/useAxios";
const SalesAgentsContext = createContext();
export const useSalesContext = () => useContext(SalesAgentsContext);

const SalesAgentsContextProvider = ({ children }) => {
  const {
    data,
    loading: salesAgentDataLoading,
    error: salesAgentDataLoadingError,
  } = useAxios("https://avanya-backend.vercel.app/getAllSalesAgents");
  const [SalesAgents_List, setSalesAgents_List] = useState([]);
  useEffect(() => {
    if (Array.isArray(data?.data) && data.data.length > 0) {
      setSalesAgents_List(data.data);
    }
  }, [data]);

  const value = {
    SalesAgents_List,
    setSalesAgents_List,
    salesAgentDataLoading,
    salesAgentDataLoadingError,
  };
  return (
    <SalesAgentsContext.Provider value={value}>
      {children}
    </SalesAgentsContext.Provider>
  );
};

export default SalesAgentsContextProvider;
