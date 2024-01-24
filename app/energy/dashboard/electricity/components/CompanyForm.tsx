
import React, { useState } from 'react';
import AddCompanyPopup from './AddCompanyPopup';
import CompanyData from './CompanyData';
import CompanyList from './CompanyList';

interface CompanyFormProps {
  supplier: string[];
  onSubmit: (companyData: CompanyData) => void;
  onDelete: (companyId: number) => void; // Update the prop definition
}

const CompanyForm: React.FC<CompanyFormProps> = ({ supplier, onSubmit, onDelete }) => {
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
        supplier={supplier}
        onSubmit={handleAddCompany}
        onDelete={handleDeleteCompany}
        onClose={() => setShowPopup(false)}
      />
      
    </div>
  );
};

export default CompanyForm;
