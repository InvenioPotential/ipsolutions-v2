"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { MdDashboard, MdDisabledByDefault } from 'react-icons/md';
import { FaCartPlus, FaTasks, FaTools } from 'react-icons/fa';
import { GrHostMaintenance, GrSchedulePlay } from 'react-icons/gr';
import { RiCommunityFill, RiMoneyDollarBoxFill } from 'react-icons/ri';
import { SiGoogleforms } from 'react-icons/si';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import { IoStatsChart } from 'react-icons/io5';

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
    <aside className="relative float-left left-0 w-64">
      <div className='h-screen my-auto bg-gray-200 rounded-md overflow-auto text-white text-left '>
        <ul className=' text-sm font-semibold p-2 text-gray-700 overflow-auto'>
            <li className="m-1" >
              <Link href="/dashboard" type='button' className="items-center rounded-md focus:bg-green-300 p-3 hover:bg-gray-100 flex focus:text-black">
                <MdDashboard className='w-4 h-4 m2'/>
                <div className='ml-2 text-center'>
                  DASHBOARD
                </div>
                </Link>
            </li>
            <li className="m-1 focus:bg-gray-100">
              <div className="items-center ">
                <Link href="/modules/task/taskDashboard" onClick={toggleTask} type='button' className="justify-between items-center rounded-md focus:bg-green-300 p-3 hover:bg-gray-100 flex focus:text-black">
                  <div className='flex text-center'>
                    <FaTasks className='w-4 h-4 m2'/>
                    <div className='ml-2'>TASK MANAGEMENT</div>
                  </div>
                <button type='button' className='hover:text-gray-500'>
                  <IoIosArrowDown  className='m-1' /> 
                </button>
                </Link>
              </div>
              <div>
                <ul className={` ${isTaskOpen ? 'justify-between' : 'ml-5 hidden'}`} >
                    <li className='text-xs ml-2' >
                      <Link href="/modules/task/taskRecurring" type='button' className="items-center rounded-md focus:bg-green-300 p-2 hover:bg-gray-100 flex focus:text-black">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          RECURRING
                        </div>
                      </Link>
                    </li>
                    <li className='text-xs ml-2' >
                      <Link href="/modules/task/taskNonRecur" type='button' className="items-center rounded-md focus:bg-green-300 p-2 hover:bg-gray-100 flex focus:text-black">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          NON-RECURRING
                        </div>
                      </Link>
                    </li>
                    <li className='text-xs ml-2' >
                      <Link href="/modules/task/report" type='button' className="items-center rounded-md focus:bg-green-300 p-2 hover:bg-gray-100 flex focus:text-black">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          REPORT
                        </div>
                      </Link>
                    </li>
                </ul>  
              </div>
          </li>
          <li className="m-1">
              <div className='iyems-center'>
              <Link href="/modules/energy/energyDashboard" onClick={toggleEnergy} type='button' className="justify-between items-center rounded-md focus:bg-green-300 p-3 hover:bg-gray-100 flex focus:text-black">
                <div className='flex text-center'>
                  <Image className='w-4 h-4 m2'
                    src="/images/energy.png"
                    alt="IP solutions logo" 
                    width={130}
                    height={30}
                  /> 
                  <div className='ml-2 flex'>
                    ENERGY
                  </div>
                </div>
                <button type='button' className='hover:text-gray-300'>
                  <IoIosArrowDown  className='m-1'  /> 
                </button>
              </Link> 
              </div>
              <div>
                <ul className={` ${isEnergyOpen ? 'justify-between' : 'ml-5 hidden'}`} >
                    <li className='text-xs ml-2' >
                      <Link href="/modules/energy/energySpade" type='button' className="items-center rounded-md focus:bg-green-300 p-2 hover:bg-gray-100 flex focus:text-black">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          SPADE
                        </div>
                      </Link>
                    </li>
                    <li className='text-xs ml-2' >
                      <Link href="/modules/energy/energyElectricity" type='button' className="items-center rounded-md focus:bg-green-300 p-2 hover:bg-gray-100 flex focus:text-black">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          ELECTRICITY
                        </div>
                      </Link>
                    </li>
                    <li className='text-xs ml-2' >
                      <Link href="/modules/energy/energyVoltage" type='button' className="items-center rounded-md focus:bg-green-300 p-2 hover:bg-gray-100 flex focus:text-black">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          VOLTAGE
                        </div>
                      </Link>
                    </li>
                    <li className='text-xs ml-2' >
                      <Link href="/modules/energy/energyLoads" type='button' className="items-center rounded-md focus:bg-green-300 p-2 hover:bg-gray-100 flex focus:text-black">
                        <GrSchedulePlay className='w-4 h-4 m2'/>
                        <div className='ml-2 text-center'>
                          LOADS
                        </div>
                      </Link>
                    </li>
                </ul>  
              </div>
          </li>
          <li className="m-1">
            <Link href="" type='button' className="items-center rounded-md focus:bg-green-300 p-3 hover:bg-gray-100 flex focus:text-black">
              <SiGoogleforms className='w-4 h-4 m2'/>
              <div className='ml-2 text-center'>
                DIGITAL FORMS
              </div>
              </Link>
          </li>
          <li className="m-1">
            <Link href="" type='button' className="items-center rounded-md focus:bg-green-300 p-3 hover:bg-gray-100 flex focus:text-black">
              <IoStatsChart className='w-4 h-4 m2'/>
              <div className='ml-2 text-center'>
                STATISTICS
              </div>
              </Link>
          </li>
          <li className="m-1">
            <Link href="" type='button' className="items-center rounded-md focus:bg-green-300 p-3 hover:bg-gray-100 flex focus:text-black">
              <GrHostMaintenance className='w-4 h-4 m2'/>
              <div className='ml-2 text-center'>
                MAINTENANCE
              </div>
              </Link>
          </li>
          <li className="m-1">
            <Link href="" type='button' className="items-center rounded-md focus:bg-green-300 p-3 hover:bg-gray-100 flex focus:text-black">
              <RiCommunityFill className='w-4 h-4 m2'/>
              <div className='ml-2 text-center'>
                COMMUNITY
              </div>
              </Link>
          </li>
          <li className="m-1">
            <Link href="" type='button' className="items-center rounded-md focus:bg-green-300 p-3 hover:bg-gray-100 flex focus:text-black">
              <FaTools className='w-4 h-4 m2'/>
              <div className='ml-2 text-center'>
                OPERATIONS
              </div>
              </Link>
          </li>
          <li className="m-1">
            <Link href="" type='button' className="items-center rounded-md focus:bg-green-300 p-3 hover:bg-gray-100 flex focus:text-black">
              <RiMoneyDollarBoxFill className='w-4 h-4 m2'/>
              <div className='ml-2 text-center'>
                FINANCE
              </div>
              </Link>
          </li>
          <li className="m-1">
            <Link href="" type='button' className="items-center rounded-md focus:bg-green-300 p-3 hover:bg-gray-100 flex focus:text-black">
              <MdDisabledByDefault className='w-4 h-4 m2'/>
              <div className='ml-2 text-center'>
                DEFECT
              </div>
              </Link>
          </li>
          <li className="m-1">
            <Link href="" type='button' className="items-center rounded-md focus:bg-green-300 p-3 hover:bg-gray-100 flex focus:text-black">
              <FaCartPlus className='w-4 h-4 m2'/>
              <div className='ml-2 text-center'>
                PROCUREMENT
              </div>
              </Link>
          </li>
        </ul> 
      </div>   
      
  </aside>
  )
}

export default SideNavBar;

