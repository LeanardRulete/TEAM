import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QrScanner from 'react-qr-scanner';
import PrimaryButton from '../shared/components/buttons/PrimaryButton';
import { FaArrowLeft, FaSave, FaStop, FaPlay, FaUndo } from 'react-icons/fa'; // Import icons
import './ScanPage.scss';

const ScanPage: React.FC = () => {
  const [scannedData, setScannedData] = useState('');
  const [isScanning, setIsScanning] = useState(true);
  const navigate = useNavigate();

  const handleScan = (data: { text: string } | null) => {
    if (data) {
      setScannedData(data.text);
      setIsScanning(false);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  const handleBackClick = () => {
    navigate('/dashboard/attendance');
  };

  const handleStopClick = () => {
    setIsScanning(false);
  };

  const handleSaveClick = () => {
    // Save scanned data logic here
    navigate('/dashboard/attendance');
  };

  const handleReturnClick = () => {
    setScannedData('');
    setIsScanning(false);
  };

  const handleScanAgainClick = () => {
    setScannedData('');
    setIsScanning(true);
  };

  return (
    <div className="scan-page">
      <div className="top-bar">
        <PrimaryButton
          icon={FaArrowLeft}
          buttonText="Back"
          //   leftIcon
          handleButtonClick={handleBackClick}
          className="back-button"
        />
      </div>
      <div className="scanner-container">
        {isScanning && (
          <div className="qr-scanner">
            <QrScanner
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '100%' }}
            />
          </div>
        )}
        {scannedData && (
          <div className="scan-success">
            <p>Scanned Successfully</p>
          </div>
        )}
      </div>
      <div className="button-container">
        {isScanning ? (
          <PrimaryButton
            buttonText="Stop"
            icon={FaStop}
            handleButtonClick={handleStopClick}
            className="stop-button"
          />
        ) : (
          <>
            {scannedData ? (
              <>
                <PrimaryButton
                  buttonText="Save"
                  handleButtonClick={handleSaveClick}
                  className="save-button"
                />
                <PrimaryButton
                  buttonText="Return"
                  icon={FaUndo}
                  handleButtonClick={handleReturnClick}
                  className="return-button"
                />
              </>
            ) : (
              <>
                <PrimaryButton
                  buttonText="Scan Again"
                  icon={FaPlay}
                  handleButtonClick={handleScanAgainClick}
                  className="scan-again-button"
                />
              </>
            )}
          </>
        )}
      </div>
      {scannedData && (
        <div className="scanned-data">
          <h2>Scanned Data:</h2>
          <p>{scannedData}</p>
        </div>
      )}
    </div>
  );
};

export default ScanPage;
