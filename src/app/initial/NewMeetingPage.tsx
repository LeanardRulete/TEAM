import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSave, FaExclamationCircle } from 'react-icons/fa';
import PrimaryButton from '../shared/components/buttons/PrimaryButton';
import InputField from '../shared/components/fields/InputFields';
import './NewMeetingPage.scss';

const NewMeetingPage: React.FC = () => {
  const [meetingData, setMeetingData] = useState({
    title: '',
    information: '',
    date: '',
    time: '',
    agenda: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    information: '',
    date: '',
    time: '',
    agenda: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMeetingData((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({ ...prevState, [name]: '' }));
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {
      title: '',
      information: '',
      date: '',
      time: '',
      agenda: '',
    };

    if (!meetingData.title) {
      formIsValid = false;
      newErrors.title = 'Title is required';
    }
    if (!meetingData.information) {
      formIsValid = false;
      newErrors.information = 'Information is required';
    }
    if (!meetingData.date) {
      formIsValid = false;
      newErrors.date = 'Date is required';
    }
    if (!meetingData.time) {
      formIsValid = false;
      newErrors.time = 'Time is required';
    }
    if (!meetingData.agenda) {
      formIsValid = false;
      newErrors.agenda = 'Agenda notes are required';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSaveClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Save meeting data logic here
      navigate('/dashboard/meeting-details', { state: { meetingData } });
    }
  };

  const handleBackClick = () => {
    navigate('/dashboard/attendance');
  };

  return (
    <div className="new-meeting-page">
      <div className="top-bar">
        <PrimaryButton
          buttonText="Back"
          icon={FaArrowLeft}
          //   leftIcon
          handleButtonClick={handleBackClick}
        />
      </div>
      <form onSubmit={handleSaveClick}>
        <div className={`form-group ${errors.title ? 'has-error' : ''}`}>
          <label>Meeting Title</label>
          <InputField
            name="title"
            type="text"
            placeholder=""
            onChange={handleInputChange}
            icon
            hasError={!!errors.title}
          />
          {errors.title && (
            <p className="error">
              <FaExclamationCircle className="error-icon" /> {errors.title}
            </p>
          )}
        </div>
        <div className={`form-group ${errors.information ? 'has-error' : ''}`}>
          <label>Meeting Information</label>
          <textarea
            name="information"
            placeholder=""
            value={meetingData.information}
            onChange={handleInputChange}
            className={`input-field ${errors.information ? 'has-error' : ''}`}
          />
          {errors.information && (
            <p className="error">
              <FaExclamationCircle className="error-icon" />{' '}
              {errors.information}
            </p>
          )}
        </div>
        <div className={`form-group ${errors.date ? 'has-error' : ''}`}>
          <label>Date</label>
          <InputField
            name="date"
            type="date"
            placeholder=""
            icon
            onChange={handleInputChange}
            hasError={!!errors.date}
          />
          {errors.date && (
            <p className="error">
              <FaExclamationCircle className="error-icon" /> {errors.date}
            </p>
          )}
        </div>
        <div className={`form-group ${errors.time ? 'has-error' : ''}`}>
          <label>Time</label>
          <InputField
            name="time"
            type="time"
            placeholder=""
            icon
            onChange={handleInputChange}
            hasError={!!errors.time}
          />
          {errors.time && (
            <p className="error">
              <FaExclamationCircle className="error-icon" /> {errors.time}
            </p>
          )}
        </div>
        <div className={`form-group ${errors.agenda ? 'has-error' : ''}`}>
          <label>Agenda Notes</label>
          <textarea
            name="agenda"
            placeholder=""
            value={meetingData.agenda}
            onChange={handleInputChange}
            className={`input-field ${errors.agenda ? 'has-error' : ''}`}
          />
          {errors.agenda && (
            <p className="error">
              <FaExclamationCircle className="error-icon" /> {errors.agenda}
            </p>
          )}
        </div>
        <div className="button-container">
          <PrimaryButton buttonText="Save" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default NewMeetingPage;
