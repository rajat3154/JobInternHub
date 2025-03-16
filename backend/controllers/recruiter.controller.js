import { Student } from "../models/student.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Recruiter } from "../models/recruiter.model.js";
export const recregister = async (req, res) => {
      try {
            const { companyname, email, cinnumber, companyaddress, companystatus, role, password } = req.body;

            // Check if all required fields are provided
            if (!companyname || !email || !cinnumber || !companyaddress || !companystatus || !password) {
                  return res.status(400).json({
                        message: "All fields are required",
                        success: false,
                  });
            }

            // Check if recruiter already exists
            const existingRecruiter = await Recruiter.findOne({ email });
            if (existingRecruiter) {
                  return res.status(400).json({
                        message: "Email already exists",
                        success: false,
                  });
            }

            // Hash the password before saving
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new recruiter
            const newRecruiter = new Recruiter({
                  companyname,
                  email,
                  cinnumber,
                  companyaddress,
                  companystatus,
                  role: role || "recruiter",
                  password: hashedPassword,
            });

            await newRecruiter.save();

            res.status(201).json({
                  message: "Request sent to admin successfully",
                  success: true,
            });

      } catch (error) {
            console.error("Error in recruiter registration:", error);
            res.status(500).json({
                  message: "Internal server error",
                  success: false,
                  error: error.message,
            });
      }
};