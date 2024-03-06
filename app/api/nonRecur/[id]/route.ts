import { prisma } from '@/lib/prisma';
import {NextResponse} from "next/server";
import {useRouter} from "next/router";
// import {revalidatePath} from "next/cache";
// import {redirect} from "next/navigation";


export async function DELETE(req: Request, params : {params : any}){
    const taskId = (params.params)
console.log(taskId)
    try {
        const deleteTask = await prisma.nonReccurTask.deleteMany({
            where : taskId,
        })

        Response.redirect("http://localhost:3000/dashboard")
        return new Response(JSON.stringify( {message : 'Task Deleted Successfully'} ), { status: 200 })
} catch (error) {
    console.error("Error deleting task:", error);
    return new Response('Internal Server Error', { status: 500 });
}
}
export async function PUT(req: Request, params: {params : any}) {
    const taskId = (params.params)

    try {
        const body = await req.json();
        console.log(taskId);

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

        const updateData: any = {}; // Initialize an empty object

        if (setCat) updateData.category = setCat;
        if (setSub) updateData.subcategory = setSub;
        if (setType) updateData.type = setType;
        if (setSite) updateData.site = setSite;
        if (statusInput) updateData.stage = statusInput;
        if (priorityInput) updateData.priority = priorityInput;
        if (dateInput) updateData.duedate = dateInput;
        if (taskInput) updateData.task = taskInput;
        if (remarkInput) updateData.remark = remarkInput;
        if (assignInput) updateData.assignTaskTo = assignInput;

        // Perform the update operation
        const updateTask = await prisma.nonReccurTask.update({
            data: updateData,
            where: taskId
        });



        return new Response(JSON.stringify(updateTask), { status: 200 })
    } catch (error) {
        console.error("Error creat  ing new task:", error);
        return new Response('Internal Server Error', { status: 500 });
    }
}



export async function GET( req :Request) {
    const urlParts = req.url.split('/');
    const taskIdIndex = urlParts.indexOf('nonRecur') + 1;
    const taskId = urlParts[taskIdIndex];
    // console.log("taskId: " + taskId);

    try {
        const tasks = await prisma.nonReccurTask.findUnique({
            where: {
                id: taskId
            },

        });

        return new Response(JSON.stringify(tasks), { status: 200 });
    } catch (error) {
        // Handle error
        console.error('Error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
