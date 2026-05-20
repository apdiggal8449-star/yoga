import React from "react";
import {Link} from 'react-router-dom';
import {
  CheckCircle,
  Heart,
  Baby,
  Flower2,
  ShieldCheck,
} from "lucide-react";

export default function PregnancyYogaPage() {

  // STATIC DATA
  const data = {

    heroImage:
      "https://images.unsplash.com/photo-1518611012118-fb0ab7831b8f",

    highlights: [
      "Safe & Customized Yoga Poses for every trimester",
      "Relieves Back Pain, Swelling & Fatigue",
      "Enhances Strength, Flexibility & Posture",
      "Guided Meditation for Emotional Well-being",
    ],

    benefits: [
      {
        title: "Improves Flexibility & Strength",
        description:
          "Gentle movements help strengthen muscles and improve flexibility."
      },
      {
        title: "Reduces Pregnancy Discomfort",
        description:
          "Helps alleviate common pregnancy discomforts."
      },
      {
        title: "Promotes Relaxation",
        description:
          "Breathing exercises help manage stress and improve sleep."
      },
      {
        title: "Prepares for Labor",
        description:
          "Learn breathing techniques and postures helpful during labor."
      }
    ],

    whoCanJoin: [
      "Expecting mothers who want to stay active during pregnancy.",
      "Women experiencing back pain or swelling.",
      "Mothers preparing for labor and delivery.",
      "Anyone seeking a mindful approach to pregnancy."
    ],

    classSteps: [
      {
        title: "Consultation",
        description:
          "We discuss your pregnancy stage and wellness goals."
      },
      {
        title: "Customized Sessions",
        description:
          "Yoga sessions designed according to trimester."
      },
      {
        title: "Breathing & Relaxation",
        description:
          "Guided breathing and meditation techniques."
      },
      {
        title: "Ongoing Support",
        description:
          "Continuous guidance throughout pregnancy."
      }
    ],

    types: [
      {
        title: "Gentle Stretching",
        description:
          "Safe poses that enhance flexibility."
      },
      {
        title: "Pelvic Floor Exercises",
        description:
          "Strengthening exercises for labor preparation."
      },
      {
        title: "Breathing Techniques",
        description:
          "Pranayama techniques for relaxation."
      },
      {
        title: "Mindfulness",
        description:
          "Meditation and emotional well-being support."
      }
    ],

    options: [
      {
        title: "Private Sessions",
        description:
          "One-on-one personalized prenatal yoga classes."
      },
      {
        title: "Group Sessions",
        description:
          "Practice with other expecting mothers."
      },
      {
        title: "Online Prenatal Yoga",
        description:
          "Interactive online yoga sessions at home."
      }
    ],

    packages: [
      {
        title: "Single Session",
        description:
          "Perfect for trying a class or addressing discomfort."
      },
      {
        title: "Monthly Package",
        description:
          "Ideal for consistent prenatal yoga practice."
      }
    ],

    cities: [
      {
        title: "Yoga Classes Delhi",
        description:
          "Transform your well-being with expert-led yoga classes in Delhi.",
        image:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
      },
      {
        title: "Yoga Classes Noida",
        description:
          "Transform your well-being with expert-led yoga classes in Noida.",
        image:
          "https://images.unsplash.com/photo-1596176530529-78163a4f7af2"
      },
      {
        title: "Yoga Classes Ghaziabad",
        description:
          "Enhance your health with personalized yoga sessions.",
        image:
          "https://images.unsplash.com/photo-1512632578888-169bbbc64f33"
      },
      {
        title: "Yoga Classes Greater Noida",
        description:
          "Achieve your wellness goals with our yoga classes.",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      },
      {
        title: "Yoga Classes Faridabad",
        description:
          "Transform your wellness with expert-led yoga classes.",
        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
      },
      {
        title: "Yoga Classes Gurugram",
        description:
          "Enhance your health with personalized yoga sessions.",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
      }
    ]
  };

  return (
    <div className="bg-white text-gray-700">

      {/* HERO */}
      <section className="border-t-4 border-orange-500 py-14">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
              Pregnancy Yoga Classes — Safe & Nurturing Prenatal Yoga
            </h1>

            <img
              src={data.heroImage}
              alt="Pregnancy Yoga"
              className="w-full rounded-2xl shadow-xl"
            />

          </div>

          {/* RIGHT */}
          <div>

            <p className="leading-8 text-lg mb-6">
              At OmYogshala, we offer specialized Pregnancy Yoga Classes
              designed to support expecting mothers throughout their journey.
            </p>

            <div className="space-y-4 mb-8">

              {data.highlights.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3"
                >

                  <CheckCircle
                    className="text-green-500 mt-1"
                    size={22}
                  />

                  <p className="text-lg">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            <p className="leading-8 text-lg">
              Whether you're in your first, second, or third trimester,
              our certified prenatal yoga instructors create a safe and
              soothing experience.
            </p>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 bg-[#faf8f5]">

        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold mb-8">
            Why Choose Prenatal Yoga?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {data.benefits.map((benefit, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl p-6 border shadow-sm"
              >

                <div className="flex gap-4">

                  <div className="bg-orange-100 p-3 rounded-xl h-fit">
                    <Heart className="text-orange-500" />
                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold mb-3">
                      {benefit.title}
                    </h3>

                    <p className="leading-7 text-gray-600">
                      {benefit.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHO CAN JOIN */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold mb-10">
            Who Can Benefit from Prenatal Yoga?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {data.whoCanJoin.map((item, index) => (

              <div
                key={index}
                className="border rounded-2xl p-6 hover:shadow-xl transition"
              >

                <Baby
                  className="text-pink-500 mb-4"
                  size={40}
                />

                <p className="leading-7 text-lg">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CLASS STEPS */}
      <section className="py-16 bg-[#faf8f5]">

        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold mb-10">
            How Our Pregnancy Yoga Classes Work
          </h2>

          <div className="space-y-6">

            {data.classSteps.map((step, index) => (

              <div
                key={index}
                className="bg-white border rounded-2xl p-6"
              >

                <div className="flex gap-5">

                  <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold mb-3">
                      {step.title}
                    </h3>

                    <p className="leading-8 text-gray-600">
                      {step.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TYPES */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold mb-10">
            Types of Prenatal Yoga We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {data.types.map((type, index) => (

              <div
                key={index}
                className="bg-[#fff7ef] border rounded-2xl p-6"
              >

                <Flower2
                  className="text-orange-500 mb-4"
                  size={36}
                />

                <h3 className="text-2xl font-semibold mb-3">
                  {type.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {type.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SAFETY */}
      <section className="py-16 bg-[#faf8f5]">

        <div className="max-w-7xl mx-auto px-4">

          <div className="bg-orange-50 border rounded-3xl p-10">

            <div className="flex items-center gap-4 mb-6">

              <ShieldCheck
                className="text-orange-500"
                size={50}
              />

              <h2 className="text-4xl font-bold">
                Safety and Comfort in Every Class
              </h2>

            </div>

            <p className="text-lg leading-9 text-gray-700">
              Our Pregnancy Yoga Classes prioritize the safety and
              well-being of both mother and baby.
            </p>

          </div>

        </div>

      </section>

      {/* FLEXIBLE OPTIONS */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold mb-10">
            Flexible Class Options
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {data.options.map((item, index) => (

              <div
                key={index}
                className="bg-white border rounded-2xl p-8"
              >

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PACKAGES */}
      <section className="py-16 bg-[#faf8f5]">

        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold mb-10">
            Pricing and Packages
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {data.packages.map((item, index) => (

              <div
                key={index}
                className="bg-white border rounded-2xl p-8"
              >

                <h3 className="text-3xl font-bold text-orange-500 mb-4">
                  {item.title}
                </h3>

                <p className="text-lg leading-8 text-gray-600">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500 text-white">

        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Get Started with Prenatal Yoga Today!
          </h2>

          <p className="text-xl leading-9 mb-10">
            Ready to nurture your body and baby with safe, supportive yoga?
          </p>

          <button className="bg-white text-orange-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">
            Book Your Session
          </button>

        </div>

      </section>

      {/* CITY CARDS */}
{/* CITY CARDS */}
<section className="py-20">

  <div className="max-w-7xl mx-auto px-4">

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {data.cities.map((city, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition"
        >

          {/* IMAGE LINK */}
          <Link
  to={`/${city.title
    .toLowerCase()
    .replace(/\s+/g, "-")}`}
>

  <img
    src={city.image}
    alt={city.title}
    className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition duration-300"
  />

</Link>


          <div className="p-6">

            {/* TITLE LINK */}
            <Link to={`/${city.title
    .toLowerCase()
    .replace(/\s+/g, "-")}`}>

              <h3 className="text-3xl cursor-pointer font-bold text-orange-500 mb-4 hover:underline">
                {city.title}
              </h3>

            </Link>

            <p className="text-lg leading-8 text-gray-600">
              {city.description}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
    </div>
  );
}