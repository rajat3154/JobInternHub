import { recregister } from "../controllers/recruiter.controller.js";
import { login, sregister } from "../controllers/student.controller.js";
import express from "express";

const router = express.Router();


router.route("/student/signup").post(sregister);
router.route("/login").post(login);


router.route("/recruiter/signup").post(recregister);

export default router;
