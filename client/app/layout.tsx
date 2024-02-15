
import {ClerkProvider, auth} from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Topnav from '@/components/nav/topnav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        {/* <Head>
          <title>IP Solutions</title>
        </Head>
        <body className="{inter.className} ">
        <Topnav />
          <div className='flex'>
            {children}
          </div>
        <footer className='pt-5 text-center items-center justify-center text-xs text-gray-400 font-bold m-3'>
          POWERED BY INVENIO POTENTIAL SDN BHD 2024</footer> 
        </body> */}
        <body className="{inter.className} bg-gray-100 font-sans">
          {userId && (
          <>
            <Topnav/>
          </>
          )}
          <main>
            <div className='flex items-start justify-center min-h-screen'>
              <div>{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
