import { item } from "@/components/types"
import EditNonRecur from "@/components/tasks/modal/editNonrecur";
import React from "react";
import {format} from "date-fns";
import {unstable_noStore as noStore} from "next/cache";
import { unstable_cache } from 'next/cache';
import {getUser} from "@/app/utils/userData/page";
import {prisma} from "@/lib/prisma";


const NonRecurData = async ({query, currentPage,}: { query: string; currentPage: number; }) => {
    const tasks = await getNonRecur(query, currentPage)

    // noStore()
    return (
        <table className='container table-auto max-w-screen bg-gradient-to-r from-green-300 via-blue-100 to-gray-200 rounded-md p-4'>

            <thead className='text-black '>
            <tr className='*:p-4 justify-between'>
                <th>TASK</th>
                <th>CATEGORY</th>
                <th>TYPE</th>
                <th>DUE</th>
                <th>STATUS</th>
                <th>EDIT</th>
            </tr>
            </thead>
            {" "}

            <tbody className='bg-gray-100 overflow-auto'>
            {tasks?.map((task, index) => (
                <tr key={index} className='*:p-4 justify-between'>
                    <td>{task.task}</td>{" "}
                    <td>{task.category}</td>{" "}
                    <td>{task.type}</td>{" "}
                    <td>{formatDate(task.endDate)}</td>{" "}
                    <td>{task.stage}</td>{" "}
                    <td><EditNonRecur taskId={task.id}/></td>
                </tr>
            ))}
            </tbody>{" "}
        </table>
    )
}

export default NonRecurData



export async function getNonRecur(query: string, currentPage: number) {
    const user = await getUser()

    try {
        const tasks = await prisma.nonReccurTask.findMany({
                where: {
                    AND: {  OR: [
                            { taskOwner: user },
                            { assignTaskTo: user },
                        ]},
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
        tasks.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        return tasks;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}


function formatDate(dateString:string) {
    const date = new Date(dateString);
    return format(date, 'dd MMMM yyyy');
}



