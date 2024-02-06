import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

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
  return (
    <html lang="en">
      <Head>
        <title>IP Solutions</title>
      </Head>
      <body className="{inter.className} bg-gray-50 font-sans">
        {children}
      <div className='pt-5 text-center items-center justify-center text-xs text-gray-400 font-bold m-3'>
        POWERED BY INVENIO POTENTIAL SDN BHD 2024
      </div>  
      </body>
      
    </html>
  )
}
