import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import './trmscardcss/stopwatch.css'; // Import the CSS file for styling

function Stopwatch() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [time, setTime] = useState(0);
  const [checkInTime, setCheckInTime] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      // Set the check-in time when the stopwatch starts
      const now = new Date();
      setCheckInTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`);

      // Start the stopwatch automatically
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isLoggedIn]); // Run this effect when isLoggedIn changes

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-header">
        <h2>Today's Attendance</h2>
      </div>
      <div className="stopwatch-body">
        <div className="stopwatch-time">
          <p className="label">Check-In Time:</p>
          <p className="value">{checkInTime || 'Calculating...'}</p>
        </div>
        <div className="stopwatch-time">
          <p className="label">Total Work Time:</p>
          <p className="value">{formatTime(time)}</p>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
