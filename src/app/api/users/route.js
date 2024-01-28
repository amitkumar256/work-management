import { NextResponse } from "next/server";

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