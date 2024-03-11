import React, {useRef, useState} from 'react';
import {MdAssignmentLate, MdUpcoming} from "react-icons/md";
import {FiActivity} from "react-icons/fi";
import {IoCheckmarkCircle} from "react-icons/io5";

const FormTable = () => {

    const pendingRef = useRef<HTMLDivElement | null>(null);
    const ongoingRef = useRef<HTMLDivElement | null>(null);
    const rejectedRef = useRef<HTMLDivElement | null>(null);
    const completedRef = useRef<HTMLDivElement | null>(null);

    return (
        <div>
            <div
                className='h-auto overflow-auto justify-center grid lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4'>
                <button onClick={() => {
                    pendingRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        inline:   'nearest',
                        block:    'end',
                    })
                }} className='btn hover:shadow cursor-pointer items-center  justify-center text-center'>

                    <div
                        className='shadow hover:shadow-lg bg-gradient-to-r from-yellow-100  to-gray-200 rounded-lg justify-between p-3 '>
                        <div
                            className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                            <div className='flex justify-between items-center'>
                                <MdUpcoming className='m-1 h-5 w-5'/>
                                <div className='m-1 '>PENDING</div>
                            </div>
                        </div>
                        <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                            3
                        </div>
                    </div>
                </button>
                <button onClick={() => {
                    ongoingRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        inline:   'nearest',
                        block:    'end',
                    })
                }} className='btn cursor-pointer items-center  justify-center text-center'>
                    <div
                        className='shadow hover:shadow-lg bg-gradient-to-r from-blue-100  to-gray-200 rounded-lg justify-between p-3 '>
                        <div
                            className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                            <div className='flex justify-between items-center'>
                                <FiActivity className='m-1 h-5 w-5'/>
                                <div className='m-1 '>ON-GOING</div>
                            </div>
                        </div>
                        <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                            3
                        </div>
                    </div>
                </button>
                <button onClick={() => {
                    rejectedRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        inline:   'nearest',
                        block:    'end',
                    })
                }} className='btn cursor-pointer items-center  justify-center text-center'>
                    <div
                        className='shadow hover:shadow-lg bg-gradient-to-r from-red-100  to-gray-200 rounded-lg justify-between p-3 '>
                        <div
                            className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                            <div className='flex justify-between items-center'>
                                <MdAssignmentLate className='m-1 h-5 w-5'/>
                                <div className='m-1'>REJECTED</div>
                            </div>
                        </div>
                        <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                            3
                        </div>
                    </div>
                </button>
                <button onClick={() => {
                    completedRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        inline:   'nearest',
                        block:    'end',
                    })
                }} className='btn cursor-pointer items-center  justify-center text-center'>
                    <div
                        className='shadow hover:shadow-lg bg-gradient-to-r from-green-100  to-gray-200 rounded-lg justify-between p-3 '>
                        <div
                            className='items-center justify-center text-gray-600 pl-6 pr-6 pt-2 pb-2 font-semibold text-sm'>
                            <div className='flex justify-between items-center'>
                                <IoCheckmarkCircle className='m-1 h-5 w-5'/>
                                <div className='m-1'>COMPLETED</div>
                            </div>
                        </div>
                        <div className='pl-6 pr-6 pb-2 text-right items-right justify-end font-bold text-lg'>
                            3
                        </div>
                    </div>
                </button>
            </div>
            <div
                className='lg:h-2/3 md:h-auto overflow-auto *:rounded-lg my-5 lg:grid md:grid sm:flex grid-cols-4 grid-rows-1 gap-4'>
                <div className='grid col-span-4 m-2 p-2 *:mt-5 *:mb-5'>
                    <div>
                        <div>
                            <p className='text-md text-gray-600 font-bold items-center justify-between flex'>LIST OF
                                FORMS</p>
                            <p className='text-sm text-gray-500'>Digital forms listing with its link.</p>
                        </div>
                        <div className='mt-4 max-h-48 overflow-auto items-center justify-center rounded-md'>
                            <table
                                className='text-sm text-center container table-auto max-w-screen rounded-md p-4'>
                                <thead
                                    className='text-black sticky top-0 bg-gray-200'>
                                <tr className='*:p-4'>
                                    <th>FORM NAME</th>
                                    <th>SITE</th>
                                    <th>ACTION</th>
                                </tr>
                                </thead>
                                <tbody className='bg-white *:justify-between *:items-center'>
                                <tr className='*:p-4'>
                                    <td>rnrq-22660</td>
                                    <td>PCR</td>
                                    <td>view icon</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div ref={pendingRef} id="pendingList">
                        <div>
                            <p className='text-md text-gray-600 font-bold items-center justify-between flex'>PENDING
                                APPLICATION</p>
                            <p className='text-sm text-gray-500'>New application forms submitted.</p>
                        </div>
                        <div className='mt-4 max-h-60 overflow-auto rounded-md'>
                            <table
                                className='text-sm container text-center table-auto max-w-screen  rounded-md p-4'>
                                <thead
                                    className='text-black sticky top-0 bg-gradient-to-r from-yellow-100 to-gray-200'>
                                <tr className='*:p-4 justify-between'>
                                    <th>FORM ID</th>
                                    <th>DATE</th>
                                    <th>TYPE</th>
                                    <th>SITE</th>
                                    <th>ACTION</th>
                                </tr>
                                </thead>
                                <tbody className='bg-white *:justify-between'>
                                <tr className='*:p-4'>
                                    <td>rnrq-22660</td>
                                    <td>13/12/22 05:39 PM</td>
                                    <td>Renovation</td>
                                    <td>PCR</td>
                                    <td>view icon</td>
                                </tr>
                                <tr className='*:p-4'>
                                    <td>rnrq-22661</td>
                                    <td>13/12/22 05:39 PM</td>
                                    <td>Maintenance/Servicing</td>
                                    <td>PCR</td>
                                    <td>view icon</td>
                                </tr>


                                </tbody>

                            </table>

                        </div>
                    </div>
                    <div ref={ongoingRef} id="ongoingList">
                        <div>
                            <p className='text-md text-gray-600 font-bold items-center justify-between flex'>ON-GOING
                                APPLICATION</p>
                            <p className='text-sm text-gray-500'>Application forms that need to be checked and
                                verified.</p>
                        </div>
                        <div className='mt-4 max-h-60 overflow-auto items-center justify-center rounded-md'>
                            <table
                                className='text-sm text-center container table-auto max-w-screen rounded-md p-4'>
                                <thead
                                    className='text-black sticky top-0 bg-gradient-to-r from-blue-100 to-gray-200'>
                                <tr className='*:p-4'>
                                    <th>FORM ID</th>
                                    <th>DATE</th>
                                    <th>TYPE</th>
                                    <th>SITE</th>
                                    <th>STATUS</th>
                                    <th>ACTION</th>
                                </tr>
                                </thead>
                                <tbody className='bg-white *:justify-between *:items-center'>
                                <tr className='*:p-4'>
                                    <td>rnrq-22660</td>
                                    <td>01/01/2024</td>
                                    <td>Maintenance/Servicing</td>
                                    <td>PCR</td>
                                    <td>Approve Application</td>
                                    <td>view icon</td>
                                </tr>
                                <tr className='*:p-4'>
                                    <td>rnrq-22661</td>
                                    <td>01/01/2024</td>
                                    <td>Tenant Registration</td>
                                    <td>PCR</td>
                                    <td>Approve Application</td>
                                    <td>view icon</td>
                                </tr>
                                <tr className='*:p-4'>
                                    <td>rnrq-22662</td>
                                    <td>01/01/2024</td>
                                    <td>Defect</td>
                                    <td>PCR</td>
                                    <td>Approve Application</td>
                                    <td>view icon</td>
                                </tr>
                                <tr className='*:p-4'>
                                    <td>rnrq-22663</td>
                                    <td>01/01/2024</td>
                                    <td>Short Term Rental</td>
                                    <td>PCR</td>
                                    <td>Approve Application</td>
                                    <td>view icon</td>
                                </tr>

                                </tbody>

                            </table>

                        </div>
                    </div>
                    <div ref={rejectedRef} id="rejectedList">
                        <div>
                            <p className='text-md text-gray-600 font-bold items-center justify-between flex'>REJECTED
                                APPLICATION</p>
                            <p className='text-sm text-gray-500'>Rejected application forms.</p>
                        </div>
                        <div className='mt-4 max-h-60 overflow-auto items-center justify-center rounded-md'>
                            <table
                                className='text-sm text-center container table-auto max-w-screen rounded-md p-4'>
                                <thead
                                    className='text-black sticky top-0 bg-gradient-to-r from-red-100 to-gray-200'>
                                <tr className='*:p-4'>
                                    <th>FORM ID</th>
                                    <th>DATE</th>
                                    <th>TYPE</th>
                                    <th>SITE</th>
                                    <th>STATUS</th>
                                    <th>ACTION</th>
                                </tr>
                                </thead>
                                <tbody className='bg-white *:justify-between *:items-center'>
                                <tr className='*:p-4'>
                                    <td>rnrq-22660</td>
                                    <td>01/01/2024</td>
                                    <td>Maintenance/Servicing</td>
                                    <td>PCR</td>
                                    <td>Approve Application</td>
                                    <td>view icon</td>
                                </tr>
                                <tr className='*:p-4'>
                                    <td>rnrq-22661</td>
                                    <td>01/01/2024</td>
                                    <td>Tenant Registration</td>
                                    <td>PCR</td>
                                    <td>Approve Application</td>
                                    <td>view icon</td>
                                </tr>
                                <tr className='*:p-4'>
                                    <td>rnrq-22662</td>
                                    <td>01/01/2024</td>
                                    <td>Defect</td>
                                    <td>PCR</td>
                                    <td>Approve Application</td>
                                    <td>view icon</td>
                                </tr>
                                <tr className='*:p-4'>
                                    <td>rnrq-22663</td>
                                    <td>01/01/2024</td>
                                    <td>Short Term Rental</td>
                                    <td>PCR</td>
                                    <td>Approve Application</td>
                                    <td>view icon</td>
                                </tr>

                                </tbody>

                            </table>

                        </div>
                    </div>
                    <div ref={completedRef} id="completedList">
                        <div>
                            <p className='text-md text-gray-600 font-bold items-center justify-between flex'>COMPLETED
                                APPLICATION</p>
                            <p className='text-sm text-gray-500'>Completed application form which have been
                                verified.</p>
                        </div>
                        <div className='mt-4 max-h-60 overflow-auto items-center justify-center rounded-md'>
                            <table
                                className='text-sm text-center container table-auto max-w-screen rounded-md p-4'>
                                <thead
                                    className='text-black sticky top-0 bg-gradient-to-r from-green-100 to-gray-200'>
                                <tr className='*:p-4'>
                                    <th>FORM ID</th>
                                    <th>DATE</th>
                                    <th>TYPE</th>
                                    <th>SITE</th>
                                    <th>STATUS</th>
                                    <th>APPROVED BY</th>
                                    <th>ACTION</th>
                                </tr>
                                </thead>
                                <tbody className='bg-white *:justify-between *:items-center'>
                                <tr className='*:p-4'>
                                    <td>rnrq-22660</td>
                                    <td>01/01/2024</td>
                                    <td>Maintenance/Servicing</td>
                                    <td>PCR</td>
                                    <td>Approve Application</td>
                                    <td>Quraisha</td>
                                    <td>view icon</td>
                                </tr>
                                <tr className='*:p-4'>
                                    <td>rnrq-22661</td>
                                    <td>01/01/2024</td>
                                    <td>Tenant Registration</td>
                                    <td>PCR</td>
                                    <td>Approve Application</td>
                                    <td>Quraisha</td>
                                    <td>view icon</td>
                                </tr>
                                <tr className='*:p-4'>
                                    <td>rnrq-22662</td>
                                    <td>01/01/2024</td>
                                    <td>Defect</td>
                                    <td>PCR</td>
                                    <td>Approve Application</td>
                                    <td>Quraisha</td>
                                    <td>view icon</td>
                                </tr>
                                <tr className='*:p-4'>
                                    <td>rnrq-22663</td>
                                    <td>01/01/2024</td>
                                    <td>Short Term Rental</td>
                                    <td>PCR</td>
                                    <td>Approve Application</td>
                                    <td>Quraisha</td>
                                    <td>view icon</td>
                                </tr>

                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FormTable;
