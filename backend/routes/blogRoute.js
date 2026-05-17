import express from "express";

import upload from "../middleWare/upload.js";

import {
  createBlog,
} from "../controller/blogController.js";
console.log("BLOG ROUTE FILE RUNNING");
const router = express.Router();

router.post(
  "/create",
  upload.single("image"),
  createBlog
);

export default router;