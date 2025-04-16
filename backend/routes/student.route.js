import { getAllRecruiters, recregister } from "../controllers/recruiter.controller.js";
import { getAllStudents, isAdmin, login, logout, sregister, updateProfile } from "../controllers/student.controller.js";
import express from "express";
import { singleUpload } from "../middlewares/multer.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();


router.route("/student/signup").post(singleUpload,sregister);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/student/profile/update").post(isAuthenticated, singleUpload, updateProfile);
router.route('/student/students').get(getAllStudents);


router.route("/recruiter/signup").post(recregister);
router.route("/recruiter/recruiters").get(getAllRecruiters);

export default router;
