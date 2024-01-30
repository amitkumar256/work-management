import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/user";

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
export async function POST(request){
    const {name,email,password,about,profileURL}=await request.json()
    const user = new User({
        name,email,password,about,profileURL,
    });
    try{
    const createdUser=await user.save();
    const response =NextResponse.json(user,{
        status:201,
    })
    return response;
}
catch(error){
    console.log(error);
    return NextResponse.json({
        message:"failed to create user!",
        status:false,
    })
}
}