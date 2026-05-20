import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

import { Phone } from "lucide-react";

export default function Footer() {

  // FORM STATE

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // HANDLE INPUT

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/enquiry",
        formData
      );

      alert("Enquiry Sent Successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);
    }
  };

  return (
    <footer className="w-full">

      {/* TOP TEXT */}

      <div className="bg-[#efe3d6] py-6 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-600 leading-8 text-sm md:text-base">

          <span className="font-bold">
            Omyogshala
          </span>{" "}
           is your dedicated partner on the path to holistic health and well-being, offering home and online yoga classes across Delhi, Gurugram, Faridabad, Noida, and Greater Noida. With 100+ certified instructors and 1,000+ happy clients, we provide personalized sessions to meet your fitness goals. Experience yoga at your convenience with the best trainers. Start your wellness journey today
        </div>
      </div>

      {/* MAIN FOOTER */}

      <div className="bg-[#240000] text-white px-4 py-12">

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* YOGA CLASSES */}

          <div>

            <h2 className="text-3xl font-bold mb-6">
              Yoga Classes
            </h2>

            <ul className="space-y-4 text-orange-400">

              <li>Home Yoga Classes</li>

              <li>Online Yoga Classes</li>

              <li>Corporate Yoga Classes</li>

              <li>Pregnancy Yoga Classes</li>

              <li>Meditation & Pranayama</li>

              <li>Yoga for Stress Relief</li>

              <li>Yoga Class for Weight Loss</li>
            </ul>
          </div>

          {/* YOGA SERVICES */}

          <div>

            <h2 className="text-3xl font-bold mb-6">
              Yoga Services
            </h2>

            <ul className="space-y-4 text-orange-400">

              <li>Yoga Classes Delhi</li>

              <li>Yoga Classes Noida</li>

              <li>Yoga Classes Ghaziabad</li>

              <li>Yoga Classes Greater Noida</li>

              <li>Yoga Classes Faridabad</li>

              <li>Yoga Classes Gurgaon</li>

              <li>Personal Yoga Trainer</li>
            </ul>
          </div>

          {/* CONTACT FORM */}

          <div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* NAME */}

              <div>

                <label className="text-sm">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full h-12 px-4 rounded bg-white text-black outline-none mt-1"
                />
              </div>

              {/* EMAIL */}

              <div>

                <label className="text-sm">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full h-12 px-4 rounded bg-white text-black outline-none mt-1"
                />
              </div>

              {/* PHONE */}

              <div>

                <label className="text-sm">
                  Contact Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full h-12 px-4 rounded bg-white text-black outline-none mt-1"
                />
              </div>

              {/* MESSAGE */}

              <div>

                <label className="text-sm">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded bg-white text-black outline-none mt-1"
                ></textarea>
              </div>

              {/* BUTTON */}

              <button
                disabled={loading}
                className="w-full bg-green-500 hover:bg-green-600 transition h-12 rounded font-semibold"
              >
                {
                  loading
                    ? "Sending..."
                    : "Send"
                }
              </button>
            </form>
          </div>

          {/* CONTACT + SOCIAL */}

          <div>

            {/* CONTACT */}

            <div>

              <h2 className="text-3xl font-bold mb-6">
                Contact Us
              </h2>

              <div className="flex items-center gap-3 text-lg">

                <Phone className="text-sky-400" />

                <p>+91 63958 77054</p>
              </div>
            </div>

            {/* SOCIAL */}

        

{/* SOCIAL */}

<div className="mt-10">

  <h2 className="text-3xl font-bold mb-6">
    Join Us Online
  </h2>

  <div className="flex flex-wrap gap-4">

    {/* FACEBOOK */}

    <Link
      to="https://facebook.com"
      target="_blank"
      className="w-14 h-14 rounded-full bg-[#3b5998] flex items-center justify-center hover:scale-110 transition"
    >
      <FaFacebookF size={22} />
    </Link>

    {/* TWITTER */}

    <Link
      to="https://twitter.com"
      target="_blank"
      className="w-14 h-14 rounded-full bg-black flex items-center justify-center hover:scale-110 transition"
    >
      <FaXTwitter size={22} />
    </Link>

    {/* INSTAGRAM */}

    <Link
      to="https://instagram.com"
      target="_blank"
      className="w-14 h-14 rounded-full bg-[#C13584] flex items-center justify-center hover:scale-110 transition"
    >
      <FaInstagram size={22} />
    </Link>

    {/* PINTEREST */}

    <Link
      to="https://pinterest.com"
      target="_blank"
      className="w-14 h-14 rounded-full bg-[#E60023] flex items-center justify-center hover:scale-110 transition"
    >
      <FaPinterestP size={22} />
    </Link>

  </div>
</div>
          </div>
        </div>
      </div>

      {/* WHATSAPP BUTTON */}

      <div className="fixed bottom-5 right-5 z-50">

        <a
          href="https://wa.me/916395877054"
          target="_blank"
          rel="noreferrer"
        >

          <button className="bg-[#25D366] hover:bg-green-600 transition text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3">

            <FaWhatsapp size={24} />

            <span className="font-semibold">
              Click to WhatsApp
            </span>
          </button>
        </a>
      </div>
    </footer>
  );
}