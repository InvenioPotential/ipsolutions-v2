import React from 'react'
import AddNonRecur from '@/components/tasks/modal/addNonRecur'
import EditNonRecur from '@/components/tasks/modal/editNonrecur'
import MiniCalendar from '@/components/dateCalendar/miniCalendar'
import AssignTask from '@/components/tasks/assignTask'
import { Suspense } from "react";
import Loading from "@/components/loading";
import { item } from "@/components/types";
import { getTasks } from "@/app/utils/taskData/page";

async function TaskNonRecur() {
  const tasks: item[] = await getTasks();
  console.log(tasks)
  return (
      <div className='lg:pl-10 m-5 lg:pr-10'>
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
        <div className=' min-h-screen overflow-auto rounded-md text-sm text-gray-500'>
          <div className='mx-auto overflow-auto lg:h-auto rounded-md p-2 sm:m-1 md:m-1 m-5'>
            <div className='grid grid-rows-1 lg:grid-cols-4 gap-4 md:grid-cols-1 sm:grid-cols-1'>
              <div className='overflow-auto p-2 bg-white rounded-md grid-cols-subgrid lg:col-span-3 md:col-span-2 sm:col-span-2 row-span-2'>
                <div className='overflow-auto w-auto rounded-md  font-semibold p-3 m-2 text-center justify-between flex'>
                  <div className=''>
                    <h6 className='text-gray-900'>SITE:</h6>
                    <div>
                      <select>
                        <option value='all'>All</option>
                        <option>HQ</option>
                        <option>PCR</option>
                        <option>SVC</option>
                        <option>PR8</option>
                      </select>
                    </div>
                  </div>
                  <div className=''>
                    <h6 className='text-gray-900 '>STATUS: </h6>
                    <div>
                      <select>
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
                    <table  className='overflow-auto container table-auto max-w-screen bg-gradient-to-r from-green-300 via-blue-100 to-gray-200 rounded-md p-4'>
                        <thead className='text-gray-700 '>
                            <tr className='*:p-4 justify-between'>
                                <th>TASK</th>
                                <th>CATEGORY</th>
                                <th>TYPE</th>
                                <th>DUE</th>
                                <th>STATUS</th>
                                <th>EDIT</th>
                            </tr>
                        </thead>
                        {" "}
                        <Suspense fallback={<Loading />}>
                          <tbody className='bg-gray-100 overflow-auto'>
                            {tasks?.map((task, index) => (
                              <tr key={index} className='*:p-4 justify-between'>
                                  <td>{task.task}</td>{" "}
                                  <td>{task.category}</td>{" "}
                                  <td>{task.type}</td>{" "}
                                  <td>{new Date(task.duedate).toLocaleDateString()}</td>{" "}
                                  <td>{task.stage}</td>{" "}
                                  <td><EditNonRecur/></td>
                              </tr>
                            ))}
                          </tbody>{" "}
                        </Suspense>
                      </table>
                  </div>
                </div>              
                <div className='hover:shadow p-2 grid rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1 bg-white'>
                  <AssignTask/>
                </div>
                <div className='hover:shadow p-2 rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1 bg-white'>
                    <MiniCalendar />
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}


export default TaskNonRecur
