import mongoose from "mongoose";
import dotenv from "dotenv";
import Blog from "../models/Blog.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

// sample data generator
const blogs = Array.from({ length: 50 }, (_, i) => ({
  title: `Yoga Blog Title ${i + 1}`,
  category: i % 2 === 0 ? "Yoga" : "Meditation",
  description:
    "This is a sample blog created using seed data for testing pagination and UI.",
  image:
    "uploads/sample.jpg",
}));

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB Connected for Seeding");

    // old data delete (optional)
    await Blog.deleteMany();

    // insert 50 blogs
    await Blog.insertMany(blogs);

    console.log("50 Blogs Inserted Successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedDB();