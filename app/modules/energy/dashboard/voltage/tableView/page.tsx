'use client'
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import styled from "@emotion/styled"
import Topnav from '@/components/topnav';

// Sample dataset for 24 hours
const dataset = Array.from({ length: 24 }, (_, hour) => ({
  hour: `${hour}:00`, // Assuming data is for each hour
  value: Math.floor(Math.random() * 100), // Random value for demonstration
}));

const valueFormatter = (value: number) => `${value} kWh`; // Adjust the unit if needed

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; // Allow elements to wrap to the next line if needed
`;

const ChartContainer = styled.div`
  width: 100%;
  flex: 1; // Allow chart container to take available space
  max-width: 600px; // Set max-width to avoid stretching too much on larger screens
  margin-bottom: 20px; // Add some space between chart and table
`;

const TableContainer = styled.div`
  width: 100%;
  flex: 1; // Allow table container to take available space
  max-width: 600px; // Set max-width to avoid stretching too much on larger screens
  margin-bottom: 20px; // Add some space between chart and table
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const AverageBox = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px solid #dddddd;
  padding: 20px;
  margin-top: 20px;
`;

const TotalBox = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px solid #dddddd;
  padding: 20px;
  margin-top: 20px;
`;

export default function BarsDataset() {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const averageEnergy = 2000 / dataset.length; //calculate average
    const totalEnergy = dataset.length;// change this formula

  return (
    <div>
        <div>
            <Topnav/>
        <div>
        <Center>
            <ChartContainer>
                <BarChart 
                dataset={dataset}
                xAxis={[{ scaleType: 'band', dataKey: 'hour' }]} // X-axis represents 24 hours
                series={[{ dataKey: 'value', label: 'Energy (kWh)', valueFormatter }]} // Y-axis represents energy in kWh
                width={600} // Adjust width if needed
                height={400} // Adjust height if needed
                />
            </ChartContainer>
            <TableContainer>
                <Table>
                <thead>
                    <tr>
                    <Th>STATUS</Th>
                    <Th>DAY</Th>
                    <Th>DATE</Th>
                    <Th>DAILY ENERGY</Th>
                    <Th>NO. OF DAYS</Th>
                    <Th>ANNUAL ENERGY</Th>
                    </tr>
                </thead>
                <tbody>
                        {daysOfWeek.map((day, index) => (
                    <tr key={index}>
                        <Td></Td> {/* Blank for STATUS */}
                        <Td>{day}</Td> {/* Filled with days of the week */}
                        <Td></Td> {/* Blank for DATE */}
                        <Td>0 kWh</Td> {/* Blank for DAILY ENERGY with fixed unit */}
                        <Td></Td> {/* Blank for NO. OF DAYS */}
                        <Td>0 kWh</Td> {/* Blank for ANNUAL ENERGY with fixed unit */}
                    </tr>
                    ))}
                </tbody>
                </Table>
                <AverageBox>
                    Average Energy: {averageEnergy.toFixed(2)} kWh
                </AverageBox>
                <TotalBox>
                    Total Energy: {totalEnergy.toFixed(2)} kWh
                </TotalBox>
            </TableContainer>
            </Center>
        </div>

        </div>

    </div>
    
  );
}
