import Electricity from '@/components/energy/listing/electricity';
import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md';
import Tariff from '../listing/tariff';
import { FaEye } from 'react-icons/fa';

const EditElectricity = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [showDel, setShowDel] = React.useState(false);

  return (
    <>
        <button onClick={() => setShowModal(true)} className='p-2 flex text-center justify-between rounded-md bg-gradient-to-tr from-red-200 to-gray-200 hover:bg-gradient-to-tr hover:from-green-200 hover:to-gray-200'>
            <FaEye className='m-1'/>
        </button>
       
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
                            EDIT ELECTRICITY BILL
                        </p>
                        <p className='text-sm '>ANALYSIS OF ELECTRICITY BILL</p>
                    </div>
                    <div>
                        <button className='m-1 p-2 hover:bg-gray-200 rounded-full'><MdEdit/></button>
                        <>
                        <button type="button"
                                onClick={() => setShowDel(true)}  
                                className='m-1 p-2 hover:bg-red-200 rounded-full'>
                                    <MdDelete/></button>
                            {showDel ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                            <p className="my-2 font-bold text-blueGray-500 text-lg leading-relaxed">
                                                DELETE BILL?
                                            </p>
                                            <div className="my-2 text-sm text-blueGray-500 leading-relaxed">
                                                YOU WON&apos;T BE ABLE TO UNDO THIS ACTION.
                                            </div>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowDel(false)}
                                            >
                                                CANCEL
                                            </button>
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowDel(false)}
                                            >
                                                DELETE
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ): null}
                        </>  
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
                        <p>SUPPLIER:</p>
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
                    UPDATE BILL
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

export default EditElectricity
