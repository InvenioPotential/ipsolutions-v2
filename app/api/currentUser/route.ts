
import { currentUser } from '@clerk/nextjs';
import {NextRequest, NextResponse} from "next/server";
export async function GET(req: Request, res: NextResponse) {
    try {
        const user = await currentUser();
        if (!user) {
            return new Response("User Not Authenticated", { status: 500 });
        }

        const userData =  user.username

        return new Response(JSON.stringify({ userData}), { status: 200 });
    } catch (error) {
        console.error('Error fetching current user:', error);
        return new Response("Internal Server Error", { status: 500 });
    }
}