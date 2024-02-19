import mongoose from "mongoose";
import { User } from "@/models/user";

const config = {
    isConnected:0,
};
export const connectDb = async()=>{

if(config.isConnected){
    return;
}
try{
    
const {connection}= await mongoose.connect(process.env.MONGO_DB_URL,{
    dbName: "work_manager",
});

console.log("db connected...");
config.isConnected = connection.readyState;

console.log("user is created")

console.log(connection);
}catch(error){
console.log("failed to connect with datbase");
console.log(error);
}
};