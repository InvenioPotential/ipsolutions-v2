'use client'
import React, { useState } from 'react';
import Topnav from '@/components/topnav';
import router from 'next/router';
import Link from 'next/link';
//import { useHistory } from 'react-router-dom';

interface BillingProps {
  loadEquip: string;
  loadDesc: string;
  loadRated: number;
  loadTotalRated: number;
  loadFactor: number;
  loadTimeFactor: number;
  loadEnergy: number;
  
}

const Billing: React.FC<BillingProps> = ({
    
    loadEquip,
    loadDesc,
    loadRated,
    loadTotalRated,
    loadFactor,
    loadTimeFactor,
    loadEnergy
  
  
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
            
          }; 
  return (
    <div>
        <Topnav/>
    <div className="p-8 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold text-gray-800 mr-4">
            Load: 
          </h2>
          <h2 className="text-2xl font-semibold text-gray-800">Meter Number: {/* Add tarif here */}</h2>
          <h2 className="text-2xl font-semibold text-gray-800">Type: {/* Add tarif here */}</h2>
          <h2> 
            <Link href="/modules/energy/dashboard/loads/tableViewNon">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Table
              </button>
              </Link>
          </h2>
          
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max text-left table-auto">
          <thead>
            <tr>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">Equipment</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">Description</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Rated Power (W)
              </th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Total Rated Power (kW)
              </th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Loading Factor
              </th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Time Usage Factor
              </th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Energy Daily (kWh)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-2">{loadEquip}</td>
              <td className="border-b p-2">{loadDesc}</td>
              <td className="border-b p-2">{loadRated}W</td>
              <td className="border-b p-2">{loadTotalRated}kW</td>
              <td className="border-b p-2">{loadFactor}</td>
              <td className="border-b p-2">{loadTimeFactor}</td>
              <td className="border-b p-2">{loadEnergy}kWh</td>
    
  
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
};

export default Billing;