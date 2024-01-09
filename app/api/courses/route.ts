//export asyn funciton Post(that take req: Request)//than open a try and catch
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server"

export async function Post(
    req: Request,
) {
    try {
        const {userId} = auth();
    } catch (error) {
        console.log("[COURSES]", error)
        return new NextResponse("Internal Error",{ status: 500});
    }
}