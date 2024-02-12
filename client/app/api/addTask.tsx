// pages/api/addTask.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Prisma } from '@prisma/client'; // Adjust the import path as needed
import { NonRecurTask } from './nonRecurTask'; // Adjust the import path as needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const taskData: NonRecurTask = req.body;

        try {
            const savedTask = await Prisma.NonRecur.create({
                data: {
                    ...taskData,
                    date: new Date(taskData.date),
                    due: new Date(taskData.due),
                },
            });
            res.status(200).json(savedTask);
        } catch (error) {
            console.error('Failed to save task:', error);
            res.status(500).json({ error: 'Failed to add task' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
