import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Student } from "../models/student.model.js";
import { Recruiter } from "../models/recruiter.model.js";

dotenv.config();

// Authentication Middleware
const isAuthenticated = async (req, res, next) => {
      try {
            // Retrieve token from cookies
            const token = req.cookies.token;
            console.log('Token:', token);
            
            // Check if token exists
            if (!token) {
                  return res.status(401).json({
                        message: "User not authenticated, token missing",
                        success: false,
                  });
            }

            // Verify the token
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            console.log('Decoded token:', decoded);

            // Ensure the decoded token has the required userId
            if (!decoded || !decoded.userId) {
                  return res.status(401).json({
                        message: "Invalid token or missing userId",
                        success: false,
                  });
            }

            // Find user in database
            let user = await Student.findById(decoded.userId);
            if (!user) {
                  user = await Recruiter.findById(decoded.userId);
            }

            if (!user) {
                  return res.status(401).json({
                        message: "User not found",
                        success: false,
                  });
            }

            // Attach the user to the request
            req.user = user;
            console.log("Authenticated User:", {
                  id: user._id,
                  role: user.role,
                  type: user.constructor.modelName
            });

            // Proceed to the next middleware or route handler
            next();

      } catch (error) {
            console.error("Authentication Error:", error.message);
            return res.status(500).json({
                  message: "Internal server error",
                  success: false,
            });
      }
};

export default isAuthenticated;

export const isAdmin = (req, res, next) => {
      if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Only admins can perform this action." });
      }
      next();
};