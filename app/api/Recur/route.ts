import { prisma } from '@/lib/prisma';
import {NextResponse} from "next/server";
import {getUser} from "@/app/utils/userData/page";



export async function POST(req: Request, res: NextResponse) {
    const user = await getUser()
    console.log(user)
    try {
        const body = await req.json();
        console.log(body);

        const {
            setCat,
            setSub,
            setType,
            setSite,
            statusInput,
            recurInput,
            priorityInput,
            startDateInput,
            endDateInput,
            taskInput,
            remarkInput,
            assignInput,
        } = body;

        const newReccurTask = await prisma.reccurTask.create({
            data: {
                category : setCat,
                subcategory : setSub,
                type : setType,
                site : setSite,
                stage : statusInput,
                reccur : recurInput,
                priority : priorityInput,
                startDate : startDateInput,
                EndDate : endDateInput,
                task : taskInput,
                remark :remarkInput,
                assignTaskTo : assignInput,
                taskOwner : user,

            }
        });
        return new Response(JSON.stringify(newReccurTask), { status: 200 })
    } catch (error) {
        console.error("Error creating new task:", error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

export async function GET(req: Request, res: NextResponse) {
    const user = await getUser()

    try {
        // Fetch non-recurring tasks from the database
        const ReccurTask = await prisma.reccurTask.findMany({
                where : {
                    taskOwner : user
                }
            }
        );

        // Return the fetched tasks as a JSON response
        return new Response(JSON.stringify(ReccurTask), { status: 200 })
    } catch (error) {
        console.error('Error fetching non-recurring tasks:', error);
        // Return an error response if there's an error
        return new Response('Internal Server Error', { status: 500 });
    }
}