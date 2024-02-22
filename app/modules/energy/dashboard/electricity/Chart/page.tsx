'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
// import Topnav from '@/components/topnav';


type SeriesType = {
  type: 'line' | 'bar'; // Restricting type to 'line' or 'bar'
  id: string;
  yAxisKey: string;
  data: number[];
  color: string;
};

// Define type for chart data
type ChartData = {
  [key: string]: {
    xAxis: { scaleType: 'band'; data: string[]; id: string; label: string }[];
    yAxis: { id: string }[];
    series: SeriesType[]; // Use the defined SeriesType here
  };
};


// Year component
export default function Year({ year }: { year: string }) {
  const [selectedGraph, setSelectedGraph] = React.useState('energyVsMaximumDemand');

  const handleChangeGraph = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGraph(event.target.value);
  };

  // Define chart data
  const chartData: ChartData = {
    energyVsMaximumDemand: {
      xAxis: [{ scaleType: 'band', data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'], id: 'month', label: 'Month' }],
      yAxis: [{ id: 'maximumDemand' }, { id: 'monthly' }],
      series: [{ type: 'line', id: 'md01', yAxisKey: 'maximumDemand', data: [425, 426, 459, 460, 466, 481, 485, 488, 495, 497, 498, 500,], color: 'red' }, 
      { type: 'bar', id: '2021', yAxisKey: 'monthly', data: [2073, 2540, 2578, 3178, 3623, 3670, 3716, 3780, 4455, 4619, 4955, 4957], color:'blue' },
      { type: 'line', id: 'md02', yAxisKey: 'maximumDemand', data: [425, 426, 459, 460, 466, 481, 485, 488, 495, 497, 498, 500,], color: 'red' }, 
      { type: 'bar', id: '2022', yAxisKey: 'monthly', data: [2073, 2540, 2578, 3178, 3623, 3670, 3716, 3780, 4455, 4619, 4955, 4957], color:'green' }
     
],
    },
    energyVsRM: {
      xAxis: [{ scaleType: 'band', data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'], id: 'month', label: 'Month' }],
      yAxis: [{ id: 'money' }, { id: 'monthly' }],
      series: [{ type: 'line', id: 'md01', yAxisKey: 'money', data: [425, 426, 459, 460, 466, 481, 485, 488, 495, 497, 498, 500,], color: 'red' }, 
      { type: 'bar', id: '2021', yAxisKey: 'monthly', data: [2073, 2540, 2578, 3178, 3623, 3670, 3716, 3780, 4455, 4619, 4955, 4957], color:'blue' },
      { type: 'line', id: 'md02', yAxisKey: 'money', data: [425, 426, 459, 460, 466, 481, 485, 488, 495, 497, 498, 500,], color: 'red' }, 
      { type: 'bar', id: '2022', yAxisKey: 'monthly', data: [2073, 2540, 2578, 3178, 3623, 3670, 3716, 3780, 4455, 4619, 4955, 4957], color:'green' },

     ],
    },
  };

  return (
    <div>
      {/* <Topnav/> */}
      <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h6">{year}</Typography>
        <select value={selectedGraph} onChange={handleChangeGraph} style={{ marginTop: '10px' }}>
          <option value="energyVsMaximumDemand">Energy VS Maximum Demand</option>
          <option value="energyVsRM">Energy VS RM</option>
        </select>
        <ResponsiveChartContainer {...chartData[selectedGraph]} height={400} margin={{ top: 20, bottom: 50, left: 70, right: 70 }} sx={{ width: '100%', maxWidth: '600px', '@media (max-width: 600px)': { maxWidth: '100%' } }}>
          <ChartsXAxis axisId="month" label="Month" labelFontSize={18} />
          <ChartsYAxis axisId="monthly" label="Energy (kWh)" labelFontSize={14} />
          {selectedGraph === 'energyVsMaximumDemand' && 
            <ChartsYAxis axisId="maximumDemand" position="right" label="Maximum Demand" labelFontSize={14} sx={{ marginRight: '20px', marginTop: '20px' }}/>}
          {selectedGraph === 'energyVsRM' && 
            <ChartsYAxis axisId="money" position="right" label="Usage Amount (RM)" labelFontSize={14} sx={{ marginRight: '20px', marginTop: '20px' }}/>}
          <BarPlot />
          <LinePlot />
        </ResponsiveChartContainer>
      </Box>
      </div>
      
    </div>
  );
}


