import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoute.js";
dotenv.config();

const app = express();
   connectDB();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {

  console.log("ROUTE HIT");

  try {

    console.log(req.body);

    const { name, email, phone, message } =
      req.body;

    const transporter =
      nodemailer.createTransport({

        service: "gmail",

        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

    await transporter.sendMail({

      from: process.env.EMAIL,

      to: process.env.EMAIL,

      subject: "New Contact Form Message",

      html: `
        <h2>New Contact Message</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });

  } catch (error) {

  console.log("FULL ERROR =>", error);

  console.log("ERROR MESSAGE =>", error.message);

  res.status(500).json({
    success: false,
    message: error.message,
  });
}
});


app.use(
  "/uploads",
  express.static("uploads")
);


console.log("BLOG ROUTE IMPORTED");

app.use("/api/blog", blogRoutes);

console.log("BLOG ROUTE CONNECTED");


app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});