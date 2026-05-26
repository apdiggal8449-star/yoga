import mongoose from "mongoose";

import bcrypt from "bcryptjs";

import dotenv from "dotenv";

import Admin from "./models/admin.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)

.then(async () => {

  try {

    const hashedPassword =
      await bcrypt.hash(
        "123456",
        10
      );

    await Admin.create({

      email: "admin@gmail.com",

      password: hashedPassword,
    });

    console.log(
      "✅ Admin Created Successfully"
    );

    process.exit();

  } catch (error) {

    console.log(error);
  }
});