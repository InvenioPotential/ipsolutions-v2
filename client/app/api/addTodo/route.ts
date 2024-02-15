// Import necessary modules and dependencies
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';





// Define the handler function
export async function POST(request: Request, response: Response) {
    const body = await request.json()
    console.log(body);

    try {
        const { title, notes, duedate, priority } = body;
        // Create a new Todo using Prisma
        const newTodo = await prisma.notes.create({
            data: {
                title,
                notes,
                duedate,
                priority,
            }
        });
        // Send a success response with the new Todo
        response.json(newTodo);
    } catch (error) {
        // Handle errors
        console.error('Failed to add todo:', error);
        response.status(500).json({ error: 'Failed to add todo' });
    }

}
