import SideNavBar from '@/components/sidenavbar';
import Topnav from '@/components/topnav';
import React from 'react'

const Dashboard = () => {
  return (
    
    <div className=''>
        <Topnav />
        <SideNavBar />
        <div className=''>
           Dashboard 
        </div>
        
        
    </div>
  )
}

export default Dashboard;