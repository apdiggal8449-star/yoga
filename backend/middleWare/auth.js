// middleware/auth.js

import jwt from "jsonwebtoken";

export const isAdmin = (req, res, next) => {
  try {
    const token =
      req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "No token",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    if (decoded.role !== "admin") {
      return res.status(403).json({
        message: "Only admin allowed",
      });
    }

    next();

  } catch (error) {
    res.status(401).json({
      message: "Please Login",
    });
  }
};