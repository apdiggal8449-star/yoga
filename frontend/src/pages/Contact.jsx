import React, { useState } from "react";
import axios from "axios";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit form
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/contact",
        formData
      );

      alert(response.data.message);

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

  console.log(error.response);

  console.log(error.response.data);

  alert(error.response.data.message);
    }
  };

  return (
    <section className="bg-[#f6f7fb] min-h-screen overflow-hidden">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#4b2dbd] to-[#6c42f5] py-20 px-4 overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <h1 className="text-white text-4xl sm:text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-5 text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            We'd love to hear from you. Whether you have
            questions, feedback, or want to book yoga
            services, feel free to reach out.
          </p>

        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Info Card */}
          <div
            
            className="relative bg-gradient-to-br from-[#4b2dbd] to-[#6d48ff] rounded-3xl p-8 sm:p-10 text-white shadow-2xl overflow-hidden"
          >

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>

            <div className="absolute bottom-0 left-0 w-52 h-52 bg-pink-300/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">

              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Get In Touch
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight">
                Let’s Build
                <br />
                Something Amazing
              </h2>

              <p className="mt-5 text-white/80 leading-7">
                Connect with our yoga and wellness team.
                We are always ready to help you with
                bookings, collaborations, and queries.
              </p>

              {/* Contact Items */}
              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-white/70">
                      Email
                    </p>

                    <h3 className="font-semibold">
                      omyogshalain@gmail.com
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-white/70">
                      Phone
                    </p>

                    <h3 className="font-semibold">
                      +91 9876543210
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-white/70">
                      Location
                    </p>

                    <h3 className="font-semibold">
                      Delhi NCR, India
                    </h3>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div
            
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10"
          >

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Send Message
              </h2>

              <p className="mt-3 text-gray-500 leading-7">
                Fill out the form below and our team
                will get back to you shortly.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#6d48ff] focus:ring-4 focus:ring-[#6d48ff]/20 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#6d48ff] focus:ring-4 focus:ring-[#6d48ff]/20 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your number"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#6d48ff] focus:ring-4 focus:ring-[#6d48ff]/20 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#6d48ff] focus:ring-4 focus:ring-[#6d48ff]/20 transition resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4b2dbd] to-[#6d48ff] hover:scale-[1.02] transition-all duration-300 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;