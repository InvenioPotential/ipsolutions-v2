"use client"
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

const SpadeGraph = () => {
  return (
    <div className='p-2 m-1 text-gray-600'>
        <div className='m-2 text-md  font-bold items-center justify-between flex'>
            GENERATED SPADE GRAPHS
        </div>
        <div className='p-3 bg-gradient-to-r from-blue-300 via-purple-200 to-gray-300 font-semibold text-sm bg-white rounded-md'>
            <div>CLIENT'S NAME:</div>
            <div>FILES:</div>
        </div>
        <div className='pt-5 min-h-screen  overflow-auto'>
            <ul className='*:bg-white grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  mt-1 overflow-auto'>
                <li className='m-2 p-2 overflow-auto'>
                    <h5>Pie Chart</h5>
                    <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 10, label: 'series A' },
                                { id: 1, value: 15, label: 'series B' },
                                { id: 2, value: 20, label: 'series C' },
                            ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                </li>
                <li className='m-2 p-2 overflow-auto'>
                    <h5>Bar Chart</h5>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                        width={500}
                        height={300}
                    />
                </li>
                <li className='m-2 p-2 overflow-auto'>
                    <h5>Line Chart</h5>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                            area: true,
                            },
                        ]}
                        width={500}
                        height={300}
                    />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SpadeGraph
