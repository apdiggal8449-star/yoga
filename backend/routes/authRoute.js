// routes/authRoutes.js

import express from "express";
import { adminLogin } from "../controller/authController.js";

const router = express.Router();

router.post("/admin-login", adminLogin);

export default router;