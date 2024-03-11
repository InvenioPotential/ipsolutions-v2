'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/clerk-react';

import { Icon } from '@iconify/react';
import { SIDENAV_ITEMS } from './constants';
import { SideNavItem } from './types';
import Image from 'next/image';

const SideNav = () => {
  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:px-6 border-b border-zinc-200 h-12 w-full"
        >
          <span className=''>
              <Image 
                src="/images/ipsolutionslogo.png"
                alt="IP solutions logo" 
                width={130}
                height={30}
            /> </span>
        </Link>

        <div className="flex flex-col space-y-2 overflow-auto md:px-6 h-auto">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-green-100 w-full justify-between hover:bg-green-100 ${
              pathname.includes(item.path) ? 'bg-green-100' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold text-sm text-left flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col text-sm space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? 'font-bold text-green-500' : ''
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-green-100 ${
            item.path === pathname ? 'bg-green-100' : ''
          }`}
        >
          {item.icon}
          <span className="font-semibold text-sm text-left flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};