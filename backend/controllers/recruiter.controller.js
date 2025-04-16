import { Student } from "../models/student.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import  {Recruiter}  from "../models/recruiter.model.js";
import  RecruiterRequest  from "../models/recruiterrequest.model.js";
export const recregister = async (req, res) => {
      try {
            const {
                  companyname,
                  email,
                  cinnumber,
                  password,
                  companyaddress,
                  companystatus = "Active", // default if not provided
            } = req.body;

            if (!companyname || !email || !cinnumber || !password || !companyaddress) {
                  return res
                        .status(400)
                        .json({ message: "All fields are required", success: false });
            }

            const existingRequest = await RecruiterRequest.findOne({ email });
            const existingRecruiter = await Recruiter.findOne({ email });

            if (existingRequest || existingRecruiter) {
                  return res.status(400).json({
                        message: "Recruiter already registered or pending",
                        success: false,
                  });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            await RecruiterRequest.create({
                  companyname,
                  email,
                  cinnumber,
                  password: hashedPassword,
                  companyaddress,
                  companystatus,
            });

            return res.status(201).json({
                  message: "Registration submitted for approval",
                  success: true,
            });
      } catch (error) {
            console.error("Recruiter Register Error:", error.message);
            return res
                  .status(500)
                  .json({ message: "Internal server error", success: false });
      }
};

export const getAllRecruiters = async (req, res) => {
      try {
            const recruiters = await Recruiter.find().sort({ createdAt: -1 });

            return res.status(200).json({
                  success: true,
                  recruiters,
            });
      } catch (error) {
            console.error("Error fetching recruiters:", error);
            return res.status(500).json({
                  success: false,
                  message: "Failed to fetch recruiters",
            });
      }
};