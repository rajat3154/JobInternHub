import { Recruiter } from "../models/recruiter.model.js";
import { Student } from "../models/student.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
export const sregister = async (req, res) => {
      try {
            const { fullname, email, phonenumber, password, role, status } = req.body;
            console.log(fullname,email,phonenumber,password,role,status);
            // Validate required fields
            if (!fullname || !email || !phonenumber || !password || !status || !role) {
                  return res.status(400).json({
                        message: "All fields are required",
                        success: false
                  });
            }

            // Ensure role is "student"
            if (role !== "student") {
                  return res.status(400).json({
                        message: "Invalid role",
                        success: false
                  });
            }

            // Check if email already exists
            const studentExists = await Student.findOne({ email });
            if (studentExists) {
                  return res.status(400).json({
                        message: "Email already exists",
                        success: false
                  });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create student
            await Student.create({
                  fullname,
                  email,
                  phonenumber,
                  password: hashedPassword,
                  role:'student',
                  status,
            });

            res.status(201).json({
                  message: "Account created successfully",
                  success: true
            });

      } catch (error) {
            console.error("Error in register", error);
            return res.status(500).json({
                  message: "Internal server error",
                  success: false,
                  error: error.message,
            });
      }
};


export const login = async (req, res) => {
      try {
            const { email, password, role } = req.body;

            if (!email || !password || !role) {
                  return res.status(400).json({
                        message: "All fields are required",
                        success: false,
                  });
            }

            const userModel = role === 'student' ? Student : Recruiter;
            const user = await userModel.findOne({ email });

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

            if (role !== user.role) {
                  return res.status(400).json({
                        message: "Account does not exist with current role",
                        success: false,
                  });
            }

            const tokenData = role === 'student' ? { studentId: user._id } : { userId: user._id };
            const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
                  expiresIn: "1d",
            });

            // Create response based on role
            const userResponse = role === 'student'
                  ? {
                        _id: user._id,
                        fullname: user.fullname,
                        email: user.email,
                        phonenumber: user.phonenumber,
                        role: user.role,
                        status: user.status,
                  }
                  : {
                        _id: user._id,
                        companyname: user.companyname,
                        email: user.email,
                        cinnumber: user.cinnumber,
                        role: user.role,
                        status: user.status,
                  };

            const welcomeMessage = role === 'student'
                  ? `Welcome back ${user.fullname}`
                  : `Welcome back ${user.companyname}`;

            return res
                  .status(200)
                  .cookie("token", token, {
                        maxAge: 1 * 24 * 60 * 60 * 1000,
                        httpOnly: true,
                        sameSite: "strict",
                  })
                  .json({
                        message: welcomeMessage,
                        success: true,
                        user: userResponse,
                  });

      } catch (error) {
            console.error(error);
            return res.status(500).json({
                  message: "Internal server error",
                  success: false,
            });
      }
};
export const logout = async (req, res) => {
      try {
            return res.status(200).cookie("token", "", { maxAge: 0 }).json({
                  message: "Logged out successfully",
                  success: true,
            });
      } catch (error) {
            console.log(error);
      }
};
