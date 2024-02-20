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
    const [showModal, setShowModal] = React.useState(false);

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
        <nav className='sticky bg-white top-0 max-w-auto mx-auto'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center justify-center m-1'>
                        <div className='flex-shrink-0 flex'>
                            <>
                                <button
                                    onClick={() => setShowModal(true)}>
                                {isMenuOpen ? <IoReorderThreeOutline style={{color:'green'}} className='m-2 h-7 w-7'/> : <IoReorderThreeOutline style={{color:'green'}} className='m-2 h-7 w-7' />}
                                </button>
                                {showModal ? (
                                    <>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> 
                                       <div
                                        className="fixed justify-center left-0 top-0 items-left flex z-50 outline-none focus:outline-none">
                                        <div className="relative w-auto max-w-3xl">
                                        {/*content*/}
                                            {/*top*/}
                                            <div className='bg-sky-950 text-white items-center justify-center'>
                                                <ul>
                                                    <li>
                                                        <div className='p-1 flex-shrink-0 flex'>
                                                            <button
                                                                onClick={() => setShowModal(false)}>
                                                            {isMenuOpen ? <IoReorderThreeOutline style={{color:'green'}} className='m-2 h-7 w-7'/> : <IoReorderThreeOutline style={{color:'green'}} className='m-2 h-7 w-7' />}
                                                            </button>
                                                            <div className='p-2 text-left'>
                                                                <img 
                                                                    src="/images/ipsolutionslogo.png"
                                                                    alt="IP solutions logo" 
                                                                    width={130}
                                                                    height={30}
                                                                />  
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <SideNavBar />
                                                    </li>
                                                </ul>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </>
                                ) : null }
                                
                            </>
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
            <div className={` ${isModuleOpen ? 'justify-start items sticky left-0' : 'hidden lg:hidden md:hidden'}`} >
                <SideNavBar />
            </div>
            
        </nav>
  )
}

export default Topnav;