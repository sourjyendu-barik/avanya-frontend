import Header from "../components/Header";
import LeadlistTable from "../components/LeadlistComponent/LeadlistTable";
import Aside from "../components/Aside";
import LeadlistFilter from "../components/LeadlistComponent/LeadlistFilter";
import "../components/LeadlistComponent/leadList.css";
import useRefresh from "../hooks/useRefresh";
const Leadlist = () => {
  useRefresh();
  // const { clearFilter } = useLeadContext();
  // const location = useLocation();
  // useEffect(() => {
  //   clearFilter();
  // }, [location.pathname]);
  return (
    <div className="body">
      <Header>Lead List</Header>
      <div className="page-content">
        <Aside />
        <div className="main-page mb-3">
          <LeadlistTable />
          <LeadlistFilter />
        </div>
      </div>
    </div>
  );
};

export default Leadlist;
