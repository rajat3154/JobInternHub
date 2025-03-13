import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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

export const login = async (req, res) => {
      try {
            const { email, password, role } = req.body;
            if (!email || !password || !role) {
                  return res.status(404).json({
                        message: "Something is missing",
                        success: false,
                  });
            }
            let user = await User.findOne({ email });
            if (!user) {
                  return res.status(400).json({
                        message: "Incorrect email or password",
                        success: false,
                  });
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                  return res.status(400).json({
                        message: "Incorrect email or password",
                        success: false,
                  });
            }
            //check role is correct or not
            if (role != user.role) {
                  return res.status(400).json({
                        message: "Account does not exist with current role",
                        success: false,
                  });
            }
            const tokenData = {
                  userId: user._id,
            };

            const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
                  expiresIn: "1d",
            });

            user = {
                  _id: user._id,
                  fullname: user.fullname,
                  email: user.email,
                  birthdate: user.birthdate,
                  role: user.role,
                  status:user.status,
            };

            return res
                  .status(200)
                  .cookie("token", token, {
                        maxAge: 1 * 24 * 60 * 60 * 1000,
                        httpsOnly: true,
                        sameSite: "strict",
                  })
                  .json({
                        message: `Welcome back ${user.fullname}`,
                        success: true,
                        user
                  });
      } catch (error) {
            console.log(error);
      }
};