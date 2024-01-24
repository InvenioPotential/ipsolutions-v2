
import React from 'react';
import './CompanyList.css';
import { HiEye, HiPencilAlt } from 'react-icons/hi';
import { BiSolidTrash } from 'react-icons/bi';

interface Table {
  id: number;
  companyName: string;
  supplier: string;
}

interface CompanyListProps {
  data: Table[];
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const CompanyList: React.FC<CompanyListProps> = ({ data, onView, onEdit, onDelete }) => (
  <div>
    <table className="company-list-table">
      <thead>
        <tr>
          <th>C L I E N T</th>
          <th>S U P P L I E R</th>
          <th>U P D A T E</th>
        </tr>
      </thead>
      <tbody>
        {data.map((company) => (
          <tr key={company.id}>
            <td className="company-list-container">{company.companyName}</td>
            <td className="company-list-container">{company.supplier}</td>
            <td>
              <button style={{ marginRight: '8px' }} onClick={() => onView(company.id)}><HiEye /></button>
              <button style={{ marginRight: '8px' }} onClick={() => onEdit(company.id)}><HiPencilAlt /></button>
              <button onClick={() => onDelete(company.id)}><BiSolidTrash /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CompanyList;
