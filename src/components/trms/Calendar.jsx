import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles
import Sidebar from './Sidebar';
import  Header from './Header';

function HolidayCalendar() {
  // Sample holiday data (format: YYYY-MM-DD)
  const [holidays, setHolidays] = useState([
    '2024-09-01', // Example holiday dates
    '2024-10-05',
    '2024-12-25',
  ]);

  // Function to check if a date is a holiday
  const isHoliday = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return holidays.includes(formattedDate);
  };

  // Function to highlight holidays
  const tileClassName = ({ date, view }) => {
    if (view === 'month' && isHoliday(date)) {
      return 'holiday';
    }
  };

  return (
    <div className="dashboard">
    <Sidebar/>
    <div className="dashboard-main">
      <Header />
    <div>
      <h2>Employee Holiday Calendar</h2>
      <Calendar
        tileClassName={tileClassName}
        // Add other props as needed
      />
    </div>
    </div>
    </div>
  );
}

export default HolidayCalendar;

