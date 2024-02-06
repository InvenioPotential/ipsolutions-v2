'use client';
import React, { useState } from 'react';
import CompanyList from './components/LoadsList';
import Table from './components/Table';
import CompanyData from './components/LoadsData';

import { HiEye, HiPencilAlt } from 'react-icons/hi';
import { BiSolidTrash } from 'react-icons/bi';

import Topnav from '@/components/topnav';
import SideNavBar from '@/components/sidenavbar';
import Modal from './components/Modal';




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
      loads: newCompanyData.loads,
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
        ? { ...company, companyName: editedCompanyData.companyName, loads: editedCompanyData.loads }
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
                LOADS
              </div>
              <div className='text-xs text-gray-500 font-semibold'>
              ANALYSIS OF LOADS SUCH AS LIGHTING AND PUMP
              </div>
            </div>
            <div className="custom-gradient">
              <CompanyList
                data={tableData}
                onView={(id) => console.log('View clicked for company with id:', id)}
                onEdit={handleEditCompany}
                onDelete={handleDeleteCompany}
              />
              {/* Add other components as needed */}
            </div>


            </div>
        </div>

      

      
    </div>
  

      );  
};


export default Page;
