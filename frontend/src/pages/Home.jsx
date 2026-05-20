import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePart from "../components/HomePart"


export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="w-full bg-white px-4 py-12 md:px-10 lg:px-20">

      {/* SEO Heading */}
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
        <h1 className="lg:text-[40px] text-[22px] md:text-[34px] sm:text-[28px] leading-tight font-bold text-[#1f1f1f] font-serif">
          Personal Yoga Trainers at Home in Delhi NCR
        </h1>
        <p className="mt-6 text-[#5f5f5f] text-[11px] md:text-[14px] leading-8 max-w-4xl mx-auto">
          Discover the power of{" "}

          <span className="text-[#2f2f2f] font-semibold">
            yoga
          </span>

          —a timeless practice that promotes physical health, mental clarity,
          and emotional well-being. Whether you're a beginner or an experienced
          practitioner, yoga offers holistic benefits, including improved flexibility,
          stress relief, and enhanced focus.<span className="text-[#2f2f2f] font-semibold">
            {" "}Omyogshala
          </span>  offers personalized

          <span className="text-orange-400 font-medium">
            {" "}home
          </span>

          <span className="text-orange-500 font-semibold">
            {" "}yoga classes{" "}
          </span>

          tailored to your fitness level, ensuring you achieve balance in both
          body and mind.



          Join us for in-person or online sessions and start your journey toward a healthier, more mindful life today!
        </p>
      </div>

      {/* Section Heading */}
      <div className="text-center mt-14">
        <h2 className="text-[32px] md:text-[46px] font-bold text-orange-500">
          Our Premium Yoga Services
        </h2>

        <p className="mt-3 text-gray-600 text-[15px] md:text-[17px]">
          • Personalized Wellness Solutions for the Modern Lifestyle of{" "}
          <span className="italic font-medium">Delhi NCR</span>
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 min-[1030px]:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">

        {/* Card 1 */}
        <div className="border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-white">

          <div className="bg-[#f8e8df] text-center text-orange-600 text-xs font-semibold px-3 py-2 rounded-md  ">
            Male & Female Both Trainers Available
          </div>

          <h3 className="text-[28px] font-bold text-orange-600 text-center mt-5">
            Home Yoga Classes
          </h3>

          <p className="text-gray-600 text-center  leading-8 mt-4 text-[16px]">
            Certified male and female trainers at your doorstep in Delhi,
            Noida & Gurgaon. Skip the traffic and practice in privacy.
          </p>

          <div className="flex align-item-center justify-center  gap-4 mt-14">
            <button className="border border-orange-300 text-orange-600  px-5 py-3 rounded-lg font-medium hover:bg-[#c77b46] hover:text-white transition">
              Home Classes
            </button>

            <button className="bg-green-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-600 transition">
              <a
                href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20join%20yoga%20classes"
                target="_blank"
                rel="noopener noreferrer"

              >

                WhatsApp
              </a>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-white">

          <h3 className="text-[28px] font-bold text-orange-600 text-center mt-3">
            Online Yoga Classes
          </h3>

          <p className="text-gray-600 text-center leading-8 mt-4 text-[16px]">
            Live interactive sessions with real-time feedback.
            Stay fit from anywhere with our expert digital yoga classes.
          </p>

          <div className="flex align-item-center justify-center gap-4  mt-24">
            <button className="border border-orange-200 text-orange-600 px-5 py-3 rounded-lg font-medium hover:bg-[#c77b46] hover:text-white transition">
              Online Yoga
            </button>

            <button className="bg-green-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-600 transition">
              <a
                href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20join%20yoga%20classes"
                target="_blank"
                rel="noopener noreferrer"

              >

                WhatsApp
              </a>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-white">

          <h3 className="text-[28px] font-bold text-orange-600 text-center mt-3">
            Corporate Yoga
          </h3>

          <p className="text-gray-600 leading-8 mt-4 text-[16px]">
            Reduce employee stress and increase productivity.
            Custom wellness programs for offices across Delhi NCR.
          </p>

          <div className="flex align-item-center justify-center gap-4  mt-24">
            <button className="border border-orange text-orange-600 px-5 py-3 rounded-lg font-medium hover:bg-[#c77b46] hover:text-white transition">
              Office Wellness
            </button>

            <button className="bg-green-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-600 transition">
              <a
                href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20join%20yoga%20classes"
                target="_blank"
                rel="noopener noreferrer"

              >

                WhatsApp
              </a>
            </button>
          </div>
        </div>
        {/* Card 4 */}
        <div className="border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-white">

          <h3 className="text-[28px] font-bold text-orange-600 text-center mt-3">
            Weight Loss Yoga
          </h3>

          <p className="text-gray-600 text-center leading-8 mt-4 text-[16px]">
            Dynamic Power Yoga and Vinyasa flows specifically designed to burn calories and tone your body naturally.         </p>

          <div className="flex align-item-center justify-center gap-4 mt-22">
            <button className="border border-orange-200 text-orange-600 px-5 py-3 rounded-lg font-medium hover:bg-[#c77b46] hover:text-white transition">
              Weight Loss Plan
            </button>

            <button className="bg-green-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-600 transition">
              <a
                href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20join%20yoga%20classes"
                target="_blank"
                rel="noopener noreferrer"

              >

                WhatsApp
              </a>
            </button>
          </div>
        </div>
        {/* Card 5 */}
        <div className="border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-white">
          <div className="bg-[#f8e8df] text-center text-orange-600 text-xs font-semibold px-3 py-2 rounded-md ">
            Expert Female Instructors
          </div>
          <h3 className="text-[28px] font-bold text-orange-600 text-center mt-3">
            Pregnancy Yoga
          </h3>

          <p className="text-gray-600 text-center leading-8 mt-4 text-[16px]">
            Safe Prenatal & Postnatal yoga for a healthy motherhood journey. Focus on ease of labor and pelvic health.
          </p>

          <div className="flex align-item-center justify-center gap-4 mt-14  ">
            <button className="border lg:text-[14px] border-orange-200 text-orange-600 px-5 py-3 rounded-lg font-medium hover:bg-[#c77b46] hover:text-white transition">
              Pregnancy Yoga
            </button>

            <button className="bg-green-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-600 transition">
              <a
                href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20join%20yoga%20classes"
                target="_blank"
                rel="noopener noreferrer"

              >

                WhatsApp
              </a>
            </button>
          </div>
        </div>
        {/* Card 6 */}
        <div className="border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-white">

          <h3 className="text-[28px] font-bold text-orange-600 text-center mt-3">
            Meditation & Pranayama
          </h3>

          <p className="text-gray-600 text-center leading-8 mt-4 text-[16px]">
            Master ancient breathing techniques and mindfulness to achieve deep mental peace and spiritual growth.         </p>

          <div className="flex align-item-center justify-center gap-4 mt-20">
            <button className="border border-orange-200 text-orange-600 px-5 py-3 rounded-lg font-medium hover:bg-[#c77b46] hover:text-white transition">
              Explore Zone
            </button>

            <button className="bg-green-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-600 transition">
              <a
                href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20join%20yoga%20classes"
                target="_blank"
                rel="noopener noreferrer"

              >

                WhatsApp
              </a>
            </button>
          </div>
        </div>
        {/* Card 7 */}
        <div className="border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-white">

          <h3 className="text-[28px] font-bold text-orange-600 text-center mt-3">
            Yoga for Stress Relief

          </h3>

          <p className="text-gray-600 text-center leading-8 mt-4 text-[16px]">
            The ultimate cure for anxiety and workplace burnout. Relax your muscles and calm your mind with restorative yoga.
          </p>

          <div className="flex  align-item-center  justify-center gap-4 mt-18">
            <button className="border border-orange-200 text-orange-600 px-5 py-3 rounded-lg font-medium hover:bg-[#c77b46] hover:text-white transition">
              Relaxation Guide
            </button>

            <button className="bg-green-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-600 transition">
              <a
                href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20join%20yoga%20classes"
                target="_blank"
                rel="noopener noreferrer"

              >

                WhatsApp
              </a>
            </button>
          </div>
        </div>
        {/* Card 8 */}
        <div className="border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-white">
          <div className="bg-[#f8e8df] text-center text-orange-600 text-xs font-semibold px-3 py-2 rounded-md ">
            Private Therapeutic Care
          </div>
          <h3 className="text-[28px] font-bold text-orange-600 text-center mt-3">
            Anxiety & Depression
          </h3>

          <p className="text-gray-600 text-center leading-8 mt-4 text-[16px]">
            Healing through yoga therapy. We help you manage hormonal imbalances like PCOS/PCOD and emotional stress.
          </p>

          <div className="flex align-item-center  justify-center gap-4 mt-10">


            <button className="bg-green-500  text-[13px] text-white px-20 py-3 rounded-lg font-medium hover:bg-green-600 transition">
              <a
                href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20join%20yoga%20classes"
                target="_blank"
                rel="noopener noreferrer"

              >

                Enquire On WhatsApp
              </a>
            </button>
          </div>
        </div>
        {/* Card 9*/}
        <div className="border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-white">

          <h3 className="text-[28px] font-bold text-orange-600 text-center mt-3">
            Kids Yoga Classes
          </h3>

          <p className="text-gray-600 text-center leading-8 mt-4 text-[16px]">
            Fun and creative yoga sessions to boost concentration, confidence, and physical growth in children.
          </p>

          <div className="flex align-item-center justify-center gap-4 mt-18">


            <button className="bg-green-500 text-[13px] text-white px-20 py-3 rounded-lg font-medium hover:bg-green-600 transition">
              <a
                href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20join%20yoga%20classes"
                target="_blank"
                rel="noopener noreferrer"

              >

                Enquire On WhatsApp
              </a>
            </button>
          </div>
        </div>


      </div>

      <div>
        <h1 className="text-orange-500 font-bold text-[24px] text-semibold text-center mt-5">Why OmYogshala for Your Fitness Journey?</h1>
        <ul className="list-disc pl-5 mt-4"><li className="text-gray-800 mt-1 leading-7">
          No More Traffic: Don’t let Delhi-NCR traffic stop your workout. We bring the studio to your doorstep.
        </li>
          <li className="text-gray-800 mt-1 leading-7">100% Personal Attention: In group classes, you are just a face. In our home sessions, you are the focus. Correct your postures with real-time feedback.



          </li>
          <li className="text-gray-800 mt-1
         leading-7">Certified & Safe: Practice with peace of mind. All our trainers are background-verified and certified by top yoga institutions

          </li>

        </ul>

      </div>
      <div className="mt-6">
        <HomePart />
      </div>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
      >
        <span className="text-xl">🟢</span>
        Click to WhatsApp
      </a>
    </section>
  );
};

