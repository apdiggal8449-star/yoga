import { useState } from "react";
import axios from "axios";
import { ImagePlus, Send } from "lucide-react";

export default function CreateBlog() {

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const blogData = new FormData();

      blogData.append("title", formData.title);
      blogData.append("category", formData.category);
      blogData.append("description", formData.description);

      if (image) {
        blogData.append("image", image);
      }

      const response = await axios.post(
        "http://localhost:5000/api/blog/create",
        blogData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);

      setFormData({
        title: "",
        category: "",
        description: "",
      });

      setImage(null);

      setPreview("");

    } catch (error) {

      console.log(error);

      alert(
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <section className="min-h-screen bg-[#f6f7fb] p-4 lg:p-10">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        <div className="bg-gradient-to-r from-[#4b2dbd] to-[#6d48ff] p-8 text-white">

          <h1 className="text-3xl lg:text-4xl font-bold">
            Create New Blog
          </h1>

          <p className="mt-3 text-white/80">
            Publish SEO friendly yoga blogs
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 lg:p-10 space-y-8"
        >

          <div>
            <label className="block font-semibold mb-2">
              Blog Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              required
              className="w-full border rounded-2xl p-4 outline-none focus:ring-4 focus:ring-[#6d48ff]/20"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Yoga / Meditation"
              required
              className="w-full border rounded-2xl p-4 outline-none focus:ring-4 focus:ring-[#6d48ff]/20"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Description
            </label>

            <textarea
              rows="8"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write blog description"
              required
              className="w-full border rounded-2xl p-4 outline-none resize-none focus:ring-4 focus:ring-[#6d48ff]/20"
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold mb-3">
              Upload Image
            </label>

            <label className="border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">

              {
                preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full max-h-[300px] object-cover rounded-xl"
                  />
                ) : (
                  <>
                    <ImagePlus
                      size={50}
                      className="text-[#6d48ff]"
                    />

                    <p className="mt-4 text-gray-500">
                      Click to upload image
                    </p>
                  </>
                )
              }

              <input
                type="file"
                hidden
                required
                accept="image/*"
                onChange={handleImageChange}
              />

            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#4b2dbd] to-[#6d48ff] text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
          >

            <Send size={20} />

            {loading
              ? "Publishing..."
              : "Publish Blog"}

          </button>

        </form>

      </div>

    </section>
  );
}