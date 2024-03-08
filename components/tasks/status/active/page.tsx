"use client"
import React, {useState} from 'react'
import {FiActivity} from "react-icons/fi";

const ActiveTask= () => {

    const [isActiveOpen, setActiveOpen] = useState(false);
    const toggleActive =() => {
        setActiveOpen(!isActiveOpen);
    };
  return (
      <>
          <div onClick={toggleActive}
               className='shadow hover:shadow-lg bg-gradient-to-r from-sky-100  to-gray-200 rounded-lg justify-between p-3 '>
              <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                  <div className='flex justify-between items-center'>
                      <FiActivity className='m-1 h-5 w-5'/>
                      <div className='m-1 '>ACTIVE</div>
                  </div>
              </div>
              <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                  3
              </div>
          </div>
          <div className={` ${isActiveOpen ? 'justify-between overflow-auto' : 'ml-5 hidden'}`}>
    <div className='m-3 h-44 text-gray-600 text-sm'>
        {/* <div>
            <div className='justify-center flex m-2 bg-gradient-to-r text-center from-yellow-100  to-gray-200 w-44 rounded-md'>UPCOMING</div>
        </div> */}
        <div className='text-left text-gray-600 p-3 gap-2  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-rows-2'>
            <div className='col-span-2 bg-gray-100 rounded-md hover:shadow-sm'>
            <div className='p-2'>
                <div className='font-bold text-md'>TITLE</div>
                <div>Due</div>
                <div className='mt-2 hover:underline text-blue-300'>View Details</div>
            </div>
            </div>
            <div className='col-span-2 bg-gray-100 rounded-md hover:shadow-sm'>
            <div className='p-2'>
                <div className='font-bold text-md'>TITLE</div>
                <div>Due</div>
                <div className='mt-2 hover:underline text-blue-300'>View Details</div>
            </div>
            </div>
            <div className='col-span-2 bg-gray-100 rounded-md hover:shadow-sm'>
            <div className='p-2'>
                <div className='font-bold text-md'>TITLE</div>
                <div>Due</div>
                <div className='mt-2 hover:underline text-blue-300'>View Details</div>
            </div>
            </div>
            <div className='col-span-2 bg-gray-100 rounded-md hover:shadow-sm'>
            <div className='p-2'>
                <div className='font-bold text-md'>TITLE</div>
                <div>Due</div>
                <div className='mt-2 hover:underline text-blue-300'>View Details</div>
            </div>
            </div>
            <div className='col-span-2 bg-gray-100 rounded-md hover:shadow-sm'>
            <div className='p-2'>
                <div className='font-bold text-md'>TITLE</div>
                <div>Due</div>
                <div className='mt-2 hover:underline text-blue-300'>View Details</div>
            </div>
            </div>
            
            
        </div>
    </div>
          </div>
      </>
  )
}

export default ActiveTask