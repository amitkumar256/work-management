import mongoose from "mongoose";
import { User } from "@/models/user";
export const connectDb = async()=>{


try{
    
const {connection}= await mongoose.connect(process.env.MONGO_DB_URL,{
    dbName: "work_manager",
});

console.log("db connected...");

const uuser = new User({
    name:"test name",
    email:"al@gmail.com",
    password:"tefyu23d",
    about:"this is testing"
});
await uuser.save();
console.log("user is created")
console.log(connection);
}catch(error){
console.log("failed to connect with datbase");
console.log(error);
}
};