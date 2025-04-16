import { Job } from "../models/job.model.js";
import { Student } from "../models/student.model.js";
import  {Recruiter}  from "../models/recruiter.model.js";

export const postJob = async (req, res) => {
      try {
            const {
                  title,
                  description,
                  requirements,
                  salary,
                  location,
                  jobType,
                  experience,
                  position
            } = req.body;

            const recruiterId = req.user.id; // ✅ logged-in recruiter
            console.log(recruiterId);
            // ✅ Fetch recruiter details
            const recruiter = await Recruiter
            .findById(recruiterId);

            if (!recruiter) {
                  return res.status(404).json({
                        message: "Recruiter not found",
                        success: false
                  });
            }

            // ✅ Create job with company name and recruiter ID
            const job = await Job.create({
                  title,
                  description,
                  requirements: Array.isArray(requirements) ? requirements : [requirements],
                  salary: Number(salary),
                  location,
                  jobType,
                  experience,
                  position,
                  company: recruiter.companyname, // ✅ Store company name directly
                  created_by: recruiterId
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
  .populate({ path: "created_by", select: "companyname email companyaddress companystatus" }) // ✅ changed recruiter ➝ created_by
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


export const getRecuiterJobs = async (req, res) => {
      try {

            const jobs = await Job.find({ created_by: req.id }).sort({ createdAt: -1 });

            if (!jobs) {
                  return res.status(404).json({
                        message: "No jobs found",
                        success: false
                  })
            }
            return res.status(200).json({
                  jobs,
                  success: true
            })

      } catch (error) {
            console.log(error);
      }
}
// Get latest jobs
export const getLatestJobs = async (req, res) => {
      try {
            const latestJobs = await Job.find()
                  .sort({ createdAt: -1 }) // Sort by newest first
                  .limit(5); // Fetch only top 6

            res.status(200).json({ success: true, jobs: latestJobs });
      } catch (error) {
            console.error("Failed to fetch latest jobs:", error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
      }
};
