import Blog from "../models/Blog.js";

// CREATE BLOG
export const createBlog = async (req, res) => {
  try {
    const { title, category, description } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const imageUrl = `uploads/${req.file.filename}`;

    // 👉 THIS IS THE REAL SAVE TO DB
    const newBlog = await Blog.create({
      title,
      category,
      description,
      image: imageUrl,
    });

    res.status(201).json({
      success: true,
      message: "Blog Created Successfully",
      blog: newBlog,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
  
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    await Blog.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Blog deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// controllers/blogController.js


export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, description } = req.body;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    blog.title = title || blog.title;
    blog.category = category || blog.category;
    blog.description = description || blog.description;

    // if new image uploaded
    if (req.file) {
      blog.image = `uploads/${req.file.filename}`;
    }

    const updatedBlog = await blog.save();

    res.json({
      success: true,
      message: "Blog updated successfully",
      blog: updatedBlog,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSingleBlog = async (
  req,
  res
) => {

  try {

    const blog =
      await Blog.findById(
        req.params.id
      );

    if (!blog) {

      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      blog,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all blogs
export const getAllBlogsPage = async (
  req,
  res
) => {

  try {

    const blogs = await Blog.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      blogs,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllBlogs = async (
  req,
  res
) => {

  try {

    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .limit(8);

    res.status(200).json({
      success: true,
      blogs,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};