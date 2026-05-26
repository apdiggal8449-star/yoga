import axios from "axios";

import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

export default function EditBlog() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      title: "",
      category: "",
      description: "",
    });

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // =========================
  // FETCH SINGLE BLOG
  // =========================

  useEffect(() => {

    fetchSingleBlog();

  }, []);

  const fetchSingleBlog = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/blog/${id}`
      );

      const blog = res.data.blog;

      setFormData({
        title: blog.title,
        category: blog.category,
        description: blog.description,
      });

      setPreview(
        `http://localhost:5000/${blog.image}`
      );

    } catch (error) {

      console.log(error);
    }
  };

  // =========================
  // INPUT CHANGE
  // =========================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // =========================
  // IMAGE CHANGE
  // =========================

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    setImage(file);

    setPreview(
      URL.createObjectURL(file)
    );
  };

  // =========================
  // UPDATE BLOG
  // =========================

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const token =
        localStorage.getItem(
          "token"
        );
  console.log(token)
      const updatedData =
        new FormData();

      updatedData.append(
        "title",
        formData.title
      );

      updatedData.append(
        "category",
        formData.category
      );

      updatedData.append(
        "description",
        formData.description
      );

      if (image) {

        updatedData.append(
          "image",
          image
        );
      }

      const res = await axios.put(
        `http://localhost:5000/api/blog/${id}`,
        updatedData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,

            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      alert(
        "Blog Updated Successfully"
      );

      console.log(res.data);

      navigate(
        "/admin/dashboard"
      );

    } catch (error) {

      console.log(error.message);

      alert(
        error?.response?.data
          ?.message ||
        "Update failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="p-8 min-h-screen bg-gray-100">

      <div className="bg-white rounded-3xl shadow p-8 max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">

          Update Blog

        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* TITLE */}

          <div>

            <label className="block mb-2 font-semibold">

              Blog Title

            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={
                handleChange
              }
              className="w-full border p-4 rounded-xl outline-none"
              placeholder="Enter title"
              required
            />
          </div>

          {/* CATEGORY */}

          <div>

            <label className="block mb-2 font-semibold">

              Category

            </label>

            <input
              type="text"
              name="category"
              value={
                formData.category
              }
              onChange={
                handleChange
              }
              className="w-full border p-4 rounded-xl outline-none"
              placeholder="Enter category"
              required
            />
          </div>

          {/* DESCRIPTION */}

          <div>

            <label className="block mb-2 font-semibold">

              Description

            </label>

            <textarea
              rows="6"
              name="description"
              value={
                formData.description
              }
              onChange={
                handleChange
              }
              className="w-full border p-4 rounded-xl outline-none"
              placeholder="Enter description"
              required
            />
          </div>

          {/* IMAGE */}

          <div>

            <label className="block mb-2 font-semibold">

              Blog Image

            </label>

            <input
              type="file"
              onChange={
                handleImageChange
              }
            />

            {preview && (

              <img
                src={preview}
                alt=""
                className="w-52 h-40 object-cover rounded-2xl mt-5"
              />
            )}
          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold"
          >

            {loading
              ? "Updating..."
              : "Update Blog"}

          </button>

        </form>
      </div>
    </div>
  );
}