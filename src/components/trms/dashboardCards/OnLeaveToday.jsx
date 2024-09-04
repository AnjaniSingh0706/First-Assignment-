import * as React from "react";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ListItem } from "@mui/material";

// Helper function to create avatars from initials
const stringAvatar = (name) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return { children: initials };
};

// Hardcoded leave data
const onLeaveTodayData = [
  {
    EmployeeId: "1",
    employeeName: "John Doe",
    employeeImage: null, // Placeholder for no image
  },
  {
    EmployeeId: "2",
    employeeName: "Jane Smith",
    employeeImage: "https://example.com/image2.jpg", // Sample image URL
  },
  {
    EmployeeId: "3",
    employeeName: "Robert Brown",
    employeeImage: null,
  },
];

const OnLeaveToday = () => {
  return (
    <>
      <List className="wrUsersList">
        {onLeaveTodayData.length ? (
          onLeaveTodayData.map((leaveData) => (
            <ListItem key={leaveData.EmployeeId} className="wrUsersProfile">
              <ListItemAvatar>
                {leaveData.employeeImage ? (
                  <Avatar
                    className="onleaveTodayProfile"
                    src={leaveData.employeeImage}
                  />
                ) : (
                  <Avatar
                    className="onleaveTodayProfile"
                    {...stringAvatar(leaveData.employeeName)}
                  />
                )}
              </ListItemAvatar>
              <label className="wrUsersName">{leaveData.employeeName}</label>
            </ListItem>
          ))
        ) : (
          <div className="defaultIcon">
            <i className="fa-light fa-island-tropical"></i>
            <label className="emptyCardLabel">No One On Leave Today</label>
          </div>
        )}
      </List>
    </>
  );
};

export default OnLeaveToday;
