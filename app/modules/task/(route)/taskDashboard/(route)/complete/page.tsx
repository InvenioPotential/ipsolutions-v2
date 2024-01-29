import React from 'react'

const CompleteTask= () => {
  return (
    <div className='m-3 h-44 text-gray-600 text-sm'>
        {/* <div>
            <div className='justify-center flex m-2 bg-gradient-to-r text-center from-yellow-100  to-gray-200 w-44 rounded-md'>UPCOMING</div>
        </div> */}
        <div className='text-left text-gray-600 p-3 gap-2  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-rows-2'>
            <div className='col-span-2 bg-gray-100 rounded-md hover:shadow-sm'>
            <div className='p-2'>
                <div className='font-bold text-md'>TITLE</div>
                <div>Due</div>
                <div className='mt-2 hover:underline text-blue-300'>View Details</div>
            </div>
            </div>
            <div className='col-span-2 bg-gray-100 rounded-md hover:shadow-sm'>
            <div className='p-2'>
                <div className='font-bold text-md'>TITLE</div>
                <div>Due</div>
                <div className='mt-2 hover:underline text-blue-300'>View Details</div>
            </div>
            </div>
            <div className='col-span-2 bg-gray-100 rounded-md hover:shadow-sm'>
            <div className='p-2'>
                <div className='font-bold text-md'>TITLE</div>
                <div>Due</div>
                <div className='mt-2 hover:underline text-blue-300'>View Details</div>
            </div>
            </div>
            <div className='col-span-2 bg-gray-100 rounded-md hover:shadow-sm'>
            <div className='p-2'>
                <div className='font-bold text-md'>TITLE</div>
                <div>Due</div>
                <div className='mt-2 hover:underline text-blue-300'>View Details</div>
            </div>
            </div>
            <div className='col-span-2 bg-gray-100 rounded-md hover:shadow-sm'>
            <div className='p-2'>
                <div className='font-bold text-md'>TITLE</div>
                <div>Due</div>
                <div className='mt-2 hover:underline text-blue-300'>View Details</div>
            </div>
            </div>
            
            
        </div>
    </div> 
  )
}

export default CompleteTask