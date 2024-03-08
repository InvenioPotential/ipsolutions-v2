import { prisma } from '@/lib/prisma';
import {NextResponse} from "next/server";
import { currentUser } from '@clerk/nextjs';
import {getUser}  from "@/app/utils/userData/page"

export async function GET(req: Request) {
    const urlParts = req.url.split('/');
    const statusIndex = urlParts.indexOf('allTask') + 1;
    const status = urlParts[statusIndex];
    const user = await getUser()

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
                ],
                stage: status
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
                ],
                stage: status
            }
        })

        const allTasks = [...nonRecurTask, ...recurTask];

        allTasks.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        // Return the sorted tasks

        // Return the fetched tasks as a JSON response
        return new Response(JSON.stringify(allTasks), { status: 200 })
    } catch (error) {
        console.error('Error fetching non-recurring tasks:', error);
        // Return an error response if there's an error
        return new Response('Internal Server Error', { status: 500 });
    }
}
