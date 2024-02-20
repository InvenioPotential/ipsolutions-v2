"use client"
import React from 'react'
import AddNonRecur from '@/components/tasks/modal/addNonRecur'
import EditNonRecur from '@/components/tasks/modal/editNonrecur'
import MiniCalendar from '@/components/dateCalendar/miniCalendar'
import AssignTask from '@/components/tasks/assignTask'


const TaskRecur = () => {
  return (
    <div className='m-3'>
      <div className='lg:pl-10 lg:pr-10 md:pl-5 sm:pl-5 md:pr-5 sm:pr-5 lg:m-5 md:m-10 sm:m-10'>
        <div className='border-b-1 mb-5 flex justify-between'>
          <div className=''>
            <div className='text-2xl text-black font-bold'>
              NON-RECURRING
            </div>
            <div className='text-xs text-gray-500 font-semibold'>
              TASK MANAGEMENT
            </div>
          </div>
        </div>
        <div className=' min-h-screen rounded-md p-3 text-gray-500'>
          <div className='mx-auto overflow-auto lg:h-auto rounded-md p-2 sm:m-1 md:m-1 m-5'>
            <div className='grid grid-rows-1 lg:grid-cols-4 gap-4 md:grid-cols-1 sm:grid-cols-1'>
              <div className='overflow-auto p-2 bg-white rounded-md grid-cols-subgrid lg:col-span-3 md:col-span-2 sm:col-span-2 row-span-2'>
                <div className='overflow-auto w-auto rounded-md text-md font-semibold p-3 m-2 text-center justify-between flex'>
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
                    <h6 className='text-gray-900 '>STAGE: </h6>
                    <div>
                      <select className='rounded-md'>
                        <option>All</option>
                        <option>On-going</option>
                        <option>Completed</option>
                        <option>Late</option>
                      </select>
                    </div>
                  </div>
                  <AddNonRecur/>
                  </div>
                  <div className='overflow-auto mx-auto rounded-md text-md font-semibold p-3 m-2 text-center grid-cols-subgrid lg:col-span-3 md:col-span-2 sm:col-span-2'>
                    <table   className='container table-auto max-w-screen bg-gradient-to-r from-green-300 via-blue-100 to-gray-200 rounded-md p-4'>
                        <thead className='text-black '>
                            <tr className='*:p-4 justify-between'>
                                <th>TASK</th>
                                <th>CATEGORY</th>
                                <th>SUB-CATEGORY</th>
                                <th>TYPE</th>
                                <th>DUE</th>
                                <th>STAGE</th>
                                <th>EDIT</th>
                            </tr>
                        </thead>
                        <tbody className='bg-gray-100 overflow-auto'>
                            <tr className='*:p-4 justify-between'>
                                <td>Analysis and Requirements</td>
                                <td>Web-based solutions</td>
                                <td>IP Solutions</td>
                                <td>Planning/Design</td>
                                <td>10/01/2024</td>
                                <td>Completed</td>
                                <td><EditNonRecur/></td>
                            </tr>
                        </tbody>
                      </table>
                  </div>
                </div>              
                <div className='p-2 grid rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1 bg-white'>
                  <AssignTask/>
                </div>
                <div className='p-2 rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1 bg-white'>
                    <MiniCalendar />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default TaskRecur