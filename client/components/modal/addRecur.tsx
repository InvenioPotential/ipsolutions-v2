import Category from '@/components/listing/category';
import React from 'react'
import { IoMdAddCircle } from 'react-icons/io';
import { MdDelete, MdEdit } from 'react-icons/md';
import Priority from '../listing/priority';
import DateRangePickers from '../dateCalendar/dateRangePickers';

const AddRecur = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [showDel, setShowDel] = React.useState(false);

  return (
            <>
            <button type="button"
                    onClick={() => setShowModal(true)} 
                    className='p-2 rounded-md'>
                <IoMdAddCircle className='w-7 h-7'/>
            </button>
            {showModal ? (
            <>
            <div
                className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <div>
                            <p className="text-2xl text-black font-bold">
                                ADD TASK
                            </p>
                            <p className='text-sm flex'>RECURRING TASK</p>
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
                                                    DELETE TASK?
                                                </p>
                                                <div className="my-2 text-sm text-blueGray-500 leading-relaxed">
                                                    YOU WON'T BE ABLE TO UNDO THIS ACTION.
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
                    {/* <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        x
                        </span>
                    </button> */}
                    </div>
                    {/*body*/}
                    <div className="relative p-6  flex-auto">
                        <form>
                        <div className='grid w-74 gap-5 grid-cols-2'>
                            <div>
                                <p>CATEGORY:</p>
                                <Category />
                            </div>
                            <div>
                                <p>SUB-CATEGORY:</p>
                                <Category />
                            </div>
                            <div>
                                <p>TYPE:</p>
                                <Category />
                            </div>
                            <div>
                                <p>SITE:</p>
                                <Category />
                            </div>
                            <div>
                                <p>STAGE:</p>
                                <Category />
                            </div>
                            <div>
                                <p>PRIORITY:</p>
                                <Priority />
                            </div>
                            <div className='col-span-2'>
                                <p>RECURRING:</p>
                                <div className='*:p-2 *:m-2 *:bg-gray-200 *:rounded-lg  flex justify-between overflow-auto'>
                                    <button type='button' className='hover:bg-green-100 focus:bg-green-200' >
                                        ONCE
                                    </button >
                                    <button type='button' className='hover:bg-green-100 focus:bg-green-200'>
                                        DAILY
                                    </button>
                                    <button type='button' className='hover:bg-green-100 focus:bg-green-200'>
                                        WEEKLY
                                    </button>
                                    <button type='button' className='hover:bg-green-100 focus:bg-green-200' >
                                        MONTHLY
                                    </button>
                                    <button type='button' className='hover:bg-green-100 focus:bg-green-200' >
                                        YEARLY
                                    </button>
                                </div>
                            </div>
                            <div className='col-span-2 w-full items-center flex justify-between'>
                                <DateRangePickers/>
                            </div>
                            <div className='col-span-2 w-full items-center flex justify-between'>
                                <p>TASK:</p>
                                <div className='w-auto'>
                                   <input  className='p-2 m-1 mx-auto flex-auto col-span-2 rounded-md bg-gray-100 placeholder-gray-500 placeholder-opacity-100'  placeholder='Description...'></input> 
                                </div>
                            </div>
                            <div className='col-span-2 w-full items-center flex justify-between'>
                                <p>REMARK:</p>
                                <div className='w-auto'>
                                   <input  className='p-2 m-1 w-max flex-auto col-span-2 rounded-md bg-gray-100 placeholder-gray-500 placeholder-opacity-100'  placeholder='Description...'></input> 
                                </div>
                            </div>
                            <div className='col-span-2 w-full items-center flex justify-between'>
                                <p>ASSIGN TASK TO:</p>
                                <div>
                                   <input className='p-2 m-1 w-max flex-auto col-span-2 rounded-md bg-gray-100 placeholder-gray-500 placeholder-opacity-100' placeholder='Search users...'></input> 
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
                        UPDATE AND SAVE
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

export default AddRecur
