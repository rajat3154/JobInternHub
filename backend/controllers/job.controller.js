import { Job } from "../models/job.model.js";
import { Student } from "../models/student.model.js";

export const postJob = async (req, res) => {
      try {
            const { title, description, requirements, salary, location, jobType, experience, position, recruiterId } = req.body;
            const userId = req.id;

            if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !recruiterId) {
                  return res.status(400).json({
                        message: "Please fill in all fields",
                        success: false,
                  });
            }

            const job = await Job.create({
                  title,
                  description,
                  requirements: Array.isArray(requirements) ? requirements : [requirements],  
                  salary: Number(salary),
                  location,
                  jobType,
                  experience,
                  position,
                  recruiter: recruiterId,
                  created_by: userId
            });

            return res.status(201).json({
                  message: "Job posted successfully",
                  success: true,
                  job
            });

      } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Server error", success: false });
      }
};


export const getAllJobs = async (req, res) => {
      try {
            const keyword = req.query.keyword || "";
            const query = {
                  $or: [
                        { title: { $regex: new RegExp(keyword, "i") } },
                        { description: { $regex: new RegExp(keyword, "i") } },
                  ],
            };

            const jobs = await Job.find(query)
                  .populate({ path: "recruiter", select: "companyname email companyaddress companystatus" }) 
                  .sort({ createdAt: -1 });

            if (!jobs || jobs.length === 0) {
                  return res.status(404).json({
                        message: "No jobs found",
                        success: false,
                  });
            }

            return res.status(200).json({
                  message: "Jobs found",
                  jobs,
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
export const getJobById = async (req, res) => {
      try {
            const jobId = req.params.id;
            const job = await Job.findById(jobId).populate({
                  path: "applications"
            });
            if (!job) {
                  return res.status(404).json({
                        message: "Job not found",
                        success: false
                  })
            };
            return res.status(200).json({
                  job,
                  success: true
            })
      } catch (error) {
            console.log(error);
      }
}