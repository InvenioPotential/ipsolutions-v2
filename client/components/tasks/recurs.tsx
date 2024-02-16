import React from 'react'
import EditRecur from '../modal/editRecur'

const Recurs = () => {
  return (
    <div className='overflow-auto h-screen'>
    <ul className=' text-left mx-auto rounded-md text-md font-semibold p-3 m-2 grid-cols-subgrid lg:col-span-3 md:col-span-2 sm:col-span-2'>
        <li className="*:m-3 bg-gradient-to-r from-gray-200 via-blue-300 to-purple-300 p-5 m-5 text-gray-500 rounded-md bg-gray-100">
            <div className="flex justify-between">
                <div className='flex'>
                    <div className='p-2 text-7xl flex justify-center text-center'>15</div>
                    <div className='p-2 text-left'>
                        <h5>DISEMBER, 2024</h5>
                        <h5>SUNDAY</h5>
                    </div>
                </div>
                <div className='P-2 hover:animate-bounce'>
                    <EditRecur/>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='font-semibold'>
                    <h5>CATEGORY</h5>
                    <h5>TASK</h5>
                    <h6>TYPE</h6>
                </div>
                <div className='font-semibold'>
                    <h5>STAGE</h5>
                </div>
            </div>
        </li>
        
    </ul>
    </div>
  )
}

export default Recurs
