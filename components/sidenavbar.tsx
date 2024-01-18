import React from 'react'
import Link from "next/link";
import { MdDashboard, MdDisabledByDefault } from 'react-icons/md';
import { FaCartPlus, FaTasks, FaTools } from 'react-icons/fa';
import { GrHostMaintenance } from 'react-icons/gr';
import { RiCommunityFill, RiMoneyDollarBoxFill } from 'react-icons/ri';
import { SiGoogleforms } from 'react-icons/si';

const SideNavBar = () => {
  return (
    <aside className="bg-sky-950 text-white h-screen float-left text-left">
      <div className="pt-4">
        {/* <h2 className="text-2xl font-bold mb-4">Dashboard</h2> */}
        <nav>
          <ul className='text-sm font-semibold '>
            <li className="m-3">
              <Link href="/" className="items-center m-2 flex hover:text-gray-300">
                <MdDashboard className='w-6 h-6 m2'/>
                <div className='ml-2 text-center'>
                  DASHBOARD
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center m-2 flex hover:text-gray-300">
                <FaTasks className='w-6 h-6 m2'/>
                <div className='ml-2 text-center'>
                  TASK MANAGEMENT
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center m-2 flex hover:text-gray-300">
                <GrHostMaintenance className='w-6 h-6 m2'/>
                <div className='ml-2 text-center'>
                  MAINTENANCE
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center m-2 flex hover:text-gray-300">
                <RiCommunityFill className='w-6 h-6 m2'/>
                <div className='ml-2 text-center'>
                  COMMUNITY
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center m-2 flex hover:text-gray-300">
                <FaTools className='w-6 h-6 m2'/>
                <div className='ml-2 text-center'>
                  OPERATIONS
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center m-2 flex hover:text-gray-300">
                <RiMoneyDollarBoxFill className='w-6 h-6 m2'/>
                <div className='ml-2 text-center'>
                  FINANCE
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center m-2 flex hover:text-gray-300">
                <SiGoogleforms className='w-6 h-6 m2'/>
                <div className='ml-2 text-center'>
                  DIGITAL FORMS
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center m-2 flex hover:text-gray-300">
                <MdDisabledByDefault className='w-6 h-6 m2'/>
                <div className='ml-2 text-center'>
                  DEFECT
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center m-2 flex hover:text-gray-300">
                <FaCartPlus className='w-6 h-6 m2'/>
                <div className='ml-2 text-center'>
                  PROCUREMENT
                </div>
                </Link>
            </li>
            <li className="m-3 mt-5">
              <Link href="/" className="items-center m-2 flex hover:text-gray-300">
                  <img className='w-6 h-6 m2'
                    src="/images/energy.png"
                    alt="IP solutions logo" 
                    width={130}
                    height={30}
                  /> 
                <div className='ml-2 text-center'>
                  ENERGY
                </div>
                </Link>
            </li>

          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default SideNavBar;