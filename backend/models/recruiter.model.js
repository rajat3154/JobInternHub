import mongoose from "mongoose"
const recruiterSchema=new mongoose.Schema({
      companyname:{
            type:String,
            required:true
      },
      email:{
            type:String,
            required:true,
            unique:true
      },
      cinnumber:{
            type:Number,
            required:true
      },
      companyaddress:{
            type:String,
            required:true
      },
      companystatus:{
            type:String,
            required:true
      },
      role:{
            type:String,
            default: "recruiter",
      },
      password:{
            type:String,
            required:true
      }
},{timestamps:true})

export const Recruiter=mongoose.model('Recruiter',recruiterSchema);