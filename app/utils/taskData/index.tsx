import { getUser } from '@/app/utils/userData/page'
import { prisma } from '@/lib/prisma';

export async function getComplete() {
    const user = await getUser();

    try {
        const nonRecurTasks = await prisma.nonReccurTask.findMany({
            where: {
                taskOwner: user,
                stage: "Completed"
            }
        });

        const recurTasks = await prisma.reccurTask.findMany({
            where: {
                taskOwner: user,
                stage: "Completed"
            }
        });

        // Merge and return tasks from both tables
        return [...nonRecurTasks, ...recurTasks];
    } catch (error) {
        console.log("Error fetching data:", error);
        throw error;
    }
}