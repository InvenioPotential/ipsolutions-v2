"use client"
import React, {useRef, useState} from 'react'
import FormTable from "@/components/digitalForm/formtables";
import AppMenu from "@/components/digitalForm/appMenu";
import UpcomingTask from "@/components/tasks/status/upcoming/page";

const DigitalForm = () => {
    const [overviewTabInput, setOverviewTabInput] = useState<string>("");
    const [appTabInput, setAppTabInput] = useState<string>("");

    const [isOverviewOpen, setOverviewOpen] = useState(false);
    const toggleOverviewTab =() => {
        setOverviewOpen(!isOverviewOpen);
    };

    const [isAppMenuOpen, setAppMenuOpen] = useState(false);
    const toggleAppMenu =() => {
        setAppMenuOpen(!isAppMenuOpen);
    };

    return (
        <div className='lg:pl-10 m-5 lg:pr-10'>
            <div className=' mb-5'>
                <div className='text-2xl text-black font-bold'>
                    DIGITAL FORMS
                </div>
                <div className='text-xs text-gray-500 font-semibold'>
                    COMMUNITY MANAGEMENT
                </div>
            </div>
            <div>
                <div className='*:shadow flex justify-center text-center mb-5'>
                    <button onClick={toggleOverviewTab}
                            className='hover:bg-green-200 font-bold focus:shadow-blue-200 focus:bg-green-300 focus:text-white rounded-full bg-gray-50 p-4 m-4'>OVERVIEW
                    </button>
                    <button
                        onClick={toggleAppMenu}
                        className='hover:bg-green-200 font-bold focus:shadow-blue-200 focus:bg-green-300 focus:text-white rounded-full bg-gray-50 p-4 m-4'>APPLICATION
                        MENU
                    </button>
                </div>
                <hr className="w-48 h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10 dark:bg-gray-700"/>
            </div>
            <div
                className={` ${isOverviewOpen ? 'justify-between overflow-auto transition-opacity ease-in-out duration-300' : ' hidden'}`}>
                <FormTable/>
            </div>
            <div
                className={` ${isAppMenuOpen ? 'justify-between overflow-auto transition-opacity ease-in-out duration-300' : ' hidden'}`}>
                <AppMenu/>
            </div>


        </div>
    )
}

export default DigitalForm