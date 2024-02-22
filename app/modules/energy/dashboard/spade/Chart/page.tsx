'use client'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PieChartLoads from '../../loads/pieChart/page';
import Year from '../../electricity/Chart/page';
import Topnav from '@/components/topnav';

const data = [
  { category: 'Bill', value: 200 },
  { category: 'Loads', value: 100 },
  { category: 'Voltage', value: 300 },
];

const barColor = '#8884d8'; // Color of the bars

const AppSpadeChart: React.FC = () => {
  return (
    <div>
      <Topnav/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center', fontSize: '20px' }}>BILL VS LOAD VS VOLTAGE</h2>
        <div style={{ width: '500px', height: '500px',}}>
          <BarChart width={500} height={400} data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="category" type="category" />
            <Tooltip />
            <Legend payload={[{ value: 'Energy (kWh)', type: 'rect', id: 'ID01', color:'#8884d8' }]} />
            <Bar dataKey="value" fill={barColor} />
          </BarChart>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <PieChartLoads />
          <div style={{ width: '600px', height: '500px' }}> {/* Adjust width and height as needed */}
          <h2 style={{ textAlign: 'center', fontSize: '20px' }}>ELECTRICITY BILL</h2>
            <Year year={''} /> {/* Assuming Year is wrapped inside a div */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSpadeChart;

