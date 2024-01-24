
import React, { useState } from 'react';
import CompanyData from './LoadsData';

interface AddCompanyPopupProps {
  loads: string[];
  onSubmit: (newCompanyData: CompanyData) => void;
  onDelete: (companyId: number) => void;
  onClose: () => void;
}

const AddCompanyPopup: React.FC<AddCompanyPopupProps> = ({ loads, onSubmit, onDelete, onClose }) => {
  const [companyData, setCompanyData] = useState<CompanyData>({
    companyName: '',
    loads: '',
    csvFile: null,
  });

  const handleDelete = () => {
   
    const companyId: number = Math.floor(Math.random() * 1000);

    onDelete(companyId);
    setCompanyData({
      companyName: '',
      loads: '',
      csvFile: null,
    });
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setCompanyData({ ...companyData, csvFile: files[0] });
    }
  };

  const handleAddCompany = () => {
    onSubmit(companyData);
    setCompanyData({
      companyName: '',
      loads: '',
      csvFile: null,
    });
    onClose();
  };

  return (
    <div>
    </div>
  );
};

export default AddCompanyPopup;
