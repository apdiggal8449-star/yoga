import {
  BadgeCheck,
  Laptop,
  Users,
  Headphones,
} from "lucide-react";

export default function AboutBadge() {
  const badges = [
    {
      icon: <BadgeCheck size={35} />,
      title: "Free Demo",
      desc: "Try yoga sessions before joining.",
    },

    {
      icon: <Laptop size={35} />,
      title: "Online & Offline",
      desc: "Attend classes from home or studio.",
    },

    {
      icon: <Users size={35} />,
      title: "Experienced Trainer",
      desc: "Certified yoga trainers available.",
    },

    {
      icon: <Headphones size={35} />,
      title: "Lifetime Support",
      desc: "Guidance and support anytime.",
    },
  ];

  return (
    <section
      className="bg-[#d89069] py-16 px-4"
      aria-label="Why Choose Om Yogshala"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-[#8b3e1f] mb-4">
            Reason to Choose Us
          </h2>
           <ul className="list-disc pl-5"><li className="text-gray-800 mt-5 leading-7">
            Experience the perfect yoga journey with
            expert trainers, flexible timings, and
            personalized wellness programs designed
            for your healthy lifestyle.
          </li>
          <li className="text-gray-800 mt-5 leading-7">Holistic Approach: We combine physical postures, breathwork, and meditation to promote complete mind-body wellness.

</li>
          <li className="text-gray-800 mt-5 leading-7">Flexible Options: Whether you prefer in-person classes or the convenience of online sessions, we offer a range of formats to suit your lifestyle.

</li>
          <li className="text-gray-800 mt-5 leading-7">Inclusive Community: At Omyogshala, everyone is welcome—beginners, advanced practitioners, and everyone in between.

</li>
  <li className="text-gray-800 mt-5 leading-7">Results-Oriented: Our disciplined approach helps you achieve lasting benefits—whether it’s improved flexibility, stress reduction, or mental clarity.</li>
          </ul>
    
          
        </div>

        {/* Badge Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">
          {badges.map((item, index) => (
            <article
              key={index}
              className="
                bg-white
                rounded-2xl
                shadow-lg
                p-8
                text-center
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              {/* Icon */}
              <div className="
                w-16
                h-16
                mx-auto
                mb-5
                rounded-full
                border-2
                border-dashed
                border-orange-400
                flex
                items-center
                justify-center
                text-orange-500
                bg-orange-50
              ">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-6">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}