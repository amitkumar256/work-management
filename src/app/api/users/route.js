import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";

// await connectDb();

export async function GET(request){
  let users=[]
  try{
    await connectDb();

    users= await User.find();

  }catch(error){
    console.log(error);
    return NextResponse.json({
        message:"failed to get users",
        success:false,
    });

  }
  return NextResponse.json(users);1
}
export async function POST(request){
    const {name,email,password,about,profileURL}=await request.json()
    const user = new User({
        name,email,password,about,profileURL,
    });
    try{
      user.password= bcrypt.hashSync(user.password,
       parseInt( process.env.BCRYPT_SALT));
      console.log(user);
      await connectDb();

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
    },{
      status:500
    })
}
}