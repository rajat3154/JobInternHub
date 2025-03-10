import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const register=async(req,res)=>{
      try {
            const {fullname,email,dateofbirth,password,role,status}=req.body;
            if (!fullname|| !email|| !dateofbirth|| !password|| !role|| !status){
                  return res.status(400).json({
                        message:"Something is missing",
                        success:false
                  })
            }
            const user=await User.findOne({email});
            if(user){
                  return res.status(400).json({
                        message:"Email already exists",
                        success:false,
                  });
            }
            const hashedPassword=await bcrypt.hash(password,10);

            await User.create({
                  fullname,
                  email,
                  dateofbirth,
                  password:hashedPassword,
                  role,
                  status,
            })
            res.status(201).json({
                  message:"Account created successfully",
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