'use client'
import * as React from 'react';
import Topnav from '@/components/topnav';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 10, label: 'LIFT' },
  { id: 1, value: 15, label: 'PUMP' },
  { id: 2, value: 20, label: 'LIGHTING' },
];

export default function PieChartLoads() {
  const [selectedLegend, setSelectedLegend] = React.useState<number | null>(null);

  const handleLegendClick = (id: number) => {
    if (selectedLegend === id) {
      setSelectedLegend(null);
    } else {
      setSelectedLegend(id);
    }
  };

  return (
    <div>
      <Topnav />
      <div>
      <div>
        <h2 style={{ textAlign: 'center', fontSize: '20px' }}>LOAD APPORTIONING</h2>
        <PieChart
          series={[
            {
              data,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
          ]}
          height={200}
          legendInteraction="highlight"
          onLegendClick={handleLegendClick}
          legendSelected={selectedLegend}
        />
      </div>
      </div>
      
    </div>
  );
}
