
import React, { useState } from 'react';
import { HiEye, HiPencilAlt } from 'react-icons/hi';
import { BiSolidTrash } from 'react-icons/bi';
import Link from 'next/link';



interface CompanyData {
  id: number;
  companyName: string;
  voltage: string;
}

interface CompanyListProps {
  data: CompanyData[];
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const CompanyList: React.FC<CompanyListProps> = ({ data, onView, onEdit, onDelete }) => {
  return (
    <div className='p-5'>
      <div className='m-5'>
      </div>
      
      <table className="company-list-table">
      <thead>
        <tr>
          <th>C L I E N T</th>
          <th>I T E M</th>
          <th>G E N E R A T E</th>
        </tr>
      </thead>
      <tbody>
        {data.map((company) => (
          <tr key={company.id}>
            <td>{company.companyName}</td>
            <td>{company.voltage}</td>
            <td>
              <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
              <Link href='/modules/energy/dashboard/spade/chart'>
              <button className="text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
              >
                G E N E R A T E
              </button>
              </Link>
                </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};



export default CompanyList;