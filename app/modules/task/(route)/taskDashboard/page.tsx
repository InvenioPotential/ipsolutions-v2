
import React, {Suspense} from 'react'
import { FiActivity } from 'react-icons/fi'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { MdAssignmentLate, MdUpcoming } from 'react-icons/md'
import UpcomingTask from '@/components/tasks/status/upcoming'
import ActiveTask from '@/components/tasks/status/active'
import LateTask from '@/components/tasks/status/late'
import CompleteTask from '@/components/tasks/status/complete'
import MiniCalendar from '@/components/dateCalendar/miniCalendar'
import {Loading} from "@/components/loading";
import TaskList from '@/components/tasks/listing/taskList'


const TaskManagement = async () => {



return (
          <div className='lg:pl-10 m-5 lg:pr-10'>
            <div className=' mb-5'>
              <div className='text-2xl text-black font-bold'>
                DASHBOARD
              </div>
              <div className='text-xs text-gray-500 font-semibold'>
                TASK MANAGEMENT
              </div>
            </div>
            <div
                className='h-auto overflow-auto justify-center grid lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4'>
              <div className=' cursor-pointer items-center  justify-center text-center'>
                  <UpcomingTask/>
              </div>

              <div className=' cursor-pointer items-center  justify-center text-center'>
                  <ActiveTask/>
              </div>

              <div className=' cursor-pointer items-center  justify-center text-center'>
                  <LateTask/>
              </div>

              <div className=' cursor-pointer items-center  justify-center text-center'>
                  <CompleteTask/>
              </div>

            </div>
            <div className='m-3 mt-4 lg:grid md:grid sm:flex grid-cols-4 gap-4'>
              <div className='m-1 grid  rounded-md lg:col-span-3 md:col-span-3 sm:col-span-4 row-span-2'>
                <div className='p-2 m-1'>
                  <div className='mt-2'>
                    <Suspense fallback={<Loading/>} >
                      <TaskList/>
                    </Suspense>
                    </div>
                  </div>
                </div>
                <div className='hover:shadow bg-white m-1 grid rounded-md row-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1'>
                  <div className='p-2 m-1 overflow-auto'>
                    <div className='flex text-md text-gray-600 items-center justify-between'>
                      <MiniCalendar/>
                    </div>
                  </div>
                </div>
            </div>
           </div>
)}

export default TaskManagement
