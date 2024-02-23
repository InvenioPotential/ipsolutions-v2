import {ClerkProvider, auth} from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Topnav from '@/components/nav/topnav'

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
    <ClerkProvider>
      <html lang="en">
        <body className="{inter.className} bg-gray-100 font-sans">
          <main className=' h-screen overflow-auto'>
              {userId && (
                <>
                  <Topnav/>
                </>
              )}
            <div className='lg:flex md:block sm:block items-start justify-center'>
              <div>{children}
              <div className=' pt-5 text-center items-center justify-center text-xs text-gray-400 font-bold m-3'>
                POWERED BY INVENIO POTENTIAL SDN BHD 2024
              </div> 
              </div>
              
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
