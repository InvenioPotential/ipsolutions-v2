import React, {useRef, useState} from 'react';
import {MdAssignmentLate, MdUpcoming} from "react-icons/md";
import {FiActivity} from "react-icons/fi";
import {IoCheckmarkCircle} from "react-icons/io5";

const AppMenu = () => {


    const pendingRef = useRef<HTMLDivElement | null>(null);
    const ongoingRef = useRef<HTMLDivElement | null>(null);
    const rejectedRef = useRef<HTMLDivElement | null>(null);
    const completedRef = useRef<HTMLDivElement | null>(null);

    return (
            <div className=' grid grid-cols-4 gap-1 '>
                <div
                    className='col-span-1 *:cursor-pointer *:items-center  *:text-center h-auto overflow-auto justify-center flex *:p-2'>
                    <div className='grid *:shadow *:w-auto *:h-auto  *:rounded-lg *:m-3 *:p-2'>
                        <div
                            className='bg-gradient-to-r from-yellow-100 to-gray-200 hover:shadow-lg items-center justify-center text-gray-600  font-semibold text-sm'>
                            <div className='m-1 '>Renovation</div>
                        </div>
                        <div
                            className='bg-gradient-to-r from-yellow-100 to-gray-200 hover:shadow-lg items-center justify-center text-gray-600  font-semibold text-sm'>
                            <div className='m-1 '>Moving In/Out</div>
                        </div>
                        <div
                            className='bg-gradient-to-r from-yellow-100 to-gray-200 hover:shadow-lg items-center justify-center text-gray-600 font-semibold text-sm'>
                            <div className='m-1 '>Defect</div>
                        </div>
                        <div
                            className='bg-gradient-to-r from-yellow-100 to-gray-200 hover:shadow-lg items-center justify-center text-gray-600  font-semibold text-sm'>
                            <div className='m-1 '>Short Term Rental</div>
                        </div>
                        <div
                            className='bg-gradient-to-r from-yellow-100 to-gray-200 hover:shadow-lg items-center justify-center text-gray-600  font-semibold text-sm'>
                            <div className='m-1 '>Tenant's Registration</div>
                        </div>
                        <div
                            className='bg-gradient-to-r from-yellow-100 to-gray-200 hover:shadow-lg items-center justify-center text-gray-600  font-semibold text-sm'>
                            <div className='m-1 '>Maintenance/Servicing</div>
                        </div>
                        <div
                            className='bg-gradient-to-r from-yellow-100 to-gray-200 hover:shadow-lg items-center justify-center text-gray-600 font-semibold text-sm'>
                            <div className='m-1 '>Event</div>
                        </div>
                        <div
                            className='bg-gradient-to-r from-yellow-100 to-gray-200 hover:shadow-lg items-center justify-center text-gray-600 font-semibold text-sm'>
                            <div className='m-1 '>Owner Authorization</div>
                        </div>
                        <div
                            className='bg-gradient-to-r from-yellow-100 to-gray-200 hover:shadow-lg items-center justify-center text-gray-600 font-semibold text-sm'>
                            <div className='m-1 '>Representative</div>
                        </div>
                    </div>
                </div>
                <div className='grid col-span-3 m-2 p-2'>
                    <div>
                        <div>
                            <p className='text-md text-gray-600 font-bold items-center justify-between flex'>APPLICATION
                                NAME</p>
                            <p className='text-sm text-gray-500'>APPLICATION NAME 's list of forms.</p>
                        </div>
                        <div className='mt-4 overflow-auto items-center justify-center rounded-md'>
                            <table
                                className='text-sm text-center container table-auto max-w-screen rounded-md p-4'>
                                <thead
                                    className='text-black sticky top-0 bg-gradient-to-r from-green-100 to-gray-200'>
                                <tr className='*:p-4'>
                                    <th>FORM ID</th>
                                    <th>DATE</th>
                                    <th>SITE</th>
                                    <th>UNIT/LOCATION</th>
                                    <th>STATUS</th>
                                    <th>ACTION</th>
                                </tr>
                                </thead>
                                <tbody className='bg-white *:justify-between *:items-center'>
                                <tr className='*:p-4'>
                                    <td>rnrq-22663</td>
                                    <td>01/01/2024</td>
                                    <td>PCR</td>
                                    <td>01-01-01</td>
                                    <td>Approve Application</td>
                                    <td>view icon</td>
                                </tr>
                                <tr className='*:p-4'>
                                    <td>rnrq-22663</td>
                                    <td>01/01/2024</td>
                                    <td>PCR</td>
                                    <td>01-01-01</td>
                                    <td>Approve Application</td>
                                    <td>view icon</td>
                                </tr>
                                <tr className='*:p-4'>
                                    <td>rnrq-22663</td>
                                    <td>01/01/2024</td>
                                    <td>PCR</td>
                                    <td>01-01-01</td>
                                    <td>Approve Application</td>
                                    <td>view icon</td>
                                </tr>
                                <tr className='*:p-4'>
                                    <td>rnrq-22663</td>
                                    <td>01/01/2024</td>
                                    <td>PCR</td>
                                    <td>01-01-01</td>
                                    <td>Approve Application</td>
                                    <td>view icon</td>
                                </tr>

                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>

            </div>


    );
};

export default AppMenu;
