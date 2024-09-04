import react from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardCard from './DashboardCard';
import "./trmscss/dashboard.css";
import ProfileDetails from "./dashboardCards/ProfileDetails";
import Stopwatch from './dashboardCards/Stopwatch';

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar/>
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-grid">
          <DashboardCard title="Profile" id = '1'>
                      <ProfileDetails />
          </DashboardCard>
          <DashboardCard title="Manage Leaves" id = '3'>
          </DashboardCard>
          <DashboardCard title="Recent Applied Leaves" id = '4'>
          </DashboardCard>
          <DashboardCard title id = '2'>
            <Stopwatch/>
          </DashboardCard>
          <DashboardCard title="On Leave Today" id = '5'>
            {/* Details of people on leave */}
          </DashboardCard>
          <DashboardCard title="Working Remotely" id = '6'>
            {/* List of remote workers */}
          </DashboardCard>
          {/* <DashboardCard title="New Joinees">
            {/* List of new joinees */}
          {/* </DashboardCard>  */}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
