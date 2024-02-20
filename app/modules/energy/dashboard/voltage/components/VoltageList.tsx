'use client'
import React from 'react';
import { HiEye, HiPencilAlt } from 'react-icons/hi';
import { BiSolidTrash } from 'react-icons/bi';
import Modal from './Modal';
import Link from 'next/link';
import CompanyData  from './VoltageData'; 

interface CompanyListProps {
  data: CompanyData[];
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const CompanyList: React.FC<CompanyListProps> = ({ data, onView, onEdit, onDelete }) => {
  const [selectedCompanyId, setSelectedCompanyId] = React.useState<number | null>(null);
  const [selectedLoads, setSelectedLoads] = React.useState<number[]>([]);

  /*const handleDoubleClick = (id: number) => {
    setSelectedCompanyId(id);
  };*/

  const toggleLoadSelection = (id: number) => {
    setSelectedLoads((prevSelectedLoads) =>
      prevSelectedLoads.includes(id)
        ? prevSelectedLoads.filter((loadId) => loadId !== id)
        : [...prevSelectedLoads, id]
    );
  };

  const handleGenerateClick = () => {
    // Handle generating chart for selected loads here
  };

  return (
    <div className="p-5">
      <table className="company-list-table rounded-md">
        <thead className="bg-gradient-to-r from-gray-200 to-green-500">
          <tr>
            <th>CLIENT</th>
            <th>VOLTAGE</th>
            <th>TARIFF</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((company) => (
            <tr key={company.id} onDoubleClick={() =>/* handleDoubleClick*/(company.id)}>
              {selectedCompanyId !== null && (
                <td>
                  <input
                    type="checkbox"
                    checked={selectedLoads.includes(company.id)}
                    onChange={() => toggleLoadSelection(company.id)}
                  />
                </td>
              )}
              <td>{company.companyName}</td>
              <td>{company.voltage}</td>
              <td>{company.tariff}</td>
              <td>
                <Link href="/modules/energy/dashboard/voltage/View">
                  <button type="button">
                    <HiEye />
                  </button>
                </Link>
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
