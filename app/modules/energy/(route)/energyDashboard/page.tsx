"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FiActivity } from 'react-icons/fi'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { MdAssignmentLate, MdUpcoming } from 'react-icons/md'

const EnergyDashboard = () => {

  return (
    <div className='lg:pl-10 m-5 lg:pr-10'>
        <div className=' mb-5'>
            <div className='text-2xl text-black font-bold'>
            ENERGY
            </div>
            <div className='text-xs text-gray-500 font-semibold'>
            ENERGY MANAGEMENT'S OVERVIEW
            </div>
        </div> 
        <div className='h-auto overflow-auto justify-center grid lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4'>
            <Link href={'/modules/energy/energySpade'} className=' cursor-pointer items-center  justify-center text-center'>
            <div className='shadow hover:shadow-lg bg-gradient-to-r from-yellow-100  to-gray-200 rounded-lg justify-between p-3 '>
                <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                <div className='flex justify-between items-center'>
                    <MdUpcoming className='m-1 h-5 w-5' />
                    <div className='m-1 '>SPADE</div>
                </div>
                </div>
                <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                3
                </div>
            </div>
            </Link>
            <div  className='cursor-pointer items-center  justify-center text-center'>
                <div className='shadow hover:shadow-lg bg-gradient-to-r from-sky-100  to-gray-200 rounded-lg justify-between p-3 '>
                    <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                    <div className='flex justify-between items-center'>
                        <FiActivity className='m-1 h-5 w-5' />
                        <div className='m-1'>ELECTRICITY</div>
                    </div>
                    </div>
                    <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                    3
                    </div>
                </div>
                </div>
                <div className=' cursor-pointer items-center  justify-center text-center'>
                <div  className='shadow hover:shadow-lg bg-gradient-to-r from-red-100  to-gray-200 rounded-lg justify-between p-3 '>
                    <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                    <div className='flex justify-between items-center'>
                        <MdAssignmentLate className='m-1 h-5 w-5' />
                        <div className='m-1'>VOLTAGE</div>
                    </div>
                    </div>
                    <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                    3
                    </div>
                </div>
                </div>
                <div className=' cursor-pointer items-center  justify-center text-center'>
                <div className='shadow hover:shadow-lg bg-gradient-to-r from-green-100  to-gray-200 rounded-lg justify-between p-3 '>
                    <div className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                    <div className='flex justify-between items-center'>
                        <IoCheckmarkCircle className='m-1 h-5 w-5' />
                        <div className='m-1'>LOADS</div>
                    </div>
                    </div>
                    <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                    3
                    </div>
                </div>
            </div>
        </div>
        
        <div className='m-3 mt-4 lg:grid md:grid sm:flex grid-cols-4 grid-rows-1 gap-4'>
            <div className='m-1 grid  rounded-md col-span-4'>
                <div className='p-2 m-1'>
                    <div className='m-2 text-md text-gray-600 font-bold items-center justify-between flex'>
                        OVERVIEW
                    </div>
                    <div className='pt-5 overflow-auto'>
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
        </div>
    </div>
  )
}

export default EnergyDashboard
