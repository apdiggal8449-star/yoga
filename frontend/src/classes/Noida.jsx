import React from "react";

const HomeYogaDelhi = () => {
  return (
    <section className="bg-[#faf8f5] overflow-hidden">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#4b2dbd] to-[#6f4cff] py-24 px-4">

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <span className="bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium">
            Personalized Yoga at Home
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Home Yoga Classes in Delhi
          </h1>

          <p className="mt-6 text-white/80 max-w-3xl mx-auto leading-8 text-sm sm:text-base">
            Personalized yoga instruction at your doorstep with experienced yoga instructors.
          </p>

        </div>

      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="bg-white rounded-[35px]  border border-gray-100 p-6 sm:p-10 lg:p-14">

          {/* Intro */}
          <div className="mb-16">

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Personalized Yoga Instruction at Your Doorstep
            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-sm sm:text-base">
              In a busy city like Delhi, it can be hard to make time for your health and fitness.
              That's why at Omyogshala, we bring yoga directly to your home. Our home yoga classes
              in Delhi are perfect for everyone, whether you're new to yoga or have been practicing
              for years. Our experienced yoga trainers design each session based on your personal
              goals and fitness level, making it easier for you to stay healthy and relaxed.
              Forget about traffic and crowded studios — enjoy the peace and convenience of practicing
              yoga right at home.
            </p>

          </div>

          {/* Why Choose */}
          <div className="mb-16">

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Why Choose Home Yoga Classes in Delhi?
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Opting for a personal yoga trainer at home in Delhi offers numerous benefits,
              tailored to your needs. Here's why Omyogshala's home yoga services stand out:
            </p>

            <div className="mt-8 space-y-5">

              {[
                {
                  title: "Personalized Instruction:",
                  desc: "Receive one-on-one guidance from a highly trained yoga instructor at home, ensuring you get the most out of each session, with personalized adjustments to your postures and breathwork.",
                },
                {
                  title: "Convenient Scheduling:",
                  desc: "Skip the commute and practice on your terms. Our home yoga trainers work around your schedule, offering flexibility whether you prefer early morning or evening sessions.",
                },
                {
                  title: "Privacy & Comfort:",
                  desc: "Enjoy practicing yoga in the privacy and comfort of your own home, with a program tailored to your fitness and wellness goals.",
                },
                {
                  title: "Goal-Oriented Sessions:",
                  desc: "Whether you're aiming to lose weight, improve flexibility, manage stress, or simply stay fit, our yoga teachers at home design sessions specifically to meet your objectives.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f8f5ff] border border-[#ece7ff] rounded-2xl p-6"
                >

                  <h3 className="text-lg font-bold text-[#5b3df5]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* Benefits */}
          <div className="mb-16">

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Benefits of Home Yoga Classes
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              At Omyogshala, our yoga classes at home offer a comprehensive wellness experience,
              combining the ancient art of yoga with modern fitness techniques.
              Here's how you can benefit:
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-6">

              {[
                {
                  title: "Yoga for Stress Relief",
                  desc: "In the bustling atmosphere of Delhi, stress relief is a major concern. Our yoga at home in Delhi incorporates meditation and pranayama to help you relax, de-stress, and rejuvenate.",
                },
                {
                  title: "Custom Workouts for Weight Loss",
                  desc: "Struggling with fitness goals? Our trainers offer yoga classes at home that are specially designed to boost metabolism and help you shed those extra kilos.",
                },
                {
                  title: "Therapeutic Yoga",
                  desc: "Our trainers specialize in therapeutic yoga, ideal for individuals dealing with chronic pain, anxiety, or stress.",
                },
                {
                  title: "Meditation & Wellness",
                  desc: "Experience complete mental and physical balance through guided meditation and mindful breathing exercises.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-xl transition"
                >

                  <h3 className="text-2xl font-bold text-[#5b3df5]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* Locations */}
          <div className="mb-16">

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Locations We Serve in Delhi
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Omyogshala offers home yoga classes across major neighborhoods in Delhi,
              ensuring you get a premium yoga experience no matter where you live.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">

              {[
                "Yoga Classes in South Delhi: Including Vasant Vihar, Greater Kailash, Hauz Khas, and more.",
                "Yoga Classes in East Delhi: From Preet Vihar to Mayur Vihar, we bring yoga to your home in these busy localities.",
                "Yoga Classes in West Delhi: Covering areas such as Rajouri Garden, Janakpuri, and Punjabi Bagh.",
                "Yoga Classes in North Delhi: Available in Rohini, Civil Lines, and Model Town.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#fff7ed] border border-orange-100 rounded-2xl p-6"
                >

                  <p className="text-gray-700 leading-7 font-medium">
                    {item}
                  </p>

                </div>
              ))}

            </div>

            <p className="mt-6 text-gray-600 leading-8">
              No matter where you reside, Omyogshala brings the best yoga instruction right to your home.
            </p>

          </div>

          {/* Trainers */}
          <div className="mb-16">

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Our Expert Trainers
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Each of our home yoga instructors in Delhi is certified and highly experienced in offering yoga classes at home.
              They bring expertise in various yoga styles, including:
            </p>

            <div className="mt-8 space-y-5">

              {[
                "Hatha Yoga: Ideal for beginners, focusing on balance, flexibility, and strength.",
                "Vinyasa Yoga: A more dynamic practice, perfect for those seeking an energetic and flowing workout.",
                "Therapeutic Yoga: Targeted sessions designed to alleviate pain, reduce anxiety, and promote healing.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-5 bg-[#f8f5ff] rounded-2xl p-6"
                >

                  <div className="w-12 h-12 rounded-full bg-[#5b3df5] text-white flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>

                  <p className="text-gray-700 leading-7">
                    {item}
                  </p>

                </div>
              ))}

            </div>

            <p className="mt-6 text-gray-600 leading-8">
              Our yoga teachers at home will also incorporate breathing techniques and meditation
              to enhance your mental well-being, offering a complete mind-body experience.
            </p>

          </div>

          {/* How To Start */}
          <div className="mb-16">

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              How to Get Started with Home Yoga Classes
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Getting started with Omyogshala's home yoga classes is simple:
            </p>

            <div className="mt-8 space-y-5">

              {[
                "Contact Us: Get in touch with us through our website or phone to schedule a free consultation.",
                "Personalized Plan: We assess your fitness level and wellness goals to create a customized yoga plan.",
                "Start Your Practice: Begin your journey to better health and wellness with a dedicated yoga trainer at home.",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex gap-5 items-start bg-white border border-gray-200 rounded-2xl p-6"
                >

                  <div className="w-12 h-12 rounded-full bg-[#5b3df5] text-white flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>

                  <p className="text-gray-700 leading-7">
                    {step}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* Why Omyogshala */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Why Omyogshala is the Best Choice for Home Yoga in Delhi
            </h2>

            <div className="mt-8 bg-gradient-to-r from-[#4b2dbd] to-[#6f4cff] rounded-[35px] p-8 sm:p-12 text-white">

              <ul className="space-y-5 leading-8">

                <li>
                  • Trusted Expertise: Our team of yoga instructors at home have years of experience, ensuring you're in safe hands.
                </li>

                <li>
                  • Holistic Approach: We don't just focus on physical yoga poses. Our sessions also include elements of mindfulness, meditation, and breath control.
                </li>

                <li>
                  • Tailored to You: Your personal yoga trainer at home in Delhi will create a customized program based on your body, goals, and preferences.
                </li>

              </ul>

              <div className="mt-10">

                <h3 className="text-3xl font-bold">
                  Book Your Home Yoga Classes in Delhi Today!
                </h3>

                <p className="mt-5 text-white/80 leading-8">
                  Take the first step towards a healthier and more balanced life with home yoga classes from Omyogshala.
                  Enjoy personalized yoga sessions designed for your specific needs with an experienced yoga instructor at home in Delhi.
                  Contact us today to schedule your first session and experience the benefits of yoga in the comfort of your home!
                </p>

                <button className="mt-8 bg-white text-[#5b3df5] px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-xl">
                  Book Free Trial Class
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeYogaDelhi;