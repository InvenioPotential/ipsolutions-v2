'use client';
import React, { useState } from 'react';
import CompanyList from './components/VoltageList';
import Table from './components/Table';
import CompanyData from './components/VoltageData';
import Link from 'next/link';
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
                VOLTAGE
              </div>
              <div className='text-xs text-gray-500 font-semibold'>
              ANALYSIS OF LOW OR HIGH VOLTAGE
              </div>
            </div>
            <div className="custom-gradient h-screen flex flex-col relative">
              <CompanyList
                data={tableData}
                onView={(id) => console.log('View clicked for company with id:', id)}
                onEdit={handleEditCompany}
                onDelete={handleDeleteCompany}
              />

            {/* <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
              <Link href='/modules/energy/dashboard/voltage/Chart'>
              <button className="text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
              >
                G E N E R A T E
              </button>
              </Link>
                </div> */}
              {/* Add other components as needed */}
            </div>


            </div>
        </div>

      

      
    </div>
  

      );  
};


export default Page;
