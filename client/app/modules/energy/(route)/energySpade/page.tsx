"use client"
import React, { useState } from 'react'
import { FiActivity } from 'react-icons/fi'
import { MdAutoGraph, MdUpcoming } from 'react-icons/md'

import SpadeGraph from '@/components/energy/graph/spadeGraph';
import { FaFile } from 'react-icons/fa';

const EnergySpade = () => {
    const [isGenerateOpen, setGenerateOpen] = useState(false);
    const toggleGenerate =() => {
        setGenerateOpen(!isGenerateOpen);
    };

  return (
    <div className='lg:pl-10 m-5 lg:pr-10 '>
        <div className='mb-5'>
            <div className='text-2xl text-black font-bold'>
            SPADE
            </div>
            <div className='text-xs text-gray-500 font-semibold'>
            ENERGY MANAGEMENT
            </div>
        </div> 
        <div className='m-3 h-auto overflow-auto justify-center grid lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-2 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 gap-4'>
            <div className='col-span-3 cursor-pointer items-center  justify-center text-center'>
              <div className='shadow hover:shadow-xl bg-gradient-to-r from-yellow-100  to-gray-200 rounded-lg justify-between p-3 '>
                  <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                  <div className='flex justify-between items-center'>
                      <MdUpcoming className='m-1 h-5 w-5' />
                      <div className='m-1 '>UPLOAD</div>
                  </div>
                  </div>
              </div>
            </div>
            <div  className='col-span-3 cursor-pointer items-center  justify-center text-center'>
              <div className='shadow hover:shadow-xl bg-gradient-to-r from-sky-100  to-gray-200 rounded-lg justify-between p-3 '>
                  <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                  <div className='flex justify-between items-center'>
                      <FiActivity className='m-1 h-5 w-5' />
                      <div className='m-1'>GRAPHS</div>
                  </div>
                  </div>
              </div>
            </div>
        </div>
        <div className='m-3 mt-4 lg:grid md:grid sm:flex grid-cols-6 gap-4'>
            <div className='m-1 grid  rounded-md col-span-6'>
                <div className='p-2 m-1'>
                    <div className='m-2  items-center'>
                        <p className='text-md text-gray-600 font-bold'>OVERVIEW</p>
                        <p className='text-sm text-gray-400'>Overview list of uploaded files.</p>
                    </div>
                    <div className='mt-5 rounded-lg h-60  overflow-auto'>
                        <ul className='*:bg-white *:m-2 *:p-3 *:rounded-md *:overflow-auto text-gray-600 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  mt-1 overflow-auto'>
                        <li className=''>
                                <div className='flex'>
                                    <div><FaFile className='m-4 mt-2'/></div>
                                    <div className='text-left'>
                                        <div className='font-semibold text-md'>Category: Electricity</div>
                                        <div className='text-xs font-semibold'>File: electricitybill.csv</div> 
                                        <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div> 
                                    </div>
                                </div>
                            </li>
                            <li className=''>
                                <div className='flex'>
                                    <div><FaFile className='m-4 mt-2'/></div>
                                    <div className='text-left'>
                                        <div className='font-semibold text-md'>Category: Electricity</div>
                                        <div className='text-xs font-semibold'>File: electricitybill.csv</div> 
                                        <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div> 
                                    </div>
                                </div>
                            </li>
                            <li className=''>
                                <div className='flex'>
                                    <div><FaFile className='m-4 mt-2'/></div>
                                    <div className='text-left'>
                                        <div className='font-semibold text-md'>Category: Electricity</div>
                                        <div className='text-xs font-semibold'>File: electricitybill.csv</div> 
                                        <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div> 
                                    </div>
                                </div>
                            </li>
                            <li className=''>
                                <div className='flex'>
                                    <div><FaFile className='m-4 mt-2'/></div>
                                    <div className='text-left'>
                                        <div className='font-semibold text-md'>Category: Electricity</div>
                                        <div className='text-xs font-semibold'>File: electricitybill.csv</div> 
                                        <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div> 
                                    </div>
                                </div>
                            </li>
                            <li className=''>
                                <div className='flex'>
                                    <div><FaFile className='m-4 mt-2'/></div>
                                    <div className='text-left'>
                                        <div className='font-semibold text-md'>Category: Electricity</div>
                                        <div className='text-xs font-semibold'>File: electricitybill.csv</div> 
                                        <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div> 
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='m-1 grid text-gray-600 rounded-md col-span-6'>
                <div className='p-2 m-1 overflow-auto'>
                    <div className='m-2  items-center'>
                        <p className='text-md  font-bold'>TABLE</p>
                        <p className='text-sm text-gray-400'>Generate button will help you to generate graph for selected Client.</p>
                    </div>
                    <div className='mt-5 rounded-lg h-60 w-full overflow-auto mx-auto text-sm font-semibold m-2 text-center grid-cols-subgrid lg:col-span-3 md:col-span-2 sm:col-span-2'>
                        <table  className='container text-center table-auto bg-white p-4'>
                            <thead className=' bg-gradient-to-r rounded-md from-green-300 via-blue-100 to-gray-200'>
                                <tr className='*:p-4 justify-between'>
                                    <th>CLIENT NAME</th>
                                    <th>ITEM FILES</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody className='h-60 overflow-auto'>
                                <tr className='*:p-4 justify-between'>
                                    <td>Client1 Sdn. Bhd</td>
                                    <td>Electricity, Voltage, Loads</td>
                                    <td className='flex justify-center text-gray-700'>
                                        <button onClick={toggleGenerate} className='p-2 flex text-center justify-between rounded-md bg-gradient-to-tr from-blue-200 to-gray-200 hover:bg-gradient-to-tr hover:from-green-200 hover:to-gray-200'>
                                            Generate
                                            <MdAutoGraph className='m-1'/>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='*:p-4 justify-between'>
                                    <td>Client1 Sdn. Bhd</td>
                                    <td>Electricity, Voltage, Loads</td>
                                    <td className='flex justify-center text-gray-700'>
                                        <button onClick={toggleGenerate} className='p-2 flex text-center justify-between rounded-md bg-gradient-to-tr from-blue-200 to-gray-200 hover:bg-gradient-to-tr hover:from-green-200 hover:to-gray-200'>
                                            Generate
                                            <MdAutoGraph className='m-1'/>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='*:p-4 justify-between'>
                                    <td>Client1 Sdn. Bhd</td>
                                    <td>Electricity, Voltage, Loads</td>
                                    <td className='flex justify-center text-gray-700'>
                                        <button onClick={toggleGenerate} className='p-2 flex text-center justify-between rounded-md bg-gradient-to-tr from-blue-200 to-gray-200 hover:bg-gradient-to-tr hover:from-green-200 hover:to-gray-200'>
                                            Generate
                                            <MdAutoGraph className='m-1'/>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='*:p-4 justify-between'>
                                    <td>Client1 Sdn. Bhd</td>
                                    <td>Electricity, Voltage, Loads</td>
                                    <td className='flex justify-center text-gray-700'>
                                        <button onClick={toggleGenerate} className='p-2 flex text-center justify-between rounded-md bg-gradient-to-tr from-blue-200 to-gray-200 hover:bg-gradient-to-tr hover:from-green-200 hover:to-gray-200'>
                                            Generate
                                            <MdAutoGraph className='m-1'/>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={` ${isGenerateOpen ? 'm-1 grid  rounded-md col-span-6' : 'ml-5 hidden'}`}>
                <SpadeGraph/>
            </div>
        </div>
    </div>
  )
}

export default EnergySpade
