"use client"
import React, { useState } from 'react'
import { FiActivity } from 'react-icons/fi'
import { MdAutoGraph } from 'react-icons/md'
import EditElectricity from '@/components/energy/modal/editElectricity';
import VoltGraph from '@/components/energy/graph/voltageTableGraph';
import { FaRobot } from 'react-icons/fa';
import AddVolt from '@/components/energy/modal/addVolt';
import EditVolt from '@/components/energy/modal/editVolt';

const EnergyVoltage = () => {
  const [isGenerateOpen, setGenerateOpen] = useState(false);
  const toggleGenerate =() => {
      setGenerateOpen(!isGenerateOpen);
  };


  return (
    <div className='lg:pl-10 m-5 lg:pr-10 '>
        <div className='mb-5'>
            <div className='text-2xl text-black font-bold'>
            VOLTAGE
            </div>
            <div className='text-xs text-gray-500 font-semibold'>
            VOLTAGE MANAGEMENT
            </div>
        </div> 
        <div className='h-auto overflow-auto justify-center grid lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-2 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 gap-4'>
            <div className=' col-span-2 cursor-pointer items-center  justify-center text-center'>
              <div className='shadow hover:shadow-xl bg-gradient-to-r from-yellow-100  to-gray-200 rounded-lg justify-between p-3 '>
                  <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                    <AddVolt/>
                  </div>
              </div>
            </div>
            <div  className='hover:shadow-xl col-span-2 cursor-pointer items-center  justify-center text-center'>
              <div className='shadow bg-gradient-to-r from-sky-100  to-gray-200 rounded-lg justify-between p-3 '>
                  <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                  <div className='flex justify-between items-center'>
                      <FiActivity className='m-1 h-5 w-5' />
                      <div className='m-1'>GRAPHS</div>
                  </div>
                  </div>
              </div>
            </div>
            <div  className='hover:shadow-xl col-span-2 cursor-pointer items-center  justify-center text-center'>
              <div className='shadow bg-gradient-to-r from-green-100  to-gray-200 rounded-lg justify-between p-3 '>
                  <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                  <div className='flex justify-between items-center'>
                      <FaRobot className='m-1 h-5 w-5' />
                      <div className='m-1'>AI</div>
                  </div>
                  </div>
              </div>
            </div>

        </div>
        <div className='m-3 mt-4 lg:grid md:grid sm:flex grid-cols-6 gap-4'>
            <div className='m-1 grid text-gray-600 rounded-md col-span-6'>
                <div className='p-2 m-1 overflow-auto'>
                    <div className='m-2 items-center'>
                        <p className='text-md  font-bold'>TABLE</p>
                        <p className='text-sm text-gray-400'>Generate button will help you to generate graph for selected Client.</p>
                    </div>
                    <div className='mt-5 h-60 overflow-auto rounded-lg w-full mx-auto text-sm font-semibold m-2 grid-cols-subgrid lg:col-span-3 md:col-span-2 sm:col-span-2'>
                        <table  className='text-center container table-auto bg-white p-4'>
                            <thead className=' bg-gradient-to-r rounded-md from-green-300 via-blue-100 to-gray-200'>
                              <tr className='*:p-4 justify-between'>
                                <th>CLIENT NAME</th>
                                <th>SUPPLIER</th>
                                <th>VOLTAGE</th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody className=''>
                              <tr className='*:p-4 justify-between'>
                                  <td>Client1 Sdn. Bhd</td>
                                  <td>Supplier1</td>
                                  <td>Low</td>
                                  <td className='*:m-1 flex justify-center text-gray-700'>
                                      <button onClick={toggleGenerate} className='p-2 flex text-center justify-between rounded-md bg-gradient-to-tr from-blue-200 to-gray-200 hover:bg-gradient-to-tr hover:from-green-200 hover:to-gray-200'>
                                          Generate
                                          <MdAutoGraph className='m-1'/>
                                      </button>
                                      <EditVolt/> 
                                  </td>
                                </tr>
                                <tr className='*:p-4 justify-between'>
                                  <td>Client1 Sdn. Bhd</td>
                                  <td>Supplier1</td>
                                  <td>High</td>
                                  <td className='*:m-1 flex justify-center text-gray-700'>
                                      <button onClick={toggleGenerate} className='p-2 flex text-center justify-between rounded-md bg-gradient-to-tr from-blue-200 to-gray-200 hover:bg-gradient-to-tr hover:from-green-200 hover:to-gray-200'>
                                          Generate
                                          <MdAutoGraph className='m-1'/>
                                      </button>
                                      <EditVolt/> 
                                  </td>
                                </tr>
                                <tr className='*:p-4 justify-between'>
                                  <td>Client1 Sdn. Bhd</td>
                                  <td>Supplier1</td>
                                  <td>High</td>
                                  <td className='*:m-1 flex justify-center text-gray-700'>
                                      <button onClick={toggleGenerate} className='p-2 flex text-center justify-between rounded-md bg-gradient-to-tr from-blue-200 to-gray-200 hover:bg-gradient-to-tr hover:from-green-200 hover:to-gray-200'>
                                          Generate
                                          <MdAutoGraph className='m-1'/>
                                      </button>
                                      <EditVolt/> 
                                  </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={` ${isGenerateOpen ? 'm-1 grid  rounded-md col-span-6' : 'ml-5 hidden'}`}>
                <VoltGraph/>
            </div>
        </div>
    </div>
  )
}

export default EnergyVoltage
