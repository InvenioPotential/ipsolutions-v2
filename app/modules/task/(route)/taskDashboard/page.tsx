"use client"
import Topnav from '@/components/topnav'
import React from 'react'
import { FiActivity } from 'react-icons/fi'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { MdAssignmentLate, MdUpcoming } from 'react-icons/md'

const TaskManagement = () => {
return (
<div className=''>
        <Topnav />
        <div className='m-5'>
          <div className='lg:pl-10 lg:pr-10'>
            <div className=' mb-5'>
              <div className='text-2xl text-black font-bold'>
                DASHBOARD
              </div>
              <div className='text-xs text-gray-500 font-semibold'>
                TASK MANAGEMENT
              </div>
            </div> 
            <div className='m-3 h-auto overflow-auto justify-center grid lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4'>
              <div className='items-center  justify-center text-center'>
                <div className='bg-gradient-to-r from-yellow-100  to-gray-200 rounded-lg justify-between p-3 '>
                  <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                    <div className='flex justify-between items-center'>
                      <MdUpcoming className='m-1 h-5 w-5' />
                      <div className='m-1 '>UPCOMING</div>
                    </div>
                  </div>
                  <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                    3
                  </div>
                </div>
              </div>
              <div className='items-center  justify-center text-center'>
                <div className='bg-gradient-to-r from-sky-100  to-gray-200 rounded-lg justify-between p-3 '>
                  <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                    <div className='flex justify-between items-center'>
                      <FiActivity className='m-1 h-5 w-5' />
                      <div className='m-1'>ACTIVE</div>
                    </div>
                  </div>
                  <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                    3
                  </div>
                </div>
              </div>
              <div className='items-center  justify-center text-center'>
                <div className='bg-gradient-to-r from-red-100  to-gray-200 rounded-lg justify-between p-3 '>
                  <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                    <div className='flex justify-between items-center'>
                      <MdAssignmentLate className='m-1 h-5 w-5' />
                      <div className='m-1'>LATE</div>
                    </div>
                  </div>
                  <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                    3
                  </div>
                </div>
              </div>
              <div className='items-center  justify-center text-center'>
                <div className='bg-gradient-to-r from-green-100  to-gray-200 rounded-lg justify-between p-3 '>
                  <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                    <div className='flex justify-between items-center'>
                      <IoCheckmarkCircle className='m-1 h-5 w-5' />
                      <div className='m-1'>COMPLETED</div>
                    </div>
                  </div>
                  <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                    3
                  </div>
                </div>
              </div>
            </div>
            <div className='text-gray-600 m-3 p-3 gap-2 rounded-md bg-white grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-rows-2'>
              <div className='col-span-4 text-sm font-semibold'>
                TASK MANAGEMENT
              </div>
            </div>


              
            <div className='mt-4 grid grid-cols-4 grid-rows-2 gap-4'>
                <div className='grid border-2 rounded-md lg:row-span-2 md:row-span-1 sm:row-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2'>
                  <div className='p-2 m-1'>
                    <div className='text-md text-gray-600 border-b-2 font-bold items-center justify-between flex'>
                      OVERVIEW
                    </div>
                    <div className='pt-5 '>
                      <ul className='mt-1 md:h-64 lg:h-96 sm:h-64 overflow-y-auto'>
                        <li className='m-2 p-2 border-2 rounded-md'>
                          <div className='font-semibold text-md'>Category</div>
                          <div className='text-xs font-semibold'>Title</div>
                          <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                        </li>
                        <li className='m-2 p-2 border-2 rounded-md'>
                          <div className='font-semibold text-md'>Category</div>
                          <div className='text-xs font-semibold'>Title</div>
                          <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                        </li>
                        <li className='m-2 p-2 border-2 rounded-md'>
                          <div className='font-semibold text-md'>Category</div>
                          <div className='text-xs font-semibold'>Title</div>
                          <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                        </li>
                        <li className='m-2 p-2 border-2 rounded-md'>
                          <div className='font-semibold text-md'>Category</div>
                          <div className='text-xs font-semibold'>Title</div>
                          <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                        </li> 
                        <li className='m-2 p-2 border-2 rounded-md'>
                          <div className='font-semibold text-md'>Category</div>
                          <div className='text-xs font-semibold'>Title</div>
                          <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                        </li> 
                        <li className='m-2 p-2 border-2 rounded-md'>
                          <div className='font-semibold text-md'>Category</div>
                          <div className='text-xs font-semibold'>Title</div>
                          <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                        </li> 
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='grid border-2 rounded-md lg:row-span-2 md:row-span-1 sm:row-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2'>
                  <div className='p-2 m-1'>
                    <div className='text-md text-gray-600 border-b-2 font-bold items-center justify-between flex'>
                      CALENDAR
                    </div>
                  </div>
                </div>
            </div>
           </div>
          </div>
    </div>
)}

export default TaskManagement