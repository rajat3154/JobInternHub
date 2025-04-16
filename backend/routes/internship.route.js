import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAllInternships, getInternshipById, postInternship } from "../controllers/internship.controller.js";
import { Internship } from "../models/internship.model.js";

const router = express.Router();
router.route("/post").post(isAuthenticated, postInternship);
router.get("/get", async (req, res) => {
      const { location, type, duration, stipend } = req.query;

      const filter = {};

      if (location) filter.location = { $in: Array.isArray(location) ? location : [location] };
      if (type) filter.type = { $in: Array.isArray(type) ? type : [type] };
      if (duration) filter.duration = { $in: Array.isArray(duration) ? duration : [duration] };

      if (stipend) {
            const stipendFilters = Array.isArray(stipend) ? stipend : [stipend];
            filter.$or = stipendFilters.map((range) => {
                  if (range === "0-5000") return { stipend: { $lte: 5000 } };
                  if (range === "5001-10000") return { stipend: { $gt: 5000, $lte: 10000 } };
                  if (range === "10001+") return { stipend: { $gt: 10000 } };
            });
      }

      const internships = await Internship.find(filter).populate("company");
      res.status(200).json({ success: true, internships });
});

router.route("/get/:id").get(isAuthenticated, getInternshipById);

export default router;