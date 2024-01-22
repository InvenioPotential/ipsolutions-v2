import Image from 'next/image';
"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { CgBell, CgProfile } from 'react-icons/cg';
import { HiUserGroup } from 'react-icons/hi2';
import { IoMenuOutline, IoReorderThreeOutline } from 'react-icons/io5';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';
import SideNavBar from './sidenavbar';

const Topnav = () => {
    // open top right nav in small screen
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu =() => {
        setMenuOpen(!isMenuOpen);

    };

    // open sidebar
    const [isModuleOpen, setModuleOpen] = useState(false);
    const toggleModule =() => {
        setModuleOpen(!isModuleOpen);
    };

  return (
        <nav className='max-w-auto mx-auto'>
                <div className='flex items-center justify-between h-16 border-b-2'>
                    <div className='flex items-center justify-center m-1'>
                        <div className='flex-shrink-0 flex'>
                            <button
                                onClick={toggleModule}>
                            {isMenuOpen ? <IoReorderThreeOutline style={{color:'green'}} className='m-2 h-7 w-7'/> : <IoReorderThreeOutline style={{color:'green'}} className='m-2 h-7 w-7' />}
                            </button>
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
                            <Link href="">
                                <CgBell className='m-2 h-6 w-6'/>
                            </Link>                            
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
            <div className={` ${isModuleOpen ? 'justify-between' : 'hidden lg:hidden md:hidden'}`} >
                <SideNavBar />
            </div>
            
        </nav>
  )
}

export default Topnav;