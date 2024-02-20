import MiniCalendar from '@/components/dateCalendar/miniCalendar';
import NoteList from '@/components/notes/todoList';
import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaCartPlus, FaTasks, FaTools } from 'react-icons/fa';
import { GrHostMaintenance } from 'react-icons/gr';
import { MdDisabledByDefault } from 'react-icons/md';
import { RiCommunityFill, RiMoneyDollarBoxFill } from 'react-icons/ri';
import { SiGoogleforms } from 'react-icons/si';

const Dashboard = async () => {
  const user = await currentUser();
  return (
    <div className=''>    
        <div className='m-3'>
          <div className='lg:pl-10 lg:pr-10 md:pl-5 sm:pl-5 md:pr-5 sm:pr-5 lg:m-5 md:m-10 sm:m-10'>
            <div className='border-b-1 mb-5 flex justify-between'>
              <div className=''>
                <div className='text-2xl text-black font-bold'>
                  WELCOME, {user?.username}!
                </div>
                <div className='text-xs text-gray-500 font-semibold'>
                  WELCOME TO THE MAIN DASHBOARD OF IP SOLUTIONS
                </div>
              </div>
            </div>
            <div className=' min-h-screen rounded-md p-3  bg-gradient-to-r from-sky-200  to-gray-200 text-gray-500'>
              <div className='mx-auto overflow-auto lg:h-auto rounded-md p-2 sm:m-1 md:m-1 m-5'>
                <div className='overflow-auto grid grid-rows-2 lg:grid-cols-4 gap-4 md:grid-cols-1 sm:grid-cols-1'>
                  <div className='grid-cols-subgrid lg:col-span-3 md:col-span-2 sm:col-span-2 row-span-2'>
                    <div className="overflow-auto grid grid-rows-4 lg:grid-cols-2 gap-2 md:grid-cols-1 sm:grid-cols-1">
                      <div className='border rounded-md p-1 bg-white '>
                        <Link href="/modules/task/taskDashboard" className='flex w-auto h-24 items-center'>
                          <div className='justify-center items-center m-2 p-1'><FaTasks className='flex w-7 h-7'/></div>
                            <div className='block m-2 p-1 hover:text-green-500 '>
                              <div className='text-gray-700 text-sm font-bold '>TASK MANAGEMENT</div>
                              <div className='text-xs'>Recurring, Non-recurring, Report and etc.</div>  
                          </div>
                          <div className="flex items-center"></div>
                        </Link>
                      </div>
                      <div className='border rounded-md p-1 bg-white'>
                        <Link href='' className='flex w-auto h-24  items-center'>
                          <div className='justify-center items-center m-2 p-1'><GrHostMaintenance className='flex w-7 h-7'/></div>
                          <div className='block m-2 p-1'>
                            <div className='text-gray-700 text-sm font-bold'>MAINTENANCE</div>
                            <div className='text-xs sm:flex-shrink-0'>Maintenance reports and etc.</div>  
                          </div>
                        </Link>
                      </div>
                      <div className='border rounded-md p-1 bg-white'>
                        <Link href='' className='flex w-auto h-24  items-center'>
                          <div className='justify-center items-center m-2 p-1'><RiCommunityFill className='flex w-7 h-7'/></div>
                          <div className='block m-2 p-1'>
                            <div className='text-gray-700 text-sm font-bold'>COMMUNITY</div>
                            <div className='text-xs sm:flex-shrink-0'>Community reports and etc.</div>  
                          </div>
                        </Link>
                      </div>
                      <div className='border rounded-md p-1 bg-white'>
                        <Link href='' className='flex w-auto h-24 items-center'>
                          <div className='justify-center items-center m-2 p-1'><FaTools className='flex w-7 h-7'/></div>
                          <div className='block m-2 p-1'>
                            <div className='text-gray-700 text-sm font-bold'>OPERATIONS</div>
                            <div className='text-xs sm:flex-shrink-0'>Operations reports and etc.</div>  
                          </div>
                        </Link>
                      </div>
                      <div className='border rounded-md p-1 bg-white'>
                        <Link href='' className='flex w-auto h-24 items-center'>
                          <div className='justify-center items-center m-2 p-1'><RiMoneyDollarBoxFill className='flex w-7 h-7'/></div>
                          <div className='block m-2 p-1'>
                            <div className='text-gray-700 text-sm font-bold'>FINANCE</div>
                            <div className='text-xs sm:flex-shrink-0'>Finance reports and etc.</div>  
                          </div>
                        </Link>
                      </div>
                      <div className='border rounded-md p-1 bg-white'>
                        <Link href='' className='flex w-auto h-24 items-center'>
                          <div className='justify-center items-center m-2 p-1'><SiGoogleforms className='flex w-7 h-7'/></div>
                          <div className='block m-2 p-1'>
                            <div className='text-gray-700 text-sm font-bold'>DIGITAL FORMS</div>
                            <div className='text-xs sm:flex-shrink-0'>Digital Forms reports and etc.</div>  
                          </div>
                        </Link>
                      </div>
                      <div className='border rounded-md p-1 bg-white'>
                        <Link href='' className='flex w-auto h-24 items-center'>
                          <div className='justify-center items-center m-2 p-1'><MdDisabledByDefault className='flex w-7 h-7'/></div>
                          <div className='block m-2 p-1'>
                            <div className='text-gray-700 text-sm font-bold'>DEFECT</div>
                            <div className='text-xs sm:flex-shrink-0'>Defect reports and etc.</div>  
                          </div>
                        </Link>
                      </div>
                      <div className='border rounded-md p-1 bg-white'>
                        <Link href='' className='flex w-auto h-24 items-center'>
                          <div className='justify-center items-center m-2 p-1'><FaCartPlus className='flex w-7 h-7'/></div>
                          <div className='block m-2 p-1'>
                            <div className='text-gray-700 text-sm font-bold'>PROCUREMENT</div>
                            <div className='text-xs sm:flex-shrink-0'>Procurement reports and etc.</div>  
                          </div>
                        </Link>
                      </div>
                      <div className='border rounded-md p-1 bg-white'>
                        <Link href='' className='flex w-auto h-24 items-center'>
                          <div className='justify-center items-center m-2 p-1'>
                            <Image className='flex w-7 h-7'
                            src="/images/energyblk.png"
                            alt="IP solutions logo" 
                            width={130}
                            height={30}
                            /> </div>
                            {/* <FaTasks className='flex w-7 h-7'/></div> */}
                          <div className='block m-2 p-1'>
                            <div className='text-gray-700 text-sm font-bold'>ENERGY</div>
                            <div className='text-xs sm:flex-shrink-0'>Energy reports and etc.</div>  
                          </div>
                        </Link>
                      </div>
                    
                    </div>
                  </div>
                  <div className='p-2 rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1 bg-white'>
                    <NoteList/>
                  </div>
                  <div className='flex overflow-auto p-2 rounded-md grid-cols-subgrid lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1 bg-white'>
                      <MiniCalendar />
                  </div>
                </div>
              </div>
            </div>      
          </div>
        </div>
    </div>
  )
}

export default Dashboard;