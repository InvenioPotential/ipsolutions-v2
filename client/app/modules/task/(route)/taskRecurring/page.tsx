"use client"
import Topnav from '@/components/topnav'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import AddRecur from '@/components/taskManagement/addRecur'
import Fullcalendar from '@/components/fullcalendar'


const TaskRecur = () => {
  return (
    <div className=''>
        <Topnav />
        <div className='m-3'>
          <div className='lg:pl-10 lg:pr-10 md:pl-5 sm:pl-5 md:pr-5 sm:pr-5 lg:m-5 md:m-10 sm:m-10'>
            <div className='border-b-1 mb-5 flex justify-between'>
              <div className=''>
                <div className='text-2xl text-black font-bold'>
                  RECURRING
                </div>
                <div className='text-xs text-gray-500 font-semibold'>
                  TASK MANAGEMENT
                </div>
              </div>
              
              
            </div>
            <div className=' min-h-screen rounded-md p-3 text-gray-500'>
              <div className='mx-auto overflow-auto lg:h-auto rounded-md p-2 sm:m-1 md:m-1 m-5'>
                <div className='overflow-auto grid grid-rows-2 lg:grid-cols-4 gap-4 md:grid-cols-1 sm:grid-cols-1'>
                  <div className='overflow-auto bg-white rounded-md m-3 grid-cols-subgrid lg:col-span-3 md:col-span-2 sm:col-span-2 row-span-2'>
                  <div className=' w-auto rounded-md text-md font-semibold p-3 m-2 text-center justify-between flex'>
                  <div className=''>
                    <h6 className='text-gray-900'>SITE:</h6>
                    <div>
                      <select className='rounded-md'>
                        <option value='all'>All</option>
                        <option>HQ</option>
                        <option>PCR</option>
                        <option>SVC</option>
                        <option>PR8</option>
                      </select>
                    </div>
                  </div>
                  <div className=''>
                    <h6 className='text-gray-900 '>TASK TYPE: </h6>
                    <div>
                      <select className='rounded-md'>
                        <option>All</option>
                        <option>On-going</option>
                        <option>Completed</option>
                        <option>Late</option>
                      </select>
                    </div>
                  </div>
                  {/* <div>
                   <button className='bg-green-200 p-2 rounded-md'>FILTER</button> 
                  </div> */}
                  <AddRecur/>
                  
                  </div>
                    <Fullcalendar/>
                  </div>
                  <div className='p-2 grid rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-2 bg-white'>
                    <div className='p-2 m-1'>
                      <div className='p-1 text-sm border-b-2 font-bold items-center justify-between flex'>
                        TASK ASSIGNED
                        <FaPlus />
                      </div>
                      <div className='p-1 m-2 overflow-auto'>
                        <ul className='mt-1 text-sm'>
                          <li className='m-2 p-3 border-2 rounded-md'>
                            <div className="inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900"></div>
                            <div className='justify-center'>
                              <div className='text-sm font-semibold '>You have been assigned to a new task from 
                              <span className=' font-bold'>"username"</span></div>
                              <div className='text-xs font-semibold'>Type: <span className=''>Recurring</span></div>
                            </div>
                            <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                          </li>
                          <li className='m-2 p-3 border-2 rounded-md'>
                            <div className="inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900"></div>
                            <div className='justify-center'>
                              <div className='text-sm font-semibold '>You have been assigned to a new task from 
                              <span className=' font-bold'>"username"</span></div>
                              <div className='text-xs font-semibold'>Type: <span className=''>Recurring</span></div>
                            </div>
                            <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                          </li>
                          <li className='m-2 p-3 border-2 rounded-md'>
                            <div className="inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900"></div>
                            <div className='justify-center'>
                              <div className='text-sm font-semibold '>You have been assigned to a new task from 
                              <span className=' font-bold'>"username"</span></div>
                              <div className='text-xs font-semibold'>Type: <span className=''>Recurring</span></div>
                            </div>
                            <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                          </li>
                          <li className='m-2 p-3 border-2 rounded-md'>
                            <div className="inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900"></div>
                            <div className='justify-center'>
                              <div className='text-sm font-semibold '>You have been assigned to a new task from 
                              <span className=' font-bold'>"username"</span></div>
                              <div className='text-xs font-semibold'>Type: <span className=''>Recurring</span></div>
                            </div>
                            <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                          </li>
                          <li className='m-2 p-3 border-2 rounded-md'>
                            <div className="inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900"></div>
                            <div className='justify-center'>
                              <div className='text-sm font-semibold '>You have been assigned to a new task from 
                              <span className=' font-bold'>"username"</span></div>
                              <div className='text-xs font-semibold'>Type: <span className=''>Recurring</span></div>
                            </div>
                            <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                          </li>
                        </ul>
                        
                      </div>
                    </div>
                  </div>
                  {/* <div className='p-2 rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1 bg-white'>
                    <div className=''>
                      {/* <Calendar onChange={onChange} value={value} />
                    </div>
                  </div> */}
                </div> 
              </div>
            </div>      
          </div>
               
        </div>
    </div>
  )
}

export default TaskRecur