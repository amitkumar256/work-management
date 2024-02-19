import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// await connectDb();

export async function GET(request,{params}){
    const taskId = params.taskid;
    try{
        await connectDb();

       const task =await Task.findById(taskId);
       return NextResponse.json(task);
    }catch(error){
        console.log(error)
        return getResponseMessage("error in gettin response!!",404,false);
    }

}

export async function PUT(request,{params}){
    const taskId =params.taskid;
    try{
        const {title,content,status} = await request.json();
        let task = await Task.findById(taskId);
        (task.title = title),
        (task.content=content),
        (task.status=status);
        await connectDb();

        const updatedTask = await task.save();
return NextResponse.json(updatedTask);
    }catch(error){
        console.log(error)
        return getResponseMessage("errpor in updating task",500,false)

    }

}
export async function DELETE(request,{params}){
    const taskId = params.taskid;
    await connectDb();

    try{
        await Task.deleteOne({
            _id:taskId,
        });
        return getResponseMessage("Task Deleted !!",200,true);
    }catch(error){
        console.log(error);
        return getResponseMessage("error in deleting task",500,false);
    }

}
