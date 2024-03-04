import {ClerkProvider, auth} from '@clerk/nextjs'
import type { Metadata } from 'next'
import './globals.css'
import { MdCall, MdEmail, MdHeadsetMic } from 'react-icons/md'
import Header from '@/components/layout/header'
import HeaderMobile from '@/components/layout/headerMobile'
import SideNav from '@/components/layout/sideNav'
import MarginWidthWrapper from '@/components/layout/marginWidthWrapper'
import PageWrapper from '@/components/layout/pageWrapper'
import {Open_Sans} from 'next/font/google'


const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IP Solutions Ver.0.1.0',
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
    <ClerkProvider>
      <html lang="en">
        <body className={`bg-white ${openSans.className}`}>
          {userId && (
            <>
              <div className="flex">
                <SideNav />
                <main className="flex-1">
                  <MarginWidthWrapper>
                    <Header />
                    <HeaderMobile />
                    <PageWrapper>{children}
                    
                    </PageWrapper>
                    <div className='relative bg-white backdrop-blur-sm inset-x-0 bottom-0 *:flex flex justify-between p-2 font-semibold text-gray-500'>
                      <div className='*:flex *:pl-2 *:pr-2 '>
                        <div className='hover:animate-bounce'><MdHeadsetMic className='m-1'/></div>
                        <div className='hover:animate-bounce'><MdEmail className='m-1'/></div>
                        <div className='hover:animate-bounce'><MdCall className='m-1'/></div>
                      </div>
                      <div className='*:pl-2 *:pr-2 text-xs p-1'>
                        <div className=''>INVENIO POTENTIAL SDN BHD ver. 2024</div>
                      </div> 
                    </div>
                  </MarginWidthWrapper>
                </main>
              </div>
            </>
          )} 
          {!userId && (
            <>
             {children}
            </>
          )}
          
        </body>
          
      </html>
    </ClerkProvider>
  )
}
