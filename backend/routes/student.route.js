import { recregister } from "../controllers/recruiter.controller.js";
import { login, logout, sregister } from "../controllers/student.controller.js";
import express from "express";

const router = express.Router();


router.route("/student/signup").post(sregister);
router.route("/login").post(login);
router.route("/logout").get(logout);


router.route("/recruiter/signup").post(recregister);

export default router;
