import express from "express";

import {
  getRecentEnquiries
} from "../controller/inquiryCon.js";

const router = express.Router();

router.get(
  "/recent",
  getRecentEnquiries
);

export default router;