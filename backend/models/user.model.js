// Full name
// email
// phone no
// role
// password
// Fresher / Experienced
// DOB
// Gender
// Location

import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
      fullname:{
            type:String,
            required:true
      },
      email:{
            type:String,
            required:true,
            unique:true
      },
      dateofbirth:{
            type:Date,
            required:true
      },
      password:{
            type:String,
            required:true
      },
      role:{
            type:String,
            enum:['student','recruiter'],
            required:true
      },
      status:{
            type:String,
            enum:['fresher','experienced'],
            required:true
      }
},{timestamps:true})

export const User=mongoose.model('User',userSchema);