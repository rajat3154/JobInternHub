const getAppliedJobs = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const applications = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        populate: {
          path: "created_by", // This is the recruiter
          select: "companyname", // ✅ Only include companyName
        },
      });

    res.status(200).json({
      success: true,
      application: applications,
    });
  } catch (error) {
    next(error);
  }
};
export default getAppliedJobs;