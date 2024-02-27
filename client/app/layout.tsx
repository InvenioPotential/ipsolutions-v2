import {ClerkProvider, auth} from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Topnav from '@/components/nav/topnav'
import { MdCall, MdEmail, MdHeadsetMic } from 'react-icons/md'
import SideNavBar from '@/components/nav/sidenavbar'
import Header from '@/components/nav/header'
import HeaderMobile from '@/components/nav/headerMobile'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IP SOLUTIONS',
  description: 'Powered by Invenio PTL 2024',
  icons: '/images/ipsolutionslogo.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const {userId} = auth();

  return (
    // <ClerkProvider>
    //   <html lang="en">
    //     <body className="{inter.className} bg-gray-100 font-sans">
    //       <main className=' h-screen overflow-auto'>
    //           {userId && (
    //             <>
    //               <Topnav/>
    //             </>
    //           )}
    //         <div className='lg:flex md:block sm:block items-start justify-center'>
    //           {/* <SideNavBar/> */}
    //           {children}
    //         </div>
    //         <div className='relative bg-white backdrop-blur-sm inset-x-0 bottom-0 *:flex flex justify-between p-2 font-semibold text-gray-500'>
    //           <div className='*:flex *:pl-2 *:pr-2 '>
    //             <div className='hover:animate-bounce'><MdHeadsetMic className='m-1'/></div>
    //             <div className='hover:animate-bounce'><MdEmail className='m-1'/></div>
    //             <div className='hover:animate-bounce'><MdCall className='m-1'/></div>
    //           </div>
    //           <div className='*:pl-2 *:pr-2 text-xs p-1'>
    //             <div className=''>INVENIO POTENTIAL SDN BHD ver. 2024</div>
    //           </div> 
    //         </div>
    //       </main>
    //     </body>
    //   </html>
    // </ClerkProvider>

    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header/>
          <HeaderMobile/>
          {children}
        </body>
      </html>
      
    </ClerkProvider>
  )
}
