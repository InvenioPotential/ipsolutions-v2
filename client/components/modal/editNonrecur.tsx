import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md';
import Category from '../listing/category';
import DatePickers from '../dateCalendar/datepickers';

const EditNonRecur = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [showDel, setShowDel] = React.useState(false);

  return (
    <>
    <button type="button"
            onClick={() => setShowModal(true)} 
            className='p-2 rounded-full hover:bg-gray-200'>
        <MdEdit className=''/>
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
                        EDIT TASK
                    </p>
                    <p className='text-sm flex'>NON-RECURRING TASK</p>
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
                        <p>DUE:</p>
                        <Category />
                    </div><div>
                        <p>STAGE:</p>
                        <Category />
                    </div>
                    <div>
                        <p>PRIORITY:</p>
                        <Category />
                    </div>
                    <div className='col-span-2 w-full items-center flex justify-between'>
                        <p>DATE:</p>
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

export default EditNonRecur
