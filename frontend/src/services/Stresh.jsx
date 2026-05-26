import React, { useState } from "react";
import axios from "axios";
import image from "../assets/stres.webp";
import { Send } from "lucide-react";

export default function OnlineYogaWebsite() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/contact",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message || "Server Error");
    } finally {
      setLoading(false);
    }
  };

  const locations = [
    { name: 'Delhi', slug: 'delhi', text: 'Transform your well-being with experienced online yoga classes in Delhi. Book your spot today!' },
    { name: 'Noida', slug: 'noida', text: 'Transform your well-being with expert-led online yoga classes in Noida. Book your spot today!' },
    { name: 'Ghaziabad', slug: 'ghaziabad', text: 'Enhance your health with personalized online yoga classes in Ghaziabad. Reserve your session now!' },
    { name: 'Greater Noida', slug: 'greater-noida', text: 'Achieve your wellness goals with our tailored online yoga classes in Greater Noida. Sign up today!' },
    { name: 'Faridabad', slug: 'faridabad', text: 'Transform your living with expert-led online yoga classes in Faridabad. Book your spot today!' },
    { name: 'Gurugram', slug: 'gurugram', text: 'Enhance your health with personalized online yoga classes in Gurugram. Reserve your session now!' },
  ];

  const faqs = [
    {
      q: "What are the benefits of online yoga classes?",
      a: "Online yoga classes offer high flexibility, elimination of commute time, and access to elite certified instructors right from your laptop or mobile screen safely at home."
    },
    {
      q: "Do you offer interactive live sessions?",
      a: "Yes! Unlike recorded videos, our sessions are fully real-time and interactive where the instructor monitors your postures and gives instant live corrections."
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-slate-50/50">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-10 lg:py-14">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT IMAGE */}
          <div className="lg:col-span-7 space-y-8">
            <img src={image} alt="image" />
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl p-6">

              <h3 className="text-lg font-bold mb-4">
                Book Free Trial Session
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* NAME */}
                <div>
                  <label className="text-xs font-semibold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-xs font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-xs font-semibold">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-xs font-semibold">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {loading ? "Sending..." : "Submit"}
                </button>

              </form>

            </div>
          </div>

        </div>

        {/* CONTENT (UNCHANGED) */}
        <p className='p-2 mt-4'>
          At OmYogshala, we offer Online Yoga Classes that let you experience the benefits of yoga from the comfort of your home or wherever you are. Our live, interactive sessions are led by certified instructors who guide you through each pose, offering real-time feedback and personalized attention. Whether you’re a beginner or an advanced practitioner, our online classes are designed to suit your schedule and fitness goals.
        </p>

        <div>
          <h1 className="text-4xl font-bold my-4">
            Why Choose Online Yoga Classes?
          </h1>

          <p className="my-6">
            Practicing yoga online offers flexibility and convenience, making it easier to incorporate into your daily routine. Whether you have a busy work schedule or prefer practicing in your own space, online yoga allows you to stay consistent without needing to commute to a studio.
          </p>

          <ul className="list-disc pl-5">
            <li className="mt-2">Flexibility: Join classes from anywhere, at a time that fits your schedule.</li>
            <li className="mt-2">Real-Time Interaction: Get personalized guidance during live sessions.</li>
            <li className="mt-2">Access to Multiple Styles: Hatha, Vinyasa, Ashtanga.</li>
            <li className="mt-2">Convenient and Safe: Practice at home.</li>
          </ul>
        </div>
              
              <div className="my-6">
          <h1 className="text-4xl font-bold my-4">
            Who Can Benefit from Online Yoga Classes?
          </h1>

          <p className="my-6">
            Online yoga is perfect for anyone looking to: </p>

          <ul className="list-disc pl-5">
            <li className="mt-2">Save time by practicing from home.</li>
            <li className="mt-2">Access high-quality instruction from anywhere in the world.</li>
            <li className="mt-2">Maintain a regular yoga routine with flexible scheduling.</li>
            <li className="mt-2">
Choose from a variety of yoga styles and intensity levels.</li>
          <li className="mt-2">
Practice safely at home without needing to travel to a studio.</li>
          </ul>
        </div>
      </section>

    </div>
  );
}