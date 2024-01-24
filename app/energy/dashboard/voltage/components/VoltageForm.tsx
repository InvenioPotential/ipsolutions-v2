// VoltageForm.tsx
import React, { useState } from 'react';
import AddCompanyPopup from './AddVoltagePopup';
import CompanyData from './VoltageData';
import CompanyList from './VoltageList';

interface CompanyFormProps {
  voltage: string[];
  onSubmit: (companyData: CompanyData) => void;
  onDelete: (companyId: number) => void; // Update the prop definition
}

const VoltageForm: React.FC<CompanyFormProps> = ({ voltage, onSubmit, onDelete }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddCompany = (newCompanyData: CompanyData) => {
    onSubmit(newCompanyData);
    setShowPopup(false);
  };

  const handleDeleteCompany = (companyId: number) => {
    onDelete(companyId);
  };

  return (
    <div>
      <AddCompanyPopup
        voltage={voltage}
        onSubmit={handleAddCompany}
        onDelete={handleDeleteCompany}
        onClose={() => setShowPopup(false)}
      />
      
    </div>
  );
};

export default VoltageForm;
