import React, { useState } from 'react';
import { HiEye, HiPencilAlt } from 'react-icons/hi';
import { BiSolidTrash } from 'react-icons/bi';
import Link from 'next/link';

const CompanyList: React.FC = () => {
  const companies = [
    { id: 1, client: 'ABC', item: 'Electricity, Loads & Voltage' },
    { id: 2, client: 'DEF', item: 'Electricity, Loads & Voltage' },
    // Add more companies as needed
  ];

  return (
    <div className="p-5">
      <table className="company-list-table rounded-md">
        <thead className="bg-gradient-to-r from-gray-200 to-green-500">
          <tr>
            <th>CLIENT</th>
            <th>ITEM</th>
            <th>GENERATE</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.client}</td>
              <td>{company.item}</td>
              <td>
                <Link href= '/modules/energy/dashboard/spade/Chart'>
                <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                  Combine
                </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;