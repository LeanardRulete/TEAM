import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon from react-icons/fa
import PrimaryButton from '../shared/components/buttons/PrimaryButton';
import './AttendancePage.scss';

const AttendancePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNewMeetingClick = () => {
    navigate('/dashboard/new-meeting'); // Navigate to the new meeting page
  };

  const handleScanButtonClick = () => {
    navigate('/dashboard/scan'); // Navigate to the scan page
  };

  // Sample data to render in the table
  const meetings = [
    {
      title: 'Community Meeting',
      rows: [
        {
          householdNumber: 17353,
          date: 'September 14, 2023',
          attendance: 'Present',
          penalties: 0,
        },
        {
          householdNumber: 35837,
          date: 'September 14, 2023',
          attendance: 'Absent',
          penalties: 50,
        },
      ],
    },
    {
      title: 'BADUCT Meeting',
      rows: [
        {
          householdNumber: 17353,
          date: 'October 18, 2023',
          attendance: 'Present',
          penalties: 0,
        },
        {
          householdNumber: 35837,
          date: 'October 18, 2023',
          attendance: 'Present',
          penalties: 0,
        },
        {
          householdNumber: 36523,
          date: 'October 18, 2023',
          attendance: 'Present',
          penalties: 0,
        },
      ],
    },
  ];

  return (
    <div className="attendance-page">
      <div className="top-bar">
        <PrimaryButton
          buttonText="New Meeting"
          icon={FaPlus}
          handleButtonClick={handleNewMeetingClick}
        />
      </div>
      {meetings.map((meeting, index) => (
        <div key={index}>
          <h2>TITLE: {meeting.title}</h2>
          <table className="meeting-table">
            <thead>
              <tr>
                <th>Household Number</th>
                <th>Date</th>
                <th>Attendance</th>
                <th>Penalties</th>
              </tr>
            </thead>
            <tbody>
              {meeting.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="household-number">{row.householdNumber}</td>
                  <td>{row.date}</td>
                  <td>{row.attendance}</td>
                  <td className={row.penalties > 0 ? 'penalty' : ''}>
                    {row.penalties.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <button className="scan-button" onClick={handleScanButtonClick}>
        Scan
      </button>
    </div>
  );
};

export default AttendancePage;
