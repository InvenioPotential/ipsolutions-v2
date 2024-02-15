"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { MdDashboard, MdDisabledByDefault } from 'react-icons/md';
import { FaCartPlus, FaTasks, FaTools } from 'react-icons/fa';
import { GrHostMaintenance, GrSchedulePlay } from 'react-icons/gr';
import { RiCommunityFill, RiMoneyDollarBoxFill } from 'react-icons/ri';
import { SiGoogleforms } from 'react-icons/si';
import { IoIosArrowDown } from 'react-icons/io';

const SideNavBar = () => {
      // open mini task list
      const [isTaskOpen, setTaskOpen] = useState(false);
      const toggleTask=() => {
          setTaskOpen(!isTaskOpen);
  
      };

      const [isEnergyOpen, setEnergyOpen] = useState(false);
      const toggleEnergy=() => {
          setEnergyOpen(!isEnergyOpen);
  
      };


  return (
    <aside className="sticky my-auto bg-sky-950 text-white text-left float-left left-0">
      <div className="h-screen">
        {/* <h2 className="text-2xl font-bold mb-4">Dashboard</h2> */}
        <nav className='flex'>
          <div className=''>
            <ul className='text-sm font-semibold p-5 overflow-auto'>
            <li className="m-3">
              <Link href="/dashboard" className="items-center flex hover:text-gray-300">
                <MdDashboard className='w-4 h-4 m2'/>
                <div className='ml-2 text-center'>
                  DASHBOARD
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <div className='justify-between flex'>
               <Link href="/modules/task/taskDashboard" className="items-center flex hover:text-gray-300">
                <FaTasks className='w-4 h-4 m2'/>
                <div className='ml-2 flex text-center'>
                  TASK MANAGEMENT
                </div>
                </Link>
                <button type='button' onClick={toggleTask} className='hover:text-gray-300'>
                  <IoIosArrowDown  className='m-1'  /> 
                </button>
              </div>
              
                <ul className={` ${isTaskOpen ? 'justify-between' : 'ml-5 hidden'}`} >
                    <li className='text-xs m-3 mt-5' >
                      <Link href="/modules/task/taskRecurring" className="items-center flex hover:text-gray-300">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          RECURRING
                        </div>
                      </Link>
                    </li>
                    <li className='text-xs m-3 mt-3' >
                      <Link href="/modules/task/taskNonRecur" className="items-center flex hover:text-gray-300">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          NON-RECURRING
                        </div>
                      </Link>
                    </li>
                    <li className='text-xs m-3 mt-3' >
                      <Link href="/modules/task/report" className="items-center flex hover:text-gray-300">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          REPORT
                        </div>
                      </Link>
                    </li>
                </ul>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center flex hover:text-gray-300">
                <GrHostMaintenance className='w-4 h-4 m2'/>
                <div className='ml-2 text-center'>
                  MAINTENANCE
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center flex hover:text-gray-300">
                <RiCommunityFill className='w-4 h-4 m2'/>
                <div className='ml-2 text-center'>
                  COMMUNITY
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center flex hover:text-gray-300">
                <FaTools className='w-4 h-4 m2'/>
                <div className='ml-2 text-center'>
                  OPERATIONS
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center flex hover:text-gray-300">
                <RiMoneyDollarBoxFill className='w-4 h-4 m2'/>
                <div className='ml-2 text-center'>
                  FINANCE
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center flex hover:text-gray-300">
                <SiGoogleforms className='w-4 h-4 m2'/>
                <div className='ml-2 text-center'>
                  DIGITAL FORMS
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center flex hover:text-gray-300">
                <MdDisabledByDefault className='w-4 h-4 m2'/>
                <div className='ml-2 text-center'>
                  DEFECT
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center flex hover:text-gray-300">
                <FaCartPlus className='w-4 h-4 m2'/>
                <div className='ml-2 text-center'>
                  PROCUREMENT
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <div className='justify-between flex'>
               <Link href="" onClick={toggleEnergy} className="items-center flex hover:text-gray-300">
                  <img className='w-4 h-4 m2'
                    src="/images/energy.png"
                    alt="IP solutions logo" 
                    width={130}
                    height={30}
                  /> 
                <div className='ml-2 flex text-center'>
                  ENERGY
                </div>
                </Link> 
                <button type='button' onClick={toggleEnergy} className='hover:text-gray-300'>
                  <IoIosArrowDown className='m-1'/>
                  </button>
              </div>
              
                <ul className={` ${isEnergyOpen ? 'justify-between' : 'ml-5 hidden'}`} >
                    <li className='text-xs m-3 mt-5' >
                      <Link href="/" className="items-center flex hover:text-gray-300">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          SPADE
                        </div>
                      </Link>
                    </li>
                    <li className='text-xs m-3 mt-3' >
                      <Link href="/" className="items-center flex hover:text-gray-300">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          ELECTRICITY
                        </div>
                      </Link>
                    </li>
                    <li className='text-xs m-3 mt-3' >
                      <Link href="/" className="items-center flex hover:text-gray-300">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          VOLTAGE
                        </div>
                      </Link>
                    </li>
                    <li className='text-xs m-3 mt-3' >
                      <Link href="/" className="items-center flex hover:text-gray-300">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          LOADS
                        </div>
                      </Link>
                    </li>
                </ul>
            </li>

          </ul>
          </div>
          
        </nav> 
      </div>
      
    </aside>
  )
}

export default SideNavBar;