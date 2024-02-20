import React, { useState } from 'react';
import { HiEye, HiPencilAlt } from 'react-icons/hi';
import { BiSolidTrash } from 'react-icons/bi';
import Modal from './Modal';
import Link from 'next/link';
import CompanyData from './LoadsData';

interface CompanyListProps {
  data: CompanyData[];
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  dataType: string; // Add dataType prop
}

const CompanyList: React.FC<CompanyListProps> = ({ data, onView, onEdit, onDelete, dataType }) => {
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);
  const [selectedLoads, setSelectedLoads] = useState<number[]>([]);

  const handleDoubleClick = (id: number) => {
    setSelectedCompanyId(id);
  };

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

  const renderActions = (companyId: number) => {
    if (dataType === 'LOGGING') {
      return (
        <Link href="/modules/energy/dashboard/loads/View">
          <button type="button">
            <HiEye />
          </button>
        </Link>
      );
    } else if (dataType === 'NON-LOGGING') {
      return (
        <Link href="/modules/energy/dashboard/loads/nonLogging">
          <button type="button">
            <HiEye />
          </button>
        </Link>
      );
    }

    return (
      <>
        <button onClick={() => onView(companyId)}>
          <HiEye />
        </button>
        <button onClick={() => onEdit(companyId)}>
          <HiPencilAlt />
        </button>
        <button onClick={() => onDelete(companyId)}>
          <BiSolidTrash />
        </button>
      </>
    );
  };

  return (
    <div className="p-5">
      <table className="company-list-table rounded-md">
        <thead className="bg-gradient-to-r from-gray-200 to-green-500">
          <tr>
            {selectedCompanyId !== null && (
              <th>
                <Link href="/modules/energy/dashboard/loads/pieChart">
                  <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-0.5 rounded`}
                    onClick={handleGenerateClick}
                  >
                    GENERATE
                  </button>
                </Link>
              </th>
            )}
            <th>CLIENT</th>
            <th>LOADS</th>
            <th>TYPE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((company) => (
            <tr key={company.id} onDoubleClick={() => handleDoubleClick(company.id)}>
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
              <td>{company.loads}</td>
              <td>{company.tariff}</td>
              <td>{renderActions(company.id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;