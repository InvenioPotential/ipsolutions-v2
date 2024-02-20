'use client'
import React, { useState } from 'react';
import CompanyList from './components/VoltageList';
import CompanyData from './components/VoltageData';
import { HiEye } from 'react-icons/hi';
import { BiSolidTrash } from 'react-icons/bi';
import Topnav from '@/components/topnav';
import Modal from './components/Modal';

const generateId = (): number => {
  return Math.floor(Math.random() * 1000);
};

const Page: React.FC = () => {
  const [showSmallScreenPopup, setShowSmallScreenPopup] = useState(false);
  const [editCompanyId, setEditCompanyId] = useState<number | null>(null);
  const [tableData, setTableData] = useState<CompanyData[]>([]);

  const handleAddCompany = (newCompanyData: CompanyData) => {
    const newCompany: CompanyData = {
      id: generateId(),
      companyName: newCompanyData.companyName,
      voltage: newCompanyData.voltage,
      tariff: newCompanyData.tariff,
      csvFile: null,
    };

    setTableData([...tableData, newCompany]);
    setShowSmallScreenPopup(false);
  };

  const handleEditCompany = (companyId: number | null) => {
    setEditCompanyId(companyId);
    setShowSmallScreenPopup(true);
  };

  const handleEditSubmit = (editedCompanyData: CompanyData) => {
    const updatedTableData = tableData.map((company) =>
      company.id === editCompanyId
        ? { ...company, companyName: editedCompanyData.companyName, voltage: editedCompanyData.voltage, tariff: editedCompanyData.tariff }
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

  const handleSaveChanges = (newCompanyData: CompanyData) => {
    const newCompany: CompanyData = {
      id: generateId(),
      companyName: newCompanyData.companyName,
      voltage: newCompanyData.voltage,
      tariff: newCompanyData.tariff,
      csvFile: null,
    };

    setTableData([...tableData, newCompany]);
    setShowSmallScreenPopup(false);
  };

  return (
    <div>
      <Topnav/>
      <div className='m-3'>
        <div className='lg:pl-10 lg:pr-10 md:pl-5 sm:pl-5 md:pr-5 sm:pr-5 lg:m-5 md:m-10 sm:m-10'>
          <div className='flex justify-between'>
            <div className='border-b-1 mb-5'>
              <div className='text-2xl text-black font-bold'>
                VOLTAGE
              </div>
              <div className='text-xs text-gray-500 font-semibold'>
                ANALYSIS OF HIGH OR LOW VOLTAGE
              </div>
            </div>
            <Modal onSave={handleSaveChanges} onClose={() => {}} />
          </div>
          <div className="custom-gradient bg-gray-100 rounded-md h-screen flex flex-col relative">
            <CompanyList
              data={tableData}
              onView={(id) => console.log('View clicked for company with id:', id)}
              onEdit={handleEditCompany}
              onDelete={handleDeleteCompany}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
