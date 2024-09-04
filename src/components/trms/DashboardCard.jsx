import React from 'react';
import { useSelector } from 'react-redux';
import './trmscss/dashboardCard.css';
import ProfileDetails from './dashboardCards/ProfileDetails';
import Stopwatch from './dashboardCards/Stopwatch';
import ManageLeavesChart from './dashboardCards/ManageLeavesChart';
import RecentAppliedLeaves from './dashboardCards/RecentAppliedLeaves';
import OnLeaveToday from './dashboardCards/OnLeaveToday';

function DashboardCard({ title , id}) {
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // Access login state
  
  let content;

  switch (id) {
    case '1':
      content = selectedUser ? <ProfileDetails /> : <p>No user selected</p>;
      break;
    case "2":
      if (selectedUser && isLoggedIn) {
        content = (
          <>
            <p>{selectedUser.name}</p>
            {/* Uncomment the Stopwatch when you integrate it */}
            <Stopwatch />
          </>
        );
      } else {
        content = <p>No user selected</p>;
      }
      break;
    case '3':
      content = selectedUser ? <ManageLeavesChart /> : <p>No user selected</p>;
      break;
    case '4':
      content = selectedUser ? <RecentAppliedLeaves /> : <p>No user selected</p>;
      break;
    case '5':      
      content = content = selectedUser ? <OnLeaveToday /> : <p>No user selected</p>;
      break;
    case '6':
      content = <p>Working Remotely content</p>; // Placeholder content
      break;
    case 'New Joinees':
      content = <p>New Joinees content</p>; // Placeholder content
      break;
    default:
      content = <p>Unknown card title</p>;
  }

  return (
    <div className="dashboard-card">
      <div className="dashboard-card-header">
        <h2>{title}</h2>
      </div>
      <div className="dashboard-card-content">
        {content}
      </div>
    </div>
  );
}

export default DashboardCard;
