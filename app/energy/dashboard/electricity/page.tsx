'use client';
import React, { useState } from 'react';
import CompanyList from './components/CompanyList';
import SmallScreenPopup from './components/SmallScreenPopup';
import Table from './components/Table';
import CompanyData from './components/CompanyData';
import { BsPlusCircle } from 'react-icons/bs';
import { HiEye, HiPencilAlt } from 'react-icons/hi';
import { BiSolidTrash } from 'react-icons/bi';
import './Company.css';
import CompanyForm from './components/CompanyForm';

const generateId = (): number => {
  return Math.floor(Math.random() * 1000);
};

const Page: React.FC = () => {
  const [showSmallScreenPopup, setShowSmallScreenPopup] = useState(false);
  const [editCompanyId, setEditCompanyId] = useState<number | null>(null);
  const [supplier] = useState<string[]>([]); // Assuming supplier is an array of string
  const [tableData, setTableData] = useState<Table[]>([]);

  const handleAddCompany = (newCompanyData: CompanyData) => {
    const newCompany: Table = {
      id: generateId(),
      companyName: newCompanyData.companyName,
      supplier: newCompanyData.supplier,
    };

    setTableData([...tableData, newCompany]);
    setShowSmallScreenPopup(false);
  };

  const handleEditCompany = (companyId: number) => {
    setEditCompanyId(companyId);
    setShowSmallScreenPopup(true);
  };

  const handleEditSubmit = (editedCompanyData: CompanyData) => {
    const updatedTableData = tableData.map((company) =>
      company.id === editCompanyId
        ? { ...company, companyName: editedCompanyData.companyName, supplier: editedCompanyData.supplier }
        : company
    );

    setTableData(updatedTableData);
    setEditCompanyId(null);
    setShowSmallScreenPopup(false);
  };

  const handleDeleteCompany = (companyId: number) => {
    const updatedTableData = tableData.filter((company) => company.id !== companyId);
    setTableData(updatedTableData);
  };

  return (
    <div>
      <h1>ELECTRICITY BILL</h1>
      <p>ANALYSIS OF ELECTRICITY BILL</p>
      <div className="custom-gradient">
        <div className="page-container">
          <button
            className="add-button"
            onClick={() => {
              setShowSmallScreenPopup(true);
              setEditCompanyId(null);
            }}
          >
            <BsPlusCircle />
          </button>
          {showSmallScreenPopup && (
            <SmallScreenPopup
              supplier={supplier}
              onSubmit={editCompanyId !== null ? handleEditSubmit : handleAddCompany}
              onClose={() => {
                setShowSmallScreenPopup(false);
                setEditCompanyId(null);
              }}
              initialData={editCompanyId !== null ? tableData.find((company) => company.id === editCompanyId) : null}
            />
          )}
        </div>
        <CompanyForm
          supplier={supplier}
          onSubmit={editCompanyId !== null ? handleEditSubmit : handleAddCompany}
          onDelete={handleDeleteCompany}
        />
        <CompanyList
          data={tableData}
          onView={(id) => console.log('View clicked for company with id:', id)}
          onEdit={handleEditCompany}
          onDelete={handleDeleteCompany}
        />
        {/* Add other components as needed */}
      </div>
    </div>
  );
};

export default Page;
