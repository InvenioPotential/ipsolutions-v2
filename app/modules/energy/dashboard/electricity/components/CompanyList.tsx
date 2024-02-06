import React, { useState } from 'react';
import { HiEye, HiPencilAlt } from 'react-icons/hi';
import { BiSolidTrash } from 'react-icons/bi';
import Modal from './Modal';

interface CompanyData {
  id:number;
  companyName: string;
  supplier: string;
  csvFile: File | null;
  tariff: string;
}

interface CompanyListProps {
  data: CompanyData[];
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}


const CompanyList: React.FC<CompanyListProps> = ({ data, onView, onEdit, onDelete }) => {
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);

  const handleEditClick = (id: number) => {
    setSelectedCompanyId(id);
    onEdit(id);
  };

  const handleDeleteClick = (id: number) => {
    onDelete(id);
  };

  

  return (
    <div className='p-5'>
      <table className="company-list-table rounded-md">
        <thead className=' bg-gradient-to-r from-gray-200 to-green-500'>
          <tr>
            <th>CLIENT</th>
            <th>SUPPLIER</th>
            <th>TARIFF</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((company) => (
            <tr key={company.id}>
              <td>{company.companyName}</td>
              <td>{company.supplier}</td>
              <td>{company.tariff}</td>
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

      {/* Modal component */}
      {selectedCompanyId !== null && (
       <Modal
       onSave={(companyData: CompanyData) => {
         // Handle the editing logic with the updated data
         onEdit(selectedCompanyId);
       }}
       onClose={() => setSelectedCompanyId(null)}
     />
        )}
    </div>
  );
};

export default CompanyList;
