import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function YogaSection() {
  const [activeFaq, setActiveFaq] = useState(null);

  // =========================
  // TESTIMONIALS
  // =========================

  const testimonials = [
    {
      rating: 5,
      text:
        '"OmYogshala sent a wonderful trainer to my home in Vasant Vihar. My flexibility has improved significantly. Best home yoga in Delhi!"',
      name: "PRIYANKA VERMA",
      role: "SOFTWARE ENGINEER",
    },
    {
      rating: 5,
      text:
        '"The instructors are highly knowledgeable. They tailored the sessions perfectly for my back pain. If you\'re looking for the best yoga classes in Delhi, I highly recommend their personalized home service."',
      name: "RAJESH KUMAR",
      role: "BUSINESS OWNER",
    },
    {
      rating: 5,
      text:
        '"As a busy mother, I love that they offer flexible home yoga classes. It saves me travel time, and the sessions are very peaceful. It\'s been a great experience for my overall wellness."',
      name: "ANJALI SHARMA",
      role: "HOUSEWIFE",
    },
    {
      rating: 5,
      text:
        '"Very professional yoga trainers with excellent experience. Highly recommended for stress relief and fitness."',
      name: "AMIT SINGH",
      role: "IT PROFESSIONAL",
    },
    {
      rating: 5,
      text:
        '"Their yoga classes helped me improve flexibility and mental peace. Best yoga services in Gurgaon."',
      name: "NEHA GUPTA",
      role: "TEACHER",
    },
  ];

  // =========================
  // STATS
  // =========================

  const stats = [
    { value: 8, suffix: "+", label: "Experience" },
    { value: 1100, suffix: "+", label: "Happy Clients" },
    { value: 100, suffix: "+", label: "Yoga Trainer" },
  ];

  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {

    const timers = stats.map((item, index) => {

      const duration = 2000;

      const increment = item.value / (duration / 20);

      return setInterval(() => {

        setCounts((prev) => {

          const updated = [...prev];

          if (updated[index] < item.value) {

            updated[index] = Math.min(
              updated[index] + increment,
              item.value
            );

          }

          return updated;

        });

      }, 20);

    });

    return () => timers.forEach(clearInterval);

  }, []);

  // =========================
  // CITY CARDS
  // =========================

  const yogaCards = [
    {
      title: "Yoga Classes in Delhi",
      image:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Experience the ultimate yoga sessions with certified trainers in Delhi.",
    },
    {
      title: "Yoga Classes in Noida",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Professional yoga classes for flexibility and stress relief in Noida.",
    },
    {
      title: "Yoga Classes in Ghaziabad",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Improve health and fitness with expert yoga instructors.",
    },
    {
      title: "Yoga Classes in Greater Noida",
      image:
        "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Join personalized yoga classes for body and mind wellness.",
    },
    {
      title: "Yoga Classes in Faridabad",
      image:
        "https://images.unsplash.com/photo-1599447421383-8a6dbf2f7e8a?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Daily yoga sessions with experienced yoga teachers.",
    },
    {
      title: "Yoga Classes in Gurugram",
      image:
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Premium yoga training for all age groups and fitness levels.",
    },
  ];

  // =========================
  // TESTIMONIAL SLIDER
  // =========================

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const slider = setInterval(() => {

      setCurrent((prev) =>
        prev === testimonials.length - 3 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(slider);

  }, [testimonials.length]);

  return (

    <section className="w-full bg-white">

      {/* ===================== */}
      {/* NUMBERS */}
      {/* ===================== */}

      <div className="bg-black py-10">

        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-center text-3xl md:text-4xl font-bold text-orange-500 mb-8">
            Numbers Speak
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {stats.map((item, index) => (

              <div
                key={index}
                className="text-center"
              >

                <h3 className="text-5xl font-bold text-orange-500">
                  {Math.floor(counts[index]).toLocaleString()}
                  {item.suffix}
                </h3>

                <p className="text-white mt-2 text-lg">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ===================== */}
      {/* OUR PRESENCE */}
      {/* ===================== */}

      <div className="max-w-6xl mx-auto px-4 py-16">

        <h2 className="text-center text-3xl font-bold mb-12">
          OUR PRESENCE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {yogaCards.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              {/* IMAGE LINK */}
              <Link
                to={`/${item.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition duration-300"
                />

              </Link>

              <div className="p-5">

                {/* TITLE LINK */}
                <Link
                  to={`/${item.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >

                  <h3 className="text-3xl cursor-pointer font-bold text-orange-500 mb-4 hover:underline">
                    {item.title}
                  </h3>

                </Link>

                <p className="text-gray-600 leading-7 text-sm">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ===================== */}
      {/* TESTIMONIALS */}
      {/* ===================== */}

      <div className="bg-gray-100 py-16 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-center text-3xl font-bold mb-12">
            What Our Clients Say
          </h2>

          {/* SLIDER */}
          <div className="overflow-hidden ">

            <div
              className="flex transition-all  duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * 33.33}%)`,
              }}
            >

              {testimonials.map((t, idx) => (

                <div
                  key={idx}
                  className="w-full     md:w-1/3 flex-shrink-0 px-3 "
                >

                  <div className="p-6 bg-white border-b-7 border-green-600 rounded-2xl shadow-sm flex flex-col justify-between text-center h-full hover:shadow-xl transition duration-300">

                    <div>

                      {/* STARS */}
                      <div className="flex justify-center text-amber-400 mb-4 space-x-1">

                        {[...Array(t.rating)].map((_, i) => (

                          <Star
                            key={i}
                            size={18}
                            fill="currentColor"
                          />

                        ))}

                      </div>

                      {/* TEXT */}
                      <p className="text-sm italic leading-7 text-gray-600">
                        {t.text}
                      </p>

                    </div>

                    {/* USER */}
                    <div className="mt-6 pt-4 border-t border-gray-100">

                      <h4 className="text-sm font-bold tracking-wider text-gray-900">
                        {t.name}
                      </h4>

                      <p className="text-xs text-gray-400 mt-1 tracking-tight font-medium">
                        {t.role}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-8 gap-2">

            {testimonials
              .slice(0, testimonials.length - 2)
              .map((_, idx) => (

                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition ${
                    current === idx
                      ? "bg-orange-500"
                      : "bg-gray-300"
                  }`}
                />

              ))}

          </div>

        </div>

      </div>
      {/* ===================== */}
      {/* latest blogs */}
      {/* ===================== */}

      <div className="max-w-6xl mx-auto px-4 py-16">

        <h2 className="text-center text-3xl font-bold mb-12">
          Latest Blogs Post
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {yogaCards.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              {/* IMAGE LINK */}
              <Link
                to={`/${item.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition duration-300"
                />

              </Link>

              <div className="p-5">

                {/* TITLE LINK */}
                <Link
                  to={`/${item.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >

                  <h3 className="text-3xl cursor-pointer font-bold text-orange-500 mb-4 hover:underline">
                    {item.title}
                  </h3>

                </Link>

                <p className="text-gray-600 leading-7 text-sm">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
{/* ===================== */}
{/* FAQ SECTION */}
{/* ===================== */}

<div className="bg-white py-16">

  <div className="max-w-5xl mx-auto px-4">

    <div className="space-y-5">

      {[
        {
          question: "Is OmYogshala suitable for beginners who have never done yoga?",
          answer:
            "Absolutely! Our home yoga classes are 100% personalized. Our trainers assess your current fitness level and start with the basics, ensuring you learn the correct postures and breathing techniques at a pace that is comfortable for you",
        },
        {
          question: "Can I request a certified Female Yoga Trainer?",
          answer:"Yes, you can. OmYogshala has a dedicated team of experienced and certified female yoga instructors. We understand the importance of privacy and comfort, especially for our female clients across Delhi NCR, Mumbai, and other major cities.",
        },
        {
          question: "What is the duration of a session and are the timings flexible?",
          answer:
            "A typical yoga session lasts for 60 minutes. One of our biggest advantages is flexibility; you can choose any time slot between 6:00 AM and 8:00 PM that fits perfectly into your daily routine.",
        },
      ].map((faq, index) => (

        <div
          key={index}
          className="border border-gray-200 rounded-2xl overflow-hidden hover:bg-orange-50 transition-all duration-300"
        >

          {/* QUESTION */}
          <button
            onClick={() =>
              setActiveFaq(
                activeFaq === index ? null : index
              )
            }
            className="w-full flex items-center justify-between px-3 py-3 text-left"
          >

            {/* LEF */}
            <div className="flex items-center gap-5">

              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">

                {activeFaq === index ? (

                  <span className="text-3xl text-orange-500 font-bold">
                    -
                  </span>

                ) : (

                  <span className="text-3xl text-orange-500 font-bold">
                    +
                  </span>

                )}

            
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>

            </div>

            {/* RIGHT ICON */}
            <div className="text-orange-500 text-3xl">

              {activeFaq === index ? "⌄" : "›"}

            </div>

          </button>

          {/* ANSWER */}
          <div
            className={`transition-all duration-500 overflow-hidden ${
              activeFaq === index
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >

            <p className="px-24 pb-6 text-gray-600 leading-8 text-[15px]">
              {faq.answer}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</div>
         
    </section>
  );
}