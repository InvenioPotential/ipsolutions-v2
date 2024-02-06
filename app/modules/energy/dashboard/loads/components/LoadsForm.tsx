
import React, { useState } from 'react';
import AddCompanyPopup from './AddLoadsPopup';
import CompanyData from './LoadsData';
import CompanyList from './LoadsList';

interface CompanyFormProps {
  loads: string[];
  onSubmit: (companyData: CompanyData) => void;
  onDelete: (companyId: number) => void; // Update the prop definition
}

const CompanyForm: React.FC<CompanyFormProps> = ({ loads, onSubmit, onDelete }) => {
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
        loads={loads}
        onSubmit={handleAddCompany}
        onDelete={handleDeleteCompany}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

export default CompanyForm;
