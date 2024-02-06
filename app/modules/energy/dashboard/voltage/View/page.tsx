'use client'
import React, { useState } from 'react';
import Topnav from '@/components/topnav';
import router from 'next/router';
//import { useHistory } from 'react-router-dom';

interface BillingProps {
  voltageDate: string;
  voltageTime: string;
  energyUsage: number;
  
}

const Billing: React.FC<BillingProps> = ({
    
  voltageDate,
  voltageTime,
  energyUsage,
  
  
}) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    //const history = useHistory();
      
    /*const handleGenerate = () => {
          history.push('./modules/electricity/Chart/page.tsx');
        };*/

        const handleGenerateClick = () => {
            // Implement the logic to allow the user to select items for the chart
            // For example, you can use a modal or a dropdown menu
            // Once the user has made a selection, update the `selectedItems` state
            setSelectedItems(['Month', 'Bill Date', 'Bill Period (From)', 'Bill Period (To)', 'Energy Usage (Peak)', 'Usage Amount (Peak)', 'Energy Usage (Off-Peak)', 'Usage Amount (Off-Peak)', 'MD Usage', 'MD Amount', 'ICPT', 'CLC', 'PF', 'PF Penalty', 'KWTBB', 'Late Payment Charge', 'Adjustment/Discount', 'Due', 'Rounding', 'Total Due', 'Arrears', 'Total Bill', 'T1', 'T2', 'T3', 'SOHO', 'Retail', 'PDD Office', 'Common Area', 'Amount To Be Paid (CA)']);
            router.push('/modules/electricity/Chart/page.tsx');
          }; 
  return (
    <div>
        <Topnav/>
    <div className="p-8 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold text-gray-800 mr-4">
            Type: {/* Add account number here */}
          </h2>
          <h2 className="text-2xl font-semibold text-gray-800">Meter Number: {/* Add tarif here */}</h2>
          <h2 className="text-2xl font-semibold text-gray-800">Tariff: {/* Add tarif here */}</h2>
          <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleGenerateClick}
          
        >
          Generate
        </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max text-left table-auto">
          <thead>
            <tr>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">Date</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">Time</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Energy Usage (10 Minutes)
              </th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-2">{voltageDate}</td>
              <td className="border-b p-2">{voltageTime}</td>
              <td className="border-b p-2">{energyUsage}kWh</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
};

export default Billing;