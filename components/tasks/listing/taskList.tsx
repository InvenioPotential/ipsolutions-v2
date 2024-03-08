import {item} from "@/components/types";
import {getUser} from "@/app/utils/userData/page";
import {prisma} from "@/lib/prisma";
import Link from "next/link";
import EditRecur from '../modal/editRecur'
import EditNonRecur from "@/components/tasks/modal/editNonrecur";
import { FormatDate } from '@/components/dateCalendar/dateFormat';

const TaskList = async ()=> {

const tasks= await getTasks();

// console.log("overview : "  +  tasks)
    return (
        <div className='*:my-5'>
            <div>
                <div className='mb-3'>
                    <p className=' text-md text-gray-600 font-bold items-center justify-between flex'>RECURRING
                        TASK</p>
                    <p className='text-sm text-gray-600 font-semibold'>Overview of active recurring tasks.</p>
                </div>
                <div className='overflow-auto max-h-60'>

                    <ul className='m-3 grid lg:grid-cols-4 *:bg-white *:rounded-md md:grid-cols-1 sm:grid-cols-1  mt-1 overflow-auto'>
                        {tasks?.filter(task => task.tasktype === "Recurring").map(task => (
                            <li key={task.id} className='m-2 p-3 hover:shadow overflow-auto flex justify-between'>
                                <div>
                                    <div className='flex justify-between mb-2 font-bold text-md'><p>DUE:</p>{FormatDate(task.endDate)}
                                    </div>
                                    <div className='text-gray-700 font-semibold text-sm'><p>TASK:</p>{task.category}
                                    </div>
                                    <div className='text-gray-700 text-xs font-semibold'>{task.task}</div>
                                </div>
                                <div className='mt-2 text-xs'>
                                    {<EditRecur taskId={task.id}/>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <div className='mb-3'>
                    <p className=' text-md text-gray-600 font-bold items-center justify-between flex'>NON-RECURRING
                        TASK</p>
                    <p className='text-sm text-gray-600 font-semibold'>Overview of active non-recurring tasks.</p>
                </div>
                <div className='overflow-auto max-h-60'>
                    <ul className='m-3 grid lg:grid-cols-4 *:bg-white *:rounded-md md:grid-cols-1 sm:grid-cols-1  mt-1 overflow-auto'>
                        {tasks?.filter(task => task.tasktype === "Non-Recurring").map(task => (
                            <li key={task.id} className='m-2 p-3 hover:shadow overflow-auto flex justify-between'>
                                <div>
                                    <div className='flex justify-between mb-2 font-bold text-md'><p>DUE:</p>{FormatDate(task.endDate)}
                                    </div>
                                    <div className='text-gray-700 font-semibold text-sm'><p>TASK:</p>{task.task}
                                    </div>
                                    <div className='text-gray-700 text-xs font-semibold'>{task.task}</div>
                                </div>
                                <div className='mt-2 text-xs'>
                                    {task.tasktype === "Recurring" ? <EditRecur taskId={task.id}/> :
                                        <EditNonRecur taskId={task.id}/>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )

}
export default TaskList


export async function getTasks() {
    const user = await getUser()
// console.log(user)
    try {

        // Fetch non-recurring tasks from the database
        const nonRecurTask = await prisma.nonReccurTask.findMany({
            where: {
                OR: [
                    {
                        taskOwner: user
                    },
                    {
                        assignTaskTo: user
                    }
                ]
            }
        });

        const recurTask = await prisma.reccurTask.findMany({
            where: {
                OR: [
                    {
                        taskOwner: user
                    },
                    {
                        assignTaskTo: user
                    }
                ]
            }
        })

        const allTasks = [...nonRecurTask, ...recurTask];

        allTasks.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        // Return the sorted tasks
        return allTasks;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}
