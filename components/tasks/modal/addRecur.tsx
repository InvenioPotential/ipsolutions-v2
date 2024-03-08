"use client"
import React, {useEffect, useState} from 'react'
import { IoMdAddCircle } from 'react-icons/io';
import DateRangePickers from '../../dateCalendar/dateRangePickers';
import {getSelections} from "@/app/utils/selectionData/page";
import Select from "react-select";
import { Selection } from "@/components/types";
import dayjs, { Dayjs } from "dayjs";



const AddRecur = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [groupOptions, setGroupOptions] = useState<string[]>([]);
    const [categoryOptions, setCategoryOptions] = useState<Selection[]>([]);
    const [subcategoryOptions, setSubcategoryOptions] = useState<Selection[]>([]);
    const [typeOptions, setTypeOptions] = useState<string[]>([]);
    const [siteOptions, setSiteOptions] = useState<string[]>([]);
    const [SelectedCategory, setSelectedCategory] = useState<number>();
    const [setCat, setCatInput] = useState<string>("");
    const [setSub, setSubInput] = useState<string>("");
    const [setType, setTypeInput] = useState<string>("");
    const [setSite, setSiteInput] = useState<string>("");
    const [taskInput, setTaskInput] = useState<string>(""); // Add task input state
    const [remarkInput, setRemarkInput] = useState<string>(""); // Add remark input state
    const [assignInput, setAssignInput] = useState<string>(""); // Add assign input state
    const [statusInput, setStatusInput] = useState<string>("");
    const [priorityInput, setPriorityInput] = useState("");

    const currentDate = new Date();

    const [startDateInput, setStartDate] = useState<Date | null>(currentDate);
    const [endDateInput, setEndDate] = useState<Date | null>(currentDate);
    const [recurInput, setReccurInput] = useState<string>("");

    const handleStartDateChange = (date: any) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date: any) => {
        setEndDate(date);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSelections();
                const { groupSelection, selection, typeSelection, siteSelection } = data;

                setGroupOptions(JSON.parse(groupSelection[0].options));
                setCategoryOptions(selection);
                setSubcategoryOptions(selection);
                setTypeOptions(JSON.parse(typeSelection[0].options));
                setSiteOptions(JSON.parse(siteSelection[0].options));
                setStatusInput("ongoing")
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);



    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const body = {
                setCat,
                setSub,
                setType,
                setSite,
                taskInput,
                remarkInput,
                assignInput,
                statusInput,
                recurInput,
                priorityInput,
                startDateInput,
                endDateInput,
            };
            //console.log("Form data:", body); // Log the form data before sending

            const response = await fetch("/api/Recur", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error("Failed to submit the data. Please try again.");
            }

            const data = await response.json();
            console.log("Response:", data); // Log the response data
            // alert("NEW TASK HAS BEEN ADDED");
            // router.push(pathname)
            location.reload()



            setShowModal(false);
            // redirect("/modules/task/taskNonRecur");
        } catch (error) {
            console.error(error);
        }
    };
    // Function to handle category change
    const handleCategoryChange = (selectedOption: any) => {
        setSelectedCategory(selectedOption.value); // Set the selected category's variables
    };

  return (
            <>
            <button type="button"
                    onClick={() => setShowModal(true)} 
                    className='p-2 rounded-md'>
                <IoMdAddCircle className='w-7 h-7'/>
            </button>
            {showModal ? (
            <>
            <div className="p-3 justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex text-left justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <div>
                            <p className="text-2xl  text-black font-bold">
                                ADD TASK
                            </p>
                            <p className='text-sm'>RECURRING TASK</p>
                        </div>
                    </div>
                    {/*body*/}
                    <div className="relative p-6  flex-auto">
                        <form onSubmit={submit}>
                            <div className='grid w-74 gap-5 grid-cols-2'>
                                <div>
                                    <p>CATEGORY:</p>
                                    <Select
                                        options={groupOptions.map((group) => ({
                                            label: group,
                                            options: categoryOptions
                                                .filter(
                                                    (category) => category.department === group
                                                )
                                                .map((category) => ({
                                                    label: category.variables,
                                                    value: category.id,

                                                })),
                                        }))}
                                        onChange={(e) => {
                                            if (e) {
                                                handleCategoryChange(e);
                                                setCatInput(e.label);
                                            }
                                        }}

                                        placeholder="Select Category"
                                    />
                                </div>
                                <div>
                                    <p>SUB-CATEGORY:</p>
                                    <Select
                                        options={subcategoryOptions
                                            .filter(
                                                (subOption) => subOption.id === SelectedCategory
                                            )
                                            .flatMap((subcat) =>
                                                JSON.parse(subcat.options).map((sub: any) => ({
                                                    label: sub,
                                                    value: sub,
                                                }))
                                            )}
                                        onChange={(e) => {
                                            if (e) {
                                                setSubInput(e.value);
                                            }
                                        }}
                                        placeholder="Select Sub Category"
                                    />
                                </div>
                                <div>
                                    <p>TYPE:</p>
                                    <Select
                                        options={groupOptions.map((group) => ({
                                            label: group,
                                            options: typeOptions.map((type) => ({
                                                label: type,
                                                value: type,
                                            })),
                                        }))}
                                        onChange={(e) => {
                                            if (e) {
                                                setTypeInput(e.label);
                                            }
                                        }}
                                        placeholder="Select Task Type"
                                    />
                                </div>
                                <div>
                                    <p>SITE:</p>
                                    <Select
                                        options={siteOptions.map((site) => ({
                                            label: site,
                                            value: site,
                                        }))}
                                        onChange={(e) => {
                                            if (e) {
                                                setSiteInput(e.label);
                                            }
                                        }}
                                        placeholder="Select Site"
                                    />
                                </div>
                                <div>
                                    <p>PRIORITY:</p>
                                    <Select
                                        options={[
                                            { value: "low", label: "Low" },
                                            { value: "med", label: "Medium" },
                                            { value: "hi", label: "High" },
                                        ]}
                                        placeholder="Select Priority"
                                        onChange={(e) => {
                                            if (e) {
                                                setPriorityInput(e.label);
                                            }
                                        }}
                                    />
                                </div>
                                <div className='col-span-2'>
                                    <p>STATUS:</p>
                                    <div>
                                        <ul className='*:p-2 *:m-2 *:rounded-lg flex justify-center overflow-auto'>
                                            <li>
                                                <input type='radio' id='status-ongoing' name='status'
                                                       value='On-going' className="hidden peer"
                                                       onChange={e => setStatusInput(e.target.value)}/>
                                                <label htmlFor='status-ongoing'
                                                       className='rounded-lg p-2 cursor-pointer peer-checked:bg-green-200 hover:bg-green-100 bg-gray-200'>
                                                    ON-GOING
                                                </label>
                                            </li>
                                            <li>
                                                <input type='radio' id='status-completed' name='status'
                                                       value='Completed' className="hidden peer"
                                                       onChange={e => setStatusInput(e.target.value)}/>
                                                <label htmlFor='status-completed'
                                                       className='rounded-lg p-2 cursor-pointer peer-checked:bg-green-200 hover:bg-green-100 bg-gray-200'>
                                                    COMPLETED
                                                </label>
                                        </li>
                                            </ul>

                                    </div>
                                </div>
                                <div className='col-span-2'>
                                <p>RECURRING:</p>
                                    <div>
                                        <ul className='*:p-2 *:m-2 *:rounded-lg flex justify-center overflow-auto'>
                                            <li>
                                    <input type='radio' id='reccur-once' name='reccur'
                                           value='Once' className="hidden peer"
                                               onChange={e => setReccurInput(e.target.value)}/>
                                        <label htmlFor='reccur-once'
                                               className='rounded-lg p-2 bg-gray-200 cursor-pointer hover:bg-green-100 peer-checked:bg-green-200  '>
                                            ONCE
                                        </label>
                                            </li>
                                            <li>
                                        <input type='radio' id='reccur-daily' name='reccur'
                                               value='Daily' className="hidden peer"
                                               onChange={e => setReccurInput(e.target.value)}/>
                                        <label htmlFor='reccur-daily'
                                               className=' rounded-lg p-2 bg-gray-200 cursor-pointer hover:bg-green-100 peer-checked:bg-green-200 '>
                                            DAILY
                                        </label></li>
                                            <li>
                                        <input type='radio' id='reccur-weekly' name='reccur'
                                               value='Weekly' className="hidden peer"
                                               onChange={e => setReccurInput(e.target.value)}/>
                                        <label htmlFor='reccur-weekly'
                                               className='rounded-lg p-2 bg-gray-200 cursor-pointer hover:bg-green-100 peer-checked:bg-green-200 '>
                                            WEEKLY
                                        </label></li>
                                            <li>
                                        <input type='radio' id='reccur-monthly' name='reccur'
                                               value='Monthly' className="hidden peer"
                                               onChange={e => setReccurInput(e.target.value)}/>
                                        <label htmlFor='reccur-monthly'
                                               className='rounded-lg p-2 bg-gray-200 cursor-pointer hover:bg-green-100 peer-checked:bg-green-200 '>
                                            MONTHLY
                                        </label></li>
                                            <li>
                                        <input type='radio' id='reccur-yearly' name='reccur'
                                               value='Yearly' className="hidden peer"
                                               onChange={e => setReccurInput(e.target.value)}/>
                                        <label htmlFor='reccur-yearly'
                                               className='rounded-lg p-2 bg-gray-200 cursor-pointer hover:bg-green-100 peer-checked:bg-green-200 '>
                                            YEARLY
                                        </label>
                                        </li>
                                            </ul>
                                    </div>
                                </div>
                                <div className='col-span-2 w-full items-center flex justify-between'>
                                    <DateRangePickers canEdit={true} onStartChange={handleStartDateChange} onEndChange={handleEndDateChange}/>
                                </div>
                                <div className='col-span-2 w-full items-center flex justify-between'>
                                    <p>TASK:</p>
                                    <div className='w-auto'>
                                        <input
                                            type="task"
                                            className="p-2 m-1 mx-auto flex-auto col-span-2 rounded-md bg-gray-100 placeholder-gray-500 placeholder-opacity-100"
                                            placeholder="Description..."
                                            onChange={(e) => {
                                                setTaskInput(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='col-span-2 w-full items-center flex justify-between'>
                                    <p>REMARK:</p>
                                    <div className='w-auto'>
                                        <input
                                            type="remark"
                                            className="p-2 m-1 w-max flex-auto col-span-2 rounded-md bg-gray-100 placeholder-gray-500 placeholder-opacity-100"
                                            placeholder="Description..."
                                            onChange={(e) => {
                                                setRemarkInput(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='col-span-2 w-full items-center flex justify-between'>
                                    <p>ASSIGN TASK TO:</p>
                                    <div>
                                        <input
                                            type="assign"
                                            className="p-2 m-1 w-max flex-auto col-span-2 rounded-md bg-gray-100 placeholder-gray-500 placeholder-opacity-100"
                                            placeholder="Index users..."
                                            onChange={(e) => {
                                                setAssignInput(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>

                    {/*footer*/}
                    <div
                        className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            ADD TASK
                        </button>
                    </div>
                        </form>
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
