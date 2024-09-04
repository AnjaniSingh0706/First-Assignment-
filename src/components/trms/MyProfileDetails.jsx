// src/ProfileDetails.js
import React from 'react';
import { useSelector } from 'react-redux';
import './trmscss/myprofiledetails.css';
import Sidebar from './Sidebar';
import  Header from './Header';

function MyProfileDetails() {
    const selectedUser = useSelector((state) => state.user.selectedUser);

  if (!selectedUser) {
    throw new Error("No user selected!"); // Introduce an error
  }

  return (
    <div className="dashboard">
    <Sidebar/>
    <div className="dashboard-main">
      <Header />
        <div className="profile-details">
          <img 
            src={`https://i.pravatar.cc/150?u=${selectedUser.id}`} 
            alt={`${selectedUser.name}`} 
            className="profile-image" 
          />
          <h2>{selectedUser.name}</h2>
          <p>Email: {selectedUser.email}</p>
        </div>
      </div>
    </div>

  );
}

export default MyProfileDetails;