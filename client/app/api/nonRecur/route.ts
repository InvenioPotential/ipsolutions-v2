import { NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';



export async function POST(req: Request, res: NextApiResponse) {
    try {
        const body = await req.json();
        console.log(body);

        const {
            setCat,
            setSub,
            setType,
            setSite,
            stageInput,
            priorityInput,
            dateInput,
            taskInput,
            remarkInput,
            assignInput,
        } = body;
        // Create a new Todo using Prisma
        const newNonReccurTask = await prisma.nonReccurTask.create({
            data: {
                category : setCat,
                subcategory : setSub,
                type : setType,
                site : setSite,
                stage : stageInput,
                priority : priorityInput,
                duedate : dateInput,
                task : taskInput,
                remark :remarkInput,
                assignTaskTo : assignInput,
            }
        });
        return new Response(JSON.stringify(newNonReccurTask), { status: 200 })
    } catch (error) {
        console.error("Error creating new task:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function GET(req: Request, res: NextApiResponse) {

    try {
        // Fetch non-recurring tasks from the database
        const nonReccurTask = await prisma.nonReccurTask.findMany();

        // Return the fetched tasks as a JSON response
        return new Response(JSON.stringify(nonReccurTask), { status: 200 })
    } catch (error) {
        console.error('Error fetching non-recurring tasks:', error);
        // Return an error response if there's an error
        res.status(500).json({ error: 'Internal Server Error' });
    }
}