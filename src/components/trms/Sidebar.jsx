import react from 'react';
import './trmscss/sidebar.css';
import {Link} from 'react-router-dom'

// Importing images
import Logo from '../images/thinksys-favicon-white.png'; // Example logo image
import DashboardIcon from '../images/dashboard-icon.png'; // Example dashboard
import ProfileIcon from '../images/profile-icon.png';
import TeamIcon from '../images/team-icon.png';
import employeeIcon from '../images/employees-icon.png';
import calendarIcon from '../images/calender-icon.png';
import leaveIcon from  '../images/leave-icon.png';
import attendanceIcon from '../images/attendence-icon.png';
import financeIcon from '../images/finance-icon.png'
function Sidebar() {
return (
    <div className='sidebar'>
        <div className="sidebar-logo">
        <img src={Logo} alt="Logo" className="sidebar-logo-img" />
        </div>
        <ul className="sidebar-nav">
            <li><Link to="/">
            <img src={DashboardIcon} alt="DashboardIcon" className="nav-icon" />
            Dashboard
            </Link></li>
            <li><Link to="/profile">
            <img src={ProfileIcon} alt="ProfileIcon" className="nav-icon" />
            My Profile</Link></li>
            <li><Link to="/team">
            <img src={TeamIcon} alt="TeamIcon" className="nav-icon" />
            Team</Link></li>
            <li><Link to='/employees'>
            <img src={employeeIcon} alt="employeeIcon" className="nav-icon" />
            Employees</Link></li>
            <li><Link to="/calendar">
            <img src={calendarIcon} alt="calendarIcon" className="nav-icon" />
            Calendar</Link></li>
            <li><Link to="/leave">
            <img src={leaveIcon} alt="leaveIcon" className="nav-icon" />
            Leave</Link></li>
            <li><Link to="/attendance">
            <img src={attendanceIcon} alt="attendanceIcon" className="nav-icon" />
            Attendance</Link></li>
            <li><Link to="/finance">
            <img src={financeIcon} alt="financeIcon" className="nav-icon" />
            Finance</Link></li>
        </ul>
    </div>
    );
}
export default Sidebar;