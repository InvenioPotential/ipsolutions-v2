"use client"
import React from 'react'
import { IoMdAddCircle } from 'react-icons/io';
import Category from '../listing/category';
import Priority from '../listing/priority';
import DatePickers from '../dateCalendar/datepickers';

const AddNonRecur = () => {
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
                            <p className='text-sm flex'>NON-RECURRING TASK</p>
                        </div>
                        
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
                            <p>TASK TYPE:</p>
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
                        <div className='col-span-2 w-full items-center flex justify-between'>
                            <p>DUE DATE:</p>
                            <div className='w-auto'>
                            <DatePickers/></div>
                        </div>
                        <div className='col-span-2 w-full items-center flex justify-between'>
                            <p>TASK:</p>
                            <div className='w-auto'>
                                <input  className='p-2 m-1 mx-auto flex-auto col-span-2 rounded-md bg-gray-100 placeholder-gray-500 placeholder-opacity-100'  placeholder='Description...'/> 
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
                        ADD TASK
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

export default AddNonRecur