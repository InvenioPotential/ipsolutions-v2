// SmallScreenPopup.tsx
import React, { useState, useEffect } from 'react';
import CompanyData from './VoltageData';
import Select from 'react-select';
import { AiFillCloseCircle } from 'react-icons/ai';
import './Button.css';

interface Table {
  id: number;
  companyName: string;
  voltage: string; // Adjust this type according to your actual structure
  // Add other necessary properties
}

interface SmallScreenPopupProps {
  voltage: string[];
  onSubmit: (newCompanyData: CompanyData) => void;
  onClose: () => void;
  initialData?: Table | null; // Use the correct type
}

const SmallScreenPopup: React.FC<SmallScreenPopupProps> = ({ onSubmit, onClose, initialData, voltage }) => {
  const [companyName, setCompanyName] = useState(initialData?.companyName || '');
  const [voltageData, setVoltageData] = useState<{ value: string; label: string } | null>({
    value: initialData?.voltage || '',
    label: initialData?.voltage || '',
  });
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setCompanyName(initialData.companyName);
      setVoltageData({ value: initialData.voltage, label: initialData.voltage });
    }
  }, [initialData]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setCsvFile(files[0]);
    }
  };
  const loadOptions = [
    { value: '', label: 'Select Voltage' },
    { value: 'LOW VOLTAGE', label: 'LOW VOLTAGE' },
    { value: 'HIGH VOLTAGE', label: 'HIGH VOLTAGE' },
    
    
    // Add more options as needed
  ];


  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: '500px',
    }),
    menu: (provided: any) => ({
      ...provided,
      textAlign: 'left',
    }),
  };

  const handleSubmit = () => {
    if (!voltageData || voltageData.value === '' || !csvFile) {
      setErrorMessage('Please Fill In The Blank Column Before Submit');
      return;
    }

    const newCompanyData: CompanyData = {
      companyName,
      voltage: voltageData.value,
      csvFile,
    };

    setErrorMessage('');
    onSubmit(newCompanyData);
    setCompanyName('');
    setVoltageData(null);
    setCsvFile(null);
    onClose();
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="close-container">
          <button className="close" onClick={onClose}>
            <AiFillCloseCircle />
          </button>
        </div>

        {errorMessage && <div className="error-message" style={{ color: 'red' }}>{errorMessage}</div>}

        <div className="input-group">
          <div className="form-group" style={{ display: 'inline-block', marginRight: '20px' }}>
            <label>Client </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="form-group" style={{ display: 'inline-block', marginRight: '20px' }}>
            <label>Loads </label>
            <Select
              value={voltageData}
              onChange={(selectedOption) => setVoltageData(selectedOption as { value: string; label: string } | null)}
              options={loadOptions}
              isSearchable={false}
              styles={customStyles}
            />
          </div>

          <div className="form-group" style={{ display: 'inline-block', marginRight: '20px' }}>
            <label>CSV File </label>
            <input type="file" onChange={handleFileChange} accept=".csv" />
          </div>
        </div>

        <button className="submit-button" onClick={handleSubmit}>
          {initialData ? 'Update' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default SmallScreenPopup;
