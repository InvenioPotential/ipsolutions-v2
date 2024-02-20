'use client'
import React, { useState } from 'react';
import Topnav from '@/components/topnav';
import router from 'next/router';
import Link from 'next/link';
//import { useHistory } from 'react-router-dom';//

interface BillingProps {
  billDate: string;
  billPeriodFrom: string;
  billPeriodTo: string;
  peakEnergyUsage: number;
  peakUsageAmount: number;
  offPeakEnergyUsage: number;
  mdUsage: number;
  mdAmount: number;
  icpt: number;
  clc: number;
  pf: number;
  pfPenalty: number;
  kwtbb: number;
  latePaymentCharge: number;
  adjustmentDiscount: number;
  due: number;
  rounding: number;
  totalDue: number;
  arrears: number;
  totalBill: number;
  t1: number;
  t2: number;
  t3: number;
  soho: number;
  retail: number;
  pddOffice: number;
  commonArea: number;
  amountToBePaidCA: number;
  selectedItems: string[];
}

const Billing: React.FC<BillingProps> = ({
    
  billDate,
  billPeriodFrom,
  billPeriodTo,
  peakEnergyUsage,
  peakUsageAmount,
  offPeakEnergyUsage,
  mdUsage,
  mdAmount,
  icpt,
  clc,
  pf,
  pfPenalty,
  kwtbb,
  latePaymentCharge,
  adjustmentDiscount,
  due,
  rounding,
  totalDue,
  arrears,
  totalBill,
  t1,
  t2,
  t3,
  soho,
  retail,
  pddOffice,
  commonArea,
  amountToBePaidCA,
  
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
            Account Number: {/* Add account number here */}
          </h2>
          <h2 className="text-2xl font-semibold text-gray-800">Meter Number: {/* Add tarif here */}</h2>
          <h2 className="text-2xl font-semibold text-gray-800">Tariff: {/* Add tarif here */}</h2>
          <h2> 
            <Link href="/modules/energy/dashboard/electricity/Chart">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Generate
              </button>
              </Link>
          </h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max text-left table-auto">
          <thead>
            <tr>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">Month</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">Bill Date</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Bill Period (From)
              </th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Bill Period (To)
              </th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Energy Usage (Peak)
              </th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Usage Amount (Peak)
              </th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Energy Usage (Off-Peak)
              </th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Usage Amount (Off-Peak)
              </th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">MD Usage</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">MD Amount</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">ICPT</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">CLC</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">PF</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">PF Penalty</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">KWTBB</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Late Payment Charge
              </th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Adjustment/Discount
              </th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">Due</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">Rounding</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">Total Due</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">Arrears</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">Total Bill</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">T1</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">T2</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">T3</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">SOHO</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">Retail</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">PDD Office</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">Common Area</th>
              <th className="border-b p-2 sticky left-0 z-10 bg-white">
                Amount To Be Paid (CA)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-2">{billDate}</td>
              <td className="border-b p-2">{billPeriodFrom}</td>
              <td className="border-b p-2">{billPeriodTo}</td>
              <td className="border-b p-2">{peakEnergyUsage} kWh</td>
              <td className="border-b p-2">RM{peakUsageAmount}</td>
              <td className="border-b p-2">{offPeakEnergyUsage} kWh</td>
              <td className="border-b p-2">RM{offPeakEnergyUsage}</td>
              <td className="border-b p-2">{mdUsage} kW</td>
              <td className="border-b p-2">RM{mdAmount}</td>
              <td className="border-b p-2">RM{icpt}</td>
              <td className="border-b p-2">RM{clc}</td>
              <td className="border-b p-2">{pf}</td>
              <td className="border-b p-2">RM{pfPenalty}</td>
              <td className="border-b p-2">RM{kwtbb}</td>
              <td className="border-b p-2">RM{latePaymentCharge}</td>
              <td className="border-b p-2">RM{adjustmentDiscount}</td>
              <td className="border-b p-2">RM{due}</td>
              <td className="border-b p-2">RM{rounding}</td>
              <td className="border-b p-2">RM{totalDue}</td>
              <td className="border-b p-2">RM{arrears}</td>
              <td className="border-b p-2">RM{totalBill}</td>
              <td className="border-b p-2">{t1}kWh</td>
              <td className="border-b p-2">{t2}kWh</td>
              <td className="border-b p-2">{t3}kWh</td>
              <td className="border-b p-2">{soho}kWh</td>
              <td className="border-b p-2">{retail}kWh</td>
              <td className="border-b p-2">{pddOffice}kWh</td>
              <td className="border-b p-2">{commonArea}kWh</td>
              <td className="border-b p-2">RM{amountToBePaidCA}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
};

export default Billing;