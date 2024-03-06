"use client"
import React, {useEffect, useState} from 'react'
import { MdDelete, MdEdit } from 'react-icons/md';
import DateRangePickers from '../../dateCalendar/dateRangePickers';
import {Selection} from "@/components/types";
import {getSelections} from "@/app/utils/selectionData/page";
import Select from "react-select";
import dayjs, {Dayjs} from "dayjs";

const EditRecur = ({taskId} : {taskId : any}) => {
    const [showModal, setShowModal] = React.useState(false);
    const [showDel, setShowDel] = React.useState(false);
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
    const [startDateInput, setStartDate] = useState<Dayjs | null>(null);
    const [endDateInput, setEndDate] = useState<Dayjs | null>(null);
    const [recurInput, setReccurInput] = useState<string>("");

    const handleStartDateChange = (date: any) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date: any) => {
        setEndDate(date);
    };


    useEffect(() => {
        fetchSelection
        fetchTaskByID();
    }, [taskId]);

    // console.log("id fethced :"+taskId);

    const fetchTaskByID = async () => {
        try {
            const response = await fetch(`/api/Recur/${taskId}`);
            if (!response.ok) {
                throw new Error("Failed to fetch task details.");
            }
            const data=  await response.json(); // Type the data explicitly
console.log(data)
            setCatInput(data.category)
            setSubInput(data.subcategory)
            setTypeInput(data.type)
            setSiteInput(data.site)
            setTaskInput(data.task)
            setRemarkInput(data.remark)
            setStatusInput(data.stage)
            setPriorityInput(data.priority)
            setAssignInput(data.assignTaskTo)
            setStatusInput(data.stage)
            setStartDate(dayjs(data.startDate))
            setEndDate(dayjs(data.EndDate))
            setReccurInput(data.reccur)
        } catch (error) {
            console.error(error);
        }
    };

    const fetchSelection = async () => {
        try {
            const data = await getSelections();
            //console.log(data);

            const { groupSelection, selection, typeSelection, siteSelection } =
                data;

            setGroupOptions(JSON.parse(groupSelection[0].options));
            setCategoryOptions(selection);
            setSubcategoryOptions(selection);
            setTypeOptions(JSON.parse(typeSelection[0].options));
            setSiteOptions(JSON.parse(siteSelection[0].options));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };



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

            const response = await fetch(`/api/Recur/${taskId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error("Failed to update the data. Please try again.");
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
    const handleDelete = async () => {
        try {
            // Send a DELETE request to the API route
            const response = await fetch(`/api/Recur/${taskId}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to delete task.");
            }

            // alert("TASK HAS BEEN DELETED !");
            // router.push(pathname)
            // revalidatePath(pathname)
            location.reload()

            setShowModal(false);
            setShowDel(false)

        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const handleCategoryChange = (selectedOption: any) => {
        setSelectedCategory(selectedOption.value); // Set the selected category's variables
    };
    return (
            <>
            <button type="button"
                    onClick={() => setShowModal(true)} 
                    className='p-2 rounded-full hover:bg-gray-200'>
                <MdEdit className=''/>
            </button>
            {showModal ? (
            <>
            <div className="p-3 text-center justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <div>
                            <p className="text-2xl text-black font-bold">
                                EDIT TASK
                            </p>
                            <p className='text-sm flex'>RECURRING TASK</p>
                        </div>
                        <div>
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
                                                    onClick={() => handleDelete()}
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
                                    value={setCat}
                                    placeholder={setCat || "Select Category"}
                                />
                            </div>
                            <div>
                                <p>SUB-CATEGORY:</p>
                                <Select
                                    options={subcategoryOptions
                                        .filter(
                                            (subOption) => subOption.id === SelectedCategory
                                        )
                                        .flatMap((subCat) =>
                                            JSON.parse(subCat.options).map((sub: any) => ({
                                                label: sub,
                                                value: sub,
                                            }))
                                        )}
                                    onChange={(e) => {
                                        if (e) {
                                            setSubInput(e.value);
                                        }
                                    }}
                                    value={setSub}
                                    placeholder={setSub || "Select Sub Category"}
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
                                    value={setType}
                                    placeholder={setType || "Select Type"}                        />
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
                                    value={setSite}
                                    placeholder={setSite ||"Select Site"}
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
                                    value={priorityInput}
                                    placeholder={priorityInput || "Select Priority"}
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
                                                   onChange={e => setStatusInput(e.target.value)}
                                                   defaultChecked={statusInput === 'On-going'}/>

                                            <label htmlFor='status-ongoing'
                                                   className='rounded-lg p-2 bg-gray-200 cursor-pointer peer-checked:bg-green-200 hover:bg-green-100'>
                                                ON-GOING
                                            </label>
                                        </li>
                                        <li>
                                            <input type='radio' id='status-completed' name='status'
                                                   value='Completed' className="hidden peer"
                                                   onChange={e => setStatusInput(e.target.value)}
                                                   defaultChecked={statusInput === 'Completed'}/>
                                            <label htmlFor='status-completed'
                                                   className='rounded-lg p-2 bg-gray-200 cursor-pointer peer-checked:bg-green-200 hover:bg-green-100'>
                                                COMPLETED
                                            </label>
                                        </li>
                                    </ul>


                                </div>
                            </div>
                            <div className='col-span-2'>
                                <p>RECURRING:</p>
                                <div
                                    >
                                    <ul className='*:p-2 *:m-2 *:rounded-lg  flex justify-center overflow-auto'>
                                        <li>
                                            <input type='radio' id='reccur-once' name='reccur'
                                                   value='Once' className="hidden peer"
                                                   onChange={e => setReccurInput(e.target.value)}
                                                   defaultChecked={recurInput === 'Once'}/>
                                            <label htmlFor='reccur-once'
                                                   className='rounded-lg p-2 bg-gray-200 cursor-pointer hover:bg-green-100 peer-checked:bg-green-200 '>
                                                ONCE
                                            </label>
                                        </li>
                                        <li>
                                            <input type='radio' id='reccur-daily' name='reccur'
                                                   value='Daily' className="hidden peer"
                                                   onChange={e => setReccurInput(e.target.value)}
                                                   defaultChecked={recurInput === 'Daily'}/>

                                            <label htmlFor='reccur-daily'
                                                   className='rounded-lg p-2 bg-gray-200 cursor-pointer hover:bg-green-100 peer-checked:bg-green-200 '>
                                                DAILY
                                            </label>
                                        </li>
                                        <li>
                                            <input type='radio' id='reccur-weekly' name='reccur'
                                                   value='Weekly' className="hidden peer"
                                                   onChange={e => setReccurInput(e.target.value)}
                                                   defaultChecked={recurInput === 'Weekly'}/>

                                            <label htmlFor='reccur-weekly'
                                                   className='rounded-lg p-2 bg-gray-200 cursor-pointer hover:bg-green-100 peer-checked:bg-green-200 '>
                                                WEEKLY
                                            </label>
                                        </li>
                                        <li>
                                            <input type='radio' id='reccur-monthly' name='reccur'
                                                   value='Monthly' className="hidden peer"
                                                   onChange={e => setReccurInput(e.target.value)}
                                                   defaultChecked={recurInput === 'Monthly'}/>

                                            <label htmlFor='reccur-monthly'
                                                   className='rounded-lg p-2 bg-gray-200 cursor-pointer hover:bg-green-100 peer-checked:bg-green-200 '>
                                                MONTHLY
                                            </label>
                                        </li>
                                        <li>
                                            <input type='radio' id='reccur-yearly' name='reccur'
                                                   value='Yearly' className="hidden peer"
                                                   onChange={e => setReccurInput(e.target.value)}
                                                   defaultChecked={recurInput === 'Yearly'}/>

                                            <label htmlFor='reccur-yearly'
                                                   className='rounded-lg p-2 bg-gray-200 cursor-pointer hover:bg-green-100 peer-checked:bg-green-200 '>
                                                YEARLY
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-span-2 w-full items-center flex justify-between'>
                                <DateRangePickers  defaultStart={startDateInput} defaultEnd={endDateInput} onStartChange={handleStartDateChange}
                                                  onEndChange={handleEndDateChange}/>
                            </div>
                            <div className='col-span-2 w-full items-center flex justify-between'>
                                <p>TASK:</p>
                                <div className='w-auto'>
                                    <input
                                        type="task"
                                        className="p-2 m-1 mx-auto flex-auto col-span-2 rounded-md bg-gray-100 placeholder-gray-500 placeholder-opacity-100"
                                        value={taskInput}
                                        placeholder={taskInput || "Insert task"}
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
                                        value={remarkInput}
                                        placeholder={remarkInput || "Insert Remark"}
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
                                        value={assignInput}
                                        placeholder={assignInput || "Select User"}
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
                            UPDATE AND SAVE
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

export default EditRecur
