import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useLeadContext } from "../context/LeadContext";
const useRefresh = () => {
  const location = useLocation();
  const { clearFilter } = useLeadContext();
  useEffect(() => {
    clearFilter();
  }, [location.pathname]);
};

export default useRefresh;
