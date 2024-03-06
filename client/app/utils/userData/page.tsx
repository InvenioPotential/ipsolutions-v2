import {currentUser} from "@clerk/nextjs"

export async function getUser() {
    const user = await currentUser();
    const username = user?.username;
    return username;
}