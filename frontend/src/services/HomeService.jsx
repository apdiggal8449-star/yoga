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
    <div className="flex flex-col lg:flex-row items-center bg-orange-100 p-8 justify-between gap-10 mt-8">

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
        <h1 className='text-black-500 mt-[-28px] text-3xl font-bold'>Because the Best Yoga Studio Is the One You Never Have to Leave for</h1>
        <p className="text-base text-gray-600 mt-4">
         You’ve meant to start yoga for a while now.   </p>
            <p className="text-base text-gray-600 mt-4">
          Maybe you’ve tried a studio — but the timings were never quite right, the class was too crowded, or the commute after a long day just killed the motivation. Maybe you’ve tried YouTube videos, but without someone watching your posture, you weren’t sure if you were actually doing it right.  </p>
        <p className="text-base text-gray-600 mt-4">
          Here’s the thing: the problem was never yoga. It was the setup. </p>
        <p className="text-base text-gray-600 mt-4">
          That’s exactly what OmYogshala’s home yoga classes fix. </p>
        <p className="text-base text-gray-600 mt-4">
          We send a certified, experienced yoga instructor directly to your home — in Delhi, Noida, Gurgaon, or anywhere in the NCR region — at a time that actually works for you. Your space, your schedule, your pace. Just you and a trainer who’s fully focused on you. </p>
        <p className="text-base text-gray-600 mt-4">
          No rushing. No parking. No performing for strangers.  </p>
              </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2">
        <div className="bg-white rounded-2xl shadow-xl p-6">

          <h3 className="text-lg sm:text-2xl text-oransge-500 font-bold mb-4">
            Connect With Om Yogshala
          </h3>
          <p className='mb-8'>Fill out the form below, and our team will get back to you shortly.</p>

           <form onSubmit={handleSubmit} className="space-y-4">
          
                          {/* NAME */}
                          <div>
                            <label className="block text-xs text-left font-semibold">Full Name</label>
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
                            <label className="block text-left text-xs font-semibold">Email</label>
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
                            <label className="block text-left text-xs font-semibold">Phone Number</label>
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
                            <label className="block text-left text-xs font-semibold">Message</label>
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
  </div>
</section>
      {/* WHY CHOOSE US */}
      <section className="px-4  py-10 bg-gray-50 sm:px-1 lg:px-1">
        <div className="max-w-6xl mx-auto">
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
        <div className="max-w-6xl mx-auto mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Pricing and Packages</h2>
          <p className="mt-2 text-sm text-gray-600">
            We offer flexible pricing packages based on your needs and frequency of sessions. Contact us for more information on our pricing and to discuss the right package for you.
          </p>
          <ul className="mt-3 space-y-1 text-xs text-gray-500 list-disc list-inside">
            <li>Single Session: Ideal for trying out a <Link to="/homeyoga">
                       <span className="text-orange-400 cursor-pointer font-medium">
                        {" "}home
                      </span>
            
                      <span className="text-orange-500 cursor-pointer font-semibold">
                        {" "}yoga classes{" "}
                      </span>
                       </Link>
                       or a brief-time personalized session.</li>
            <li>Monthly Packages: Designed for those looking for regular practice. Choose from 2, 3, or 4 sessions per week.</li>
          </ul>
        </div>

        {/* plans */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* plan 1 */}
        <div className="border border-orange-300 hover:border-2 hover:border-orange-500 rounded-md bg-white p-6 text-center">

          <h3 className="text-[#ef6c00] font-bold text-[18px] mb-3">
            3 Days / Week
          </h3>

          <h2 className="text-4xl font-bold text-[#222] mb-1">
            ₹6,000 <span className='text-sm'>/month</span>
          </h2>

          <p className="text-[13px] text-[#777] mb-6">
           Perfect for beginners stepping into a routine
          </p>

          <ul className="space-y-3 py-2 mt-5 border-t-1 border-orange-500 border-dashed text-[14px] text-[#555] mb-8">

            <li>✔ Certified Yoga Trainer</li>
            <li>✔ 1 Hour Custom Masterclass</li>
            <li>✔ Flexible Corporate Scheduling</li>
            <li>✔ Mats & Props Included</li>

          </ul>

          <button className="w-full bg-[#ef6c00] hover:bg-orange-600 transition text-white py-3 rounded-md font-semibold">
           <a
                href="https://wa.me/918265825472?text=Hello%20I%20want%20to%20join%20yoga%20classes"
                target="_blank"
                rel="noopener noreferrer"

              >Book Home Trainer</a> 
          </button>
        </div>

        {/* plan 2 */}
        <div className="border-2 border-orange-400 rounded-md bg-white p-6 text-center relative">

          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[11px] px-3 py-1 rounded-full">
            MOST POPULAR
          </div>

          <h3 className="text-[#ef6c00] font-bold text-[18px] mb-3">
            4 Days / Week
          </h3>

          <h2 className="text-4xl font-bold text-[#222] mb-1">
            ₹7,500 <span className='text-sm'>/month</span>
          </h2>

          <p className="text-[13px] text-[#777] mb-6">
           Best for consistent fat loss & flexibility stability
          </p>

          <ul className="space-y-3 py-2 mt-5 border-t-1 border-orange-500 border-dashed text-left text-[14px] text-[#555] mb-8">

            <li>✔ 3 Days A Week Wellness Block</li>
            <li>✔ Custom Corporate Strategy</li>
            <li>✔ Weekly Progress Tracking</li>
            <li>✔ Mats & Props Included</li>

          </ul>

          <button className="w-full bg-[#ef6c00] hover:bg-orange-600 transition text-white py-3 rounded-md font-semibold">
           <a
                href="https://wa.me/918265825472?text=Hello%20I%20want%20to%20join%20yoga%20classes"
                target="_blank"
                rel="noopener noreferrer"

              >Book Home Trainer</a> 
          </button>

        </div>

        {/* plan 3 */}
        <div className="border border-orange-300 hover:border-2 hover:border-orange-500 rounded-md bg-white p-6 text-center">

          <h3 className="text-[#ef6c00] font-bold text-[18px] mb-3">
           5 Days / Week
          </h3>

          <h2 className="text-4xl font-bold text-[#222] mb-1">
            ₹9,000 <span className='text-sm'>/month</span>
          </h2>

          <p className="text-[13px] text-[#777]  mb-6">
           Premium comprehensive daily wellness routine
          </p>

          <ul className="space-y-3 py-2 mt-5 border-t-1 border-orange-500 border-dashed text-left text-[14px] text-[#555] mb-8">

            <li>✔ 5 Days A Week Wellness Layout</li>
            <li>✔ High Engagement Custom Path</li>
            <li>✔ Deep HR Feedback Summary Reports</li>
            <li>✔ Mats & Full Props Included</li>

          </ul>

          <button className="w-full bg-[#ef6c00] hover:bg-orange-600 transition text-white py-3 rounded-md font-semibold">
           <a
                href="https://wa.me/918265825472?text=Hello%20I%20want%20to%20join%20yoga%20classes"
                target="_blank"
                rel="noopener noreferrer"

              >Book Home Trainer</a> 
          </button>

        </div>
</div>

      </section>
      <div className='flex align-center justify-center'><p className=' p-4 border-orange-400 rounded-xl border-1 border-dashed'> <span className='text-black-500 font-bold'>Trial Policy:</span> Demo class is available at just ₹300. Don't worry, this amount will be completely adjusted in your monthly package charges upon final enrollment!</p>
</div>
      {/* WHO CAN BENEFIT */}
      <section className="px-4 py-10 bg-gray-50 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
        <div className="max-w-6xl mx-auto">
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
        <div className="max-w-6xl mx-auto space-y-6 text-sm text-gray-700">
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
        <div className="text-center max-w-6xl mx-auto mb-10">
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
      <section className="px-4 py-12 mx-auto max-w-6xl sm:px-6 lg:px-8">
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