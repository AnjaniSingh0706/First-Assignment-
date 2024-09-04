// src/ProfileDetails.js
import React from 'react';
import { useSelector } from 'react-redux';
import './trmscardcss/profileDetails.css';

function ProfileDetails() {
    const selectedUser = useSelector((state) => state.user.selectedUser);

  if (!selectedUser) {
    throw new Error("No user selected!"); // Introduce an error
  }

  return (
    <div className="profile-details">
      <img 
        src={`https://i.pravatar.cc/150?u=${selectedUser.id}`} 
        alt={`${selectedUser.name}`} 
        className="profile-image" 
      />
      <h2>{selectedUser.name}</h2>
      <p>Email: {selectedUser.email}</p>
    </div>
  );
}

export default ProfileDetails;