import Image from 'next/image';
"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { CgBell, CgProfile } from 'react-icons/cg';
import { HiUserGroup } from 'react-icons/hi2';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';

const Topnav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu =() => {
        setMenuOpen(!isMenuOpen);
};

  return (
        <nav className='max-w-auto mx-auto px-4 sm:px-4 lg:px-4 border border-b-1'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <IoReorderThreeOutline style={{color:'green'}} className='m-1 h-7 w-7'/>
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
                            {isMenuOpen ? <MdKeyboardDoubleArrowRight style={{color:'green'}} className='h-6 w-6'/> : <MdKeyboardDoubleArrowLeft style={{color:'green'}} className='h-6 w-6' />}
                            </button>
                        </div>

                    </div>
                


            </div>
        </nav>
  )
}

export default Topnav;