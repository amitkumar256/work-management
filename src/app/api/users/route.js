import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();

export function GET(request){
    const users=[
        {
            name:"amit kumar",
            phone:"8757",
            course:"java"
        }
    ];
    return NextResponse.json(users);
}