import Electricity from '@/components/energy/listing/electricity';
import React from 'react'
import { MdUpcoming } from 'react-icons/md';
import Tariff from '../listing/tariff';

const AddElectricity = () => {
    const [showModal, setShowModal] = React.useState(false);

  return (
    <>
        <div onClick={() => setShowModal(true)} className='flex justify-between items-center'>
            <MdUpcoming className='m-1 h-5 w-5' />
            <div className='m-1'>UPLOAD</div>
        </div>
       
        {showModal ? (
        <>
        <div
            className="m-5 justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex text-left justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <div>
                        <p className="text-2xl text-black font-bold">
                            ADD ELECTRICITY BILL
                        </p>
                        <p className='text-sm '>ANALYSIS OF ELECTRICITY BILL</p>
                    </div>
                    
                </div>
                {/*body*/}
                <div className="relative p-6  flex-auto">
                <form>
                <div className='grid w-74 gap-5 grid-cols-2'>
                    <div className='col-span-2  text-left'>
                        <p>CLIENT:</p>
                        <div className='w-auto'>
                            <input  className='p-2 m-1 w-full flex-auto col-span-2 rounded-md bg-gray-100 placeholder-gray-500 placeholder-opacity-100'  placeholder='Description...'></input> 
                        </div>
                    </div>
                    <div>
                        <p>CATEGORY:</p>
                        <Electricity />
                    </div>
                    <div>
                        <p>TARIFF:</p>
                        <Tariff />
                    </div>
                    <div className='col-span-2  text-left'>
                        <p>UPLOAD FILE:</p>
                        <div className='w-auto '>
                            <input className="p-2 m-1 w-full flex-auto col-span-2 text-gray-900 bg-gray-100 placeholder-gray-500 rounded-md cursor-pointer  focus:outline-none" type="file"/>
                        </div>
                    </div>

                    <div className='col-span-2 text-left'>
                        <p>REMARK:</p>
                        <div className='w-auto'>
                            <input  className='p-2 m-1 w-full flex-auto col-span-2 rounded-md bg-gray-100 placeholder-gray-500 placeholder-opacity-100'  placeholder='Description...'></input> 
                        </div>
                    </div>

                </div> 
                </form>
            </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                >
                    Close
                </button>
                <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                >
                    ADD BILL
                </button>
                </div>
            </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    ) : null}
    </>
  )
}

export default AddElectricity
