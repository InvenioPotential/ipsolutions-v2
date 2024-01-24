// SmallScreenPopup.tsx
import React, { useState, useEffect } from 'react';
import CompanyData from './LoadsData';
import Select from 'react-select';
import { AiFillCloseCircle } from 'react-icons/ai';
import './Button.css';

interface Table {
  id: number;
  companyName: string;
  loads: string; // Adjust this type according to your actual structure
  // Add other necessary properties
}

interface SmallScreenPopupProps {
  loads: string[];
  onSubmit: (newCompanyData: CompanyData) => void;
  onClose: () => void;
  initialData?: Table | null; // Use the correct type
}

const SmallScreenPopup: React.FC<SmallScreenPopupProps> = ({ onSubmit, onClose, initialData, loads }) => {
  const [companyName, setCompanyName] = useState(initialData?.companyName || '');
  const [loadsData, setLoadsData] = useState<{ value: string; label: string } | null>({
    value: initialData?.loads || '',
    label: initialData?.loads || '',
  });
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setCompanyName(initialData.companyName);
      setLoadsData({ value: initialData.loads, label: initialData.loads });
    }
  }, [initialData]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setCsvFile(files[0]);
    }
  };
  const loadOptions = [
    { value: '', label: 'Select Load' },
    { value: 'LIGHTING', label: 'LIGHTING' },
    { value: 'LIFT', label: 'LIFT' },
    { value: 'MECHANICAL VENTILATION', label: 'MECHANICAL VENTILATION' },
    { value: 'ESCALATOR', label: 'ESCALATOR' },
    { value: 'DOMESTIC WATER CIRCULATION PUMP', label: 'DOMESTIC WATER CIRCULATION PUMP' },
    { value: 'CONDENSER WATER PUMP', label: 'CONDENSER WATER PUMP' },
    { value: 'WATER-COOLED PACKAGE UNIT', label: 'WATER-COOLED PACKAGE UNIT' },
    { value: 'AIR CONDITIONING SPLIT UNIT', label: 'AIR CONDITIONING SPLIT UNIT' },
    { value: 'OTHERS', label: 'OTHERS' },
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
    if (!loadsData || loadsData.value === '' || !csvFile) {
      setErrorMessage('Please Fill In The Blank Column Before Submit');
      return;
    }

    const newCompanyData: CompanyData = {
      companyName,
      loads: loadsData.value,
      csvFile,
    };

    setErrorMessage('');
    onSubmit(newCompanyData);
    setCompanyName('');
    setLoadsData(null);
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
              value={loadsData}
              onChange={(selectedOption) => setLoadsData(selectedOption as { value: string; label: string } | null)}
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
