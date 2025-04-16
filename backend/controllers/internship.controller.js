import { Internship } from "../models/internship.model.js"; // Adjust path if needed

export const postInternship = async (req, res) => {
      try {
            const {
                  title,
                  description,
                  duration,
                  stipend,
                  location,
                  type,
                  skills,
                  recruiterId,
            } = req.body;

            const userId = req.id; 
            if (
                  !title ||
                  !description ||
                  !duration ||
                  !stipend ||
                  !location ||
                  !type ||
                  !skills ||
                  !recruiterId
            ) {
                  return res.status(400).json({
                        message: "Please fill in all fields",
                        success: false,
                  });
            }
            const skillsArray = Array.isArray(skills)
                  ? skills
                  : skills.split(",").map((skill) => skill.trim());

            const internship = await Internship.create({
                  title,
                  description,
                  duration,
                  stipend,
                  location,
                  type,
                  skills: skillsArray,
                  recruiter: recruiterId,
                  created_by: userId,
            });

            return res.status(201).json({
                  message: "Internship posted successfully",
                  success: true,
                  internship,
            });
      } catch (error) {
            console.error("Error posting internship:", error);
            return res
                  .status(500)
                  .json({ message: "Server error", success: false });
      }
};

export const getAllInternships = async (req, res) => {
      try {
            const keyword = req.query.keyword || "";
            const query = {
                  $or: [
                        { title: { $regex: new RegExp(keyword, "i") } },
                        { description: { $regex: new RegExp(keyword, "i") } },
                  ],
            };

            const internships = await Internship.find(query)
                  .populate({ path: "recruiter", select: "companyname email companyaddress companystatus" }) 
                  .sort({ createdAt: -1 });

            if (!internships || internships.length === 0) {
                  return res.status(404).json({
                        message: "No jobs found",
                        success: false,
                  });
            }

            return res.status(200).json({
                  message: "Internships found",
                  internships,
                  success: true,
            });

      } catch (error) {
            console.log(error);
            return res.status(500).json({
                  message: "Server error",
                  success: false,
            });
      }
};
export const getInternshipById = async (req, res) => {
      try {
            const internshipId = req.params.id;
            const internship = await Internship.findById(internshipId).populate({
                  path: "applications"
            });
            if (!internship) {
                  return res.status(404).json({
                        message: "Internship not found",
                        success: false
                  })
            };
            return res.status(200).json({
                  internship,
                  success: true
            })
      } catch (error) {
            console.log(error);
      }
}