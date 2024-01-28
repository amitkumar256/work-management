import { NextResponse } from "next/server";

export function DELETE( request,{params}){
    console.log(params);
    const c = params.userid;
    console.log(c);
    return NextResponse.json({
        message:"testing delete",
    });
}