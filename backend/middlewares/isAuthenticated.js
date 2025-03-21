import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const isAuthenticated = async (req, res, next) => {
      try {
            const token = req.cookies.token;

            if (!token) {
                  return res.status(401).json({
                        message: "User not authenticated",
                        success: false,
                  });
            }

            const decode = jwt.verify(token, process.env.SECRET_KEY);
            if (!decode || !decode.userId) {
                  return res.status(401).json({
                        message: "Invalid token",
                        success: false,
                  });
            }

            req.id = decode.userId; 
            console.log("Authenticated User ID:", req.id);
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
