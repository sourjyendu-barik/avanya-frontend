import React, { useEffect, useState, createContext, useContext } from "react";
import useAxios from "../hooks/useAxios";

const LeadContext = createContext();
export const useLeadContext = () => useContext(LeadContext);

export const LeadContextProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    salesAgent: "",
    status: "",
    tags: [],
    source: "",
    sortByAsc: true,
  });
  const [queryUrl, setQueryUrl] = useState(null);
  // console.log(queryUrl);
  const fetchLeads = (latestFilters) => {
    const params = new URLSearchParams();

    if (latestFilters.salesAgent)
      params.set("salesAgent", latestFilters.salesAgent);
    if (latestFilters.status) params.set("status", latestFilters.status);
    if (latestFilters.source) params.set("source", latestFilters.source);
    params.set("sortByAsc", latestFilters.sortByAsc);
    if (latestFilters.tags.length > 0) {
      params.set("tags", latestFilters.tags.join(","));
    }

    const newUrl = `https://avanya-backend.vercel.app/getAllLeads?${params.toString()}`;
    setQueryUrl(newUrl);
  };

  useEffect(() => {
    fetchLeads(filters);
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const clearFilter = () => {
    setFilters((prev) => ({
      salesAgent: "",
      status: "",
      tags: [],
      source: "",
      sortByAsc: true,
    }));
  };
  const {
    data,
    loading: leadDataloading,
    error: leadLoadingError,
  } = useAxios(queryUrl || null);

  const [lead_List, setLead_List] = useState([]);

  useEffect(() => {
    if (Array.isArray(data?.data)) {
      setLead_List(data.data);
    }
  }, [data]);

  const value = {
    lead_List,
    setLead_List,
    leadDataloading,
    leadLoadingError,
    filters,
    updateFilter,
    clearFilter,
  };

  return <LeadContext.Provider value={value}>{children}</LeadContext.Provider>;
};
