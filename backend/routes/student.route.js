import { deleteRecruiter, getAllRecruiters, recregister } from "../controllers/recruiter.controller.js";
import { deleteStudent, getAllStudents, isAdmin, login, logout, sregister, updateProfile } from "../controllers/student.controller.js";
import express from "express";
import { singleUpload } from "../middlewares/multer.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import isaAdmin from "../middlewares/isAuthenticated.js";

const router = express.Router();


router.route("/student/signup").post(singleUpload, sregister);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/student/profile/update").post(isAuthenticated, singleUpload, updateProfile);
router.route('/student/students').get(getAllStudents);
router.delete("/students/:id", isAuthenticated, isaAdmin, deleteStudent);

router.route("/recruiter/signup").post(singleUpload, recregister);
router.route("/recruiter/recruiters").get(getAllRecruiters);
router.delete("/recruiter/:id", isAuthenticated, isaAdmin, deleteRecruiter);

export default router;
