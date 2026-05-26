import jwt from "jsonwebtoken";

import bcrypt from "bcryptjs";

import Admin from "../models/Admin.js";

export const adminLogin = async (
  req,
  res
) => {

  try {

    const { email, password } =
      req.body;

    // CHECK INPUTS

    if (!email || !password) {

      return res.status(400).json({
        success: false,
        message: "Email and password required",
      });
    }

    // FIND ADMIN

    const admin =
      await Admin.findOne({ email });

    console.log("ADMIN =>", admin);

    // ADMIN NOT FOUND

    if (!admin) {

      return res.status(401).json({
        success: false,
        message: "Admin not found",
      });
    }

    // PASSWORD MATCH

    const isMatch =
      await bcrypt.compare(
        password,
        admin.password
      );

    console.log("PASSWORD MATCH =>", isMatch);

    // INVALID PASSWORD

    if (!isMatch) {

      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    // GENERATE TOKEN

    const token = jwt.sign(
      {
        id: admin._id,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // SUCCESS RESPONSE

    res.status(200).json({

      success: true,

      message: "Login Successful",

      token,

      role: "admin",

      admin: {
        id: admin._id,
        email: admin.email,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};