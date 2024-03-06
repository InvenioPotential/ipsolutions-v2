import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AssignTask = () => {
  return (
    <div className='overflow-auto p-2 m-1'>
        <div className='p-1 text-sm border-b-2 font-bold items-center justify-between flex'>
        TASK ASSIGNED
        {/*<FaPlus />*/}
        </div>
        <div className='p-1 m-2 overflow-auto'>
            <ul className='mt-1 text-sm'>
                <li className='overflow-auto m-2 p-3 border-2 rounded-md'>
                    <div className="inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900"></div>
                    <div className='justify-center'>
                        <div className='text-sm font-semibold '>You have been assigned to a new task from 
                        <span className=' font-bold'>&quot;username&quot;</span></div>
                        <div className='text-xs font-semibold'>Type: <span className=''>Recurring</span></div>
                    </div>
                    <div className='mt-2 text-xs text-blue-500 hover:underline'>View Details</div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default AssignTask
