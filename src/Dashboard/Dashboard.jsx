import { React } from "react";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbardash from "../components/Navbar/Navbardash";
import Widgets from "../components/widgets/Widgets";
import Featured from "../components/featured/Featured";
import Chart from "../components/chart/Chart";

const Dashboard = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbardash />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="orders" />
          <Widgets type="Products" />
          <Widgets type="Partners" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Lastest Transactions</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
