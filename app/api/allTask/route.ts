import { prisma } from '@/lib/prisma';
import {NextResponse} from "next/server";
import { currentUser } from '@clerk/nextjs';
import {getUser}  from "@/app/utils/userData/page"

export async function GET(req: Request, res: NextResponse) {
    const user = await getUser()

    try {

        // Fetch non-recurring tasks from the database
        const nonRecurTask = await prisma.nonReccurTask.findMany({
            where : {
                taskOwner : user
            }
        });

        const recurTask = await prisma.reccurTask.findMany({
            where : {
                taskOwner : user
            }
        })

        const combinedTasks = [...nonRecurTask, ...recurTask];

        // Sort the combined tasks by their creation date in descending order
        combinedTasks.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());



        // Return the fetched tasks as a JSON response
        return new Response(JSON.stringify(combinedTasks), { status: 200 })
    } catch (error) {
        console.error('Error fetching non-recurring tasks:', error);
        // Return an error response if there's an error
        return new Response('Internal Server Error', { status: 500 });
    }
}
