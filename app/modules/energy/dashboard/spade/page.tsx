'use client';
import React, { useState } from 'react';
import CompanyList from './components/SpadeList';
import Table from './components/Table';
import CompanyData from './components/SpadeData';
import Topnav from '@/components/topnav';
import SideNavBar from '@/components/sidenavbar';





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
      voltage: newCompanyData.voltage
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
        ? { ...company, companyName: editedCompanyData.companyName, voltage: editedCompanyData.voltage }
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

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Topnav/>
      <div className='m-3'>
          <div className='lg:pl-10 lg:pr-10 md:pl-5 sm:pl-5 md:pr-5 sm:pr-5 lg:m-5 md:m-10 sm:m-10'>
            <div className='border-b-1 mb-5'>
              <div className='text-2xl text-black font-bold'>
                SPADE
              </div>
              <div className='text-xs text-gray-500 font-semibold'>
              DASHBOARD OF ENERGY AUDIT CONDITIONAL GRANT
              </div>
            </div>
            <div className="custom-gradient h-screen flex flex-col relative">
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
