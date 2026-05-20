// frontend/src/pages/BlogPagination.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogPagination = () => {

  const [blogs, setBlogs] = useState([]);

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] =
    useState(1);

  const cardsPerPage = 9;

  // fetch blogs
  const fetchBlogs = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/blog/all"
      );
 console.log(response.data.blogs)
      setBlogs(response.data.blogs);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    fetchBlogs();

  }, []);

  // pagination
  const totalPages = Math.ceil(
    blogs.length / cardsPerPage
  );

  const startIndex =
    (currentPage - 1) * cardsPerPage;

  const currentCards = blogs.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (

    <section className="bg-[#faf8f5] min-h-screen py-16 px-4">

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-14 text-center">

        <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-medium">
          Latest Articles
        </span>

        <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-gray-800">
          Explore Our Yoga Blogs
        </h1>

        <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-7">
          Read expert-written yoga, wellness,
          meditation, and fitness articles.
        </p>

      </div>

      {/* Loading */}
      {
        loading && (
          <h1 className="text-center text-2xl font-semibold">
            Loading Blogs...
          </h1>
        )
      }

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {
          currentCards.map((blog) => (

            <div
              key={blog._id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 border border-gray-100"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={`http://localhost:5000/${blog.image}`}
                  alt={blog.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <span className="text-orange-500 text-sm font-medium">
                  {blog.category}
                </span>

                <p className="mt-2 text-xs text-gray-400">
                  {
                    new Date(
                      blog.createdAt
                    ).toDateString()
                  }
                </p>

                <h2 className="mt-4 text-xl font-bold text-gray-800 leading-8 group-hover:text-[#5b3df5] transition">
                  {blog.title}
                </h2>

                <p className="mt-4 text-gray-500 leading-7 text-sm">
                  {blog.description}
                </p>

                <button className="mt-6 text-[#5b3df5] font-semibold hover:translate-x-2 transition flex items-center gap-2">
                  Read More →
                </button>

              </div>

            </div>
          ))
        }

      </div>

      {/* Pagination */}
      {
        blogs.length > cardsPerPage && (

          <div className="max-w-7xl mx-auto mt-16 flex items-center justify-center gap-3 flex-wrap">

            {/* Prev */}
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  prev > 1 ? prev - 1 : prev
                )
              }
              className="px-5 py-3 rounded-xl border border-gray-300 bg-white hover:bg-[#5b3df5] hover:text-white transition font-medium"
            >
              ← Previous
            </button>

            {/* Numbers */}
            {
              [...Array(totalPages)].map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                    className={`w-12 h-12 rounded-xl font-semibold transition ${
                      currentPage === index + 1
                        ? "bg-[#5b3df5] text-white shadow-lg"
                        : "bg-white border border-gray-300 hover:bg-[#5b3df5] hover:text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              )
            }

            {/* Next */}
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  prev < totalPages
                    ? prev + 1
                    : prev
                )
              }
              className="px-5 py-3 rounded-xl border border-gray-300 bg-white hover:bg-[#5b3df5] hover:text-white transition font-medium"
            >
              Next →
            </button>

          </div>
        )
      }

    </section>
  );
};

export default BlogPagination;