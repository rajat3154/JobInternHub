import { Application } from "../models/application.model.js";



export const applyJob = async (req, res) => {
      try {
            const userId = req.id;
            const jobId = req.params.id;
            if (!jobId) {
                  return res.status(400).json({
                        message: "Job id is required",
                        success: false,
                  });
            }
            //check if the user has already applied for job
            const existingApplication = await Application.findOne({
                  job: jobId,
                  applicant: userId,
            });
            if (existingApplication) {
                  return res.status(400).json({
                        message: "You have already applied for this job",
                        success: false,
                  });
            }
            //check if the job exists
            const job = await Job.findById(jobId);
            if (!job) {
                  return res.status(404).json({
                        message: "Job not found",
                        success: false,
                  });
            }
            //create a new application
            const newApplication = await Application.create({
                  job: jobId,
                  applicant: userId,
            });
            job.applications.push(newApplication._id);
            await job.save();
            return res.status(201).json({
                  message: "Application submitted successfully",
                  success: true,
            });
      } catch (error) {
            console.log(error);
      }
};
export const getAppliedJobs = async (req, res) => {
      try {
            const userId = req.id;
            const application = await Application.find({ applicant: userId })
                  .sort({ createdAt: -1 })
                  .populate({
                        path: "job",
                        options: { sort: { createdAt: -1 } },
                        populate: {
                              path: "recruiter",  // ✅ Changed "company" to "recruiter"
                              options: { sort: { createdAt: -1 } },
                        },
                  });

            if (!application || application.length === 0) {
                  return res.status(404).json({ message: "No Applications found", success: false });
            }

            return res.status(200).json({
                  application,
                  success: true,
            });
      } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Server error", success: false });
      }
};
import { Job } from "../models/job.model.js";
import { Student } from "../models/student.model.js"; // ✅ Import Student model

export const getApplicants = async (req, res) => {
      try {
            const jobId = req.params.id;
            const job = await Job.findById(jobId).populate({
                  path: "applications",
                  options: { sort: { createdAt: -1 } },
                  populate: {
                        path: "applicant",
                        model: "Student", // ✅ Explicitly specify Student model
                        select: "name email skills resume", // ✅ Only fetch relevant fields
                  },
            });

            if (!job) {
                  return res.status(404).json({ message: "No Job found", success: false });
            }

            return res.status(200).json({
                  job,
                  applicants: job.applications.map(app => app.applicant), // ✅ Return only applicants
                  success: true,
            });

      } catch (error) {
            console.error("Error in getApplicants:", error);
            return res.status(500).json({ message: "Server error", success: false });
      }
};
