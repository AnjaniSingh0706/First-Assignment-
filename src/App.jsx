import './components/Stopwatch/stopwatch.css';
import Stopwatch from './components/Stopwatch/Stopwatch';
import Employees from './components/trms/Employees';
import EmployeesList from './components/trms/EmployeesList';
// import Navbar from './components/Navbar/Navbar'
// import UserForm from './components/Form/UserForm';
import Dashboard from './components/trms/Dashboard';
// import Store from './components/trms/store/Store';
import Modal from './components/trms/Modal';
import MyErrorBoundary from './components/trms/ErrorBoundary';
// import Usertable from './components/Usertable/Usertable';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/trms/Login'; // Assuming you created Login component
import MyProfileDetails from './components/trms/MyProfileDetails';
import Calendar from './components/trms/Calendar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [showModal, setShowModal] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true); // Simulate successful login
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // If not logged in, show the login page
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />; // Passing handleLogin to Login component
  }

  return (
    <MyErrorBoundary>
          {/* <div>
          <Navbar onNavClick={handleNavClick} />
          {activeComponent === 'home' && <h1>Wecome to React Assignment World !!</h1>}
          {activeComponent === 'usertable' && <Usertable />}
          {activeComponent === 'stopwatch' && <Stopwatch />}
          {activeComponent === 'userForm' && < UserForm/>}
      </div> */}
      <Router>
        <div className="app-container">
          <div className="content">
            {/* Show Modal initially */}
            <Modal show={showModal} onClose={handleCloseModal}>
              <Employees onClose={handleCloseModal} />
            </Modal>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<EmployeesList />} />
              <Route path="/profile" element={<MyProfileDetails />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </div>
        </div>
      </Router>
    </MyErrorBoundary>
  );
}

export default App;
