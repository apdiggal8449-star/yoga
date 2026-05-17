import Blog from "../models/Blog.js";

export const createBlog = async (
  req,
  res
) => {

  try {

    const {
      title,
      category,
      description,
    } = req.body;

    const image = req.file.filename;

    const newBlog = new Blog({
      title,
      category,
      description,
      image,
    });

    await newBlog.save();

    res.status(201).json({
      success: true,
      message:
        "Blog Created Successfully",
      newBlog,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};