import MiniCalendar from '@/components/dateCalendar/miniCalendar';
import NoteList from '@/components/notes/todoList';
import { currentUser } from '@clerk/nextjs';
import {Icon} from "@iconify/react";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaCartPlus, FaTasks, FaTools } from 'react-icons/fa';
import { GrHostMaintenance } from 'react-icons/gr';
import { IoStatsChart } from 'react-icons/io5';
import { MdDisabledByDefault } from 'react-icons/md';
import { RiCommunityFill, RiMoneyDollarBoxFill } from 'react-icons/ri';
import { SiGoogleforms } from 'react-icons/si';

const Dashboard = async () => {
  const user = await currentUser();
  return (
    <div className='lg:pl-10 m-5 lg:pr-10 '>
      <div className='mb-5'>
          <div className='flex text-2xl text-black font-bold'>
            <p className='text-green-500'>WELCOME</p><p>, {user?.username}!</p>
          </div>
          <div className='text-xs text-gray-500 font-semibold'>
            WELCOME TO THE MAIN DASHBOARD OF IP SOLUTIONS
          </div>
      </div>
      <div className=' min-h-screen rounded-md text-gray-500'>
        <div className='mx-auto overflow-auto lg:h-auto rounded-md p-2 sm:m-1 md:m-1'>
          <div className=' overflow-auto grid grid-rows-2 lg:grid-cols-4 gap-4 md:grid-cols-1 sm:grid-cols-1'>
            <div className='grid-cols-subgrid lg:col-span-3 md:col-span-2 sm:col-span-2 row-span-2'>
              <ul className=" overflow-auto grid grid-rows-4 lg:grid-cols-2 gap-2 md:grid-cols-1 sm:grid-cols-1">
                <li className='hover:shadow border rounded-md p-1 bg-white'>
                  <Link href='/modules/task/taskDashboard' className='flex w-auto h-24 items-center'>
                    <div className='justify-center items-center m-2 p-1'></div>
                    <div className='block m-2 p-1 hover:text-green-500'>
                      <div className='text-gray-700 text-sm font-bold'>TASK MANAGEMENT</div>
                      <div className='text-xs sm:flex-shrink-0'>Recurring, Non-recurring, Report and etc.</div>
                    </div>
                  </Link>
                </li>
                <li className='hover:shadow border rounded-md p-1 bg-white'>
                  <Link href='/modules/energy/energyDashboard' className='flex w-auto h-24 items-center'>
                    <div className='justify-center items-center m-2 p-1'>
                      {/* <Image className='flex w-7 h-7'
                      src="/images/energyblk.png"
                      alt="IP solutions logo" 
                      width={130}
                      height={30}
                      />  */}
                    </div>
                    {/* <FaTasks className='flex w-7 h-7'/></div> */}
                    <div className='block m-2 p-1 hover:text-green-500'>
                      <div className='text-gray-700 text-sm font-bold'>ENERGY</div>
                      <div className='text-xs sm:flex-shrink-0'>Energy reports and etc.</div>
                    </div>
                  </Link>
                </li>
                <li className='hover:shadow border rounded-md p-1 bg-white'>
                  <Link href='' className='flex w-auto h-24  items-center'>
                    <div className='justify-center items-center m-2 p-1'></div>
                    <div className='block m-2 p-1 hover:text-green-500'>
                      <div className='text-gray-700 text-sm font-bold'>COMMUNITY</div>
                      <div className='text-xs sm:flex-shrink-0'>Community reports and etc.</div>
                    </div>
                  </Link>
                </li>
                <li className='hover:shadow border rounded-md p-1 bg-white'>
                  <Link href='' className='flex w-auto h-24  items-center'>
                    <div className='justify-center items-center m-2 p-1'></div>
                    <div className='block m-2 p-1 hover:text-green-500'>
                      <div className='text-gray-700 text-sm font-bold'>STATISTICS</div>
                      <div className='text-xs sm:flex-shrink-0'>Statistic reports, graphs and etc.</div>
                    </div>
                  </Link>
                </li>
                <li className='hover:shadow border rounded-md p-1 bg-white'>
                  <Link href='' className='flex w-auto h-24  items-center'>
                    <div className='justify-center items-center m-2 p-1'></div>
                    <div className='block m-2 p-1'>
                      <div className='text-gray-700 text-sm font-bold'>MAINTENANCE</div>
                      <div className='text-xs sm:flex-shrink-0'>Maintenance reports and etc.</div>
                    </div>
                  </Link>
                </li>
                <li className='hover:shadow border rounded-md p-1 bg-white'>
                  <Link href='' className='flex w-auto h-24 items-center'>
                    <div className='justify-center items-center m-2 p-1'></div>
                    <div className='block m-2 p-1'>
                      <div className='text-gray-700 text-sm font-bold'>OPERATIONS</div>
                      <div className='text-xs sm:flex-shrink-0'>Operations reports and etc.</div>
                    </div>
                  </Link>
                </li>
                <li className='hover:shadow border rounded-md p-1 bg-white'>
                  <Link href='' className='flex w-auto h-24 items-center'>
                    <div className='justify-center items-center m-2 p-1'></div>
                    <div className='block m-2 p-1'>
                      <div className='text-gray-700 text-sm font-bold'>FINANCE</div>
                      <div className='text-xs sm:flex-shrink-0'>Finance reports and etc.</div>
                    </div>
                  </Link>
                </li>
                <li className='hover:shadow border rounded-md p-1 bg-white'>
                  <Link href='' className='flex w-auto h-24 items-center'>
                    <div className='justify-center items-center m-2 p-1'></div>
                    <div className='block m-2 p-1'>
                      <div className='text-gray-700 text-sm font-bold'>DEFECT</div>
                      <div className='text-xs sm:flex-shrink-0'>Defect reports and etc.</div>
                    </div>
                  </Link>
                </li>
                <li className='hover:shadow border rounded-md p-1 bg-white'>
                  <Link href='' className='flex w-auto h-24 items-center'>
                    <div className='justify-center items-center m-2 p-1'></div>
                    <div className='block m-2 p-1'>
                      <div className='text-gray-700 text-sm font-bold'>PROCUREMENT</div>
                      <div className='text-xs sm:flex-shrink-0'>Procurement reports and etc.</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div
                className='hover:shadow p-2 rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1 bg-white'>
              <NoteList/>
            </div>
            <div
                className='hover:shadow flex overflow-auto p-2 rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1 bg-white'>
              <MiniCalendar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;