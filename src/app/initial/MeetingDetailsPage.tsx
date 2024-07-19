import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PrimaryButton from '../shared/components/buttons/PrimaryButton';
import { FaEdit, FaBarcode, FaArrowLeft } from 'react-icons/fa';
import './MeetingDetails.scss';

const MeetingDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const meetingData = state?.meetingData;

  const handleEditClick = () => {
    navigate('/dashboard/edit-meeting', { state: { meetingData } });
  };

  const handleScanClick = () => {
    navigate('/dashboard/scan', { state: { meetingData } });
  };

  const handleBackClick = () => {
    navigate('/dashboard/attendance');
  };

  return (
    <div className="meeting-details-page">
      <div className="top-bar">
        <PrimaryButton
          buttonText="Back"
          icon={FaArrowLeft}
          //   leftIcon
          handleButtonClick={handleBackClick}
          className="back-button"
        />
      </div>
      <div className="meeting-details">
        <h2>Title:{meetingData.title}</h2>
        <p>
          <strong>Information:</strong> {meetingData.information}
        </p>
        <p>
          <strong>Date:</strong> {meetingData.date}
        </p>
        <p>
          <strong>Time:</strong> {meetingData.time}
        </p>
        <p>
          <strong>Agenda:</strong> {meetingData.agenda}
        </p>
      </div>
      <div className="actions">
        <PrimaryButton
          buttonText="Edit"
          //  icon={FaEdit}
          handleButtonClick={handleEditClick}
        />
        <PrimaryButton
          buttonText="Scan"
          //icon={FaBarcode}
          handleButtonClick={handleScanClick}
        />
      </div>
    </div>
  );
};

export default MeetingDetailsPage;
