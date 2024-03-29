import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    name:String,
    email: {type: String,index: true, required:[true , "email required!!"],unique:true,},
    password:{
        type:String,
        required:[true,"password required!!"]
    },
    about:String,
    profileURL:String,
});
export const User = mongoose.models.users || mongoose.model("users",UserSchema);