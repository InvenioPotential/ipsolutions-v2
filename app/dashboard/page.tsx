import Topnav from '@/components/topnav';
import Link from 'next/link';
import React from 'react'
import { FaTasks } from 'react-icons/fa';

const Dashboard = () => {
  return (
    
    <div className=''>
        <Topnav />
        <div className=''>
          <div className='lg:pl-10 lg:pr-10 m-10'>
            <div className='border-b-2 mb-5'>
              <div className='text-2xl text-black font-bold'>
                WELCOME, "Username" !
              </div>
              <div className='text-xs text-gray-500 font-semibold'>
                WELCOME TO MAIN DASHBOARD OF THE IP SOLUTIONS
              </div>
            </div>
            <div className=' min-h-screen rounded-md p-3 bg-gradient-to-r from-green-500  to-sky-500 text-gray-500'>
              <div className='mx-auto rounded-md p-3 sm:m-1 md:m-1 m-5 bg-white flex'>
                <ul className='items-center text-left justify-between'>
                <li className='p-2 justify-between'>
                  <div className='border rounded-md p-3'>
                    <Link href='' className='flex'>
                      <div className='justify-center items-center m-2 p-1'><FaTasks className='flex w-7 h-7'/></div>
                      <div className='block m-2 p-1'>
                        <div className='text-gray-700 sm:text-xs lg:text-md font-bold'>TASK MANAGEMENT</div>
                        <div className='text-xs'>RECURRING, NON-RECURRING, REPORT AND ETC.</div>  
                      </div>
                    </Link>
                  </div>
                  </li>
                  <li className='flex p-4 justify-between'>
                    <Link href=''>
                    <FaTasks className='w-5 h-5 m2'/>
                      <div>
                        <div className='text-gray-700 text-sm font-bold'>TASK MANAGEMENT</div>
                        <div className='text-xs'>RECURRING, NON-RECURRING, REPORT AND ETC.</div>  
                      </div>
                    </Link>
                  </li>
                  <li className='flex p-4 justify-between'>
                    <Link href=''>
                    <FaTasks className='w-5 h-5 m2'/>
                      <div>
                        <div className='text-gray-700 text-sm font-bold'>TASK MANAGEMENT</div>
                        <div className='text-xs'>RECURRING, NON-RECURRING, REPORT AND ETC.</div>  
                      </div>
                    </Link>
                  </li>
                  <li className='flex p-4 justify-between'>
                    <Link href=''>
                    <FaTasks className='w-5 h-5 m2'/>
                      <div>
                        <div className='text-gray-700 text-sm font-bold'>TASK MANAGEMENT</div>
                        <div className='text-xs'>RECURRING, NON-RECURRING, REPORT AND ETC.</div>  
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='rounded-md p-3 m-5 bg-white'>
                Notes
              </div>
              <div className='rounded-md p-3 m-5 bg-white'>
                Calendar
              </div>
            </div>      
          </div>
               
        </div>
    </div>
  )
}

export default Dashboard;