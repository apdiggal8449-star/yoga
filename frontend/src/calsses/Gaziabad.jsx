import React from "react";
import {
  CheckCircle2,
  Phone,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";

import yogaImg from "../assets/ycgaz.webp";

export default function HomeYogaNoida() {
  return (
    <div className="bg-[#f8f5f1] text-gray-800">
      
{/* HERO SECTION */}
<section className="py-14 bg-[#f8f5f1]">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* LEFT SIDE */}
      <div>

        {/* TEXT CARD */}
        <div className="bg-white rounded-[30px] p-8 shadow-lg border border-orange-100 mb-8">

          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-sky-500 mb-6">
            Home Yoga Classes in Ghaziabad – Personalized Yoga at Your Home
          </h1>

          <p className="text-gray-600 leading-relaxed mb-5">
            Looking for a convenient way to practice yoga without leaving your
            home in Ghaziabad? At OmYogshala, we offer tailored home yoga
            classes in Ghaziabad that bring the practice of yoga directly to
            you. Whether you're a beginner or an experienced yogi, our certified
            yoga trainers at home deliver personalized sessions that fit your
            goals, schedule, and wellness needs.
          </p>
        </div>

        {/* WHY CHOOSE */}
        <div className="bg-white rounded-[30px] p-8 shadow-lg border border-orange-100">

          <h2 className="text-3xl font-bold mb-6">
            Why Choose Home Yoga Classes in Ghaziabad?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Practicing yoga at home has never been easier! With our yoga
            instructor at home Ghaziabad, you can enjoy yoga at your own pace,
            focused attention in the comfort of your own space. Here's why our
            clients love our home yoga trainer services:
          </p>

          <div className="space-y-5">

            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

              <p className="text-gray-700">
                <span className="font-semibold">
                  Personalized Approach:
                </span>{" "}
                Each session is customized based on your fitness level and
                wellness goals, whether it's for weight loss, flexibility,
                or mindfulness.
              </p>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

              <p className="text-gray-700">
                <span className="font-semibold">
                  No Commute Hassles:
                </span>{" "}
                Skip the traffic and parking woes of Ghaziabad. Our yoga teacher
                at home Ghaziabad comes to you at a time that suits your schedule.
              </p>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

              <p className="text-gray-700">
                <span className="font-semibold">
                  Enhanced Focus:
                </span>{" "}
                One-on-one sessions allow for dedicated focus on your individual
                progress, ensuring you get the most out of each yoga class.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>

        {/* IMAGE */}
        <div className="relative mb-8">

          <div className="absolute inset-0 bg-orange-300/20 rounded-[35px] blur-3xl"></div>

          <img
            src={yogaImg}
            alt="Home Yoga Classes Ghaziabad"
            className="relative rounded-[35px] shadow-2xl w-full object-cover"
          />

          <div className="absolute bottom-5 left-5 bg-white rounded-2xl px-5 py-4 shadow-xl">
            <h3 className="font-bold text-lg text-orange-500">
              YOGA CLASSES IN GHAZIABAD
            </h3>

            <p className="text-sm text-gray-500">
              Flexible Timing • Certified Trainers • Home Sessions
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-[30px] p-8 shadow-2xl border border-orange-100 sticky top-10">

          <div className="text-center mb-8">
            <span className="text-orange-500 uppercase tracking-widest font-semibold">
              Book Demo Class
            </span>

            <h2 className="text-3xl font-bold mt-3">
              Get Free Consultation
            </h2>

            <p className="text-gray-500 mt-3">
              Fill out the form and our yoga expert will contact you shortly.
            </p>
          </div>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-orange-400 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-orange-400 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-orange-400 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-orange-400 outline-none resize-none"
            ></textarea>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300">
              Submit Now
            </button>
          </form>

          {/* SMALL FEATURES */}
          
        </div>
      </div>
    </div>

    {/* BENEFITS */}
    <div className="mt-20 bg-white rounded-[30px] p-8 shadow-lg border border-orange-100">

      <h2 className="text-4xl font-bold mb-8">
        Benefits of Home Yoga Classes in Ghaziabad
      </h2>

      <p className="text-gray-600 leading-relaxed mb-8">
        Our yoga at home Ghaziabad services offer a holistic experience that
        combines the physical benefits of yoga with the mental calmness it
        brings. Here's what you can expect:
      </p>

      <div className="space-y-6">

        <div className="flex gap-4">
          <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

          <p className="text-gray-700">
            <span className="font-semibold">
              Yoga for Weight Loss:
            </span>{" "}
            We offer specialized yoga classes at home focused on helping you
            shed extra weight, boost metabolism, and tone your body.
          </p>
        </div>

        <div className="flex gap-4">
          <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

          <p className="text-gray-700">
            <span className="font-semibold">
              Yoga for Stress Relief:
            </span>{" "}
            In the bustling city of Ghaziabad, managing stress is crucial. Our
            sessions include meditation and breathwork techniques to help you
            relax and rejuvenate.
          </p>
        </div>

        <div className="flex gap-4">
          <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

          <p className="text-gray-700">
            <span className="font-semibold">
              Yoga for Beginners:
            </span>{" "}
            If you're new to yoga, our personal yoga trainer at home Ghaziabad
            will guide you step-by-step, ensuring that you build a strong
            foundation with proper postures and breathing techniques.
          </p>
        </div>
      </div>
    </div>
  </div>
</section> 
{/* LOCATIONS */}
<section className="py-16 bg-[#f8f5f1]">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    <div className="bg-white rounded-[30px] p-8 shadow-lg border border-orange-100">

      <h2 className="text-4xl font-bold mb-6">
        Locations We Serve in Ghaziabad
      </h2>

      <p className="text-gray-600 leading-relaxed mb-8">
        OmYogshala offers home yoga classes across all major areas of
        Ghaziabad, making it easy for you to start your wellness journey.
        We cover:
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-orange-50 rounded-[25px] p-6">
          <ul className="space-y-4 text-gray-700">

            <li className="flex gap-3">
              <CheckCircle2 className="text-orange-500 min-w-[20px]" />
              Indirapuram
            </li>

            <li className="flex gap-3">
              <CheckCircle2 className="text-orange-500 min-w-[20px]" />
              Vaishali
            </li>

            <li className="flex gap-3">
              <CheckCircle2 className="text-orange-500 min-w-[20px]" />
              Vasundhara
            </li>

            <li className="flex gap-3">
              <CheckCircle2 className="text-orange-500 min-w-[20px]" />
              Kaushambi
            </li>

            <li className="flex gap-3">
              <CheckCircle2 className="text-orange-500 min-w-[20px]" />
              Crossing Republik
            </li>

            <li className="flex gap-3">
              <CheckCircle2 className="text-orange-500 min-w-[20px]" />
              Raj Nagar Extension
            </li>
          </ul>
        </div>

        <div className="bg-orange-50 rounded-[25px] p-6 flex items-center">
          <p className="text-gray-700 leading-relaxed">
            No matter where you live in Ghaziabad, our yoga trainers at home
            bring the benefits of yoga right to your doorstep.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* TRAINERS */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    <div className="bg-[#fff8f3] rounded-[30px] p-8 shadow-lg border border-orange-100">

      <h2 className="text-4xl font-bold mb-6">
        Certified Yoga Instructors at Home
      </h2>

      <p className="text-gray-600 leading-relaxed mb-8">
        Our experienced home yoga trainers in Ghaziabad are certified and
        trained in various yoga styles, ensuring that you get a customized and
        safe yoga practice at home.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {/* CARD */}
        <div className="bg-white rounded-[25px] p-6 shadow-md border border-orange-100">
          <h3 className="text-2xl font-bold mb-4">
            Hatha Yoga
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Ideal for improving flexibility, strength, and balance.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-[25px] p-6 shadow-md border border-orange-100">
          <h3 className="text-2xl font-bold mb-4">
            Vinyasa Flow
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Perfect for those looking for a dynamic and energetic yoga session.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-[25px] p-6 shadow-md border border-orange-100">
          <h3 className="text-2xl font-bold mb-4">
            Therapeutic Yoga
          </h3>

          <p className="text-gray-600 leading-relaxed">
            For individuals managing stress, anxiety, or chronic pain.
          </p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mt-8">
        Our yoga instructors at home Ghaziabad also incorporate meditation and
        pranayama to enhance both your physical and mental well-being.
      </p>
    </div>
  </div>
</section>

{/* HOW TO GET STARTED */}
<section className="py-16 bg-[#f8f5f1]">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-8">

      {/* LEFT */}
      <div className="bg-white rounded-[30px] p-8 shadow-lg border border-orange-100">

        <h2 className="text-4xl font-bold mb-6">
          How to Get Started with Home Yoga Classes in Ghaziabad
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8">
          Getting started with OmYogshala's home yoga classes is simple.
        </p>

        <div className="space-y-6">

          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
              1
            </div>

            <p className="text-gray-700">
              <span className="font-semibold">Contact Us:</span> Reach out
              through our website or phone to schedule your free consultation.
            </p>
          </div>

          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
              2
            </div>

            <p className="text-gray-700">
              <span className="font-semibold">Personalized Yoga Plan:</span>{" "}
              After assessing your goals and fitness level, we create a
              customized yoga program just for you.
            </p>
          </div>

          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
              3
            </div>

            <p className="text-gray-700">
              <span className="font-semibold">Start Your Practice:</span>{" "}
              Enjoy a seamless yoga experience with a dedicated yoga teacher at
              home in Ghaziabad.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="bg-white rounded-[30px] p-8 shadow-lg border border-orange-100">

        <h2 className="text-4xl font-bold mb-6">
          Why OmYogshala is Your Top Choice for Home Yoga in Ghaziabad
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8">
          At OmYogshala, we prioritize personalized instruction, convenience,
          and holistic wellness. Here's why we're the best choice for home yoga
          classes in Ghaziabad:
        </p>

        <div className="space-y-6">

          <div className="flex gap-4">
            <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

            <p className="text-gray-700">
              <span className="font-semibold">
                Certified Trainers:
              </span>{" "}
              Our team of yoga instructors at home are certified and experienced
              in guiding individuals of all fitness levels.
            </p>
          </div>

          <div className="flex gap-4">
            <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

            <p className="text-gray-700">
              <span className="font-semibold">
                Customized Programs:
              </span>{" "}
              Each yoga session is tailored to meet your specific goals, from
              weight loss to stress relief.
            </p>
          </div>

          <div className="flex gap-4">
            <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

            <p className="text-gray-700">
              <span className="font-semibold">
                Holistic Wellness:
              </span>{" "}
              Our approach combines physical postures with mindfulness practices,
              creating a complete mind-body experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-[35px] p-10 md:p-14 text-white shadow-2xl">

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Book Your Home Yoga Classes in Ghaziabad Today!
      </h2>

      <p className="text-lg leading-relaxed text-orange-50 mb-8 max-w-4xl">
        Start your yoga journey today with OmYogshala's home yoga classes in
        Ghaziabad. Whether you want to lose weight, manage stress, or improve
        flexibility, our yoga trainer at home will create a program that works
        for you. Contact us now to book your first session and experience yoga
        like never before!
      </p>

      <button className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-2xl font-bold transition-all duration-300">
        Book Free Trial
      </button>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="py-16 bg-[#f8f5f1]">
  <div className="max-w-5xl mx-auto px-4 lg:px-8">

    <div className="space-y-4">

      <details
        className="bg-white rounded-2xl shadow-md border border-orange-100 p-6"
        open
      >
        <summary className="font-semibold text-lg cursor-pointer">
          Which areas in Ghaziabad do you cover?
        </summary>

        <p className="text-gray-600 mt-5 leading-relaxed">
          We provide home yoga classes across Indirapuram, Vaishali,
          Vasundhara, Kaushambi, Raj Nagar Extension, and Crossing Republik.
        </p>
      </details>

      <details className="bg-white rounded-2xl shadow-md border border-orange-100 p-6">
        <summary className="font-semibold text-lg cursor-pointer">
          What yoga styles are offered at home?
        </summary>

        <p className="text-gray-600 mt-5 leading-relaxed">
          We offer Hatha Yoga, Vinyasa Flow, Therapeutic Yoga, meditation,
          pranayama, and personalized wellness yoga sessions.
        </p>
      </details>

      <details className="bg-white rounded-2xl shadow-md border border-orange-100 p-6">
        <summary className="font-semibold text-lg cursor-pointer">
          How is a personal yoga plan created?
        </summary>

        <p className="text-gray-600 mt-5 leading-relaxed">
          Our trainers assess your health goals, fitness level, and preferences
          before designing a fully customized yoga routine.
        </p>
      </details>

      <details className="bg-white rounded-2xl shadow-md border border-orange-100 p-6">
        <summary className="font-semibold text-lg cursor-pointer">
          Can beginners or people with health issues join?
        </summary>

        <p className="text-gray-600 mt-5 leading-relaxed">
          Yes, our sessions are beginner-friendly and therapeutic yoga programs
          are available for people with stress, anxiety, or chronic pain issues.
        </p>
      </details>

      <details className="bg-white rounded-2xl shadow-md border border-orange-100 p-6">
        <summary className="font-semibold text-lg cursor-pointer">
          Are timings flexible for home yoga classes?
        </summary>

        <p className="text-gray-600 mt-5 leading-relaxed">
          Absolutely. We provide flexible morning and evening slots according
          to your convenience and daily schedule.
        </p>
      </details>
    </div>
  </div>
</section>
</div>
  );
}