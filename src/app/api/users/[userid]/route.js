
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {userid} = params;
    console.log("userid "+ userid);

    const user = await User.findById(userid)
    return NextResponse.json(user);
}

export async function DELETE( request,{params}){
    const userId = params.userid;
    console.log("userid "+ userId);
    try{
      await  User.deleteOne({
            _id:userId,
        });
        return NextResponse.json({
            message:"user deleted",
            success:true,
        });
    }catch(error){
        return NextResponse.json({
            message:"error in deleting user",
            success:false,
        });
    }
   
}
export async function PUT(request,{params}){
    const userId = params.userid;
    console.log("user"+userId)
    const{name,password,about,profileURL} = await request.json();
    try{
      const user = await  User.findById(userId);

      user.name=name;
      user.about=about;
      user.password=password;
      user.profileURL=profileURL;
      const updatedUser=await user.save();
      return NextResponse.json(updatedUser);
    }catch(error){
        return NextResponse.json({
            message:"failed to update user!!",
            Success:false

        })
    }
}