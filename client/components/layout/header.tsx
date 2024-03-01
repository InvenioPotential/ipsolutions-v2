"use client"
import useScroll from '@/components/hooks/use-scroll'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react'
import { UserButton } from '@clerk/clerk-react';
import Image from 'next/image';
import {Icon} from "@iconify/react";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div className={cn(
      `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-300`,
      {
        "border-b border-gray-200 bg-white/75 backdrop-blur-lg":scrolled,
        "border-b border-gray-200 bg-white":selectedLayout,
      }
    )}
    >

      <div className='flex h-[47px] items-center justify-between px-4'>
        <div className="flex items-center justify-center space-x-4">
          <Link href="/dashboard" className='ml-5 flex flex-row space-x-3 items-right justify-center md:hidden'>
              <Image 
                src="/images/ipsolutionslogo.png"
                alt="IP solutions logo" 
                width={130}
                height={30}
            />
          </Link>
        </div>

        <div className=' md:block'>
          <div className='h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center'>
            <span><Icon icon="lucide:bell-ring" className='w-7 h-7'></Icon></span>
            <span className='font-semibold text-sm shadow-xl rounded-full'><UserButton afterSignOutUrl='/'/> </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
