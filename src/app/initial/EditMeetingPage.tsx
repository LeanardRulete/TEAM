import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PrimaryButton from '../shared/components/buttons/PrimaryButton';
import InputField from '../shared/components/fields/InputFields';
import './EditMeetingPage.scss';

const EditMeetingPage: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [meetingData, setMeetingData] = useState(state?.meetingData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeetingData((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleSaveClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Update meeting data logic here
    navigate('/dashboard/meeting-details', { state: { meetingData } });
  };

  const handleBackClick = () => {
    navigate('/dashboard/meeting-details', { state: { meetingData } });
  };

  return (
    <div className="edit-meeting-page">
      <div className="top-bar">
        <PrimaryButton buttonText="Back" handleButtonClick={handleBackClick} />
      </div>
      <form onSubmit={handleSaveClick}>
        <div className="input-container">
          <label>Meeting Title</label>
          <InputField
            name="title"
            type="text"
            placeholder=""
            icon
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Meeting Information</label>
          <InputField
            name="information"
            type="text"
            placeholder=""
            icon
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Date</label>
          <InputField
            name="date"
            type="date"
            placeholder=""
            icon
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Time</label>
          <InputField
            name="time"
            type="time"
            placeholder=""
            icon
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Agenda Notes</label>
          <InputField
            name="agenda"
            type="text"
            placeholder=""
            icon
            onChange={handleInputChange}
          />
        </div>
        <div className="button-container">
          <PrimaryButton buttonText="Save" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default EditMeetingPage;
