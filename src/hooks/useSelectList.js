import React, { useMemo } from "react";
import { useSalesContext } from "../context/SalesAgentsContext";
const useSelectList = () => {
  const {
    SalesAgents_List,
    salesAgentDataLoading,
    salesAgentDataLoadingError,
  } = useSalesContext();

  const leadSourceList = [
    { value: "Website", label: "Website" },
    { value: "Referral", label: "Referral" },
    { value: "Cold Call", label: "Cold Call" },
    { value: "Advertisement", label: "Advertisement" },
    { value: "Email", label: "Email" },
    { value: "Other", label: "Other" },
  ];
  const leadStatusList = [
    { value: "New", label: "New" },
    { value: "Contacted", label: "Contacted" },
    { value: "Qualified", label: "Qualified" },
  ];
  const priorityList = [
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
    { value: "High", label: "High" },
  ];

  const sales_agentList = SalesAgents_List.map((agent) => ({
    value: agent._id,
    label: agent.name,
  }));

  const tag_list = [
    { value: "High Value", label: "High Value" },
    { value: "Follow-up", label: "Follow-up" },
  ];
  return {
    salesAgentDataLoading,
    salesAgentDataLoadingError,
    leadSourceList,
    leadStatusList,
    priorityList,
    sales_agentList,
    tag_list,
  };
};

export default useSelectList;
