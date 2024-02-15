"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { CgBell, CgProfile } from 'react-icons/cg';
import { HiUserGroup } from 'react-icons/hi2';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';
import SideNavBar from './sidenavbar';
import Noti from '../modal/noti';

const Topnav = () => {
    // open top right nav in small screen
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu =() => {
        setMenuOpen(!isMenuOpen);

    };

    const [isSideOpen, setSideOpen] = useState(false);
    const toggleSide =() => {
        setSideOpen(!isSideOpen);

    };

  return (
        <nav className='sticky bg-white top-0 outline-none max-w-auto mx-auto'>
                <div className=' flex z-50 inset-0 items-center p-5 justify-between h-16'>
                    <div className='flex items-center justify-center m-1'>
                        <div className=' items-center justify-between'>
                        <div className='md:hidden flex '>
                            <button 
                                onClick={toggleSide}>
                                {isSideOpen ? <IoReorderThreeOutline style={{color:'green'}} className='m-2 h-5 w-5'/> : <IoReorderThreeOutline style={{color:'green'}} className='m-2 h-7 w-7' />}
                            </button>
                        </div>
                    </div>
                        <div className='p-2 text-left'>
                            <img 
                                src="/images/ipsolutionslogo.png"
                                alt="IP solutions logo" 
                                width={130}
                                height={30}
                            />  
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
                            <Link href="">
                                <CgProfile className='m-2 h-6 w-6'/>
                            </Link>                           
                            <Noti/>      
                            <Link href="">
                                <HiUserGroup className='m-2 h-6 w-6'/>
                            </Link>
                            <Link href="/">
                                <TbLogout className='m-2 h-6 w-6'/>
                            </Link>
                        </div>
                    
                        <div className='md:hidden flex '>
                            <button 
                                onClick={toggleMenu}>
                                {isMenuOpen ? <MdKeyboardDoubleArrowRight style={{color:'green'}} className='m-2 h-6 w-6'/> : <MdKeyboardDoubleArrowLeft style={{color:'green'}} className='m-2 h-6 w-6' />}
                            </button>
                        </div>
                    </div>
            </div>
            
            
            <div className={`md:block ${isSideOpen ? 'block' : 'hidden'}`}>
                <SideNavBar/>
            </div>
            
        </nav>
  )
}

export default Topnav;