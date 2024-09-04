// src/components/dashboardCards/RecentAppliedLeaves.js
import React from 'react';

function RecentAppliedLeaves() {
  // Hardcoded data for recent leaves. Replace this with API or dynamic data later.
  const recentLeaves = [
    { name: 'John Doe', date: '2024-09-01', type: 'Sick Leave' },
    { name: 'Jane Smith', date: '2024-09-03', type: 'Annual Leave' },
    { name: 'Mike Johnson', date: '2024-09-04', type: 'Casual Leave' },
  ];

  return (
    <div className="recent-leaves">
      <ul>
        {recentLeaves.map((leave, index) => (
          <li key={index}>
            <strong>{leave.name}</strong> - {leave.date} ({leave.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentAppliedLeaves;
