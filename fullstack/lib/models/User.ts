 import mongoose, { Schema } from "mongoose";
 import bcrypt from "bcryptjs";

 export interface Iuser{
    email:string;
    password:string;
    _id?: mongoose.Types.ObjectId;
    createAt?: Date;
    updateAt?: Date;

 }

 const userSchema = new Schema<Iuser>(
    {
        email:{type:String, required:true, unique:true },
        password: {type:String, required: true},
    }
 )  