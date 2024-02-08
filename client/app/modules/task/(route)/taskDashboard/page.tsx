"use client"
import Topnav from '@/components/topnav'
import React, { useState } from 'react'
import { FiActivity } from 'react-icons/fi'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { MdAssignmentLate, MdUpcoming } from 'react-icons/md'
import UpcomingTask from './(route)/upcoming/page'
import Calendar from 'react-calendar'
import ActiveTask from './(route)/active/page'
import LateTask from './(route)/late/page'
import CompleteTask from './(route)/complete/page'

const TaskManagement = () => {
  const [isUpcomingOpen, setUpcomingOpen] = useState(false);
  const toggleUpcoming =() => {
      setUpcomingOpen(!isUpcomingOpen);
  };

  const [isActiveOpen, setActiveOpen] = useState(false);
  const toggleActive =() => {
      setActiveOpen(!isActiveOpen);
  };

  const [isLateOpen, setLateOpen] = useState(false);
  const toggleLate =() => {
      setLateOpen(!isLateOpen);
  };

  const [isCompleteOpen, setCompleteOpen] = useState(false);
  const toggleComplete =() => {
      setCompleteOpen(!isCompleteOpen);
  };

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
              <div className='shadow hover:shadow-xl cursor-pointer items-center  justify-center text-center'>
                <div onClick={toggleUpcoming} className='bg-gradient-to-r from-yellow-100  to-gray-200 rounded-lg justify-between p-3 '>
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
                <div className={` ${isUpcomingOpen ? 'justify-between overflow-auto' : 'ml-5 hidden'}`}>
                  <UpcomingTask />
                </div>
              </div>
              <div  className='shadow hover:shadow-xl cursor-pointer items-center  justify-center text-center'>
                <div onClick={toggleActive} className='bg-gradient-to-r from-sky-100  to-gray-200 rounded-lg justify-between p-3 '>
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
                <div className={` ${isActiveOpen ? 'justify-between overflow-auto' : 'ml-5 hidden'}`}>
                  <ActiveTask />
                </div>
              </div>
              <div className='shadow hover:shadow-xl cursor-pointer items-center  justify-center text-center'>
                <div  onClick={toggleLate} className='bg-gradient-to-r from-red-100  to-gray-200 rounded-lg justify-between p-3 '>
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
                <div className={` ${isLateOpen ? 'justify-between overflow-auto' : 'ml-5 hidden'}`}>
                  <LateTask />
                </div>
              </div>
              <div className='shadow hover:shadow-xl cursor-pointer items-center  justify-center text-center'>
                <div onClick={toggleComplete} className='bg-gradient-to-r from-green-100  to-gray-200 rounded-lg justify-between p-3 '>
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
                <div className={` ${isCompleteOpen ? 'justify-between overflow-auto' : 'ml-5 hidden'}`}>
                  <CompleteTask />
                </div>
              </div>
            </div>
            {/* <div className='flex text-sm font-semibold m-3 h-auto overflow-auto p-3 rounded-md bg-white'>
              <div className=''>
                TASK MANAGEMENT
              </div>     
            </div> */}
            
            <div className='m-3 mt-4 lg:grid md:grid sm:flex grid-cols-4 grid-rows-1 gap-4'>
                <div className='m-1 grid border-2 rounded-md lg:col-span-3 md:col-span-2 sm:col-span-2'>
                  <div className='p-2 m-1'>
                    <div className='m-2 text-md text-gray-600 font-bold items-center justify-between flex'>
                      OVERVIEW
                    </div>
                    <div className='pt-5 h-64 overflow-auto'>
                      <ul className='grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1  mt-1 overflow-auto'>
                        <li className='m-2 p-2 border-2 rounded-md overflow-auto'>
                          <div className='font-semibold text-md'>Category</div>
                          <div className='text-xs font-semibold'>Title</div>
                          <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                        </li>
                        <li className='m-2 p-2 border-2 rounded-md overflow-auto'>
                          <div className='font-semibold text-md'>Category</div>
                          <div className='text-xs font-semibold'>Title</div>
                          <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                        </li>
                        <li className='m-2 p-2 border-2 rounded-md overflow-auto'>
                          <div className='font-semibold text-md'>Category</div>
                          <div className='text-xs font-semibold'>Title</div>
                          <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                        </li>
                        <li className='m-2 p-2 border-2 rounded-md overflow-auto'>
                          <div className='font-semibold text-md'>Category</div>
                          <div className='text-xs font-semibold'>Title</div>
                          <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                        </li>
                        <li className='m-2 p-2 border-2 rounded-md overflow-auto'>
                          <div className='font-semibold text-md'>Category</div>
                          <div className='text-xs font-semibold'>Title</div>
                          <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                        </li>
                        <li className='m-2 p-2 border-2 rounded-md overflow-auto'>
                          <div className='font-semibold text-md'>Category</div>
                          <div className='text-xs font-semibold'>Title</div>
                          <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                        </li>
                        <li className='m-2 p-2 border-2 rounded-md overflow-auto'>
                          <div className='font-semibold text-md'>Category</div>
                          <div className='text-xs font-semibold'>Title</div>
                          <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                        </li>
                        
                        
                        
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='overflow-auto m-1 grid border-2 rounded-md lg:row-span-1 md:row-span-2 sm:row-span-2 lg:col-span-1 md:col-span-2 sm:col-span-2'>
                  <div className='p-2 m-1'>
                    <div className='block text-md text-gray-600 font-bold items-center justify-between'>
                      <div>CALENDAR</div>
                      <Calendar />
                    </div>
                  </div>
                </div>
            </div>
           </div>
          </div>
    </div>
)}

export default TaskManagement