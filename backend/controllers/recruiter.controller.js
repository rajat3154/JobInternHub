import { Student } from "../models/student.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Recruiter } from "../models/recruiter.model.js";
export const recregister=async(req,res)=>{
      try {
            const { companyname, email, cinnumber, companyaddress, companystatus, role, password }=req.body;
            if (!companyname || !email || !cinnumber || !companyaddress || !companystatus  || !password){
                  return res.status(400).json({
                        message:"Something is missing",
                        success:false
                  })
            }
            const recruiter = await Recruiter.findOne({ email });
            if(recruiter){
                  return res.status(400).json({
                        message:"Email already exists",
                        success:false,
                  });
            }
            const hashedPassword=await bcrypt.hash(password,10);

            await Recruiter.create({
                  companyname,
                  email,
                  cinnumber,
                  companyaddress, 
                  companystatus, 
                  role,
                  password:hashedPassword
            })
            res.status(201).json({
                  message:"Request Sent Successfully",
                  success:true
            })
      } catch (error) {
            console.log("Error in register",error);
            return res.status(500).json({
                  message:"Internal server error",
                  success:false,
                  error:error.message,
            })
      }
}
