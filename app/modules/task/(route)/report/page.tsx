"use client"
import React, { useState } from 'react'
import MiniCalendar from '@/components/dateCalendar/miniCalendar'
import AssignTask from "@/components/tasks/assignTask";
import DateRangeReport from "@/components/dateCalendar/dateRangeReport";


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const TaskReport = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
          <div className='lg:pl-10 m-5 lg:pr-10'>
            <div className='border-b-1 mb-5 flex justify-between'>
              <div className=''>
                <div className='text-2xl text-black font-bold'>
                  REPORT
                </div>
                <div className='text-xs text-gray-500 font-semibold'>
                  TASK MANAGEMENT
                </div>
              </div>
            </div>
            <div className=' min-h-screen rounded-md  text-gray-500'>
              <div className='mx-auto overflow-auto lg:h-auto rounded-md p-2 sm:m-1 md:m-1 m-5'>
                <div className='overflow-auto grid grid-rows-1 lg:grid-cols-4 gap-4 md:grid-cols-1 sm:grid-cols-1'>
                  <div className=' bg-white rounded-md grid-cols-subgrid lg:col-span-3 md:col-span-2 sm:col-span-2 row-span-2'>
                    <div
                        className='*:m-5 w-auto overflow-auto rounded-md text-md font-semibold p-3 m-2 text-center justify-between flex'>
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
                        <h6 className='text-gray-900'>TASK TYPE:</h6>
                        <div>
                          <select className='rounded-md'>
                            <option value='all'>All</option>
                            <option>Recurring</option>
                            <option>Non-Recurring</option>
                          </select>
                        </div>
                      </div>
                      <div className=''>
                        <h6 className='text-gray-900'>CHOOSE DATE:</h6>
                        <div>
                          <DateRangeReport/>
                        </div>
                      </div>
                      <div className=''>
                        <h6 className='text-gray-900 '>STATUS: </h6>
                        <div>
                          <select className='rounded-md'>
                            <option>All</option>
                            <option>On-going</option>
                            <option>Completed</option>
                            <option>Late</option>
                          </select>
                        </div>
                      </div>
                      <div className='m-2 '>
                        <button
                            className='p-2 rounded-lg hover:bg-green-400 bg-green-300 text-black'>PDF
                        </button>
                      </div>
                    </div>
                    <div
                        className='overflow-auto text-gray-200 mx-auto rounded-md text-md font-semibold p-3 m-2 text-center grid-cols-subgrid lg:col-span-3 md:col-span-2 sm:col-span-2'>
                      <div>Preview Generated Report Here.</div>
                    </div>
                  </div>
                  <div
                      className='hover:shadow p-2 grid rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1 bg-white'>
                    <AssignTask />
                  </div>
                  <div className='hover:shadow p-2 rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1 bg-white'>
                    <div className='overflow-auto'>
                     <MiniCalendar />
                    </div>
                  </div>
                </div> 
              </div>
            </div>      
          </div>
  )
}

export default TaskReport