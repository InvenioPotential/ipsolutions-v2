
import React, { useState } from 'react';
import { HiEye, HiPencilAlt } from 'react-icons/hi';
import { BiSolidTrash } from 'react-icons/bi';
import Modal from './Modal';



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
      <Modal/>
      </div>
      
      <table className="company-list-table">
      <thead>
        <tr>
          <th>C L I E N T</th>
          <th>V O L T A G E</th>
          <th>A C T I O N</th>
        </tr>
      </thead>
      <tbody>
        {data.map((company) => (
          <tr key={company.id}>
            <td>{company.companyName}</td>
            <td>{company.voltage}</td>
            <td>
              <button onClick={() => onView(company.id)}>
                <HiEye />
              </button>
              <button onClick={() => onEdit(company.id)}>
                <HiPencilAlt />
              </button>
              <button onClick={() => onDelete(company.id)}>
                <BiSolidTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};



export default CompanyList;