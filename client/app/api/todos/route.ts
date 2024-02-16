// Import necessary modules and dependencies
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';





export async function POST(req: Request, res: NextApiResponse) {
    try {
        const body = await req.json();
        console.log(body);

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
        return new Response(JSON.stringify(newTodo), { status: 200 })
    } catch (error) {
        console.error("Error creating new todo:", error);
        // Send an error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function GET(req: Request, res: NextApiResponse) {
    try {
        const todos = await prisma.notes.findMany();// Send a success response with the todos
        console.log(todos);
        return new Response(JSON.stringify(todos), { status: 200 })
    } catch (error) {
        console.error("Error fetching todos:", error);
        // Send an error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function DELETE(req: Request, res: NextApiResponse) {
    try {
        const body = await req.json();

        const { ids } = body; // Extract todo id from the request body
        // Delete the todo item from the database using Prisma
        await prisma.notes.delete({
            where: {
                id: parseInt(ids, 10),
            },
        }); 
        // Send a success response with a message
        return new Response(JSON.stringify({message:'Todo item deleted successfully'}), { status: 200 });

    } catch (error) {
        console.error('Error deleting todo item:', error);
        // Send an error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
}