import express from "express";

import { isAdmin } from "../middleware/auth.js";

import upload from "../middleWare/upload.js";

import {

  createBlog,
  getAllBlogs,
  getAllBlogsPage,
  getSingleBlog,
  updateBlog,
  deleteBlog,

} from "../controller/blogController.js";

const router = express.Router();

console.log("BLOG ROUTE FILE RUNNING");

// ============================
// CREATE BLOG
// ============================

router.post(
  "/create",
  upload.single("image"),
  createBlog
);

// ============================
// GET SINGLE BLOG
// IMPORTANT ✅
// ============================

router.get(
  "/:id",
  getSingleBlog
);

// ============================
// UPDATE BLOG
// ============================

router.put(
  "/:id",
  isAdmin,
  upload.single("image"),
  updateBlog
);

// ============================
// DELETE BLOG
// ============================

router.delete(
  "/:id",
  isAdmin,
  deleteBlog
);

// ============================
// ALL BLOGS PAGE
// ============================

router.get(
  "/all",
  getAllBlogsPage
);

// ============================
// RECENT BLOGS
// ============================

router.get(
  "/",
  getAllBlogs
);

export default router;