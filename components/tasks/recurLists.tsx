import React from 'react'
import EditRecur from './modal/editRecur'
import {format} from "date-fns";
import {prisma} from "@/lib/prisma";
import {getUser} from "@/app/utils/userData/page";

const ReccurData = async ({query, currentPage,}: { query: string; currentPage: number; }) => {
    const tasks = await getTasks(query, currentPage)
    // const duedate = task.EndDate.toLocaleString()

    return (
        <>
            {tasks?.map((task) => {
                    const formattedDate = task.EndDate ? formatDate(task.EndDate) : null;
                    return (

                        <li key={task.id}
                            className="*:m-3 bg-gradient-to-r from-blue-200 via-sky-200 to-purple-200 p-5 m-5 rounded-md bg-gray-100">
                            <div className="flex justify-between">
                                <div className='flex'>
                                    {/*<div className='p-2 text-7xl flex justify-center text-center'>15</div>*/}
                                    {/*<div className='p-2 text-left'>*/}
                                    {/*    <h5>DISEMBER, 2024</h5>*/}
                                    {/*    <h5>SUNDAY</h5>*/}
                                    {/*</div>*/}

                                    <div
                                        className='p-2 text-7xl flex justify-center text-center'> {formattedDate?.day}
                                    </div>
                                    <div className='p-2 text-left'>
                                        <h5>
                                            <div>{formattedDate?.monthYear}</div>
                                            <div>{formattedDate?.dayOfWeek}</div>
                                        </h5>
                                        {/* Display entire date or '-' if missing */}

                                    </div>
                                </div>
                                <div className='P-2'>
                                    <EditRecur taskId={task.id}/>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='font-semibold'>
                                    <h5>Category : {task.category}</h5>
                                    <h5>Task Type : {task.type}</h5>
                                    <h6>Task : {task.task}</h6>
                                </div>
                                <div className='font-semibold'>
                                    <h5>{task.stage}</h5>
                                </div>
                            </div>
                        </li>
                    )
                }
            )}
        </>
    )
}
export default ReccurData

export async function getTasks(query: string, currentPage: number) {
    const user = await getUser()

    try {
        const tasks = await prisma.reccurTask.findMany({
                where: {
                    AND: { taskOwner: user },
                    OR: [
                        {
                            type: {
                                contains: query,
                                mode: "insensitive",
                            },
                        },
                        {
                            site: {
                                contains: query,
                                mode: "insensitive",
                            },
                        },
                        {
                            category: {
                                contains: query,
                                mode: "insensitive",
                            },
                        },
                        {
                            subcategory: {
                                contains: query,
                                mode: "insensitive",
                            },
                        },
                        {
                            stage: {
                                contains: query,
                                mode: "insensitive",
                            },
                        },
                        {
                            priority: {
                                contains: query,
                                mode: "insensitive",
                            },
                        },
                        {
                            task: {
                                contains: query,
                                mode: "insensitive",
                            },
                        },
                        {
                            remark: {
                                contains: query,
                                mode: "insensitive",
                            },
                        },
                        {
                            assignTaskTo: {
                                contains: query,
                                mode: "insensitive",
                            },
                        },
                        {
                            reccur: {
                                contains: query,
                                mode: "insensitive",
                            },
                        },
                    ],
                },
            }
        );
        return tasks;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}


function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = format(date, 'dd');
    const monthYear = format(date, 'MMMM yyyy');
    const dayOfWeek = format(date, 'EEEE');
    return {day, monthYear, dayOfWeek};
}






