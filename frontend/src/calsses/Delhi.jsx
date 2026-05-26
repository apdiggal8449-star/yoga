import React from "react";
import {
  MapPin,
  CheckCircle2,
  Users,
  HeartHandshake,
  Dumbbell,
  Sparkles,
  Phone,
  ArrowRight,
} from "lucide-react";

import yogaImg from "../assets/dy.webp"; // add your image

export default function HomeYogaDelhi() {
  const benefits = [
    "Personalized yoga sessions at home",
    "Certified and experienced trainers",
    "Flexible timings for busy schedules",
    "Private & comfortable environment",
    "Weight loss and stress relief programs",
  ];

  const classes = [
    "Yoga Classes in South Delhi",
    "Yoga Classes in East Delhi",
    "Yoga Classes in West Delhi",
    "Yoga Classes in Central Delhi",
    "Yoga Classes in North Delhi",
  ];

  const trainers = [
    {
      title: "Hatha Yoga",
      desc: "Perfect for beginners focusing on balance, flexibility, and strength.",
    },
    {
      title: "Vinyasa Yoga",
      desc: "Dynamic and energetic sessions with breathing-flow movement.",
    },
    {
      title: "Therapeutic Yoga",
      desc: "Specialized yoga sessions for stress, anxiety, and pain relief.",
    },
  ];

  return (
    <div className="bg-[#f8f5f1] text-gray-800 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                OM YOGSHALA
              </span>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Home Yoga Classes
                <span className="text-orange-500"> in Delhi</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Get personalized yoga training at your doorstep with expert yoga
                instructors. Improve flexibility, reduce stress, and achieve a
                healthy lifestyle from the comfort of your home.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-7 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg">
                  Book Free Demo
                  <ArrowRight size={18} />
                </button>

                <button className="border-2 border-orange-400 text-orange-500 hover:bg-orange-50 px-7 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all">
                  <Phone size={18} />
                  Call Now
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 bg-orange-300 rounded-[40px] blur-3xl opacity-20"></div>

              <img
                src={yogaImg}
                alt="Home Yoga"
                className="relative rounded-[30px] shadow-2xl w-full object-cover"
              />

              {/* FLOATING CARD */}
              <div className="absolute -bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl w-[260px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Sparkles className="text-orange-500" size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">100% Personalized</h3>
                    <p className="text-sm text-gray-500">
                      Yoga at your comfort
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Home Yoga Classes?
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience premium yoga sessions tailored to your goals with
              flexible timing and expert trainers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-orange-100"
              >
                <div className="bg-orange-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">
                  <CheckCircle2 className="text-orange-500" size={28} />
                </div>

                <h3 className="font-semibold text-xl mb-3">{item}</h3>

                <p className="text-gray-600 leading-relaxed">
                  Professional yoga sessions designed for your wellness journey.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <img
                src={yogaImg}
                alt=""
                className="rounded-[30px] shadow-2xl"
              />
            </div>

            <div>
              <span className="text-orange-500 font-semibold uppercase tracking-wider">
                Benefits
              </span>

              <h2 className="text-4xl font-bold mt-3 mb-6">
                Benefits of Home Yoga Classes
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl h-fit">
                    <HeartHandshake className="text-orange-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl mb-2">
                      Stress Relief
                    </h3>
                    <p className="text-gray-600">
                      Reduce anxiety and improve mindfulness through meditation
                      and yoga breathing techniques.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl h-fit">
                    <Dumbbell className="text-orange-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl mb-2">
                      Fitness & Weight Loss
                    </h3>
                    <p className="text-gray-600">
                      Boost metabolism and build flexibility with customized
                      fitness yoga sessions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl h-fit">
                    <Users className="text-orange-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl mb-2">
                      Personal Attention
                    </h3>
                    <p className="text-gray-600">
                      One-on-one yoga sessions designed according to your health
                      goals and lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Locations We Serve in Delhi
            </h2>

            <p className="text-gray-600">
              Premium home yoga services available across Delhi NCR.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-orange-100 flex gap-4"
              >
                <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center">
                  <MapPin className="text-orange-500" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">{item}</h3>

                  <p className="text-gray-600 text-sm">
                    Professional yoga sessions available in your area.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINERS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Our Expert Trainers
            </h2>

            <p className="text-gray-600">
              Highly experienced yoga instructors for every yoga style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((item, index) => (
              <div
                key={index}
                className="bg-[#fff8f3] rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-md"
              >
                <div className="bg-orange-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-[40px] p-10 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Yoga Journey Today
            </h2>

            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Book your personalized home yoga session with certified trainers
              and transform your health naturally.
            </p>

            <button className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
      {/* HOW TO GET STARTED */}
<section className="py-16 bg-[#f8f5f1]">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">
    
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      
      {/* LEFT CONTENT */}
      <div>
        <span className="text-orange-500 font-semibold uppercase tracking-wider">
          Simple Process
        </span>

        <h2 className="text-4xl font-bold mt-3 mb-6">
          How to Get Started with Home Yoga Classes
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8">
          Starting your yoga journey with us is simple and stress-free.
          Get personalized yoga sessions at your home with certified trainers.
        </p>

        <div className="space-y-6">
          
          {/* STEP 1 */}
          <div className="flex gap-5">
            <div className="min-w-[60px] h-[60px] bg-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
              1
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Contact Us
              </h3>

              <p className="text-gray-600">
                Reach out through phone or website to schedule your free consultation.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex gap-5">
            <div className="min-w-[60px] h-[60px] bg-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
              2
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Plan
              </h3>

              <p className="text-gray-600">
                Our trainers assess your goals and create a customized yoga routine.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex gap-5">
            <div className="min-w-[60px] h-[60px] bg-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
              3
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Start Practice
              </h3>

              <p className="text-gray-600">
                Begin your yoga sessions at home and transform your lifestyle naturally.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE CARD */}
      <div className="bg-white rounded-[30px] p-8 shadow-2xl border border-orange-100">
        
        <h3 className="text-3xl font-bold mb-6">
          Why Omyogshala is the Best Choice for Yoga in Delhi
        </h3>

        <div className="space-y-5">
          
          <div className="flex gap-4">
            <div className="bg-orange-100 p-3 rounded-xl h-fit">
              <CheckCircle2 className="text-orange-500" />
            </div>

            <div>
              <h4 className="font-semibold text-lg">
                Trusted Expertise
              </h4>

              <p className="text-gray-600">
                Experienced yoga instructors for every fitness level.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-orange-100 p-3 rounded-xl h-fit">
              <HeartHandshake className="text-orange-500" />
            </div>

            <div>
              <h4 className="font-semibold text-lg">
                Holistic Wellness
              </h4>

              <p className="text-gray-600">
                Focus on physical fitness, mindfulness, meditation, and breath control.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-orange-100 p-3 rounded-xl h-fit">
              <Users className="text-orange-500" />
            </div>

            <div>
              <h4 className="font-semibold text-lg">
                Tailored Sessions
              </h4>

              <p className="text-gray-600">
                Customized yoga classes designed around your body and goals.
              </p>
            </div>
          </div>
        </div>

        <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg">
          Book Your Free Demo
        </button>
      </div>
    </div>
  </div>
</section>

{/* BOOK SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">
    
    <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-3xl">
        <span className="uppercase tracking-widest text-orange-100 font-semibold">
          Start Today
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
          Book Your Home Yoga Classes in Delhi Today!
        </h2>

        <p className="text-lg text-orange-50 leading-relaxed mb-8">
          Take the first step towards a healthier and more balanced life with
          personalized yoga sessions at your doorstep.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-2xl font-bold transition-all duration-300">
            Book Free Trial
          </button>

          <button className="border border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* TESTIMONIALS */}
<section className="py-20 bg-[#f8f5f1]">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">
    
    <div className="text-center mb-14">
      <span className="text-orange-500 uppercase tracking-widest font-semibold">
        Testimonials
      </span>

      <h2 className="text-4xl font-bold mt-4">
        What Our Clients Says
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* CARD */}
      <div className="bg-white rounded-[30px] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
        <div className="flex text-orange-400 mb-5 text-xl">
          ★★★★★
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          The yoga sessions completely transformed my lifestyle.
          The trainer was highly professional and supportive.
        </p>

        <div>
          <h4 className="font-bold text-lg">
            Anjali Sharma
          </h4>

          <p className="text-gray-500 text-sm">
            South Delhi
          </p>
        </div>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-[30px] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
        <div className="flex text-orange-400 mb-5 text-xl">
          ★★★★★
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          I lost 5 kg in just 2 months with home yoga classes.
          Amazing experience and flexible timing.
        </p>

        <div>
          <h4 className="font-bold text-lg">
            Rahul Verma
          </h4>

          <p className="text-gray-500 text-sm">
            West Delhi
          </p>
        </div>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-[30px] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
        <div className="flex text-orange-400 mb-5 text-xl">
          ★★★★★
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          Perfect yoga program for stress relief and flexibility.
          Highly recommended for beginners.
        </p>

        <div>
          <h4 className="font-bold text-lg">
            Priya Kapoor
          </h4>

          <p className="text-gray-500 text-sm">
            North Delhi
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}