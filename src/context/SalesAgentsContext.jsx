import React, { useEffect } from "react";
import { useContext, createContext, useState } from "react";
import useAxios from "../hooks/useAxios";
import useAxiosDelete from "../hooks/useAxiosDelete";
const SalesAgentsContext = createContext();
export const useSalesContext = () => useContext(SalesAgentsContext);

const SalesAgentsContextProvider = ({ children }) => {
  const [trigger, setTriggerSalesAgent] = useState(false);
  const {
    data,
    loading: salesAgentDataLoading,
    error: salesAgentDataLoadingError,
  } = useAxios(
    `https://avanya-backend.vercel.app/getAllSalesAgents?t=${trigger}`
  );
  const [SalesAgents_List, setSalesAgents_List] = useState([]);
  useEffect(() => {
    if (Array.isArray(data?.data) && data.data.length > 0) {
      setSalesAgents_List(data.data);
    }
  }, [data]);
  const {
    deleteRequest,
    delete_data: deletingAgentData,
    loading: deleting_SalesAgentData,
    error: deleting_SalesAgentData_error,
  } = useAxiosDelete();

  const deleteAgent = async (id) => {
    try {
      const res = deleteRequest(
        `https://avanya-backend.vercel.app/deletesalesAgent/${id}`
      );
      setSalesAgents_List((prev) => prev.filter((a) => a._id !== id));
      return res;
    } catch (error) {
      console.log(error.message);
    }
  };
  const value = {
    SalesAgents_List,
    setSalesAgents_List,
    salesAgentDataLoading,
    salesAgentDataLoadingError,
    setTriggerSalesAgent,
    //delete agent
    deleteAgent,
    deletingAgentData,
    deleting_SalesAgentData,
    deleting_SalesAgentData_error,
  };
  return (
    <SalesAgentsContext.Provider value={value}>
      {children}
    </SalesAgentsContext.Provider>
  );
};

export default SalesAgentsContextProvider;
