import { prisma } from '@/lib/prisma';
import {NextResponse} from "next/server";
import { currentUser } from '@clerk/nextjs';
import {getUser}  from "@/app/utils/userData/page"



export async function POST(req: Request, res: NextResponse) {
    const user = await getUser()
    console.log(user)
    try {
        const body = await req.json();

        const {
            setCat,
            setSub,
            setType,
            setSite,
            statusInput,
            priorityInput,
            dateInput,
            taskInput,
            remarkInput,
            assignInput,

        } = body;

        const newNonReccurTask = await prisma.nonReccurTask.create({
            data: {
                category : setCat,
                subcategory : setSub,
                type : setType,
                site : setSite,
                stage : statusInput,
                priority : priorityInput,
                duedate : dateInput,
                task : taskInput,
                remark :remarkInput,
                assignTaskTo : assignInput,
                taskOwner : user,
            }
        });
        return new Response(JSON.stringify(newNonReccurTask), { status: 200 })
    } catch (error) {
        console.error("Error creating new task:", error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

export async function GET(req: Request, res: NextResponse) {
    const user = await getUser()

    try {

        // Fetch non-recurring tasks from the database
        const nonRecurTask = await prisma.nonReccurTask.findMany({
            where : {
                taskOwner : user
            }
        });

        // Return the fetched tasks as a JSON response
        return new Response(JSON.stringify(nonRecurTask), { status: 200 })
    } catch (error) {
        console.error('Error fetching non-recurring tasks:', error);
        // Return an error response if there's an error
        return new Response('Internal Server Error', { status: 500 });
    }
}


