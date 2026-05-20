import React, { useState } from 'react';
import { Send } from "lucide-react";
import axios from "axios";
import { Link } from 'react-router-dom';
import noi from "../assets/noi.webp";
import noi2 from "../assets/noi2.webp";
import gazi from "../assets/gazi.webp";
import gre from "../assets/gre.webp";
import fari from "../assets/fari.webp";
import gur from "../assets/gur.webp";

export default function YogaWebsite() {
  const [openFaq, setOpenFaq] = useState(null);
  
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
    { name: 'Yoga Classes Delhi',image:noi, text: 'Transform your well-being with experienced yoga classes in Delhi. Book your spot today!' },
    { name: 'Yoga Classes Noida', image:noi2, text: 'Transform your well-being with expert-led yoga classes in Noida. Book your spot today!' },
    { name: 'Yoga Classes Ghaziabad', image:gazi, text: 'Enhance your health with personalized yoga classes in Ghaziabad. Reserve your session now!' },
    { name: 'Yoga Classes Greater Noida', image:gre, text: 'Achieve your wellness goals with our tailored yoga classes in Greater Noida. Sign up today!' },
    { name: 'Yoga Classes Faridabad', image:fari, text: 'Transform your living with expert-led yoga classes in Faridabad. Book your spot today!' },
    { name: 'Yoga Classes Gurgaon', image:gur, text: 'Enhance your health with personalized yoga classes in Ghaziabad. Reserve your session now!' },
  ];

  const testimonials = [
    { rating: 5, text: '"Finding quality home yoga classes in Noida was a challenge until I met this team. The convenience of practicing in my own space while getting professional guidance has truly transformed my daily routine."', name: 'PRIYANKA VERMA', role: 'SOFTWARE ENGINEER' },
    { rating: 5, text: '"The instructors are highly knowledgeable. They tailored the sessions perfectly for my back pain. If you\'re looking for the best yoga classes in Delhi, I highly recommend their personalized home service."', name: 'RAJESH KUMAR', role: 'BUSINESS OWNER' },
    { rating: 5, text: '"As a busy mother, I love that they offer flexible home yoga classes. It saves me travel time, and the sessions are very peaceful. It\'s been a great experience for my overall wellness."', name: 'ANJALI SHARMA', role: 'HOUSEWIFE' },
  ];

  const faqs = [
    { q: "What are the benefits of home yoga classes?", a: "Home yoga classes offer personalized attention, customized routines tailored to your health goals, flexibility in scheduling, and the comfort/privacy of practicing in your own space without commuting." },
    { q: "How much do home yoga classes cost?", a: "Our packages start from ₹6,500/Month for 3 days a week and ₹9,500/Month for 5 days a week. We also offer single trial sessions." },
    { q: "How can I book a home yoga trainer from Delhi/NCR?", a: "Booking a home yoga trainer is simple. You can contact us directly through the website or call us at +91 XXXXXXXXXX to discuss your requirements. Our team will help schedule a convenient time and assign a suitable yoga trainer for your sessions." },
    { q: "Can beginners join home yoga classes?", a: "Absolutely! Our instructors customize lessons according to your experience level, ensuring safe and progressive learning for beginners." }
  ];

  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-orange-100">
      
      {/* HERO / HEADER SECTION */}
     {/* HERO / HEADER SECTION */}
<section className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
  <div className="text-center">
    <h1 className="text-xl font-bold tracking-wide text-orange-600 uppercase sm:text-2xl">
      Home Yoga Classes | Personal Yoga Teacher
    </h1>

    {/* RESPONSIVE CONTAINER */}
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-8">

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
        <p className="text-base text-gray-600">
          At Delhi/NCR, we bring the transformation power of yoga right to your doorstep.
          Serving Delhi, Noida, Gurugram and across the NCR region, our expert-led home yoga
          classes offer a personalized and comfortable yoga experience in your own space.
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Achieve Your Goals with Us:
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><strong>Stress Relief:</strong> Deep relaxation through meditation.</li>
            <li><strong>Improve Flexibility:</strong> Better range of motion.</li>
            <li><strong>Overall Well-being:</strong> Physical + mental balance.</li>
          </ul>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2">
        <div className="bg-white rounded-2xl shadow-xl p-6">

          <h3 className="text-lg sm:text-2xl font-bold mb-4">
            Book Free Trial Session
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />

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
  </div>
</section>
      {/* WHY CHOOSE US */}
      <section className="px-4 py-10 bg-gray-50 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900">Why Choose Home Yoga Classes?</h2>
          <p className="mt-2 text-sm text-gray-600">
            Having a private yoga instructor at home gives you the opportunity to make and stick to a routine that flexes well with your day-to-day life. In addition, you can analyze your instructor's movements closely to gain the benefits of feedback which is usually absent in a group setting. Here is why home yoga classes might suit you best:
          </p>
          
          <div className="mt-6 space-y-4 text-sm">
            <p><strong>Flexibility:</strong> You do not have to commute to a studio. Just do the yoga in your house.</p>
            <p><strong>Customized Lessons:</strong> You get designed sessions according to your level, objectives, and specific health concerns.</p>
            <p><strong>Choice of Time:</strong> You decide when is the most convenient time for you.</p>
            <p><strong>Undisturbed and Relaxed:</strong> You can practice the yoga in your home peacefully without any interruption.</p>
          </div>
        </div>
      </section>

      {/* PRICING AND PACKAGES */}
      <section className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Pricing and Packages</h2>
          <p className="mt-2 text-sm text-gray-600">
            We offer flexible pricing packages based on your needs and frequency of sessions. Contact us for more information on our pricing and to discuss the right package for you.
          </p>
          <ul className="mt-3 space-y-1 text-xs text-gray-500 list-disc list-inside">
            <li>Single Session: Ideal for trying out a home yoga class or a brief-time personalized session.</li>
            <li>Monthly Packages: Designed for those looking for regular practice. Choose from 2, 3, or 4 sessions per week.</li>
          </ul>
        </div>

        {/* PRICING TABLE */}
        <div className="max-w-4xl mx-auto overflow-hidden border border-gray-200 rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-50/70 border-b border-gray-200 text-sm font-semibold text-gray-900">
                  <th className="p-4 w-1/3">Package</th>
                  <th className="p-4 text-orange-700">₹6,500/Month</th>
                  <th className="p-4 text-orange-700">₹9,500/Month</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700">
                <tr>
                  <td className="p-4 font-medium bg-gray-50/50">Instructor Type</td>
                  <td className="p-4">Certified Yoga Instructors</td>
                  <td className="p-4">Certified Yoga Instructors</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium bg-gray-50/50">Schedule</td>
                  <td className="p-4">3 alternative days in a week (Sat & Sun off)</td>
                  <td className="p-4">5 days in a week (Sat & Sun off)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium bg-gray-50/50">Session Duration</td>
                  <td className="p-4">1 hour per session</td>
                  <td className="p-4">1 hour per session</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium bg-gray-50/50">Total Sessions Per Month</td>
                  <td className="p-4">12 sessions</td>
                  <td className="p-4">20 sessions</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium bg-gray-50/50">Demo Class Charges</td>
                  <td className="p-4">₹500 (adjustable in monthly charges)</td>
                  <td className="p-4">₹500 (adjustable in monthly charges)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHO CAN BENEFIT */}
      <section className="px-4 py-10 bg-gray-50 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900">Who Can Benefit from Home Yoga Classes?</h2>
          <p className="mt-1 text-sm text-gray-600">People who would benefit from home yoga classes include those who:</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li>Want to progress with their practice but require more personalized guidance.</li>
            <li>Feel self-conscious practicing in front of others and prefer privacy.</li>
            <li>Are new to yoga and require personal adjustments to master the basics.</li>
            <li>Have specific injuries or medical conditions which need a more targeted method.</li>
            <li>Want to practice yoga but do not have the time to leave the house.</li>
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900">How Our Home Yoga Classes Work</h2>
          <p className="mt-1 text-sm text-gray-600">Yoga can be made available to everyone, which is why our approach is straightforward and simple:</p>
          
          <div className="mt-6 space-y-4 text-sm text-gray-700">
            <p><strong>Custom Yoga Plan:</strong> From consultation, we formulate a custom yoga strategy for you. It does not matter if you want Vinyasa or Hatha; your goals will dictate the course of your regimen.</p>
            <p><strong>Consultation:</strong> We start with a consultation to identify your objectives, preferences and fitness level. Flexibility, stress relief, improved strength—whatever it is you aim for, our instructor will craft a unique strategy for you.</p>
            <p><strong>Flexible Scheduling:</strong> We will find time that works for you. We are happy to accommodate your schedule, be it morning or evening. If you wish to launch your day with yoga or prefer an evening relaxation, we can arrange our schedules to fit your needs.</p>
            <p><strong>One-on-One Instruction:</strong> Your instructor will travel to your home to teach you personally, guiding each session with modifications and feedback for effective and safety performance.</p>
            <p><strong>Track Progress:</strong> While you advance through yoga at home, we periodically evaluate your progress, modify the plan where required, and ensure you are on track toward your wellness goals.</p>
          </div>
        </div>
      </section>

      {/* HOLISTIC APPROACH & HABIT */}
      <section className="px-4 py-10 bg-gray-50 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6 text-sm text-gray-700">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Holistic Approach</h3>
            <p className="mt-1">Physical exercises are just one part of active yoga. In addition to following a set of asanas, our home yoga classes have a unique focus on breath control techniques (Pranayama) as well as meditation to align both the mind and body in order to provide balance and restoration.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">Comfort And Privacy</h3>
            <p className="mt-1">From what I've witnessed, yoga is one of the most anti-anxiety practices. Doing it in the peace and privacy of your house means you can set up an environment where you feel safe. It will definitely make you feel good.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">Gain Habit</h3>
            <p className="mt-1">Setting regular times for your home yoga sessions will definitely help in developing a habit of doing yoga. The instructor will make sure you've reached your wellness and fitness steps.</p>
          </div>
        </div>
      </section>

      {/* LOCATION SERVICE CARDS GRID */}
      <section className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xl font-bold text-gray-900">Get Started Today!</h2>
          <p className="mt-2 text-sm text-gray-600">
            Would you like to start yoga from home? Speak to DelhiYogshala today. Set an appointment with them or book your first session over the phone. We will walk with you to incorporate yoga into your life and help you discover its amazing benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((item, index) => (
          
                      <div
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
                      >
          
                        {/* IMAGE LINK */}
                        <Link
                          to={`/${item.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
          
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition duration-300"
                          />
          
                        </Link>
          
                        <div className="p-5">
          
                          {/* TITLE LINK */}
                          <Link
                            to={`/${item.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
          
                            <h3 className="text-3xl cursor-pointer font-bold text-orange-500 mb-4 hover:underline">
                              {item.name}
                            </h3>
          
                          </Link>
          
                          <p className="text-gray-600 leading-7 text-sm">
                            {item.text}
                          </p>
          
                        </div>
          
                      </div>
          ))}
          
        </div>
      </section>

      {/* ACCORDION FAQ SECTION */}
      <section className="px-4 py-12 mx-auto max-w-3xl sm:px-6 lg:px-8">
        <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-4 py-4 flex items-center justify-between text-left text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-gray-400 ml-2">
                  {openFaq === idx ? '▲' : '▼'}
                </span>
              </button>
              
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed bg-gray-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}