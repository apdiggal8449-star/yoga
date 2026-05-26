import React from "react";
import {
  CheckCircle2,
  Phone,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";

import yogaImg from "../assets/ycn.webp";

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
            Personalized Yoga in the Comfort of Your Home
          </h1>

          <p className="text-gray-600 leading-relaxed mb-5">
            Experience the benefits of yoga right at home with OmYogshala's home
            yoga classes in Noida. Our certified yoga trainers at home provide
            personalized sessions tailored to your fitness goals and schedule.
            Whether you're looking to improve flexibility, reduce stress, or
            embark on a weight loss journey, our personal yoga trainers at home
            Noida are here to guide you every step of the way.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We specialize in yoga for beginners, therapeutic yoga, meditation,
            and yoga for weight loss. Our expert yoga teacher at home in Noida
            helps you stay fit and healthy without stepping outside your home.
          </p>
        </div>

        {/* WHY CHOOSE */}
        <div className="bg-white rounded-[30px] p-8 shadow-lg border border-orange-100">

          <h2 className="text-3xl font-bold mb-6">
            Why Choose Home Yoga Classes in Noida?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            At OmYogshala, we bring experienced yoga instructors at home to make
            your practice comfortable, personalized, and convenient. Whether
            you're a beginner or an experienced practitioner, our yoga teacher
            at home Noida will design yoga sessions to fit your specific needs.
            Here's why you should choose our home yoga classes in Noida:
          </p>

          <div className="space-y-5">

            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

              <p className="text-gray-700">
                <span className="font-semibold">Convenience:</span> No need to
                worry about commuting in Noida traffic. Our yoga teacher at home
                comes to you, saving time and making it easy to incorporate yoga
                into your daily routine.
              </p>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

              <p className="text-gray-700">
                <span className="font-semibold">
                  Personalized Attention:
                </span>{" "}
                One-on-one sessions ensure that your yoga trainer at home in
                Noida focuses entirely on your progress, correcting postures,
                and helping you reach your fitness goals.
              </p>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

              <p className="text-gray-700">
                <span className="font-semibold">Expert Guidance:</span> Our
                certified and experienced female yoga trainer at home in Noida
                and male instructors offer tailored guidance that matches your
                health objectives, whether it's for flexibility, mindfulness, or
                strength.
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
            alt="Home Yoga Classes"
            className="relative rounded-[35px] shadow-2xl w-full object-cover"
          />

          <div className="absolute bottom-5 left-5 bg-white rounded-2xl px-5 py-4 shadow-xl">
            <h3 className="font-bold text-lg text-orange-500">
              HOME YOGA CLASSES IN NOIDA
            </h3>

            <p className="text-sm text-gray-500">
              No Travel • No Crowds • Just Results
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

          
        </div>
      </div>
    </div>

    {/* BOTTOM CONTENT */}
    <div className="mt-20">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-5">
          Choose the Perfect Personal Yoga Trainer Plan for Your Needs
        </h2>

        <h3 className="text-2xl font-bold text-orange-500">
          Yoga in Noida: Popularity and Accessibility
        </h3>

        <p className="text-gray-600 mt-6 leading-relaxed max-w-5xl mx-auto">
          Yoga has become an integral part of the wellness culture in Noida,
          with numerous yoga centers, certified instructors, and diverse
          offerings. The city is making yoga accessible to residents across
          various sectors.
        </p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-[25px] bg-white shadow-lg border border-orange-100">

        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="py-5 px-6 text-left">
                Aspect
              </th>

              <th className="py-5 px-6 text-left">
                Details
              </th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b border-orange-100">
              <td className="py-5 px-6 font-semibold">
                Numerous Yoga Centers
              </td>

              <td className="py-5 px-6 text-gray-600">
                Noida features a wide range of yoga studios and centers offering
                styles like Hatha, Vinyasa, Ashtanga, and therapeutic yoga,
                ensuring accessibility for residents across all sectors.
              </td>
            </tr>

            <tr className="border-b border-orange-100">
              <td className="py-5 px-6 font-semibold">
                Qualified Instructors
              </td>

              <td className="py-5 px-6 text-gray-600">
                Most yoga centers have certified, experienced trainers who
                provide personalized guidance to practitioners at all levels,
                from beginners to advanced learners.
              </td>
            </tr>

            <tr className="border-b border-orange-100">
              <td className="py-5 px-6 font-semibold">
                Variety of Classes
              </td>

              <td className="py-5 px-6 text-gray-600">
                Options range from basic yoga for beginners to specialized
                classes like prenatal yoga, kids' yoga, and yoga for senior
                citizens.
              </td>
            </tr>

            <tr>
              <td className="py-5 px-6 font-semibold">
                Community and Events
              </td>

              <td className="py-5 px-6 text-gray-600">
                Yoga studios often organize workshops, retreats, and community
                events to foster a sense of belonging and promote holistic
                health and well-being.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section> 
{/* BENEFITS */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    <h2 className="text-4xl font-bold mb-8">
      Benefits of Home Yoga Classes in Noida
    </h2>

    <p className="text-gray-600 leading-relaxed mb-8">
      Practicing yoga at home with a dedicated yoga instructor at home offers
      numerous benefits, including:
    </p>

    <div className="space-y-6">

      <div className="flex gap-4">
        <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

        <p className="text-gray-700">
          <span className="font-semibold">Yoga for Weight Loss:</span> Our yoga
          classes at home in Noida are designed to help you shed extra kilos
          through dynamic postures and effective breathing techniques.
        </p>
      </div>

      <div className="flex gap-4">
        <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

        <p className="text-gray-700">
          <span className="font-semibold">Stress Relief:</span> In the fast-paced
          life of Noida, managing stress is vital. Our personalized yoga sessions
          include meditation and breathing practices to calm your mind.
        </p>
      </div>

      <div className="flex gap-4">
        <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

        <p className="text-gray-700">
          <span className="font-semibold">Yoga for Beginners:</span> New to yoga?
          No worries. Our yoga teacher at home in Noida will guide you through
          foundational poses, ensuring that you practice safely and effectively.
        </p>
      </div>
    </div>
  </div>
</section>

{/* LOCATIONS */}
<section className="py-16 bg-[#f8f5f1]">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    <h2 className="text-4xl font-bold mb-6">
      Locations We Serve in Noida
    </h2>

    <p className="text-gray-600 leading-relaxed mb-8">
      OmYogshala proudly offers yoga classes at home in Noida, covering all
      major areas, including:
    </p>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
        <ul className="space-y-4 text-gray-700">

          <li className="flex gap-3">
            <CheckCircle2 className="text-orange-500 min-w-[20px]" />
            Sector 15, 16, and 18
          </li>

          <li className="flex gap-3">
            <CheckCircle2 className="text-orange-500 min-w-[20px]" />
            Sector 50, 62, and 76
          </li>

          <li className="flex gap-3">
            <CheckCircle2 className="text-orange-500 min-w-[20px]" />
            Noida Extension
          </li>

          <li className="flex gap-3">
            <CheckCircle2 className="text-orange-500 min-w-[20px]" />
            Noida Sector 122
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100 flex items-center">
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold">
            We Also Provide Yoga Classes in Noida other Locations:
          </span>{" "}
          Our yoga trainers at home are available across Noida, so you can
          enjoy the benefits of yoga without having to leave your neighborhood.
        </p>
      </div>
    </div>
  </div>
</section>

{/* TRAINERS */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    <h2 className="text-4xl font-bold mb-6">
      Certified Personal Yoga Trainers at Home
    </h2>

    <p className="text-gray-600 leading-relaxed mb-8">
      Our team of personal yoga trainers at home Noida consists of certified
      professionals with years of experience. We specialize in a wide range of
      yoga styles to suit your unique needs:
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      {/* CARD */}
      <div className="bg-[#fff8f3] rounded-[25px] p-8 border border-orange-100 shadow-md hover:shadow-xl transition-all">

        <h3 className="text-2xl font-bold mb-4">
          Hatha Yoga
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Improve flexibility and strength with traditional yoga postures.
        </p>
      </div>

      {/* CARD */}
      <div className="bg-[#fff8f3] rounded-[25px] p-8 border border-orange-100 shadow-md hover:shadow-xl transition-all">

        <h3 className="text-2xl font-bold mb-4">
          Vinyasa Flow
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Get energized with dynamic sequences that help improve stamina and balance.
        </p>
      </div>

      {/* CARD */}
      <div className="bg-[#fff8f3] rounded-[25px] p-8 border border-orange-100 shadow-md hover:shadow-xl transition-all">

        <h3 className="text-2xl font-bold mb-4">
          Therapeutic Yoga
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Ideal for stress management, anxiety, and chronic pain.
        </p>
      </div>
    </div>

    <p className="text-gray-600 leading-relaxed mt-8">
      Whether you need a female yoga trainer at home in Noida or a male
      instructor, we provide experienced teachers who focus on your overall
      wellness.
    </p>
  </div>
</section>

{/* WHY OMYOGSHALA */}
<section className="py-16 bg-[#f8f5f1]">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    <h2 className="text-4xl font-bold mb-6">
      Why OmYogshala for Home Yoga in Noida?
    </h2>

    <p className="text-gray-600 leading-relaxed mb-8">
      When you choose OmYogshala, you're partnering with a trusted name in
      home yoga services. Here's what sets us apart:
    </p>

    <div className="space-y-6">

      <div className="flex gap-4">
        <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

        <p className="text-gray-700">
          <span className="font-semibold">Certified Trainers:</span> Our yoga
          instructors at home Noida are certified, ensuring you receive
          high-quality instruction in the comfort of your home.
        </p>
      </div>

      <div className="flex gap-4">
        <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

        <p className="text-gray-700">
          <span className="font-semibold">Tailored Sessions:</span> Every session
          is designed to fit your specific goals, whether it's weight loss,
          flexibility, or mental peace.
        </p>
      </div>

      <div className="flex gap-4">
        <CheckCircle2 className="text-orange-500 min-w-[24px] mt-1" />

        <p className="text-gray-700">
          <span className="font-semibold">Holistic Wellness:</span> Our home yoga
          classes combine physical postures with mindfulness techniques to
          create a complete mind-body experience.
        </p>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-[35px] p-10 md:p-14 text-white shadow-2xl">

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Book Your Home Yoga Classes in Noida Today!
      </h2>

      <p className="text-lg leading-relaxed text-orange-50 mb-8 max-w-4xl">
        Start your yoga journey with OmYogshala home yoga classes in Noida
        today. Our yoga trainers at home are ready to guide you through a
        transformative practice that aligns with your personal wellness goals.
        Contact us to schedule your first session and experience the convenience
        and benefits of yoga at home.
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

      {/* FAQ 1 */}
      <details className="bg-white rounded-2xl shadow-md border border-orange-100 p-6 group" open>
        <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
          What types of home yoga classes are offered in Noida?
          <span className="text-orange-500 text-2xl">−</span>
        </summary>

        <p className="text-gray-600 mt-5 leading-relaxed">
          OmYogshala offers personalized home yoga classes suitable for all
          levels, including beginners, advanced practitioners, prenatal/postnatal
          yoga, and therapeutic yoga tailored to your needs.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-white rounded-2xl shadow-md border border-orange-100 p-6 group">
        <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
          How can I book a home yoga class in Noida with OmYogshala?
          <span className="text-orange-500 text-2xl">+</span>
        </summary>

        <p className="text-gray-600 mt-5 leading-relaxed">
          You can contact us through our website or phone number to schedule
          a free consultation and book your personalized yoga sessions.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-white rounded-2xl shadow-md border border-orange-100 p-6 group">
        <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
          What should I prepare for my first home yoga session in Noida?
          <span className="text-orange-500 text-2xl">+</span>
        </summary>

        <p className="text-gray-600 mt-5 leading-relaxed">
          Wear comfortable clothes, keep a yoga mat ready, and ensure you have
          a peaceful space where you can practice comfortably.
        </p>
      </details>
    </div>
  </div>
</section>
  </div>
  );
}